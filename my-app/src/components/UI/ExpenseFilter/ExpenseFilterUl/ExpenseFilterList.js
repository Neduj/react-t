import './ExpenseFilterList.css';
import ExpenseFilterListLi from "../ExpenseFilterListLi/ExpenseFilterListLi";

const ExpenseFilterList = () => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    return (
        <ul>
            {months.map((monthName) => <ExpenseFilterListLi name={monthName}/>)}
        </ul>
    )

}

export default ExpenseFilterList;