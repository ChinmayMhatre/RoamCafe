import React from 'react'
import styles from './Cities.module.scss';

const Cities = () => {
  return (
    <div>
      <div className=" bg-red-600">
        <span>Best Cities: </span>
          <button>Mumbai</button>
          <button>Delhi</button>
          <button>Banglore</button>
      </div>
      <div className="">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias sapiente vel expedita totam sed, doloribus dolor voluptatum laudantium? Numquam, porro?</p>
        <span>
        Wifi Speed: 13Mbps
        </span>
        <span>
        AQI: 12.7
        </span>
      </div>
    </div>
  )
}

export default Cities