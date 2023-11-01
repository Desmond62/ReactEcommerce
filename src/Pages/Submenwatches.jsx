import axios from 'axios';
import{ useEffect} from 'react'
import{ useState} from 'react'
import Menwatches from '../Components/Menwatches';


function Submenwatches() {
    const [watch, setWatches]=useState([]);
    function handleWatches(){
        axios.get('https://dummyjson.com/products/category/mens-watches')
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
                      <Menwatches {...watchs}/>
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

export default Submenwatches

