import './Chart.css'
import ChartBar from './ChartBar';

const Chart =(props)=> {
    return (<div className='chart'>
          {props.dataPoints.map ((dataPoint) =>
         <ChartBar
            key={dataPoint.label}
            maxValue ={null}
            Value ={dataPoint.value}
            label = {dataPoint.label}
            />
          )}
        </div>)
}

export default Chart;
