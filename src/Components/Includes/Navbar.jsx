import React from 'react'
import des from '../styles.module.css';
import {Link, useNavigate} from 'react-router-dom';
import {HiOutlineUser} from "react-icons/hi";
import {RiArrowDropDownLine} from "react-icons/ri";

function Navbar() {
  let user=JSON.parse(localStorage.getItem('users'))

  const navigate = useNavigate();
  const logout =() =>{
    localStorage.clear('')
    navigate('/register')
  }  
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
  <div class="container">
    <a class="navbar-brand" href="#"><span className={des.spa}>MULTI </span> <span className={des.spa1}>SHOP</span></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
    <form class="d-flex mx-auto">
        <input className={des.inp} type="search" placeholder="Search For Products" aria-label="Search"/>
        <button className={des.btn} type="submit"><i className='fa fa-search'></i></button>
        </form>
        </ul>
        <div className={des.service}>
        <p>Customer Service</p>
        <h5>+0123214346</h5>
      </div>
    </div>
  </div>
</nav>

                           {/* Second Navbar */}
<nav style={{padding:'0px', margin: '0px'}} class="navbar navbar-expand-lg navbar-light dav sticky-top">
  <div class="container">
    <div className={des.dropdown}>
    <div className={des.dropbtn}>
      <div>
        <span className={des.bar}><i className='fa fa-bars'></i><span>Categories</span></span>
          </div>
    <div>
    <i className='fa fa-chevron-down'></i>
  </div>
 </div>
   <div className={des.dropdowncontent}>
   <Link to={'/'}>
      <span >Home</span>
      </Link>
        <Link to={'/motorcycle'}>
      <span >Motorcycle</span>
      </Link>
      <Link to={'/womensdress'}>
      <span>Womens-Dresses</span>
      </Link>
      <Link to={'/tops'}>
      <span>Tops</span>
      </Link>
      <Link to={'/womensshoes'}>
      <span>Womens-Shoes</span>
      </Link>
      <Link to={'/furniture'}>
      <span>Furniture</span>
      </Link>
      <Link to={'/menshirts'}>
      <span>Mens-Shirts</span>
      </Link>
      <Link to={'/menshoes'}>
      <span>Mens-Shoes</span>
      </Link>
      <Link to={'/menwatches'}>
      <span>Mens-Watches</span>
      </Link>
      <Link to={'/womenwatches'}>
      <span>Women-Watches</span>
      </Link>
      <Link to={'/womensbags'}>
      <span>Womens-Bags</span>
      </Link>
      <Link to={'/womensjewel'}>
      <span>Womens-Jewellery</span>
      </Link>
      </div>
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto davv">
        <li class="nav-item">
          <a class="" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="" href="#">Pricing</a>
        </li>
      </ul>
      <div className={des.cart}>
        {/* <Link style={{textDecoration:'none'}}>
         <div>
          <span className={des.down}>Account <i className='fa fa-chevron-down'></i></span>
         </div>
         </Link> */}
       <div className={des.dropdown1}>
        <div className={des.dropbtn1}>
         {
          localStorage.getItem('users')?
          <>
          <h6 style={{ backgroundColor: 'gainsboro', padding:' 12px 14px', borderRadius:'5px', fontSize:'12px', fontWeight:"700", color:'black'}}>Hi,{user && user[0].Name}</h6>
          </>:
          <>
           <div className={des.ico}>
            <HiOutlineUser/>
          </div>
          <div>
          <p>Account</p>
          </div>
          <div className={des.arr}>
          <RiArrowDropDownLine/>
          </div>
          </>
         }
          

        <div className={des.dropdowncontent1}>
          {
            localStorage.getItem('users')?
            <>
        <a class="text-black" href="#" onClick={logout}>Logout</a>
        </>:
            <>
        <a href="#">
          <Link class="text-black" to="/login">
          Login
          </Link>
        </a>
        <a href="#">
        <Link class="text-black" to="/register">
          Register
          </Link>
        </a>
        </>
      }
        </div>
      </div>
        </div>

         <Link>
         <div>
          <i className='fa fa-shopping-cart'> <span className={des.top}>0</span></i>
         </div>
         </Link>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
