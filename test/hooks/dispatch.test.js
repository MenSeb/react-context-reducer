import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Provider } from 'components';
import { useContextDispatch } from 'hooks';
import { createError } from 'utilities';

const action = 'action';
const actions = { [action]: jest.fn() };

function wrapper({ children }) {
    return <Provider actions={actions}>{children}</Provider>;
}

describe('useContextDispatch', () => {
    it('throws an error when used outside the provider', () => {
        const { result } = renderHook(() => useContextDispatch());

        expect(result.error).toEqual(createError('useContextDispatch'));
    });

    it('returns the dispatcher when used inside the provider', () => {
        const { result } = renderHook(() => useContextDispatch(), { wrapper });

        expect(result.current).toMatchObject({
            [action]: expect.any(Function),
        });
    });
});
