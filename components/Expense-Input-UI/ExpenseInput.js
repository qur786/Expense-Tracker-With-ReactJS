import { useState } from "react";
import { ExpenseForm } from "./ExpenseForm";
import "./ExpenseInput.css";

export function ExpenseInput(props) {
    const [ openForm, setOpenForm ] = useState(false);
    const handleOpenForm = () => setOpenForm(prev => !prev);
    const saveExpenseDataHandler = (expenseInput) => {
        const expense = {
            ...expenseInput,
            id: Math.random().toString(),
        }
        props.onAddExpense(expense);
    }
    return (
        <div className="new-expense">
            {openForm === true 
            ? <>
            <button id="new-expense__close" onClick={handleOpenForm}>X</button>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
            </>
            : <button onClick={handleOpenForm}>Add Expense</button>}
        </div>
    );
}
