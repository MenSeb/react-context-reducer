import { createReducer } from 'utilities';

const action = 'action';
const callback = jest.fn();
const actions = { [action]: callback };
const args = { bar: 'bar', foo: 'foo' };
const state = { baz: 'baz' };
const reducer = createReducer(actions);

describe('createDispatcher', () => {
    it('returns a reducer function', () => {
        expect(reducer).toEqual(expect.any(Function));
    });

    describe('When reducer is used', () => {
        afterEach(() => callback.mockReset());
        beforeEach(() => reducer(state, { action, ...args }));

        it('calls the action only once', () => {
            expect(callback).toHaveBeenCalledTimes(1);
        });

        it('calls the action with the state', () => {
            expect(callback).toHaveBeenCalledWith(state, expect.any(Object));
        });

        it('calls the action with the arguments provided', () => {
            expect(callback).toHaveBeenCalledWith(expect.anything(), args);
        });
    });
});
