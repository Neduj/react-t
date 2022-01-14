import './NewExpenseForm.css';
import {useState} from "react";

function NewExpenseForm(props) {
    const createUserInput = () => ({
        title: '',
        amount: '',
        date: ''
    })
    const [userInput, setNewValue] = useState(createUserInput());
    let {title, amount, date} = userInput;
    const onTitleChange = (event) => setNewValue({...userInput, title: event.target.value});
    const onAmountChange = (event) => setNewValue({...userInput, amount: event.target.value});
    const onDateChange = (event) => setNewValue({...userInput, date: event.target.value});

    const onSubmit = (event) => {
        console.log(event);
        const expanseData = {
            ...userInput
        }
        props.onSaveExpanseData(expanseData);
        event.preventDefault();
        setNewValue(createUserInput())
    }
    return (
        <form onSubmit={onSubmit}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={title} onChange={onTitleChange}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="text" value={amount} onChange={onAmountChange}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={date} min="2019-01-01" max="2022-12-31" onChange={onDateChange}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default NewExpenseForm;