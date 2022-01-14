import './App.css';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";

function App() {
    const expenses = [{title: 'Car Insurance', amount: 250, date: new Date(2021, 1, 23)}, {
        title: 'Car Insurance',
        amount: 550,
        date: new Date(2022, 12, 2)
    }];

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
