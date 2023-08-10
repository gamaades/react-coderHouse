import Button from 'react-bootstrap/Button';

const ButtonComponnet = (props) => {
    //console.log(props);
    return (
        <Button variant={props.bsButtonType} onClick={props.onClickFunction}>{props.label}</Button>
    )
}

export default ButtonComponnet;


// Ejemplo otra llamada de un componente
// function ButtonComponnet(){
//     return {
//         <button type="button">Click me</button>
//     }
// }