import { useContext } from 'react';
import { ContextState } from 'contexts';
import { createError } from 'utilities';

export default function useContextState() {
    const state = useContext(ContextState);

    if (state === undefined) throw createError('useContextState');

    return state;
}
