import React from 'react';
import PropTypes from 'prop-types';
import { ContextState } from 'contexts';
import { createError } from 'utilities';

export default function ConsumerState({ children }) {
    return (
        <ContextState.Consumer>
            {(state) => {
                if (state === undefined) throw createError('ConsumerState');

                return children(state);
            }}
        </ContextState.Consumer>
    );
}

ConsumerState.propTypes = {
    children: PropTypes.func.isRequired,
};
