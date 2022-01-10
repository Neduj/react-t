import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
    return (
        <div>
            <ExpenseItem title={props.expenses[0].title} date={props.expenses[0].date}
                         amount={props.expenses[0].amount}/>
            <ExpenseItem title={props.expenses[1].title} date={props.expenses[1].date}
                         amount={props.expenses[1].amount}/>
        </div>
    )
}

export default Expenses;