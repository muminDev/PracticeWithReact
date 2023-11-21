import styles from "./button.module.css";
<button className="css"></button>;

interface Props {
  children: string;
  color: "primary" | "secondary" | "warning" | "success";
  onClick: () => void;
}
function Button({ children, onClick }: Props) {
  return (
    <button type="button" className={`${styles.btn}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
