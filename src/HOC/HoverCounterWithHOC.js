

import React, { useState } from 'react'
import withCounter from './withCounter';
const HoverCounterWihtouHOC = (props) => {
  

  return (
    <div>
        <button onMouseOver={props.increamentCount}>
            Clicked {props.count}
        </button>
    </div>
  )
}
export default withCounter(HoverCounterWihtouHOC);