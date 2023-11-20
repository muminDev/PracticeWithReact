interface Props {
  children: string;
  color: "primary" | "secondary" | "warning" | "success";
  onClick: () => void;
}
function Button({ children, onClick, color }: Props) {
  return (
    <button type="button" className={`btn m-3 btn-` + color} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
