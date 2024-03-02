import './Input.css'
import { useRef } from 'react'

export const Input = () => {
    const inputRef = useRef();

    const handleClickImage = () => {
        inputRef.current.focus();
    }

    return(
        <div className='Input'>
            <img src="/images/lupa.png" alt="404" className='image' onClick={handleClickImage}/>
            <input type="text" ref={inputRef}/>
        </div>
    )
}