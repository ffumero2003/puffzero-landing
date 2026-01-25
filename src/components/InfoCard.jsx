import React from 'react';

export default function InfoCard({ title, body }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-base font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-300">{body}</p>
    </div>
  );
}