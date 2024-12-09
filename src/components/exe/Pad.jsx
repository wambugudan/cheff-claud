
export default function Pad(props){


     return(
        <div>
            <button 
                className={props.on ? "pads-btn-on" : "pads-btn-off"} 
                key={props.id} 
                style={{backgroundColor: props.color}}
                onClick={() => props.btnClicked(props.id)}
            >
                Btn
            </button>
        </div>
     )
}