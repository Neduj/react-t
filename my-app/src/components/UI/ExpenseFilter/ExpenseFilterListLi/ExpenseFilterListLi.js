import './ExpenseFilterListLi.css';

const ExpenseFilterListLi = (props) => {
    return (
        <li>
            <div className="list-column">
            </div>
            <span>{props.name}</span>
        </li>
    )
}

export default ExpenseFilterListLi;