import React from 'react'
import x from '@/styles/homePage/homePage.module.css'
export default function Product() {
  return (
    <div className={x['container']}>
    <div style={{display : 'grid', gridTemplateRows : '1fr 1fr', borderRight : '5px solid #e0e0e0'}}>
        <div style={{display : "grid", gridTemplateRows : '3fr 2fr 1fr'}}>
            <div>
                <h3 style={{fontWeight : 'bold',textAlign : 'center'}}>Select Category</h3>
            </div>
            <div></div>
            <div></div>
        </div>
        <div></div>
    </div>
    <div className={x['list']}>
        <div className={x['item']}>
            <div style={{display : 'flex', justifyContent : 'center', flexWrap : 'nowrap'}}>
                <div className={x['card']} style={{backgroundImage : 'url("https://bizweb.dktcdn.net/thumb/large/100/390/808/products/kale-144-1483973379.png?v=1593855434387")', backgroundSize : 'cover', backgroundPosition : 'center', display : 'flex', alignItems : 'flex-end'}} >
                <div style={{backgroundColor : 'white', borderRadius : '15px', boxShadow : '0px 0px 10px 0px #e0e0e0', width : '184px', textAlign : 'center'}}>
                    <h3>Get For Only</h3>
                    <span style={{fontWeight : "bold"}}>$10 </span>
                    <span style={{textDecoration : 'line-through', fontWeight : 'bold'}}> $50 </span>
                </div>
                </div>
            </div>
            <div></div>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    </div>
  )
}
