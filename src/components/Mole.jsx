import { useEffect } from "react";

export default function Mole(props){
    useEffect(() => {
        let timer = setTimeout(() => {
            props.toggle(false)
        }, Math.floor(Math.random() * 10000))

        return () => clearTimeout(timer)
    })

    return (
        <>
            <img src="./mole.png" 
                className="mole"
                style={{'cursor': 'pointer'}}
                width={200}
                onClick={props.handleClick} />
        </>
    )
}