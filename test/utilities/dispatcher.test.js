import { createDispatcher } from 'utilities';
import {
    action,
    actions,
    callback as dispatch,
    objDispatch,
    objState,
} from '../';

describe('createDispatcher', () => {
    it('returns an object of actions to dispatch', () => {
        expect(createDispatcher({ actions, dispatch })).toMatchObject(
            objDispatch,
        );
    });

    describe('When dispatcher is used', () => {
        beforeEach(() =>
            createDispatcher({ actions, dispatch })[action](objState),
        );

        it('calls dispatch only once for the action concerned', () => {
            expect(dispatch).toHaveBeenCalledTimes(1);
        });

        it('calls dispatch with the action provided', () => {
            expect(dispatch).toHaveBeenCalledWith(
                expect.objectContaining({ action }),
            );
        });

        it('calls dispatch with the arguments provided', () => {
            expect(dispatch).toHaveBeenCalledWith(
                expect.objectContaining(objState),
            );
        });
    });
});
