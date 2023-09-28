import * as React from 'react';


const OneCard = ({onePost,viewChanger,setCurrentCard})=>{
  console.log(onePost?.images)
    let classs = "carouselExample"+onePost?.id
return(
    <div className="onecard" >
<div id={classs} className="carousel slide " >
  <div className="carousel-inner" onClick={()=>{viewChanger("cardDetails") ; setCurrentCard(onePost)}}>
    <div className="carousel-item active">
      <img src={onePost?.images[0]?.url} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={onePost?.images[1]?.url} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={onePost?.images[2]?.url} className="d-block w-100" alt="..."/>
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
<div className='infoCard'>
  <div className='firstInfo'>
    <span>{onePost?.location}</span>
    <span><i class="fa-solid fa-star"></i>{onePost?.rate}</span>
  </div>
  <div className='secondInfo'>
    <h4>{onePost?.name}</h4>
    <span> {onePost?.pricePerNight} $ per night</span>
  </div>
    
</div>
</div>

  )
}
export default OneCard;