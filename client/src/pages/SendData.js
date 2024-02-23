import React, { useState } from 'react'
import axios from 'axios'
const SendData = () => {

    const [loading,setLoading]=useState(true)
    function handleDataSend(){
        const data={
            "1234.png":"demon slayer"
        };
        axios.post('http://localhost:5000/gettingData',data).then(()=>{
            setLoading(false);
            // navigate('/');
        }).catch((e)=>{
            setLoading(true);
            alert('An error has happened check console')
            console.log(e)
        });
        
    }
  return (
    <>
    <div>SendData</div>
    <button onClick={handleDataSend}>Send data</button>
    </>
  )
}

export default SendData