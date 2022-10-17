import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import ContextApi from './ContextApi';

function Provider({ children }) {
    const [agenda, setAgenda] = useState('');

    const contextValue={
        agenda,
        setAgenda,
    }
    return(
        <ContextApi.Provider value={contextValue}>
            {children}
        </ContextApi.Provider>
    )
}

export default Provider;

