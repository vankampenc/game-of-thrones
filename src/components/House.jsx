import { useState } from "react"

const House = ({ house }) => {
    const [showHouseWords, setShowHouseWords] = useState(false)
    
    console.log("SHW", showHouseWords)

    const onShowWordsClick = () => {
        setShowHouseWords(true)
    }
    const onHideWordsClick = () => {
        setShowHouseWords(false)
    }

    return (
        <div style={{display:'flex', gap:'20px', padding:'7px'}}>
            <p>{house.name} of {house.region}</p>
            {showHouseWords ? <button onClick={onHideWordsClick}>Hide House Words</button> : <button onClick={onShowWordsClick}>Show House Words</button>}
            {showHouseWords ? <p>- {house.words ? house.words : "No House Words"}</p> : <></>}
        </div>
    )
}

export default House