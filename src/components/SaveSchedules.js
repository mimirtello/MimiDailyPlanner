import React from 'react';
import { Link } from 'react-router-dom';

function SaveShedules(){

    return(
        
        <section className="main">
        <div className="container2">
            <h1>Save Schedules</h1>
            <div className="schedules">
                <br/>
                <br/>
                <Link to={ '/planner/1'}><p> Segunda</p></Link>
               <br/>
               <Link to={ '/planner/2'}><p> Terça </p></Link>
               <br/>
               <Link to={ '/planner/3'}><p> Quarta</p></Link>
               <br/>
               <Link to={ '/planner/4'}><p> Quinta</p></Link>
               <br/>
               <Link to={ '/planner/5'}><p> Sexta </p></Link>
               <br/>
               <Link to={ '/planner/6'}><p> Sábado </p></Link>
               <br/>
               <Link to={ '/planner/7'}><p> Domingo </p></Link>
            </div>
         </div>
        </section>
    )
}
export default SaveShedules;