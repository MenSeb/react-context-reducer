import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'components';
import { ConsumerDispatch } from 'components';
import { createError } from 'utilities';

const action = 'action';
const actions = { [action]: jest.fn() };
const children = jest.fn();

function wrapper({ children }) {
    return <Provider actions={actions}>{children}</Provider>;
}

describe('ConsumerDispatch', () => {
    it('throws an error when used outside the provider', () => {
        expect(
            jest.fn(() =>
                render(<ConsumerDispatch>{children}</ConsumerDispatch>),
            ),
        ).toThrowError(
            expect.objectContaining(createError('ConsumerDispatch')),
        );
    });

    it('calls children with dispatch when used inside the provider', () => {
        render(<ConsumerDispatch>{children}</ConsumerDispatch>, { wrapper });

        expect(children).toHaveBeenCalledWith({
            [action]: expect.any(Function),
        });
    });
});
