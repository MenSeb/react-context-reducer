import React from 'react';
import PropTypes from 'prop-types';
import { ContextDispatch } from 'contexts';
import { createError } from 'utilities';

export default function ConsumerDispatch({ children }) {
    return (
        <ContextDispatch.Consumer>
            {(dispatch) => {
                if (dispatch === undefined)
                    throw createError('ConsumerDispatch');

                return children(dispatch);
            }}
        </ContextDispatch.Consumer>
    );
}

ConsumerDispatch.propTypes = {
    children: PropTypes.func.isRequired,
};
