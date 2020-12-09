import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Provider } from 'components';
import { useContextState } from 'hooks';
import { createError } from 'utilities';

const action = 'action';
const actions = { [action]: jest.fn() };
const state = { bar: 'bar', foo: 'foo' };

function wrapper({ children }) {
    return (
        <Provider actions={actions} initial={state}>
            {children}
        </Provider>
    );
}

describe('useContextState', () => {
    it('throws an error when used outside the provider', () => {
        const { result } = renderHook(() => useContextState());

        expect(result.error).toEqual(createError('useContextState'));
    });

    it('returns the state when used inside the provider', () => {
        const { result } = renderHook(() => useContextState(), { wrapper });

        expect(result.current).toMatchObject(state);
    });
});
