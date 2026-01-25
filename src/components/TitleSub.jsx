export default function TitleSub({ title, subtitle }) {
  return (
    <div className="flex items-end justify-between gap-6 my-8">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        <p className="mt-2 max-w-2xl text-zinc-300">{subtitle}</p>
      </div>
    </div>
  );
}