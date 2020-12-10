import React from 'react';
import PropTypes from 'prop-types';
import { ConsumerDispatch, ConsumerState } from './';

export default function Consumer({ children }) {
    return (
        <ConsumerDispatch>
            {(dispatch) => (
                <ConsumerState>
                    {(state) => children({ dispatch, state })}
                </ConsumerState>
            )}
        </ConsumerDispatch>
    );
}

Consumer.propTypes = {
    children: PropTypes.func.isRequired,
};
