import Image from "next/image";

export const Cover = ({ background, children }) => {
  return (
    <div className="h-screen text-white bg-slate-800 relative min-h-[400px] flex justify-center items-center mt-[-68px]">
      <Image
        src={background}
        alt="cover image"
        className="mix-blend-soft-light object-cover"
        fill
        priority
        style={{ objectFit: "cover" }}
      />
      <div className="max-w-5xl z-10">{children}</div>
    </div>
  );
};
