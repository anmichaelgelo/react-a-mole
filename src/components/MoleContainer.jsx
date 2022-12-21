import Mole from "./Mole"
import EmptySlot from "./EmptySlot"
import { useState } from "react"

export default function MoleContainer({score, setScore}) {
    let [mole, setMole] = useState(false)

    const handleClick = () => {
        setScore(score + 1)
        setMole(false)
    }

    let displayMole = mole
        ? <Mole setScore={setScore} 
            toggle={setMole} 
            handleClick={handleClick} />
        : <EmptySlot toggle={setMole} />

    return (
        <div style={{'display': 'inline-block', 'width': '30vw'}}>
            {displayMole}
        </div>
    )
}