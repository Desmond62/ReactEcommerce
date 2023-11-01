import React from 'react'
import axios from 'axios';
import{ useEffect} from 'react'
import{ useState} from 'react'
import Menshirts from '../Components/Menshirts';

function Submenshirt() {
    const [shirt, setShirts]=useState([]);
  function handleShirt(){
      axios.get('https://dummyjson.com/products/category/mens-shirts')
      .then(res => {
          setShirts(res.data.products)
          // console.log(res.data.products)
      });
  };
  useEffect(()=>{
      handleShirt()
  },[])
  return (
    <div>
       <div className='container pt-3' >
           <div className='' style={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
        {
         (shirt.length > 0) ?
         shirt.map((shirts,i) =>{
            return(
                <div key={i}>
                      <Menshirts {...shirts}/>
                </div>
            )
         }):
         <h5>Loading...</h5>
        }
        </div>
      </div>
    </div>
  )
}

export default Submenshirt
