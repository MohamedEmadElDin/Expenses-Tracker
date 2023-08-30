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

  const filteredExpense = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

return (
  <div>
    <Card className = 'expenses'>
      <ExpensesFilter
        selected ={filteredYear}
        onYearChange = {filterChangeHandler}
      />
      {filteredExpense.map((expense) =>(
        <ExpenseItem
           key = {expense.id}
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