import axios from 'axios';
import{ useEffect} from 'react'
import{ useState} from 'react'
import Motorcycle from '../Components/Motorcycle';


function Submotorcycle() {
    const [cycle, setCycles]=useState([]);
    function handleCycle(){
        axios.get('https://dummyjson.com/products/category/motorcycle')
        .then(res => {
            setCycles(res.data.products)
            // console.log(res.data.products)
        });
    };
    useEffect(()=>{
        handleCycle()
    },[])
  return (
    <div>
        <div className='container pt-3' >
           <div className='' style={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
        {
         (cycle.length > 0) ?
         cycle.map((cycles,i) =>{
            return(
                <div key={i}>
                      <Motorcycle {...cycles}/>
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

export default Submotorcycle
