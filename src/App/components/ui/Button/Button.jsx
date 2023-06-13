import React, { useEffect, useState } from 'react'
import style from './Button.module.css'
import PropTypes from 'prop-types'
import { cleanup } from '@testing-library/react'

const Button=(props)=> {

    const [isClicked, setIsClicked ] = useState(false)

    useEffect(() => {
        if (isClicked) {
            setTimeout(()=>{setIsClicked(false)}, 500 )
        }
        return ()=> {
            clearTimeout()
        }
    }, [isClicked])

    console.log(props);
    return (
        <button 
            type={props.type} 
            className={`${style.Button} btn${undefined!==props.className? ' '+props.className:''}${isClicked===true ? ' '+style.clicked : ' '}`} 
            onClick={(evt)=>{
                if ( undefined !== props.onClick && typeof props.onClick === 'function' ) {
                    setIsClicked(true);
                    props.onClick('click');
                }
            }}>
            {props.children}
        </button>
    );
}
Button.propTypes={
   children: PropTypes.any.isRequired,
   type: PropTypes.oneOf(['button', 'reset', 'submit']).isRequired,
   onClick: PropTypes.func,
   className: PropTypes.oneOf(['primary', 'error'])
}
Button.defaultProps={
    type:'button',
    onClick: () => {console.log('Coucou')},
    className: 'primary'
}
export default Button