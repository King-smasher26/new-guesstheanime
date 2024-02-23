import React, { useEffect, useState } from 'react'
import axios from 'axios'
import GuessingPage from './GuessingPage';
const Getimg = () => {
    const [loading,setLoading]=useState(false);
    const [myimg,setMyimg]=useState();
    const [totaldata,setTotaldata]=useState([]);
    const [myOptions,setmyOptions]=useState([]);
    useEffect(()=>{
        setLoading(true);
        axios.get('http://localhost:5000').then((res)=>{
            console.log(res.data.data[0]);
            setTotaldata(res.data.data[0])
            console.log('mydata is')
            console.log(totaldata)
            setmyOptions(res.data.data[0].options)
            console.log(myOptions)
            setMyimg(res.data.data[0].imgurl);
            setLoading(false)
        }).catch((e)=>{
            console.log(e)
            setLoading(false)
        })
    },[])
  return (
    <>
    {
        loading?<div>loading</div>:<div>
            {/* <div>loading done</div> */}
            <GuessingPage option1={myOptions[0]} option2={myOptions[1]} option3={myOptions[2]} option4={myOptions[3]} myimg={myimg}/>
        </div>
    }
    
    </>
  )
}

export default Getimg