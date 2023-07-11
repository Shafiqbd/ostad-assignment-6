import React, { useState } from 'react'

export default function Content() {
  const [value, setValue] = useState();
  const [showContent, setShowContent] = useState();

  const handleTextarea = (e)=>{
    setShowContent(e.target.value)
    console.log('e', e.target.value)
  }
  const handleButton = ()=>{
    setValue(showContent);
  }
  return (
    <div>
       <button onClick={handleButton} className="button">Show Content</button>
       <br/>
       <h4>{value}</h4>
       <textarea onChange={handleTextarea} className="textarea" placeholder="Enter your text here..."></textarea>
    </div>  
  )
}
