import { useContext } from 'react';
import { ContextDispatch } from 'contexts';
import { createError } from 'utilities';

export default function useContextDispatch() {
    const dispatch = useContext(ContextDispatch);

    if (dispatch === undefined) throw createError('useContextDispatch');

    return dispatch;
}
