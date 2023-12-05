import { useState, useEffect } from "react";


const Formulario = (props) => {
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [nome, setNome] = useState('');

    useEffect(() => {
        console.log("O componente iniciou");
        
        return() => {
            console.log("O componente finalizou");
        }

    }, [])

    useEffect(() => {
        console.log("O estado nome mudou");
    }, [nome])

    useEffect(() => {
        console.log("Peso mudou para: " + peso)
    }, [peso])

const alteraNome = (evento) => {
    // setNome(evento.target.value);
    setNome(estadoAnterior => {
        // estadoAnterior = valornovo
        return evento.target.value;
    })
}


const renderizaResultado = () => {
    if (altura === 0 || peso === 0) {
        return (
            <p>Por favor, preencha a altura e o peso</p>
        )
    }

    const IMC = peso /(altura * altura)

    if (IMC <= 18.5) {
        return (
            <p>{nome}, seu IMC é {IMC.toFixed(2)} e você está abaixo do peso</p>
        )
    } else if (IMC >= 18.6 && IMC <= 24.9) {
        return (
            <p>{nome}, seu IMC é {IMC.toFixed(2)} você está no peso ideal</p>
        )
    } else if (IMC >= 25 && IMC <= 29.9) {
        return (
            <p>{nome}, seu IMC é {IMC.toFixed(2)} você está levemente acima do peso</p>
        )
    } else if (IMC >= 30 && IMC <= 34.9) {
        return (
            <p>{nome}, seu IMC é {IMC.toFixed(2)} você está no nível Obesidade I</p>
        )
    } else if (IMC >= 35 && IMC <= 39.9) {
        return (
            <p>{nome}, seu IMC é {IMC.toFixed(2)} você está com Obesidade grau II</p>
        )
    } else if (IMC >= 40){
        return (
            <p>{nome}, seu IMC é {IMC.toFixed(2)} você está no nível Obesidade III</p>
        )
    }
}

return (
    <form >
        <input type="text" placeholder="Seu nome" onChange={alteraNome}/>
        <input type="number" placeholder="Sua altura" onChange={({target}) => setAltura(parseFloat(target.value))}/>
        <input type="number" placeholder="Seu peso" onChange={({target}) => setPeso(parseInt(target.value))}/>
        {renderizaResultado()}
    </form>
)

}



export default Formulario;