import React from 'react';
import { render } from 'react-dom';
import { ConsumerDispatch, Provider, useContextState } from '../dist';
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
    const { loading } = useContextState();

    return (
        <div className="loading-spinner" data-loading={loading.toString()} />
    );
}

function Demo() {
    return (
        <Provider actions={actions} config={config} initial={initial}>
            <ConsumerDispatch>
                {(dispatch) => (
                    <>
                        <img
                            alt="React Context Reducer"
                            className="logo"
                            src="logo.svg"
                        />
                        <h1 className="title">React Context Reducer</h1>
                        <p className="description">
                            This is a loading example using React context with
                            the reducer pattern
                        </p>
                        <LoadingSpinner />
                        <p className="hint">
                            Press the button below to toggle between loading
                            states
                        </p>
                        <button
                            className="button"
                            onClick={dispatch.toggle}
                            type="button"
                        >
                            Toggle Loading
                        </button>
                    </>
                )}
            </ConsumerDispatch>
        </Provider>
    );
}

render(<Demo />, document.getElementById('root'));
