import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'components';
import { Consumer } from 'components';

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

describe('Consumer', () => {
    it('throws an error when used outside the provider', () => {
        expect(
            jest.fn(() => render(<Consumer>{children}</Consumer>)),
        ).toThrow();
    });

    it('calls children with dispatch and state when used inside the provider', () => {
        render(<Consumer>{children}</Consumer>, { wrapper });

        expect(children).toHaveBeenCalledWith({
            dispatch: { [action]: expect.any(Function) },
            state,
        });
    });
});
