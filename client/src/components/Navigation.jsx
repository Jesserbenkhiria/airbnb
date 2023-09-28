import React, { useState } from 'react'

const  navigation=({viewChanger,currentUser,findPost,getUserAccomocation,fetchPosts})=> {
  return (
    
    //logoo
    <div className='navbar'>
        <div className='logo 'onClick={()=>{viewChanger("home");fetchPosts()}}>
        <i class="fa-brands fa-airbnb"></i>
        <span>airbnb</span>
        </div>
  {/* //searching bar  */}
  <div class="container-input">
  <input type="text" placeholder="Search" name="text" class="input" onChange={(e)=>{findPost(e.target.value)}}/>
  <svg  fill="#000000" width="20px" height="20px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
    <path d="M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z" fill-rule="evenodd"></path>
</svg>
</div>


 
 <div className='userSection'>
 <span>Airbnb your home</span>
 <i class="fa-solid fa-globe"></i>

 <div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle dropdownMain" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    {currentUser}
  </a>
  <ul class="dropdown-menu">
    <li onClick={()=>{viewChanger("dashboard"); getUserAccomocation()}}><a class="dropdown-item" href="#" >My accommodation</a></li>
  </ul>
</div>
</div>

</div>



  )
}

export default navigation