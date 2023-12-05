import { useEffect, useState } from "react";
import Alert from "./components/Alert.tsx";
import Button from "./components/Buttons.tsx";
import Listgroup from "./components/ListGroup.tsx";
import { AiFillAmazonCircle } from "react-icons/ai";
import Like from "./components/Like.tsx";
import NavBar from "./components/NavBar.tsx";
import Form from "./components/form.tsx";
import ExpenseList from "./expense-tracker/components/ExpenseList.tsx";
import ExpenceFilter from "./expense-tracker/components/ExpenceFilter.tsx";
import ExpenseForm from "./expense-tracker/ExpenseForm.tsx";
//import categories from "./expense-tracker/categories.ts";
import apiClient, { CanceledError } from "./services/api-client.ts";

interface User {
  id: number;
  name: string;
}

function App() {
  const items = ["Warsaw", "Berlin", "Ottava", "Munich"];
  const [alertVisibility, setAlertVisibility] = useState(false);
  const [quantity, setQuantity] = useState(0); // Using state to manage quantity
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));

    apiClient.delete("apiClient/users/" + user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<User[]>("/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
    return () => controller.abort();
  }, []);

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // data for expenses list
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "aaa",
      amount: 5,
      category: "Utilities",
    },
    {
      id: 2,
      description: "ajkd",
      amount: 2,
      category: "Utilities",
    },
    {
      id: 3,
      description: "aaazsdv",
      amount: 5,
      category: "Utilities",
    },
    {
      id: 4,
      description: "aaaasa",
      amount: 5,
      category: "Utilities",
    },
  ]);

  const addUser = () => {
    const newUser = { id: 0, name: "Mosh" };
    setUsers([...users, newUser]);

    apiClient
      .post("/users", newUser)
      .then((res) => setUsers([res.data, ...users]));
  };

  const updateUser = (user: User) => {
    const updatedUser = { ...user, name: user.name + " !!!" };
    const originalUsers = [...users];
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    apiClient.patch("/users/" + user.id, updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };
  return (
    <div>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-secondary"
                onClick={() => {
                  updateUser(user);
                }}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger mx-2"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      {alertVisibility && (
        <Alert onClose={() => setAlertVisibility(false)}>
          Please check your internet !
        </Alert>
      )}
      <Button
        color="success"
        children="Show Alert"
        onClick={() => {
          setAlertVisibility(true);
        }}
      />
      <Listgroup items={items} heading="Cities" />
      <AiFillAmazonCircle size="40" style={{ marginLeft: "30px" }} />
      <Like size={30} />
      <NavBar CartCount={quantity} OnClickHandler={increaseQuantity} />
      <Form />
      <ExpenseForm
        onSubmit={(expense) =>
          setExpenses([
            ...expenses,
            {
              ...expense,
              id: expenses.length + 1,
              amount: parseFloat(expense.amount),
            },
          ])
        }
      />
      <ExpenceFilter onSelectCategory={(category) => console.log(category)} />
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
