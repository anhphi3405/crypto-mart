'use client'
import React from 'react'
import x from '@/styles/homePage/homePage.module.css'
import { useRouter } from 'next/navigation';
export default function Product() {
    const products = [
        {
            name : 'Cải kale (Xoăn) Organic 300gr',
            price : 50,
            discount : 10,
            image : "https://bizweb.dktcdn.net/thumb/large/100/390/808/products/kale-144-1483973379.png?v=1593855434387"
        },
        {
            name : 'Giá sạch ủ cát 300gr',
            price : 50,
            discount : 10,
            image : 'https://bizweb.dktcdn.net/thumb/large/100/390/808/products/gia-huu-co-500x500.jpg?v=1604375091947'
        },
        {
            name : 'Cải bó xôi Organic 300gr',
            price : 50,
            discount : 10,
            image : "https://bizweb.dktcdn.net/thumb/large/100/390/808/products/20190405141327hat-giong-cai-bo-xoi.jpg?v=1593856342497"
        },
        {
            name : 'Ớt chuông đỏ Organic 300gr',
            price : 50,
            discount : 10,
            image : "https://bizweb.dktcdn.net/thumb/large/100/390/808/products/9-loi-ich-than-ky-cua-ot-chuong-doi-voi-suc-khoe-2.jpg?v=1592366842863"
        },
        {
            name : 'Rau cần tây Organic 300gr',
            price : 50,
            discount : 10,
            image : "https://bizweb.dktcdn.net/thumb/large/100/390/808/products/165707b495b7c2d.jpg?v=1591870722910"
        },
        {
            name : 'Nấm hương tươi Green Kingdom 250gr',
            price : 50,
            discount : 10,
            image : "https://bizweb.dktcdn.net/thumb/large/100/390/808/products/1836278nam-huong-tuoi-jpeg.jpg?v=1592906200740"
        },
        {
            name : 'Nấm mỡ Green Kingdom 250gr',
            price : 50,
            discount : 10,
            image : "https://bizweb.dktcdn.net/thumb/large/100/390/808/products/nam-mo.png?v=1592905968937"
        },
        {
            name : 'Nấm hương khô Green Kingdom 50gr',
            price : 50,
            discount : 10,
            image : "https://bizweb.dktcdn.net/thumb/large/100/390/808/products/nam-huong-kho.jpg?v=1592983423577"
        },
        {
            name : 'Chanh Organic 300gr',
            price : 50,
            discount : 10,
            image : "https://bizweb.dktcdn.net/thumb/large/100/390/808/products/chanh-da-lat.jpg?v=1592903622693"
        }
    ];
    const convertNameToUrl = (name: string) => {
        const normalizedName = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        return normalizedName.split(' ').join('-').toLowerCase();
      }
    const router = useRouter();
  return (
    <div className={x['container']}>
    <div className={x['category']}>
        <div style={{display : "grid", gridTemplateRows : '3fr 2fr 1fr'}} >
            <div>
                <h3 style={{fontWeight : 'bold',textAlign : 'center'}}>Select Category</h3>
            </div>
            <div></div>
            <div></div>
        </div>
        <div></div>
    </div>
    <div className={x['list']}>
        {
            products.map((product, index) => {
                return (
                    <div className={x['item']} key={index}>
                        <div style={{display : 'flex', justifyContent : 'center', flexWrap : 'nowrap'}}>
                            <div className={x['card']} style={{backgroundImage : `url(${product.image})`, backgroundSize : 'cover', backgroundPosition : 'center', display : 'flex', alignItems : 'flex-end'}}
                            onClick={()=> router.push("product/" + convertNameToUrl(product.name))} >
                            <div style={{backgroundColor : 'white', borderRadius : '15px', boxShadow : '0px 0px 10px 0px #e0e0e0', width : '60%', textAlign : 'center'}}>
                                <h3>Get For Only</h3>
                                <span style={{fontWeight : "bold"}}>{product.price - product.discount} ADA</span>
                                <span style={{textDecoration : 'line-through', fontWeight : 'bold'}}> {product.price} ADA</span>
                            </div>
                            </div>
                        </div>
                        <div style={{display : 'flex', justifyContent : 'space-between', padding : '0 10%'}}>
                            <h3 style={{fontWeight : 'bold' , fontSize : "18px"}}>{product.name}</h3>
                            <i style={{fontSize : '25px'}} className="fa-solid fa-cart-plus"></i>
                        </div>
                    </div>
                )
            })
        }
    </div>
    </div>
  )
}
