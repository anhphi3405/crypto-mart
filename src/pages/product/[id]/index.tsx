import React from 'react'
import x from '@/styles/detail/detail.module.css'
export default function Detail() {
  return (
    <div className={x.container}>
      <div>
        <div style={{display : "grid", gridTemplateColumns : "7fr 3fr", height : "100%"}}>
            <div>
                <div style={{display : 'grid', height : "520px", gridTemplateRows : '1fr 10fr 2fr'}}>
                    <div style={{display : 'flex' ,alignItems : 'center'}}>
                        <span> Home &gt;  Leafy vegetables &gt; <span style={{color : 'green'}}> Organic Celery 300gr</span> </span>
                        
                    </div>
                    <div style={{display : 'grid', gridTemplateColumns : "4fr 6fr"}}>
                        <div style={{height : '80%', border : '5px solid black', width: "100%",
                            background : 'url("https://bizweb.dktcdn.net/thumb/1024x1024/100/390/808/products/165707b495b7c2d.jpg?v=1591870722910")',
                            backgroundSize : 'cover',
                            backgroundPosition : 'center'
                        }}>
                        </div>
                        <div className={x['info']}>
                            <h3 style={{fontWeight : 'bold', fontSize : '24px'}}>Organic Celery 300gr</h3>
                            <div style={{display : 'flex', gap : "20px", flexWrap : "nowrap"}}>
                                <span>
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                                </span>
                                <h3 style={{color : 'green'}}>
                                Write your review</h3>
                            </div>
                            <div style={{display : 'flex', gap : '5px', flexWrap : 'nowrap'}}>
                                <h3>Status : </h3>
                                <button className={x['stock']}><i className="fa-solid fa-check"></i> In Stock</button>
                            </div>
                            <h1 style={{fontWeight : 'bold', fontSize : "24px", color : "green"}}>40 ADA</h1>
                            <div style={{border : '1px solid gray', width : "100%"}}></div>
                            <p>
                            Celery provides many essential nutrients for the body, so it has the ability to prevent some dangerous diseases, especially high blood pressure. Not only is it an ingredient used to prepare many...
                            </p>
                            <div style={{border : '1px solid gray', width : "100%"}}></div>
                            <div style={{display : 'flex', gap : "10px", flexWrap : "nowrap", alignItems : 'center'}}>
                                <h3 style={{fontWeight : 'bold'}}>Quantity:</h3>
                                <input type="number" style={{border : '1px solid black', width : "80px"}} min={1}/>
                                <button className={x['purchase']}>Purchase</button>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
                <div></div>
            </div>
            <div></div>
        </div>
      </div>
    </div>
  )
}
