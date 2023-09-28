import React from 'react'
import OneAcc from './OneAcc.jsx'
const DashBoard=({accomocation,currentUser,deleteUserAcc,updateAcc})=>{
    console.log("from dashh",currentUser)
  return (
    <div className='container11'>
 <div className='accomodationss'>
        {
            accomocation.map((oneAcc)=>{
                return <OneAcc oneAcc={oneAcc} deleteUserAcc={deleteUserAcc} updateAcc={updateAcc} />
            })
        }
   
   </div>
    </div>
  )
}

export default DashBoard