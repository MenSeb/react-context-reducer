export default function createDispatcher({ actions, dispatch }) {
    const dispatcher = {};

    for (const action of Object.keys(actions))
        dispatcher[action] = (args) => dispatch({ ...args, action });

    return dispatcher;
}
