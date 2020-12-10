import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'components';
import { ConsumerState } from 'components';
import { createError } from 'utilities';

const action = 'action';
const actions = { [action]: jest.fn() };
const children = jest.fn();
const state = { bar: 'bar', foo: 'foo' };

function wrapper({ children }) {
    return (
        <Provider actions={actions} initial={state}>
            {children}
        </Provider>
    );
}

describe('ConsumerState', () => {
    it('throws an error when used outside the provider', () => {
        expect(
            jest.fn(() => render(<ConsumerState>{children}</ConsumerState>)),
        ).toThrowError(expect.objectContaining(createError('ConsumerState')));
    });

    it('calls children with dispatch when used inside the provider', () => {
        render(<ConsumerState>{children}</ConsumerState>, { wrapper });

        expect(children).toHaveBeenCalledWith(state);
    });
});
