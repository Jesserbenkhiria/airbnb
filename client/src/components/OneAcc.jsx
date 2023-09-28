import React, { useState } from 'react'

const OneAcc =({oneAcc,deleteUserAcc,updateAcc})=> {
    const [forms,setForm] = useState({
        numberOfNights: oneAcc.numberOfNights,
        out:oneAcc.out,
        in: oneAcc.in
    })
    console.log("here",forms);
    const hundleForm=(e)=>{
        setForm({
            ...forms,[e.target.name]:e.target.value
        })
    }
  return (
    <div class="card mb-3" style={{width: "1100px"}}>
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src={oneAcc.imageUrl} class="img-fluid rounded-start" alt="..." style={{height: "100%" , minWidth: "170px"}}/>
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">{oneAcc.name}</h5>
                      <p class="card-text dates">from 
                       <input type="date" name='in' defaultValue={oneAcc.in} onChange={(e)=> hundleForm(e)}/> 
                        to <input type="date"  name='out' defaultValue={oneAcc.out} onChange={(e)=> hundleForm(e)}/> 
                        Number of nights
                        <input type="text"  className='tohide' name='numberOfNights' defaultValue={oneAcc.numberOfNights}  onChange={(e)=> hundleForm(e)}/> 
                        </p>
                      <p class="card-text">total to pay :{oneAcc.pricePerNight * oneAcc.numberOfNights} </p>
                      <p class="card-text">
                        <small class="text-body-secondary">Last updated {oneAcc.updatedAt.slice(0,10)}</small>
                        <div className='icons'>
                         <i class="fa-solid fa-trash" onClick={()=>{deleteUserAcc(oneAcc.id)}}></i>
                         <i class="fa-solid fa-pen-to-square"  onClick={()=>{updateAcc(oneAcc.id,{...forms})}}></i>
                         <button className='checkout' data-bs-toggle="modal" data-bs-target="#exampleModal">checkout</button>

                        </div>
                         </p>
                    </div>
                  </div>
                </div>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Sry For this</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        jesser still don't know how to use a real payment method you can close it now thank u 
      </div>
      <div class="modal-footer">
        <button type="button" class="btn popup" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
              </div>
  )
}

export default OneAcc