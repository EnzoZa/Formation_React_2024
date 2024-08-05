import React from 'react'
import style from './Button.module.css'

const Button = ({children, onClick=(() => {})}: {children:React.ReactNode, onClick?:React.MouseEventHandler<HTMLButtonElement> | undefined}) => {
  return (
    <button className={style.Button} data-testid="Button" onClick={onClick}>
        {children}
    </button>
    )
}
/*
const Button = (props) => {
  console.log(props);
  return <div className={style.Button} data-testid="Button"> {props.text} </div>;
}
*/
export default Button;
