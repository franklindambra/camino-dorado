interface ImageRowProps {
  backgroundImage?: string;
}

export default function ImageRow({ backgroundImage }: ImageRowProps) {
  return (
    <div
      className="w-full h-[600px] bg-red-400 bg-cover bg-center"
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
      }}
    ></div>
  );
}
