import { useEffect } from "react";

export default function EmptySlot(props) {
    useEffect(() => {
        let timer = setTimeout(() => {
            props.toggle(true)
        }, Math.floor(Math.random() * 10000))

        return () => clearTimeout(timer)
    })

    return (
        <>
            <img src="./molehill.png" 
                style={{'cursor': 'pointer'}}
                width={200} />
        </>
    )
}