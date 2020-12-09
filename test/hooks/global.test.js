import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Provider } from 'components';
import { useContextGlobal } from 'hooks';

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

describe('useContextGlobal', () => {
    it('throws an error when used outside the provider', () => {
        expect(jest.fn(renderHook(() => useContextGlobal()))).toThrow();
    });

    it('returns dispatch and state when used inside the provider', () => {
        const { result } = renderHook(() => useContextGlobal(), { wrapper });

        expect(result.current).toMatchObject({
            dispatch: { [action]: expect.any(Function) },
            state,
        });
    });
});
