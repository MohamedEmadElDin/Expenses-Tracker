import React, {useState} from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';


const Expenses =(props) => {
  const[filteredYear , setfilteredYear]=useState('2019');

  const filterChangeHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  }
return (
  <div>
    <Card className = 'expenses'>
      <ExpensesFilter
        selected ={filteredYear}
        onYearChange = {filterChangeHandler}
      />
      {props.items.map((expense) =>(
        <ExpenseItem
           title = {expense.title}
           amount = {expense.amount}
           date = {expense.date}
        />
        ))}
    </Card>
  </div>
);
};

export default Expenses;