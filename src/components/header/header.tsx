'use client'
import React from 'react'
import { CardanoWallet } from '@meshsdk/react';
import Link from 'next/link';
export default function Header() {
  return (
    <div style={{height : '100px', display : 'grid', gridTemplateColumns : '2fr 8fr', borderBottom : '1px solid #e0e0e0'}}>
      <div style={{display : 'grid', alignItems : 'center'}}>
        {/* <h1 style={{fontSize : '24px', backgroundImage : 'linear-gradient(to right, rgb(198, 28, 198), rgb(225, 13, 48))',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            fontWeight : 'bold',
            textAlign : 'center'
        }}> Corner Market </h1> */}
        <Link href="/">
        <img src="https://static.vecteezy.com/system/resources/previews/008/635/894/non_2x/market-crypto-logo-vector.jpg" alt="" style={{width : '60px', height : '60px',  marginLeft : 'calc(50% - 40px)'}}/>
        </Link>
      </div>
      <div style={{display : 'flex', justifyContent :'flex-end', alignItems : 'center', paddingRight : '5%', color : "blue", gap: '20px'}}>
        <Link href="/home">Home</Link>
        <Link href="/product">Product</Link>
        <CardanoWallet></CardanoWallet>
      </div>
    </div>
  )
}
