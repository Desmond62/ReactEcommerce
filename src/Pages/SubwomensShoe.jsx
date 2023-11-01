import React from 'react'
import axios from 'axios';
import{ useEffect} from 'react'
import{ useState} from 'react'
import WomensShoes from '../Components/WomensShoes'

function SubwomensShoe() {
  const [shoe, setShoes]=useState([]);
  function handleShoes(){
      axios.get('https://dummyjson.com/products/category/womens-shoes')
      .then(res => {
          setShoes(res.data.products)
          // console.log(res.data.products)
      });
  };
  useEffect(()=>{
      handleShoes()
  },[])
  return (
    <div>
        <div className='container pt-3' >
           <div className='' style={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
        {
         (shoe.length > 0) ?
         shoe.map((shoes,i) =>{
            return(
                <div key={i}>
                      <WomensShoes {...shoes}/>
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

export default SubwomensShoe
