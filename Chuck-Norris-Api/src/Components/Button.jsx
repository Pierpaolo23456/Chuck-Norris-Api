import { useState } from 'react'
import '../styles/Button.css'

function Button({text, variant, callback}) {
  const [count, setCount] = useState(0)
  let clickHandler = function(){
    if(callback!=undefined && variant!="disabled"){
      callback();
    }
  }

  let classRenderer = function (){
    let classes = [
      'Button', variant
    ]
    return classes.join("")
  }

  return (
    <div onClick={clickHandler} className={classRenderer()}>
      {text}
    </div>
  )
  
}