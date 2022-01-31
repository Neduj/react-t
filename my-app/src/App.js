import './App.css';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";

class ExpensesClass {
    constructor(title, amount, year, month, day) {
        this.title = title;
        this.amount = amount;
        this.date = new Date(year, month, day);
        this.id = Math.random().toString();
    }
}

function App() {
    const expenses = [
        new ExpensesClass('Car Insurance', 250, 2021, 1, 23),
        new ExpensesClass('Car Insurance', 550, 2022, 12, 2),
        new ExpensesClass('Udemy', 10, 2020, 1, 4),
        new ExpensesClass('Weed', 9.99, 2022, 1, 4),
        new ExpensesClass('Book', 15.34, 2021, 11, 27)
    ];

    const addNewExpanse = (newExpanse) => {
        console.log(newExpanse);
    }
    return (
        <div className='App'>
            <NewExpense onAddNewExpense={addNewExpanse}/>
            <Expenses expenses={expenses}/>
        </div>
    );
}

export default App;
