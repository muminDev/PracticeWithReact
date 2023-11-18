interface AlertProps {
  children: string;
  onClose: () => void;
}

const alert = ({ children, onClose }: AlertProps) => {
  return (
    <div
      className="alert alert-secondary alert-dismissible fade show"
      role="alert"
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default alert;
