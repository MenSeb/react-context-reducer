export default function createReducer(actions) {
    return function reducer(state, { action, ...args }) {
        return actions[action](state, { ...args });
    };
}
