import React, { useEffect, useState } from 'react'
import style from './Button.module.css'
//import PropTypes from 'prop-types'

interface IButtonProps {
  children:React.ReactNode; //ReactNode = ReactElement + string + number + boolean + null + undefined
  onClick?:React.MouseEventHandler<HTMLButtonElement>;
}
//let et const reste limiter au parent alors que le var est global
//FC => FunctionComponent
const Button: React.FC<IButtonProps> = ({children, onClick=(() => {})}) => { 
  const [isClicked, setIsClicked] = useState(0);
  useEffect(() => {
    //ComponentDidMount prendre les données ou recup via le localstorage
    console.log('tata',isClicked)
    return () => {
      //ComponentWillUnmount sauvegarder les données dans le localstorage ou dans la base de données pour avoir une persistance des données
      console.log(isClicked)
    };
  }, [isClicked])
  return (
    <React.Fragment>
        <div>
          is Clicked: {isClicked}
        </div>
        <button className={style.Button} data-testid="Button" onClick={() => {setIsClicked(isClicked+1)}}>
            {children}
        </button>
    </React.Fragment>
    )
}

/* props permet de récupérer les propriétés passées à un composant par les informations passer dans la balise et les informations passées par les attributs
const Button = (props) => {
  console.log(props);
  return <div style={{...props.style, backgroundColor:props.bgColor}} className={style.Button} data-testid="Button"> {props.children} </div>;
}

//Contrôle des types avec PropTypes donc contrôle effectuer à l'éxécution et pas à la compilation comme le fais TypeScript
Button.propTypes = {
  children: PropTypes.node.isRequired,//.isRequired signifie que la propriété est obligatoire
  onClick: PropTypes.func,
  bgColor:PropTypes.oneOf(['skyblue', 'yellow']).isRequired,
  style:PropTypes.exact({
    fontWeight: PropTypes.oneOf([100, 500, 900]),
    textDecoration: PropTypes.oneOf(['underline', 'none'])
  })
};
Button.defaultProps = {
  bgColor: 'green',
  style: {fontWeight: 900, textDecoration: 'underline'}
};
*/
export default Button;