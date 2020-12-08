import React from 'react';
import { render } from 'react-dom';
import * as Context from '~';
import './styles.scss';

function toggle(state) {
    const { loading } = state;

    return { ...state, loading: !loading };
}

function config(state) {
    const { loading } = state;

    return loading ? state : toggle(state);
}

const actions = { toggle };

const initial = { loading: false };

function LoadingSpinner() {
    const { state } = Context.useContext();

    return (
        <div
            className="loading-spinner"
            data-loading={state.loading.toString()}
        />
    );
}

function Demo() {
    return (
        <Context.Provider actions={actions} config={config} initial={initial}>
            <Context.Consumer>
                {({ api }) => (
                    <>
                        <h1 className="title">React Context</h1>
                        <p className="description">
                            This is an example of React context using the
                            reducer pattern
                        </p>
                        <LoadingSpinner />
                        <p className="hint">
                            Press the button to toggle between loading state
                        </p>
                        <button
                            className="button"
                            onClick={api.toggle}
                            type="button"
                        >
                            Toggle Loading
                        </button>
                    </>
                )}
            </Context.Consumer>
        </Context.Provider>
    );
}

render(<Demo />, document.getElementById('root'));
