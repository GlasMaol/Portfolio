import React from 'react';
import '../titleItem/titleItem.css'
import { Link } from 'react-router-dom'


function TitleItem() {
  return (
    <Link className='title-link' to="/">
      <div className='title-container'>
        <h1 className='h1TitleText'>ALISTAIR<br></br>MCCANN</h1>
        <h2 className='h2TitleText'>PORTFOLIO</h2>
      </div>
    </Link>
  )
}

export default TitleItem



