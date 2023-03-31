import React, {useState} from "react";
import "./App.css";
//import ExpenseItem from "./components/ExpenseItem";
import Expenses from './components/Expenses/Expenses';
import NewExpenses from "./components/NewExpenses/NewExpenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 2941.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 4500,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  
  const [expenses,setExpenses]=useState (DUMMY_EXPENSES);
  
  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => [...prevExpenses,expense]);
  };
  return (
    <div>
      <NewExpenses onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

