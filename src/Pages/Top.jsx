import React from 'react'
import axios from 'axios';
import{ useEffect} from 'react'
import{ useState} from 'react'
import Tops from '../Components/Tops';

function Top() {
    const [top, setTop]=useState([]);
    function handleTop(){
        axios.get('https://dummyjson.com/products/category/tops')
        .then(res => {
            setTop(res.data.products)
            // console.log(res.data.products)
        });
    };
    useEffect(()=>{
        handleTop()
    },[])
  return (
    <div>
       <div className='container pt-3' >
           <div className='' style={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
        {
         (top.length > 0) ?
         top.map((tops,i) =>{
            return(
                <div key={i}>
                      <Tops {...tops}/>
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

export default Top
