import {useState } from 'react'
import {useEffect } from 'react'
import axios from 'axios'
import Hom from '../Components/Hom';
import des from '../Components/styles.module.css';
import {ImCheckmark} from 'react-icons/im';
import {FaTruck} from 'react-icons/fa';
import {TbArrowsLeftRight} from 'react-icons/tb';
import {FaPhoneVolume} from 'react-icons/fa';
function Home() {
  const [products, setProducts]= useState([]);
function fetchProducts(){
  axios.get('https://dummyjson.com/products?limit=10&skip=30')
  .then(res=>{
    setProducts(res.data.products)
    console.log(res.data.products)
  })
} 
 useEffect(()=>{
  fetchProducts()
},[])
  return (
    <div>


                       {/* Carousel Section */}

     <section style={{backgroundColor:'whitesmoke'}}>
     <div className='container-fluid pt-3 pb-4 sells'>
       <div className='row'>
        <div className='col-md-9'>
          <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
               <div class="carousel-item active">
                 <img src="mens.jpeg" class="d-block w-100" alt="..."/>
                 <div class="carousel-caption d-none d-md-block">
                    <h5></h5>
                    <p>Some representative placeholder content for the first slide.</p>
                  </div>
                 </div>
                  <div class="carousel-item">
                  <img src="caro2.jpg" class="d-block w-100" alt="..."/>
                  <div class="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                  </div>
                   </div>
                   <div class="carousel-item">
                  <img src="mens.jpeg" class="d-block w-100" alt="..."/>
                  <div class="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                   <p>Some representative placeholder content for the first slide.</p>
                  </div>
               </div>
         </div>
       
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
               <span class="carousel-control-next-icon" aria-hidden="true"></span>
               <span class="visually-hidden">Next</span>
            </button>
         
          </div>
          </div>

          <div className='col-md-3 sel' >
              <div>
                <img src="wom.jpeg" alt="" />
              </div>

              <div>
                 <img src="woms.jpeg" alt="" />
              </div>
          </div>
        </div>
            </div>



                    {/* Sub Carousel Section */}
                  
        <div className='container pb-5 pt-5'>
            <div className='row'>
              <div className='col-md-3'>
                <div className={des.mark}> 
                <div>
                  <ImCheckmark className={des.mark1}/>
                </div>
                <div>
                  <p>Quality Product</p>
                </div>
                </div>
            </div>
          <div className='col-md-3'>
            <div className={des.mark}> 
                <div>
                  <FaTruck className={des.mark1}/>
                </div>
                <div>
                  <p>Free Shipping</p>
                </div>
                </div>
            </div>
         <div className='col-md-3'>
            <div className={des.mark}> 
                <div>
                  <TbArrowsLeftRight className={des.mark1}/>
                </div>
                <div>
                  <p>14-Day Return</p>
                </div>
                </div>
           </div>
       <div className='col-md-3'>
             <div className={des.mark}> 
                <div>
                  <FaPhoneVolume className={des.mark1}/>
                </div>
                <div>
                  <p>24/7 Support</p>
                </div>
                </div>
              </div>
            </div>
          </div> 
        </section> 



                          {/* First Categories  Section*/}

         <section>
          <div className='container pt-2' style={{backgroundColor:'whitesmoke'}}>
            <div className='row'>
            <h1 className={des.h1}>CATEGORIES</h1>

              <div className='col-md-3'>
                  <div className={des.categories}>
                    <div>
                        <img src="light.png" alt="" />
                    </div>
                    <div>
                        <h4>Category</h4>
                        <p>100 Products</p>
                    </div>
                  </div>
              </div>
              <div className='col-md-3'>
                  <div className={des.categories}>
                    <div>
                        <img src="shoe.png" alt="" />
                    </div>
                    <div>
                        <h4>Category</h4>
                        <p>100 Products</p>
                    </div>
                  </div>
              </div>
              <div className='col-md-3'>
                  <div className={des.categories}>
                    <div>
                        <img src="jel.png" alt="" />
                    </div>
                    <div>
                        <h4>Category</h4>
                        <p>100 Products</p>
                    </div>
                  </div>
              </div>
              <div className='col-md-3'>
                  <div className={des.categories}>
                    <div>
                        <img src="camera.png" alt="" />
                    </div>
                    <div>
                        <h4>Category</h4>
                        <p>100 Products</p>
                    </div>
                  </div>
              </div>
            </div>
          </div>

          <div className='container mt-3' style={{backgroundColor:'whitesmoke'}}>
            <div className='row'>
              <div className='col-md-3'>
                  <div className={des.categories}>
                    <div>
                        <img src="came.png" alt="" />
                    </div>
                    <div>
                        <h4>Category</h4>
                        <p>100 Products</p>
                    </div>
                  </div>
              </div>
              <div className='col-md-3'>
                  <div className={des.categories}>
                    <div>
                        <img src="drone.png" alt="" />
                    </div>
                    <div>
                        <h4>Category</h4>
                        <p>100 Products</p>
                    </div>
                  </div>
              </div>
              <div className='col-md-3'>
                  <div className={des.categories}>
                    <div>
                        <img src="watch.png" alt="" />
                    </div>
                    <div>
                        <h4>Category</h4>
                        <p>100 Products</p>
                    </div>
                  </div>
              </div>
              <div className='col-md-3'>
                  <div className={des.categories}>
                    <div>
                        <img src="cream.png" alt="" />
                    </div>
                    <div>
                        <h4>Category</h4>
                        <p>100 Products</p>
                    </div>
                  </div>
              </div>
            </div>
          </div>

          <div className='container mt-3 pb-5' style={{backgroundColor:'whitesmoke'}}>
            <div className='row'>
              <div className='col-md-3'>
                  <div className={des.categories}>
                    <div>
                        <img src="beauty.png" alt="" />
                    </div>
                    <div>
                        <h4>Category</h4>
                        <p>100 Products</p>
                    </div>
                  </div>
              </div>
              <div className='col-md-3'>
                  <div className={des.categories}>
                    <div>
                        <img src="cream.png" alt="" />
                    </div>
                    <div>
                        <h4>Category</h4>
                        <p>100 Products</p>
                    </div>
                  </div>
              </div>
              <div className='col-md-3'>
                  <div className={des.categories}>
                    <div>
                        <img src="golden1.png" alt="" />
                    </div>
                    <div>
                        <h4>Category</h4>
                        <p>100 Products</p>
                    </div>
                  </div>
              </div>
              <div className='col-md-3'>
                  <div className={des.categories}>
                    <div>
                        <img src="light.png" alt="" />
                    </div>
                    <div>
                        <h4>Category</h4>
                        <p>100 Products</p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          </section>                 


      <div className='container pt-1' >
        <div className='' style={{display:'flex',flexWrap:'wrap',justifyContent:'center'}} >
      {
       ( products.length > 0)?
       products.map((value,i)=>{
        return(
          <div key={i}>
            <Hom {...value}/>
          </div>
        )

       }):
       <h2>Product Loading........</h2>
      }
        </div>
      </div>
    </div>
  )
}

export default Home
