import { createDispatcher } from 'utilities';

const action = 'action';
const actions = { [action]: jest.fn() };
const args = { bar: 'bar', foo: 'foo' };
const dispatch = jest.fn();
const dispatcher = createDispatcher({ actions, dispatch });

describe('createDispatcher', () => {
    it('returns an object of actions to dispatch', () => {
        expect(dispatcher).toMatchObject({ [action]: expect.any(Function) });
    });

    describe('When dispatcher is used', () => {
        afterEach(() => dispatch.mockReset());
        beforeEach(() => dispatcher[action](args));

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
                expect.objectContaining(args),
            );
        });
    });
});
