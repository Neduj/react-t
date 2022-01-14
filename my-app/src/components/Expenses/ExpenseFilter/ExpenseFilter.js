import './ExpenseFilter.css';
import ExpenseFilterList from "../../UI/ExpenseFilter/ExpenseFilterUl/ExpenseFilterList";

const ExpenseFilter = (props) => {
    const yearsFilter = [2019, 2020, 2021, 2022];
    const onValueChange = (event) => {
        const value = event.target.value;
        return value ? props.onFilterSelect(value) : '';
    };
    return (
        <section className="expense-filter__container">
            <section className="filter-select">
                <select onChange={onValueChange} value={props.initSelectedYear}>
                    <option value='' disabled>Select a year to filter</option>
                    <option value={yearsFilter[0]}>{yearsFilter[0]}</option>
                    <option value={yearsFilter[1]}>{yearsFilter[1]}</option>
                    <option value={yearsFilter[2]}>{yearsFilter[2]}</option>
                    <option value={yearsFilter[3]}>{yearsFilter[3]}</option>
                </select>
            </section>
            <section>
                <ExpenseFilterList/>
            </section>

        </section>
    );
}

export default ExpenseFilter;