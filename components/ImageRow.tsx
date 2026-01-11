interface ImageRowProps {
  backgroundImage?: string;
}

export default function ImageRow({ backgroundImage }: ImageRowProps) {
  return (
    <div
      className="w-full h-[600px] bg-cover bg-center"
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
      }}
    ></div>
  );
}
