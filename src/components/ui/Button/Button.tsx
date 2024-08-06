import React, { useEffect, useState } from 'react'
import style from './Button.module.css'
//import PropTypes from 'prop-types'

interface IButtonProps {
  children:React.ReactNode; //ReactNode = ReactElement + string + number + boolean + null + undefined
  onButtonClick?:React.MouseEventHandler<HTMLButtonElement>;
  type?:IType;
}
type IType = 'button' | 'submit' | 'reset';
//let et const reste limiter au parent alors que le var est global
//FC => FunctionComponent
const Button: React.FC<IButtonProps> = ({type, children, onButtonClick=(() => {})}) => { 
  const [isClicked, setIsClicked] = useState(true);
  useEffect(() => {
    return () => {
      //On remet le bouton à son état initial
      setTimeout(() => {
        setIsClicked(false); //On peux se permettre de mettre à jour le isClicked alors dans les dépendances il y a isClicked. Car isClicked est une valeur primitive (true, false, null, undefined)
      }, 3000);
    }
  }, [isClicked]);
  //Type permet de définir le type de bouton
  return (
      <button 
        className={`${style.Button}${isClicked ? ' ' + style.clicked: ''}`} 
        data-testid="Button" 
        type={type} 
        onClick={(e) => {
          setIsClicked(true);
          onButtonClick(e); //On peux passer un params de l'enfant au parent
          }}>
            {children}
        </button>
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