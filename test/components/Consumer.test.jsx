import React from 'react';
import { render } from '@testing-library/react';
import { Consumer } from 'components';
import { callback as children, objDispatch, objState, wrapper } from '../';

describe('Consumer', () => {
    it('throws an error when used outside the provider', () => {
        expect(
            jest.fn(() => render(<Consumer>{children}</Consumer>)),
        ).toThrow();
    });

    it('calls children with dispatch and state when used inside the provider', () => {
        render(<Consumer>{children}</Consumer>, {
            wrapper: (props) => wrapper({ ...props, initial: objState }),
        });

        expect(children).toHaveBeenCalledWith({
            dispatch: objDispatch,
            state: objState,
        });
    });
});
