import React from 'react'
import './Card.css'
import Tilt from 'react-vanilla-tilt'

const Card = () => {
  return (
    <div>
      <div className="container">
        <Tilt
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
          }}
        >
          <div className="card">
            <img src="https://i.ibb.co/m5vrVy3/habib.jpg" alt="" />
            <h2>Jhon Smith</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
              quod sed dicta vel animi? Inventore eveniet amet explicabo
              repellat rem?
            </p>
            <div className="links">
              <a href="https://facebook.com"></a>
            </div>
          </div>
        </Tilt>
      </div>
    </div>
  )
}

export default Card
