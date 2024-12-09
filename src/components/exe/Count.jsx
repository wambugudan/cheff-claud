import { useState } from "react"
import TestComponent from "./TestComponent"
import Star from "./Star"
import App from "./App"




export default function Count(){

    const [count, setCount] = useState(0)

    const add = function(){
        setCount(count + 1)
    }

    const minus = function(){
        setCount(count - 1)
    }


    const [fav, setFav] = useState(false)

    const favDisplayed = function(){
        setFav(prevFav => !prevFav)
    }


    const [user, setUser] = useState('Joe Griffin')


    

    return(
        <>
            <button onClick={minus}>-</button>
            <TestComponent 
                number = {count}
                user = {user}
            />
            <button onClick={add}>+</button>

            <Star
                fav = {fav}
                handleClick= {favDisplayed}
                user = {user}
            />
            
            <App />
        </>
    )
}