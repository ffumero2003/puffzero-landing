export default function RenderImages({ images }) {
  return (
    <div
      className=" grid gap-4 justify-center rounded-3xl"
      style={{ gridTemplateColumns: "repeat(auto-fit, minmax(180px, 280px))" }}
    >
      {images.map((img, idx) => (
        <figure
          key={`${img.src}-${idx}`}
          className="group overflow-hidden rounded-3xl border border-white/10 bg-white p-2"
        >
          <div className=" w-full overflow-hidden bg-zinc-900/40 rounded-3xl">
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="h-full w-full object-cover rounded-3xl transition duration-300 group-hover:scale-[1.02]"
            />
          </div>
          <figcaption className="px-4 py-3 text-xs text-black">
            {img.alt}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
