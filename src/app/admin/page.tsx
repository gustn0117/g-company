"use client";

import { useState, useEffect, useCallback } from "react";
import type { Inquiry } from "@/lib/types";

const STATUS_MAP = {
  new: { label: "신규", color: "bg-blue-100 text-blue-700" },
  confirmed: { label: "확인됨", color: "bg-amber-100 text-amber-700" },
  completed: { label: "완료", color: "bg-green-100 text-green-700" },
} as const;

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [authError, setAuthError] = useState(false);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [filter, setFilter] = useState<"all" | "new" | "confirmed" | "completed">("all");
  const [loading, setLoading] = useState(false);

  const fetchInquiries = useCallback(async () => {
    setLoading(true);
    const res = await fetch(`/api/inquiries?status=${filter}`, {
      headers: { "x-admin-password": password },
    });
    if (res.ok) {
      const { data } = await res.json();
      setInquiries(data || []);
    }
    setLoading(false);
  }, [password, filter]);

  useEffect(() => {
    if (authenticated) fetchInquiries();
  }, [authenticated, fetchInquiries]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/admin/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    const { valid } = await res.json();
    if (valid) {
      setAuthenticated(true);
      setAuthError(false);
    } else {
      setAuthError(true);
    }
  };

  const updateStatus = async (id: number, status: string) => {
    await fetch(`/api/inquiries/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "x-admin-password": password,
      },
      body: JSON.stringify({ status }),
    });
    fetchInquiries();
  };

  const deleteInquiry = async (id: number) => {
    if (!confirm("정말 삭제하시겠습니까?")) return;
    await fetch(`/api/inquiries/${id}`, {
      method: "DELETE",
      headers: { "x-admin-password": password },
    });
    fetchInquiries();
  };

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")} ${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
  };

  const counts = {
    all: inquiries.length,
    new: inquiries.filter((i) => i.status === "new").length,
    confirmed: inquiries.filter((i) => i.status === "confirmed").length,
    completed: inquiries.filter((i) => i.status === "completed").length,
  };

  // Password gate
  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="w-full max-w-sm">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-black text-black">관리자 로그인</h1>
              <p className="text-sm text-gray-400 mt-1">지컴퍼니 문의 관리</p>
            </div>
            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="password"
                placeholder="비밀번호를 입력하세요"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border-0 rounded-xl text-sm focus:ring-2 focus:ring-accent transition-all outline-none"
                autoFocus
              />
              {authError && (
                <p className="text-red-500 text-sm">비밀번호가 틀렸습니다.</p>
              )}
              <button
                type="submit"
                className="w-full py-3 bg-black text-white font-bold rounded-xl hover:bg-gray-800 transition-colors"
              >
                로그인
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // Dashboard
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-black text-black">공연 문의 관리</h1>
          <button
            onClick={() => {
              setAuthenticated(false);
              setPassword("");
            }}
            className="text-sm text-gray-400 hover:text-black transition-colors"
          >
            로그아웃
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Filter tabs */}
        <div className="flex gap-2 mb-6">
          {(["all", "new", "confirmed", "completed"] as const).map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                filter === s
                  ? "bg-black text-white"
                  : "bg-white text-gray-500 hover:bg-gray-100"
              }`}
            >
              {s === "all" ? "전체" : STATUS_MAP[s].label}
              {filter === "all" && (
                <span className="ml-1.5 text-xs opacity-60">
                  {counts[s]}
                </span>
              )}
            </button>
          ))}
          <button
            onClick={fetchInquiries}
            className="ml-auto px-4 py-2 bg-white rounded-lg text-sm text-gray-500 hover:bg-gray-100 transition-colors"
          >
            새로고침
          </button>
        </div>

        {/* Inquiry list */}
        {loading ? (
          <div className="text-center py-20 text-gray-400">불러오는 중...</div>
        ) : inquiries.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            접수된 문의가 없습니다.
          </div>
        ) : (
          <div className="space-y-4">
            {inquiries.map((inquiry) => (
              <div
                key={inquiry.id}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    {/* Top row: name, org, status */}
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="font-black text-black text-lg">
                        {inquiry.name}
                      </span>
                      {inquiry.organization && (
                        <span className="text-sm text-gray-400">
                          {inquiry.organization}
                        </span>
                      )}
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                          STATUS_MAP[inquiry.status].color
                        }`}
                      >
                        {STATUS_MAP[inquiry.status].label}
                      </span>
                    </div>

                    {/* Contact info */}
                    <div className="mt-2 flex items-center gap-4 text-sm text-gray-500">
                      <span>{inquiry.phone}</span>
                      {inquiry.show && (
                        <span className="px-2 py-0.5 bg-gray-100 rounded text-xs font-medium">
                          {inquiry.show}
                        </span>
                      )}
                      {inquiry.preferred_date && (
                        <span>희망일: {inquiry.preferred_date}</span>
                      )}
                    </div>

                    {/* Message */}
                    {inquiry.message && (
                      <p className="mt-3 text-sm text-gray-600 leading-relaxed whitespace-pre-wrap">
                        {inquiry.message}
                      </p>
                    )}

                    {/* Date */}
                    <p className="mt-3 text-xs text-gray-300">
                      {formatDate(inquiry.created_at)}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col gap-2 flex-shrink-0">
                    {inquiry.status === "new" && (
                      <button
                        onClick={() => updateStatus(inquiry.id, "confirmed")}
                        className="px-3 py-1.5 bg-amber-50 text-amber-600 text-xs font-bold rounded-lg hover:bg-amber-100 transition-colors"
                      >
                        확인
                      </button>
                    )}
                    {inquiry.status === "confirmed" && (
                      <button
                        onClick={() => updateStatus(inquiry.id, "completed")}
                        className="px-3 py-1.5 bg-green-50 text-green-600 text-xs font-bold rounded-lg hover:bg-green-100 transition-colors"
                      >
                        완료
                      </button>
                    )}
                    {inquiry.status === "completed" && (
                      <button
                        onClick={() => updateStatus(inquiry.id, "new")}
                        className="px-3 py-1.5 bg-blue-50 text-blue-600 text-xs font-bold rounded-lg hover:bg-blue-100 transition-colors"
                      >
                        재오픈
                      </button>
                    )}
                    <button
                      onClick={() => deleteInquiry(inquiry.id)}
                      className="px-3 py-1.5 bg-red-50 text-red-500 text-xs font-bold rounded-lg hover:bg-red-100 transition-colors"
                    >
                      삭제
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
