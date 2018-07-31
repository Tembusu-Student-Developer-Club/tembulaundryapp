import React from 'react'
import Avatar from './Avatar'
import '../css/machines.css'

function convertText(status) {
  switch (status) {
    case "off": return "available"
    case "on": return "in-use"
    case "blinking": return "finishing soon"
    default: return "error"
  }
}

function colorText(status) {
  switch (status) {
    case "off": return "green"
    case "on": return "red"
    case "blinking": return "orange"
    default: return "black"
  }
}

const Item = (props) => (
  <div className="Item">
    <div className="card m-2 py-2 shadow-sm btn btn-light">
      <div className="card-content">
        <div className="row m-2">
          <div className="buttons"></div>
          <div className="machine ml-2"></div>
        </div>
        <hr/>
        <Avatar letter={props.machine.id} color="pink" status={props.machine.status === 'off' ? "still" : "spinning"}></Avatar>
        <div className="font-weight-bold text-capitalize" style={{ color: colorText(props.machine.status) }}>{convertText(props.machine.status)}</div>
        <div className="font-weight-bold text-uppercase text-muted" style={{ fontSize: '0.67em' }}>{props.machine.type}</div>
      </div>
    </div>

  </div>
)


export default Item