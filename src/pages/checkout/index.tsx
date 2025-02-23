import React from 'react'
import x from '@/styles/checkout/checkout.module.css'
export default function CheckOut() {
  return (
    <div className={x['container']}>
      <div style={{display : 'grid', gridTemplateColumns : '1fr 1fr'}}>
        <div style={{display : 'flex', flexDirection : 'column', paddingLeft : '10%', gap : '20px'}} className={x['left']}>
            <h3 style={{fontWeight : 'bold', fontSize : '18px'}}>Delivery information</h3>
            <input type="email" placeholder='E-mail' style={{width : '384px', border : '1px solid black', height : '45px'}}/>
            <input type="text" placeholder='Full name' style={{width : '384px', border : '1px solid black', height : '45px'}}/>
            <div style={{display : 'grid', gridTemplateColumns : '331px auto', width : '384px'}}>
                <input type="text" placeholder='Phone number' style={{width : "331px", border : '1px solid black', height : '45px'}}/>
                <div style={{display : "flex", alignItems : 'center', border : '1px solid black', justifyContent : 'center'}}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1200px-Flag_of_Vietnam.svg.png" alt="" style={{width : "30px", height : '30px'}}/>
                    <i className="fa-solid fa-chevron-down" style={{fontSize : '10px'}}></i>
                </div>
            </div>
            <input type="text" placeholder='Address' style={{width : '384px', border : '1px solid black', height : '45px'}}/>
            <input type="text" placeholder='Notes' style={{width : '384px', border : '1px solid black', height : '70px'}}/>

        </div>
        <div style={{display : 'flex', flexDirection : 'column', gap : "20px", paddingLeft : '10%'}}>
            <h3 style={{fontWeight : 'bold', fontSize : '18px'}}>Transport</h3>
            <div style={{backgroundColor : 'blue', height : '48px', width : "90%", display : 'flex', alignItems:'center', justifyContent : 'center'}}>
                <h3 style={{color : 'white', textAlign : "center"}}>Please enter shipping information</h3>
            </div>
            <h3 style={{fontWeight : 'bold', fontSize : '18px'}}>Pay</h3>
        </div>
      </div>
      <div></div>
    </div>
  )
}
