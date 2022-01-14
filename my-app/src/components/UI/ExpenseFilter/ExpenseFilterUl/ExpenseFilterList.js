import './ExpenseFilterList.css';
import ExpenseFilterListLi from "../ExpenseFilterListLi/ExpenseFilterListLi";

const ExpenseFilterList = () => {
    return (
        <ul>
            <ExpenseFilterListLi name="January"/>
            <ExpenseFilterListLi name="February"/>
            <ExpenseFilterListLi name="March"/>
            <ExpenseFilterListLi name="April"/>
            <ExpenseFilterListLi name="May"/>
            <ExpenseFilterListLi name="June"/>
            <ExpenseFilterListLi name="July"/>
            <ExpenseFilterListLi name="August"/>
            <ExpenseFilterListLi name="September"/>
            <ExpenseFilterListLi name="October"/>
            <ExpenseFilterListLi name="November"/>
            <ExpenseFilterListLi name="December"/>
        </ul>
    )

}

export default ExpenseFilterList;