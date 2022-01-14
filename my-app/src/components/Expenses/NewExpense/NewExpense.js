import './NewExpense.css';
import NewExpenseForm from "./NewExpenseForm/NewExpenseForm";

function NewExpense(props) {
    const onSave = (enteredExpanseData) => {
        console.log(enteredExpanseData)
        const expanseData = {
            ...enteredExpanseData,
            id: Math.random().toString()
        };
        console.log(expanseData);
        props.onAddNewExpense(expanseData);
    }
    return (
        <div className="new-expense">
            <NewExpenseForm onSaveExpanseData={onSave}/>
        </div>
    )
}

export default NewExpense;