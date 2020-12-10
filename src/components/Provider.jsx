import React, { useMemo, useReducer } from 'react';
import PropTypes from 'prop-types';
import { ContextDispatch, ContextState } from 'contexts';
import { createDispatcher, createReducer } from 'utilities';

export default function Provider({ actions, children, config, initial }) {
    const [state, dispatch] = useReducer(
        createReducer(actions),
        initial,
        config,
    );

    const dispatcher = useMemo(() => {
        return createDispatcher({ actions, dispatch });
    }, [actions, dispatch]);

    return (
        <ContextDispatch.Provider value={dispatcher}>
            <ContextState.Provider value={state}>
                {children}
            </ContextState.Provider>
        </ContextDispatch.Provider>
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
