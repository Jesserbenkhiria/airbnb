import React from 'react'

const Categorys = ({findPost})=> {
  return (
        <ul className='allCata'>
                <li className='oneCata'>
                <i class="fa-solid fa-bed"></i>
                <span className='smallTitle'>Rooms</span>
                </li>
            <li className='oneCata'onClick={()=>{findPost("h")}} ><i class="fa-solid fa-hotel" ></i><span className='smallTitle'>hotel</span></li>
            <li className='oneCata'onClick={()=>{findPost("uxu")}}><i class="fa-solid fa-person-swimming"></i><span className='smallTitle'>Amazing pools</span></li>
            <li className='oneCata'onClick={()=>{findPost("c")}}><i class="fa-solid fa-mug-saucer"></i><span className='smallTitle'>Bed & breakfasts</span></li>
            <li className='oneCata'onClick={()=>{findPost("eac")}}><i class="fa-solid fa-fire"></i><span className='smallTitle'>Trending</span></li>
            <li className='oneCata'onClick={()=>{findPost("h")}}><i class="fa-solid fa-umbrella-beach"></i><span className='smallTitle'>Beach</span></li> 
            <li className='oneCata'onClick={()=>{findPost("h")}}><i class="fa-solid fa-person-swimming"></i><span className='smallTitle'>Amazing pools</span></li>
            <li className='oneCata'onClick={()=>{findPost("h")}}><i class="fa-solid fa-mug-saucer"></i><span className='smallTitle'>Bed & breakfasts</span></li>
            <li className='oneCata'onClick={()=>{findPost("h")}}><i class="fa-solid fa-fire"></i><span className='smallTitle'>Trending</span></li>
            <li className='oneCata'onClick={()=>{findPost("h")}}><i class="fa-solid fa-umbrella-beach"></i><span className='smallTitle'>Beach</span></li> 
        </ul>
  
  )
}

export default Categorys