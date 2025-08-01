import React from 'react'
import './Events.css'

const Events = () => {
  return (
    <div>
        <div className="enets">
      <h1 className='event'>EVENTS</h1>
      <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, aspernatur!</span>
        </div>
        <div className="grid-container">
      {[...Array(12)].map((_, i) => (
        <div className="grid-item" key={i}>
          Item {i + 1}
        </div>
      ))}
    </div>
    </div>
  )
}

export default Events
