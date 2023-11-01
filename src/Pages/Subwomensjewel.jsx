import React from 'react'
import axios from 'axios';
import{ useEffect} from 'react'
import{ useState} from 'react'
import Womensjewel from '../Components/Womensjewel';

function Subwomansjewel() {
    const [dress, setDresses]=useState([]);
    function handleDress(){
        axios.get('https://dummyjson.com/products/category/womens-jewellery')
        .then(res => {
            setDresses(res.data.products)
            // console.log(res.data.products)
        });
    };
    useEffect(()=>{
        handleDress()
    },[])
  return (
    <div>
        <div className='container pt-3' >
           <div className='' style={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
        {
         (dress.length > 0) ?
         dress.map((dresses,i) =>{
            return(
                <div key={i}>
                      <Womensjewel {...dresses}/>
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

export default Subwomansjewel
