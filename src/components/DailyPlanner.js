import React, {useContext} from 'react'
import { useHistory } from 'react-router-dom';
import contente from '../moods/feliz.png'
import feliz from '../moods/olhofechado-feliz.png'
import surpresa from '../moods/surpresa.png'
import zangada from '../moods/zangada.png'
import chorando from '../moods/chorando.png'
import ContextApi from '../context/ContextApi'


function DailyPlanner({id}){

    const{setData, data,  schedule, setSchedule, text, setText} = useContext(ContextApi);
    const history = useHistory();

    const handleSet=( {target} )=>{
     const { name, value } = target;
 
     setSchedule( {
     ...schedule,
     [name]: value, 
    
    });
 }

 const saveStorage=()=>{
    localStorage.setItem(`schedule${id}`, JSON.stringify(schedule));
    localStorage.setItem(`data${id}`,JSON.stringify(data))
    localStorage.setItem(`text${id}`, JSON.stringify(text));
 }

 const openStorage=()=>{
    history.push("/");
 }

    return(
    <section className="main">
        <div className="container">
        <div className="itens">
            <h1>Daily Planner</h1>
            <div>
                <h6>Date / Name</h6>
                <input 
                type="text" 
                onChange={ (event) => setData(event.target.value) }
                name="data"
                
                />
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
                <textarea 
                rows="15" 
                cols="30"
                onChange={(event) => setText(event.target.value) } />
            </div>
        </div>
        
        <div className="schedule" key="index">
            <h5>Schedule</h5>
         6:00<input 
         type="text"
         onChange={ handleSet}
         name="6:00"
        
         />
         <br/>
         7:00<input 
         type="text" 
         onChange={ handleSet}
         name="7:00"
        
         />
         <br/>
         8:00<input 
         type="text"
         onChange={ handleSet}
         name="8:00"
          />
         <br/>
         9:00<input 
         type="text" 
         onChange={ handleSet}
         name="9:00"
         />
         <br/>
         10:00<input 
         type="text" 
         onChange={ handleSet}
         name="10:00"/>
         <br/>
         11:00<input 
         type="text" 
         onChange={ handleSet}
         name="11:00"
         />
         <br/>
         12:00<input 
         type="text"
         onChange={ handleSet}
         name="12:00"
          />
         <br/>
         13:00<input 
         type="text"
         onChange={ handleSet}
         name="13:00" />
         <br/>
         14:00<input 
         type="text" 
         onChange={ handleSet}
         name="14:00"
         />
         <br/>
         15:00<input 
         type="text"
         onChange={ handleSet}
         name="15:00" 
         />
         <br/>
         16:00<input 
         type="text" 
         onChange={ handleSet}
         name="16:00"/>
         <br/>
         17:00<input 
         type="text" 
         onChange={ handleSet}
         name="17:00"/>
         <br/>
         18:00<input 
         type="text" 
         onChange={ handleSet}
         name="18:00"/>
         <br/>
         19:00<input 
         type="text" 
         onChange={ handleSet}
         name="19:00"/>
         <br/>
         20:00<input 
         type="text"
         onChange={ handleSet}
         name="20:00" />
         <br/>
         21:00<input 
         type="text" 
         onChange={ handleSet}
         name="21:00"/>
         <br/>
         <button type="submit" onClick={ saveStorage }>Save</button>
         <button type="submit"onClick={ openStorage }>Open</button>
         
         </div>
      
        </div>
       
    </section>
  )
}
//teste2

export default DailyPlanner;