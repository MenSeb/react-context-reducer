import React from 'react';
import { render } from '@testing-library/react';
import { ConsumerState } from 'components';
import { createError } from 'utilities';
import { callback as children, objState, wrapper } from '../';

describe('ConsumerState', () => {
    it('throws an error when used outside the provider', () => {
        expect(
            jest.fn(() => render(<ConsumerState>{children}</ConsumerState>)),
        ).toThrowError(expect.objectContaining(createError('ConsumerState')));
    });

    it('calls children with state when used inside the provider', () => {
        render(<ConsumerState>{children}</ConsumerState>, {
            props: { initial: objState },
            wrapper,
        });

        expect(children).toHaveBeenCalledWith({});
    });
});
