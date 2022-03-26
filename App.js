import { useState } from "react";
import { Expenses } from "./components/Expense-UI/Expenses";
import { ExpenseInput } from "./components/Expense-Input-UI/ExpenseInput";
import "./App.css";

export function App() {
    const [expenses, setExpenses] = useState([]);
    const addExpenseHandler = (expense) => {
        setExpenses((prev) => {
            return [expense, ...prev];
        })
    }

    return (
        <div>
            <h1 className="app-title">Expense Tracker</h1>
            <ExpenseInput onAddExpense={addExpenseHandler} />
            <Expenses items={expenses} />
        </div>
    )
};