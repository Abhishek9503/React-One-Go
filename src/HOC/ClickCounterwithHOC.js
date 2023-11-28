import React, { useState } from 'react'
import withCounter from './withCounter';
const ClickCounterwithHOC = (props) => {


  return (
    <div>
        <button onClick={props.increamentCount}>
            Clicked {props.count}
        </button>
    </div>
  )
}
export default withCounter(ClickCounterwithHOC);