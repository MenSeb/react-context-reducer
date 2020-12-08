import React from 'react';
import PropTypes from 'prop-types';
import Context from './context';

export default function Provider({ children }) {
    return <Context.Provider value={{}}>{children}</Context.Provider>;
}

Provider.defaultProps = {};

Provider.propTypes = {
    children: PropTypes.node.isRequired,
};
