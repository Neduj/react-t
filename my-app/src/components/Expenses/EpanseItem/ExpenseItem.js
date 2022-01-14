import './ExpenseItem.css'
import ExpenseDate from "../ExpanseDate/ExpenseDate";
import Card from "../../UI/Card";
import {useState} from "react";

function ExpenseItem(props) {
    const [{title, amount}, setState] = useState(props);
    const changeTitle = () => setState({title: 'Changed', amount});

    const changeAmount = () => setState({title, amount: 3})
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description"><h2>{title}</h2>
                <div className="expense-item__price">${amount}</div>
                <button onClick={changeTitle}>Log</button>
                <button onClick={changeAmount}>Change amount</button>
            </div>
        </Card>);
}

export default ExpenseItem;