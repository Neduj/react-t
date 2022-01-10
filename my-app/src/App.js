import './App.css';
import Expenses from "./components/Expenses";

function App() {
    const expenses = [{title: 'Car Insurance', amount: 250, date: new Date(2021, 1, 23)}, {
        title: 'Car Insurance',
        amount: 550,
        date: new Date(2022, 12, 2)
    }];
    return (
        <div className='App'>
            <h2>Let's get started</h2>
            <Expenses expenses={expenses}/>
        </div>
    );
}

export default App;
