import PadsData from "./Pads"
import { useState } from "react"
import Pad from "./Pad"


export default function App(){


    const [padsBtn, setPads] = useState(PadsData)



    // const toggle = function(id){
    //     setPads(prevPads => prevPads.map(item => {
    //         return item.id === id ? {...item, on: !item.on} : item
    //     }))
    // }


    const toggle = function(id){
        setPads(prevPads => prevPads.map(item => {
            return item.id === id ? {...item, on: !item.on} : item
            }
        ))
    } 

    const buttonElement = padsBtn.map(pad => (
        <Pad 
            key={pad.id}
            id={pad.id} 
            color={pad.color} 
            on={pad.on} 
            btnClicked={toggle} 
        />
    ))

    

    return(
        <div className="btn-container">
            {buttonElement}
        </div>
    )
}