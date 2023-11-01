import React from 'react'
import des from './styles.module.css';
import './style.css';
import { Link } from 'react-router-dom';

function WomansDresses(motor) {
  return (
    
          <div className='mx-auto'>
    <div className='container ms-3' style={{width:"12rem"}}>
    <Link className={des.click} to={`../details/${motor.id}`}>
        <div className={des.whole} >
          <div className={des.img}>
           <img src={motor.images[0]}  alt="" /> 
            <div className={des.doc}>
             <a href="" className={des.doc1}><i className='fab fa-facebook'></i></a>
             <a href="" className={des.doc1}><i className='fab fa-whatsapp'></i></a>
             <a href="" className={des.doc1}><i className='fab fa-twitter'></i></a>
            </div>
            </div>
            <div className={des.subimg}>
            <p>Brand: {motor.brand}</p>
            <div className={des.fle}>
            <div>
            <p>Price: ${motor.price}</p>
            </div>
            <div>
            <p> <del>${motor.discountPercentage}</del> </p>
            </div>
            </div>
            </div>
          <div className={des.subsocial}>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i style={{color: 'grey'}} className='fa fa-star'></i>

            </div>
        </div>
        </Link>
    </div>
    </div>
    
  )
}

export default WomansDresses
