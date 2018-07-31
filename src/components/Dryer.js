import React from 'react'
import Item from './Item'

const Dryer = (props) => (
  <div className="Dryer">
    <div className="row mx-auto"><h3>Dryers</h3></div>
    <div className="row">
      {props.dryers.map((item, index) => {
        return <div key={index} className="col-6"><Item machine={item}></Item></div>
      })}
    </div>
  </div>
)

export default Dryer