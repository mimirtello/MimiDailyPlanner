import React from 'react'
import DailyPlanner from "../components/DailyPlanner"
import { useLocation } from 'react-router-dom';
function Planner(){
const location = useLocation();

    return(
        <section>
    {(location.pathname === '/planner/1' &&
        <DailyPlanner id="1"/>)}
    {(location.pathname === '/planner/2' &&
        <DailyPlanner id="2"/>)}
    {(location.pathname === '/planner/3' &&
        <DailyPlanner id="3"/>)}
    {(location.pathname === '/planner/4' &&
        <DailyPlanner id="4"/>)}
    {(location.pathname === '/planner/5' &&
        <DailyPlanner id="5"/>)}
    {(location.pathname === '/planner/6' &&
        <DailyPlanner id="6"/>)}
    {(location.pathname === '/planner/7' &&
        <DailyPlanner id="7"/>)}
        </section>
    )
}
export default Planner;