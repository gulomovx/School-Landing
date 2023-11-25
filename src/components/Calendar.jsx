import React from 'react'
import {DatePicker} from '@gsebdev/react-simple-datepicker';

const Calendar = () => {
    const onChangeCallback = ({target}) => {
        // a callback function when user select a date
    }
  return (
      <div>
          <DatePicker
        id='datepicker-id'
        name='date-demo'
        onChange={onChangeCallback}
        value={'01/02/2023'}
    />  
    </div>
  )
}

export default Calendar