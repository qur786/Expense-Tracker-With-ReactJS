import "./ExpenseFilter.css";

export function ExpenseFilter(props) {
    const handleYearChange = (e) => {
        props.onYearChange(e.target.value, 10);
    }
    return <div className="expenseFilter">
        <p className="expenseFilter__title">Filter by year</p>
        <select value={props.selectedYear} onChange={handleYearChange} className="expenseFilter__year">
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
        </select>
    </div>
}