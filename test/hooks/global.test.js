import { renderHook } from '@testing-library/react-hooks';
import { useContextGlobal } from 'hooks';
import { objDispatch, objState, wrapper } from '../';

describe('useContextGlobal', () => {
    it('throws an error when used outside the provider', () => {
        expect(jest.fn(renderHook(() => useContextGlobal()))).toThrow();
    });

    it('returns dispatch and state when used inside the provider', () => {
        const { result } = renderHook(() => useContextGlobal(), {
            initialProps: { initial: objState },
            wrapper,
        });

        expect(result.current).toMatchObject({
            dispatch: objDispatch,
            state: objState,
        });
    });
});
