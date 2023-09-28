import React from 'react'
import OneCard from './OneCard'

const Cards=({posts,viewChanger,setCurrentCard})=>{
  return (
    <div className='AllCards'>
      {
        posts.map((onePost,key)=>{
          return <OneCard  onePost={onePost} viewChanger={viewChanger} setCurrentCard={setCurrentCard}/>
        })
      }
    </div>
   
  )
}

export default Cards