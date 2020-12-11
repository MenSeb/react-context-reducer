import { createError } from 'utilities';

describe('createError', () => {
    it('returns an error', () => {
        expect(createError()).toEqual(expect.any(Error));
    });

    it('includes the source in the error message', () => {
        expect(createError('test').message).toMatch('test');
    });
});
