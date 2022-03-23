import { useState } from "react";
import "./ExpenseForm.css";

export function ExpenseForm() {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState(new Date().toISOString());
    const titleChangeHandler = (e) => {
        setTitle(e.target.value);
    }

    const amountChangeHandler = (e) => {
        setAmount(Number.parseInt(e.target.value));
    }

    const dateChangeHandler = (e) => {
        setDate(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const expense = {
            title,
            amount,
            date: new Date(date),
        }
        setTitle("");
        setAmount(0);
        setDate("");
    }

    return (
        <form className="new-expense" onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div class="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={title} onChange={titleChangeHandler} />
                </div>
                <div class="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={amount} min="0" step="1" onChange={amountChangeHandler} />
                </div>
                <div class="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={date} max={new Date().toISOString().split("T")[0]} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}