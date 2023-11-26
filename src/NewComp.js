import React from 'react'

const NewComp = (props) => {
    console.log("new Comp render", props.count)
  return (
    <div>
      <br />
      This is new Component or we can say this is child component
      <h2>{props.count}</h2>
    </div>
  )
}

export default  React.memo(NewComp)
