import React from 'react'
import style from './Button.module.css'

const Button = ({children, onClick=(() => {})}: {children:string|React.ReactNode, onClick?:React.MouseEventHandler<HTMLButtonElement> | undefined}) => {
  return (
    <button className={style.Button} data-testid="Button" onClick={onClick}>
        {children}
    </button>
    /* <div className="Button" data-testid="Button"> Benjamin </div> */
    )
}

export default Button;
