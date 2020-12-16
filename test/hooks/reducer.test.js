import { renderHook } from '@testing-library/react-hooks';
import { useContextReducer } from 'hooks';
import { objDispatch, objState, wrapper } from '../';

describe('useContextReducer', () => {
    it('throws an error when used outside the provider', () => {
        expect(jest.fn(renderHook(() => useContextReducer()))).toThrow();
    });

    it('returns dispatch and state when used inside the provider', () => {
        const { result } = renderHook(() => useContextReducer(), {
            initialProps: { initial: objState },
            wrapper,
        });

        expect(result.current).toMatchObject({
            dispatch: objDispatch,
            state: objState,
        });
    });
});
