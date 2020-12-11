import { renderHook } from '@testing-library/react-hooks';
import { useContextDispatch } from 'hooks';
import { createError } from 'utilities';
import { objDispatch, wrapper } from '../';

describe('useContextDispatch', () => {
    it('throws an error when used outside the provider', () => {
        const { result } = renderHook(() => useContextDispatch());

        expect(result.error).toEqual(createError('useContextDispatch'));
    });

    it('returns the dispatcher when used inside the provider', () => {
        const { result } = renderHook(() => useContextDispatch(), { wrapper });

        expect(result.current).toMatchObject(objDispatch);
    });
});
