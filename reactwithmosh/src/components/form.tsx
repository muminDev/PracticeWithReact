import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const Schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description must be at least 3 characters" }),
  amount: z
    .number({ invalid_type_error: "Amount field is required" })
    .int()
    .min(18), // Adjusted to accept integer numbers only
});

type FormData = z.infer<typeof Schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(Schema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Form data:", data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            {...register("description")}
            id="description"
            type="text"
            className="form-control"
          />
          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            {...register("amount", { valueAsNumber: true })}
            id="amount"
            type="text"
            className="form-control"
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
