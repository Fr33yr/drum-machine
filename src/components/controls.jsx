import React,{ Fragment, useState} from "react";
import './controls.css'

import { Padbank } from "./padbank";


export function Controls(){

    const [volume, setVolume] = useState(0.4);


    const handleVolume = (event) => {
        setVolume(event.target.value)
    }


    return(

        <Fragment>

            <div id="display">
                <div className="controls-container">
                <p id="vol-display">{`Volume: ${Math.floor(volume * 100)}`}</p>
                <div className="volume-slider">
                    <input type="range" step={0.01} min={0} max={1} defaultValue={volume} onChange={handleVolume}/>
                </div>
                </div>
                <Padbank volume={volume}/>
            </div>
        </Fragment>
    );
}