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
            <ExpenseItem title={props.expenses[0].title} date={props.expenses[0].date}
                         amount={props.expenses[0].amount}/>
            <ExpenseItem title={props.expenses[1].title} date={props.expenses[1].date}
                         amount={props.expenses[1].amount}/>
        </Card>
    )
}

export default Expenses;