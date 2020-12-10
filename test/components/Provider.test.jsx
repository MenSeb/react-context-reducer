import React from 'react';
import { act, renderHook } from '@testing-library/react-hooks';
import { Provider } from 'components';
import { useContextGlobal } from 'hooks';

const action = 'action';
const actions = {
    [action]: (state, args) => ({ ...state, ...args }),
};
const additional = { baz: 'baz' };
const initial = { bar: 'bar' };
const extra = { foo: 'foo' };
const full = { ...initial, ...additional };
const config = (initial) => ({ ...initial, ...additional });

function wrapper({ children, config, initial }) {
    return (
        <Provider actions={actions} initial={initial} config={config}>
            {children}
        </Provider>
    );
}

describe('Provider', () => {
    it('provides a state object', () => {
        const { result } = renderHook(() => useContextGlobal(), {
            wrapper,
            initialProps: { config, initial },
        });

        expect(result.current.state).toEqual(full);
    });

    it('provides a dispatcher object', () => {
        const { result } = renderHook(() => useContextGlobal(), { wrapper });

        expect(result.current.dispatch).toEqual({
            [action]: expect.any(Function),
        });
    });

    it('provides an empty object without initial state', () => {
        const { result } = renderHook(() => useContextGlobal(), { wrapper });

        expect(result.current.state).toEqual({});
    });

    it('provides the initial state when provided', () => {
        const { result } = renderHook(() => useContextGlobal(), {
            wrapper,
            initialProps: { initial },
        });

        expect(result.current.state).toEqual(initial);
    });

    it('provides a way to configure the initial state', () => {
        const { result } = renderHook(() => useContextGlobal(), {
            wrapper,
            initialProps: { config },
        });

        expect(result.current.state).toEqual(additional);
    });

    it('updates the state when using the dispatcher', () => {
        const { result } = renderHook(() => useContextGlobal(), { wrapper });

        expect(result.current.state).toEqual({});

        act(() => result.current.dispatch[action](extra));

        expect(result.current.state).toEqual(extra);
    });
});
