import React from "react";
import Chart from "../Chart/Chart";

const ExpenseChart = (props)=> {
    const chartDataPoint = [
        {label : 'jan',value : 0},
        {label : 'feb',value : 0},
        {label : 'mar',value : 0},
        {label : 'apr',value : 0},
        {label : 'mai',value : 0},
        {label : 'jun',value : 0},
        {label : 'jul',value : 0},
        {label : 'aug',value : 0},
        {label : 'sept',value : 0},
        {label : 'oct',value : 0},
        {label : 'nov',value : 0},
        {label : 'Dec',value : 0},
    ]

    for(const expense of props.expenses){
        const expenseMonth = expense.date.getMonth();
        chartDataPoint[expenseMonth].value += expense.amount;
    }

    return (<div>
               <Chart dataPoints ={chartDataPoint}/>
           </div>)
}

export default  ExpenseChart;