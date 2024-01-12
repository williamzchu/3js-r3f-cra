import { useState, useEffect } from "react"

export default function Clicker({keyname, color}){
    const [count, setCount] = useState(parseInt(localStorage.getItem(keyname) ?? 0))

    const buttonClick = () =>{
        setCount(count + 1)
    }

    useEffect(() =>
    {
        localStorage.setItem(keyname, count)
    }, [ count ])

    useEffect(() =>
    {
        return () =>
        {
            localStorage.removeItem(keyname)
        }
    }, [])

    return <div>
        <div style={{color: color}}>Clicks: {count}</div>
        <button onClick={buttonClick}>Clicker</button>
    </div>
}