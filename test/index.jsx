import React from 'react';
import { Provider } from 'components';

export const action = 'action';
export const callback = jest.fn((state, args) => ({ ...state, ...args }));
export const actions = { [action]: callback };
export const config = jest.fn((state) => ({ ...state, ...objConfig }));
export const objConfig = { foo: 'foo' };
export const objDispatch = { [action]: expect.any(Function) };
export const objState = { bar: 'bar', baz: 'baz' };

export function wrapper({ children, config, initial }) {
    return (
        <Provider actions={actions} initial={initial} config={config}>
            {children}
        </Provider>
    );
}

afterEach(() => callback.mockReset());
