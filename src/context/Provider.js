import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import ContextApi from './ContextApi';

function Provider({ children }) {
    const[data, setData] = useState({});
    const[schedule, setSchedule] = useState({});
    const[text, setText] = useState({});

    const contextValue = {
        data,
        setData,
        schedule,
        setSchedule,
        text,
        setText, 
    }
    return(
        <ContextApi.Provider value={contextValue}>
            {children}
        </ContextApi.Provider>
    )
}

export default Provider;

