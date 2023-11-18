interface Props {
  children: string;
  color: "primary" | "secondary" | "warning" | "success";
  onClick: () => void;
}
function Button({ children, onClick, color }: Props) {
  return (
    <button type="button" className={`btn btn-` + color} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
