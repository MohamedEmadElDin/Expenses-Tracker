import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
    const[enteredTitle, setenteredTitle] =useState('');
    const[enteredAmount , setenteredAmount] = useState('');
    const[enteredDate , setenteredDate] = useState('');


    const titleChangeHandler = (event) => {
      setenteredTitle(event.target.value);
    };

    const amountChangeHandler = (event)=> {
      setenteredAmount(event.target.value);
    };


    const dateChangeHandler = (event)=> {
      setenteredDate(event.target.value);
    };




    return(
        <form>
           <div className='new-expense__controls'>
              <div className='new-expense__control'>
                 <label>Title</label>
                 <input type="text"  onChange={titleChangeHandler}/>
              </div>
              <div className='new-expense__control'>
                <label>Amount</label>
                <input type="number" min="0.1" step="0.1" onChange={amountChangeHandler} />
             </div>
             <div className='new-expense__control'>
               <label>Date</label>
               <input type="date" min="2019-01-01" max="2023-12-31" onChange={dateChangeHandler}/>
             </div>
             <div className='new-expense__actions'>
               <button type="submit">Add Expense</button>
             </div>
           </div>
        </form>
    );
}

export default ExpenseForm;