import React from 'react'
import style from './Button.module.css'
import PropTypes from 'prop-types'


const Button = ({bgColor, children, onClick=(() => {})}: {children:React.ReactNode, onClick?:React.MouseEventHandler<HTMLButtonElement> | undefined, bgColor:string}) => {
  return (
    <button style={{backgroundColor:bgColor}} className={style.Button} data-testid="Button" onClick={onClick}>
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
//Contrôle des types avec PropTypes donc contrôle effectuer à l'éxécution et pas à la compilation comme le fais TypeScript
Button.propTypes = {
  children: PropTypes.node.isRequired,//.isRequired signifie que la propriété est obligatoire
  onClick: PropTypes.func,
  bgColor:PropTypes.oneOf(['skyblue', 'tomato']).isRequired
};
export default Button;
