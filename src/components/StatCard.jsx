import React from 'react'

export default function StatCard({ big, small }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="text-2xl font-semibold">{big}</div>
      <div className="mt-1 text-xs text-zinc-400">{small}</div>
    </div>
  );
}