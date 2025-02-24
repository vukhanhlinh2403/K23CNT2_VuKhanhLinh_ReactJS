import React from 'react'

export default function vklFuncEvent1() {
    // ham xu ly su kien
    const vklEventButton1Click = () => {
        alert("Button 1 - Clicked");
    };
    const vklEventButton2Click = () => {
        alert("Button 2 - Clicked");
    };
    const vklEventButton3Click = (name) => {
        alert("Name:" + name )
    }
    return (
        <div className='alert alert-info'>
            {/*<button className='btn btn-primary' onClick={vklEventButton1Click()}>
                button1
            </button>*/}
            <button className='btn btn-primary mx-1' onClick={vklEventButton2Click}>
                button2
            </button>
            {/*<button className='btn btn-success' onClick={()=>vklEventButton3Click("vu khanh linh")}>
                button3
            </button>*/}
            <button className='btn btn-success mx-1' onClick={()=>vklEventButton3Click("vu khanh ")}>
                button4
            </button>
        </div>
    );
}
