import categories from "../categories";
interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenceFilter = ({ onSelectCategory }: Props) => {
  return (
    <select
      className="form-select mt-3"
      onChange={(event) => onSelectCategory(event.target.value)}
    >
      <option value="">All categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpenceFilter;
