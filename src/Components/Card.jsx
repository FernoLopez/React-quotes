import React from 'react'
import { FaQuoteRight } from 'react-icons/fa';


const Card  = ({userRandom, colorRandom, clickButton,}) => {

  const styleButton = {
      backgroundColor: colorRandom
  }

  return (
    <article className='card card-style' style={{color: colorRandom}}>
    <div className='quote-style'>
    quote
  </div>
  <div>
    <blockquote class="blockquote mb-0">
    <p>{userRandom.quote}</p>
      <cite class="blockquote-footer">{userRandom.author}</cite>
    </blockquote>
    <button style={styleButton} class="btn-style" onClick={clickButton}>
      &#62;</button>
  </div>
  <div>
        <FaQuoteRight />
      </div>
</article>


)
  }

export default Card