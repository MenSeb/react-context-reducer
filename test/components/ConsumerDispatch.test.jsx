import React from 'react';
import { render } from '@testing-library/react';
import { ConsumerDispatch } from 'components';
import { createError } from 'utilities';
import { callback as children, objDispatch, wrapper } from '../';

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

        expect(children).toHaveBeenCalledWith(objDispatch);
    });
});
