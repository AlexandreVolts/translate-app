interface ButtonProps {
  label: string;
  selected?: boolean;
  onClick: () => void;
}
export default function Button(props: ButtonProps) {
  const selectedStyle = props.selected
    ? "bg-light-gray text-white"
    : "text-gray";

  return (
    <button
      onClick={props.onClick}
      className={`px-4 py-2 rounded-lg font-bold hover:text-white hover:bg-light-gray transition-colors ${selectedStyle}`}
    >
      {props.label}
    </button>
  );
}
