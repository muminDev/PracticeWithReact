function Listgroup() {
  const cities = ["Ottava", "Berlin", "Munich", "Warsaw", "Paris"];

  const renderedList = cities.map((item, index) => (
    <li key={index} className="list-group-item">
      {item}
    </li>
  ));

  return (
    <>
      <h1>Cities</h1>
      <ul className="list-group">{renderedList}</ul>
    </>
  );
}

export default Listgroup;
