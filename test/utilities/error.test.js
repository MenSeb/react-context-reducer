import { createError } from 'utilities';

const source = 'source';
const error = createError(source);

describe('createError', () => {
    it('returns an error', () => {
        expect(error).toEqual(expect.any(Error));
    });

    it('includes the source in the error message', () => {
        expect(error.message).toMatch(source);
    });
});
