interface AlertProps {
  children: string;
}

const alert = ({ children }: AlertProps) => {
  return (
    <div className="alert alert-secondary m-3" role="alert">
      {children}
    </div>
  );
};

export default alert;
