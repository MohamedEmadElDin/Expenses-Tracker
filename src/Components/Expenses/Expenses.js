import React, {useState} from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';


const Expenses =(props) => {
  const[filteredYear , setfilteredYear]=useState('2019');

  const filterChangeHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  

return (
  <div>
    <Card className = 'expenses'>
      <ExpensesFilter
        selected ={filteredYear}
        onYearChange = {filterChangeHandler}
      />
      <ExpensesList items = {filteredExpenses}/>
    </Card>
  </div>
);
};

export default Expenses;