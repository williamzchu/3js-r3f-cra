import { useState } from 'react'
import Clicker from './Clicker.jsx'

export default function App({clickersCount,  children}){
    const [clickerOn, setClickerOn] = useState(true)

    const toggleClicker = () => {
        setClickerOn(!clickerOn)
    }
        
    return <>
    {clickerOn && <>
        {
            [...Array(clickersCount)].map((value, index) =>
            
            <Clicker
                key={index}
                keyname={ `count${index}` }
                color={ `hsl(${ Math.random() * 360 }deg, 100%, 75%)` }
            />
        )
        }
    </>}
    </>
}