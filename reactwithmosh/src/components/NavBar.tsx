interface Props {
  CartCount: number;
  OnClickHandler: () => void;
}
const NavBar = ({ CartCount, OnClickHandler }: Props) => {
  return (
    <>
      <div className="m-5 fs-5 fw-bold">NavBar: {CartCount}</div>
      <button onClick={OnClickHandler}>Count</button>
    </>
  );
};

export default NavBar;
