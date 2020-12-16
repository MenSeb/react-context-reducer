import { useContextDispatch, useContextState } from './';

export default function useContextReducer() {
    return {
        dispatch: useContextDispatch(),
        state: useContextState(),
    };
}
