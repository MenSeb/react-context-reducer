import { renderHook } from '@testing-library/react-hooks';
import { useContextState } from 'hooks';
import { createError } from 'utilities';
import { objState, wrapper } from '../';

describe('useContextState', () => {
    it('throws an error when used outside the provider', () => {
        const { result } = renderHook(() => useContextState());

        expect(result.error).toEqual(createError('useContextState'));
    });

    it('returns the state when used inside the provider', () => {
        const { result } = renderHook(() => useContextState(), {
            initialProps: { initial: objState },
            wrapper,
        });

        expect(result.current).toMatchObject(objState);
    });
});
