import Image from "next/image";

interface IconButtonProps {
  src: string;
  alt: string;
  onClick: () => void;
}
export default function IconButton(props: IconButtonProps) {
  return (
    <button
      onClick={props.onClick}
      className="p-1.5 border-2 border-gray rounded-xl"
    >
      <Image src={props.src} alt={props.alt} width={20} height={20} />
    </button>
  );
}
