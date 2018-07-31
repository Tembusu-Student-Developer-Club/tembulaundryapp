import React from 'react'
import Item from './Item'

const Washer = (props) => (
  <div className="Washer">
    <div className="row mx-auto"><h3>Washers</h3></div>
    <div className="row">
      {props.washers.map((item, index) => {
        return <div key={index} className="col-6"><Item machine={item}></Item></div>
      })}
    </div>
  </div>
)

export default Washer