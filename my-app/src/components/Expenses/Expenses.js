import ExpenseItem from "./EpanseItem/ExpenseItem";
import Card from "../UI/Card";
import './Expense.css';
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";
import {useState} from "react";

function Expenses(props) {
    const currentYear = new Date().getFullYear().toString();
    const [selectedFilteredYear, onSetYear] = useState(currentYear);
    const onValueChange = (value) => onSetYear(value);

    return (
        <Card className="container">
            <ExpenseFilter initSelectedYear={selectedFilteredYear} onFilterSelect={onValueChange}/>
            {props.expenses.map((expense) => <ExpenseItem title={expense.title} date={expense.date}
                                                          amount={expense.amount}/>)}
        </Card>
    )
}

export default Expenses;