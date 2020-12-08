import React from 'react';
import PropTypes from 'prop-types';
import Context from './context';
import { createError } from './utilities';

export default function Consumer({ children }) {
    return (
        <Context.Consumer>
            {(context) => {
                if (context === undefined) throw createError('Consumer');

                return children(context);
            }}
        </Context.Consumer>
    );
}

Consumer.propTypes = {
    children: PropTypes.func.isRequired,
};
