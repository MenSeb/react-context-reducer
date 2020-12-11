import { createReducer } from 'utilities';
import { action, actions, callback, objConfig, objState } from '../';

describe('createDispatcher', () => {
    it('returns a reducer function', () => {
        expect(createReducer(actions)).toEqual(expect.any(Function));
    });

    describe('When reducer is used', () => {
        beforeEach(() =>
            createReducer(actions)(objState, { action, ...objConfig }),
        );

        it('calls the action only once', () => {
            expect(callback).toHaveBeenCalledTimes(1);
        });

        it('calls the action with the state', () => {
            expect(callback).toHaveBeenCalledWith(objState, expect.any(Object));
        });

        it('calls the action with the arguments provided', () => {
            expect(callback).toHaveBeenCalledWith(expect.anything(), objConfig);
        });
    });
});
