import { FormEvent, useRef, useState } from "react";

const Form = () => {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const ageRef = useRef<HTMLInputElement | null>(null);
  const [formData, setFormData] = useState<{ name: string; age: number }[]>([]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (nameRef.current && ageRef.current) {
      const newName = nameRef.current.value;
      const newAge = parseInt(ageRef.current.value, 10); // Parse age as an integer

      // Update the state with new form data
      setFormData((prevFormData) => [
        ...prevFormData,
        { name: newName, age: newAge },
      ]);

      // Clear the input fields after submission
      nameRef.current.value = "";
      ageRef.current.value = "";
    }
  };
  console.log(formData);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input ref={nameRef} id="name" type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input ref={ageRef} id="age" type="number" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
