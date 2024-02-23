import React from 'react'
import '../App.css'
const GuessingPage = (props) => {
  function clicked(e){
    console.log(e.target.value,e.target)

  }
  // console.log(props.option1)
  return (
        <div className='Container'>
            <img className='my-anime-img' loading='lazy' src={props.myimg}/>

        <div className='options'>
          <div className='options-inside'>

          <input type='radio' id='option-1' name='options' onClick={clicked}/>
          <label htmlFor='option-1'>{props.option1}</label>
          </div>
          <div className='options-inside'>

          <input type='radio' id='option-2' name='options' onClick={clicked}/> 
          <label htmlFor='option-2'>{props.option2}</label>
          </div>
          <div className='options-inside'>

          <input type='radio' id='option-3' name='options' onClick={clicked}/> 
          <label htmlFor='option-3'>{props.option3}</label>
          </div>
          <div className='options-inside'>

          <input type='radio' id='option-4' name='options' onClick={clicked}/> 
          <label htmlFor='option-4'>{props.option4}</label>
          </div>
        </div>    
        </div>
  ) 
}

export default GuessingPage