import React, { useMemo, useReducer } from 'react';
import PropTypes from 'prop-types';
import Context from './context';
import { createAPI, createReducer } from './utilities';

export default function Provider({ actions, children, config, initial }) {
    const [state, dispatch] = useReducer(
        createReducer(actions),
        initial,
        config,
    );

    const api = useMemo(() => {
        return createAPI(actions, dispatch);
    }, [actions, dispatch]);

    return (
        <Context.Provider value={{ api, state }}>{children}</Context.Provider>
    );
}

Provider.defaultProps = {
    config: undefined,
    initial: {},
};

Provider.propTypes = {
    actions: PropTypes.objectOf(PropTypes.func).isRequired,
    children: PropTypes.node.isRequired,
    config: PropTypes.func,
    initial: PropTypes.object,
};
