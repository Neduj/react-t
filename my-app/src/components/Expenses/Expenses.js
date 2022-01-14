import ExpenseItem from "./EpanseItem/ExpenseItem";
import Card from "../UI/Card";
import './Expense.css';
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";
import {useState} from "react";

function Expenses(props) {
    const [selectedFilteredYear, onSetYear] = useState('');
    const onValueChange = (value) => onSetYear(value);

    return (
        <Card className="container">
            <ExpenseFilter onFilterSelect={onValueChange}/>
            <ExpenseItem title={props.expenses[0].title} date={props.expenses[0].date}
                         amount={props.expenses[0].amount}/>
            <ExpenseItem title={props.expenses[1].title} date={props.expenses[1].date}
                         amount={props.expenses[1].amount}/>
        </Card>
    )
}

export default Expenses;