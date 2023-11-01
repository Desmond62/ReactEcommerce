import React from 'react'
import axios from 'axios';
import{ useEffect} from 'react'
import{ useState} from 'react'
import Menshoes from '../Components/Menshoes';

function Submenshoes() {
    const [menshoe, setMenshoes]=useState([]);
  function fetchMenshoe(){
      axios.get('https://dummyjson.com/products/category/mens-shoes')
      .then(res => {
          setMenshoes(res.data.products)
          // console.log(res.data.products)
      });
  };
  useEffect(()=>{
      fetchMenshoe()
  },[])
  return (
    <div>
       <div className='container pt-3' >
           <div className='' style={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
        {
         (menshoe.length > 0) ?
         menshoe.map((items,i) =>{
            return(
                <div key={i}>
                      <Menshoes {...items}/>
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

export default Submenshoes
