import { act, renderHook } from '@testing-library/react-hooks';
import { useContextGlobal } from 'hooks';
import { action, config, objConfig, objDispatch, objState, wrapper } from '../';

describe('Provider', () => {
    it('provides a way to update the state using the dispatcher', () => {
        const { result } = renderHook(() => useContextGlobal(), { wrapper });

        expect(result.current.state).toEqual({});

        act(() => result.current.dispatch[action](objState));

        expect(result.current.state).toEqual(objState);
    });

    it('provides a state object', () => {
        const { result } = renderHook(() => useContextGlobal(), {
            initialProps: { initial: objState },
            wrapper,
        });

        expect(result.current.state).toEqual(objState);
    });

    it('provides a dispatcher object', () => {
        const { result } = renderHook(() => useContextGlobal(), { wrapper });

        expect(result.current.dispatch).toEqual(objDispatch);
    });

    it('provides an empty object without initial state', () => {
        const { result } = renderHook(() => useContextGlobal(), { wrapper });

        expect(result.current.state).toEqual({});
    });

    it('provides the initial state when provided', () => {
        const { result } = renderHook(() => useContextGlobal(), {
            initialProps: { initial: objState },
            wrapper,
        });

        expect(result.current.state).toEqual(objState);
    });

    it('provides a way to configure the initial state', () => {
        const { result } = renderHook(() => useContextGlobal(), {
            initialProps: { config, initial: objState },
            wrapper,
        });

        expect(config).toHaveBeenCalledWith(objState);
        expect(result.current.state).toEqual({ ...objState, ...objConfig });
    });
});
