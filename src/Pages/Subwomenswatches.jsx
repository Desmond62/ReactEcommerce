import axios from 'axios';
import{ useEffect} from 'react'
import{ useState} from 'react'
import Womenswatches from '../Components/Womenswatches';


function Subwomenwatches() {
    const [watch, setWatches]=useState([]);
    function handleWatches(){
        axios.get('https://dummyjson.com/products/category/womens-watches')
        .then(res => {
            setWatches(res.data.products)
            // console.log(res.data.products)
        });
    };
    useEffect(()=>{
        handleWatches()
    },[])
  return (
    <div>
        <div className='container pt-3' >
           <div className='' style={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
        {
         (watch.length > 0) ?
         watch.map((watchs,i) =>{
            return(
                <div key={i}>
                      <Womenswatches {...watchs}/>
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

export default Subwomenwatches

