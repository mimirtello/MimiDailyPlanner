import React from 'react'
import contente from '../moods/feliz.png'
import feliz from '../moods/olhofechado-feliz.png'
import surpresa from '../moods/surpresa.png'
import zangada from '../moods/zangada.png'
import chorando from '../moods/chorando.png'

function DailyPlanner(){
    return(
    <section className="main">
        <div className="container">
        <div className="itens">
            <h1>Daily Planner</h1>
            <div>
                <h6>Date / Name</h6>
                <input type="text"/>
            </div>
            <div className="moods">
                <h6>My Mood Today</h6>
                <img src={contente} alt="mood"></img>
                <img src={feliz} alt="mood"></img>
                <br/>
                <img src={surpresa} alt="mood"></img>
                <img src={zangada} alt="mood"></img>
                <img src={chorando} alt="mood"></img>
            </div>
            <div>
                <h6>Notes</h6>
                <textarea rows="15" cols="30"/>
            </div>
        </div>
        <div className="schedule">
            <h5>Schedule</h5>
            
         6:00<input type="text" />
         <br/>
         7:00<input type="text" />
         <br/>
         8:00<input type="text" />
         <br/>
         9:00<input type="text" />
         <br/>
         10:00<input type="text" />
         <br/>
         11:00<input type="text" />
         <br/>
         12:00<input type="text" />
         <br/>
         13:00<input type="text" />
         <br/>
         14:00<input type="text" />
         <br/>
         15:00<input type="text" />
         <br/>
         16:00<input type="text" />
         <br/>
         17:00<input type="text" />
         <br/>
         18:00<input type="text" />
         <br/>
         19:00<input type="text" />
         <br/>
         20:00<input type="text" />
         <br/>
         21:00<input type="text" />
            
        </div>
        </div>
    </section>
  )
}

export default DailyPlanner;