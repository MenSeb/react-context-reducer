export function createError(source) {
    return new Error(
        `Unknown Context, ${source} must be use within a Provider.`,
    );
}

export function createReducer(actions) {
    return function reducer(state, { action, ...args }) {
        return actions[action](state, { ...args });
    };
}

export function createAPI(actions, dispatch) {
    const api = {};

    for (const action of Object.keys(actions))
        api[action] = (args) => dispatch({ ...args, action });

    return api;
}
