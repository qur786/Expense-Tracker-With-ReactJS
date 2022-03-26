import { useState } from "react";
import { Card } from "../Generic-UI/Card";
import { ExpenseItem } from "./ExpenseItem"
import { ExpenseFilter } from "./ExpenseFilter";
import { ExpenseChart } from "./ExpenseChart";
import "./Expenses.css";

export const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState("2020");
    const yearChangeHandler = (year) => {
        setSelectedYear(year);
    };
    const filteredItems = props.items.filter((e) => e.date.getFullYear().toString() === selectedYear);

    return (
        <Card className="expenses">
            <ExpenseFilter valueYear={selectedYear} onYearChange={yearChangeHandler} />
            <ExpenseChart filteredItems={filteredItems} />
            {filteredItems.length > 0
                ? filteredItems.map((e) => <ExpenseItem
                    key={e.id}
                    date={e.date}
                    amount={e.amount}
                    title={e.title}
                />)
                : <p className="expenses__fallback">No Expense Found.</p>}
        </Card>
    )
}