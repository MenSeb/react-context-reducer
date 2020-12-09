import { useContextDispatch, useContextState } from './';

export default function useContextGlobal() {
    return {
        dispatch: useContextDispatch(),
        state: useContextState(),
    };
}
