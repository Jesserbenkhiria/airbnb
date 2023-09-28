import React, { useState } from 'react'

const CardDetails=({currentCard,addAccomocation})=> {
const [name,setName] = useState("")
const [indate,setIn] = useState("")
const [outdate,setOut] = useState("")
const [guest,setGuest] = useState(0)
    let classs = "carouselExample"+currentCard.id
    return  <div className='container'>
       
  <div>
  <h1 >{currentCard.name}</h1>
  <div className='bigone'>
<div id={classs} className="carousel slide" >
  <div className="carousel-inner indetail">
    <div className="carousel-item active">
      <img src={currentCard.images[0].url} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={currentCard.images[1].url} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={currentCard.images[2].url} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target={"#"+classs}data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target={"#"+classs} data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>


<div class="gallery">
  <figure class="gallery__item gallery__item--1">
    <img src={currentCard.images[0].url} class="gallery__img" alt="Image 1"/>
  </figure>
  <figure class="gallery__item gallery__item--1">
    <img src={currentCard.images[1].url} class="gallery__img" alt="Image 1"/>
  </figure>
  <figure class="gallery__item gallery__item--1">
    <img src={currentCard.images[2].url} class="gallery__img" alt="Image 1"/>
  </figure>
  </div>

<div className='infoCard'>
  <div className='firstInfo'>
    <span>{currentCard.location}</span>
    <span><i class="fa-solid fa-star"></i>{currentCard.rate}</span>
  </div>
  <div className='secondInfo'>
    <h4>{currentCard.name}</h4>
    <span> {currentCard.pricePerNight} $ per night</span>
  </div>
  </div>   
  </div>  
                <div class="containerr">
        <h1>Hotel Accommodation Form</h1>
        <div id="accommodation-form">
            <label for="name">Name:</label>
            <input onChange={(e)=>{setName(e.target.value) }}type="text" id="name" name="name" required/>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required/>

            <label for="check-in">Check-in Date:</label>
            <input onChange={(e)=>{setIn(e.target.value) ;}} type="date" id="check-in" name="check-in" required/>

            <label for="check-out">Check-out Date:</label>
            <input  onChange={(e)=>{setOut(e.target.value)}}type="date" id="check-out" name="check-out" required/>

            <label for="guests">Number of Guests:</label>
            <input onChange={(e)=>{setGuest(e.target.value)}} type="number" id="guests" name="guests" required/>

            <button onClick={()=>{
                addAccomocation({
                    name:currentCard.name,
                    username:name,
                    location:currentCard.location,
                    rate:currentCard.rate,
                    pricePerNight:currentCard.pricePerNight,
                    numberOfNights:guest,
                    imageUrl:currentCard.images[0].url,
                    in:indate+"",
                    out:outdate+""
                    })}}>Submit</button>
        </div>
    </div>
       









</div>


    
}
  
  

export default CardDetails