import React from 'react'

const Transition = () => {
    const change = function() {
        const div = document.querySelector('.div')
        div.style.transform = 'translateX(100px)'
        div.style.transition = 'all 1s ease-in-out'
        
    }
  return (
    <>
        <button onClick={change}>change</button>
        <div className='div'>hello</div>
    </>
  )
}

export default Transition