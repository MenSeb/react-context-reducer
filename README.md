<div align="center">
    <img
        alt="React Context Reducer"
        height="250"
        src="https://github.com/MenSeb/react-context-reducer/blob/master/demo/logo.svg"
        width="250"
    />
    <h1>
        React Context Reducer
    </h1>
    <p>
        Use React context with the reducer pattern.
    </p>
</div>

<hr>

![npm](https://img.shields.io/npm/v/@menseb/react-context-reducer)
![NPM](https://img.shields.io/npm/l/@menseb/react-context-reducer)
[![Build Status](https://travis-ci.com/MenSeb/react-context-reducer.svg?token=8TzPeku6xVPzgovguE6A&branch=master)](https://travis-ci.com/MenSeb/react-context-reducer)
[![CodeFactor](https://www.codefactor.io/repository/github/menseb/react-context-reducer/badge?s=d3b4606115f45a496c1e67e48d9651fba4afdd04)](https://www.codefactor.io/repository/github/menseb/react-context-reducer)
[![Coverage Status](https://coveralls.io/repos/github/MenSeb/react-context-reducer/badge.svg?branch=master)](https://coveralls.io/github/MenSeb/react-context-reducer?branch=master)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)

## Table of contents

* [Installation](#Installation)
* [How it works](#How-it-works)
* [How to use](#How-to-use)
    * [Provider](#Provider)
    * [Consumers](#Consumers)
        * [Consumer](#Consumer)
        * [ConsumerState](#ConsumerState)
        * [ConsumerDispatch](#ConsumerDispatch)
    * [Hooks](#Hooks)
        * [useContextReducer](#useContextReducer)
        * [useContextState](#useContextState)
        * [useContextDispatch](#useContextDispatch)
* [PropTypes](#PropTypes)
    * [Provider](#Provider-props)
    * [Consumers](#Consumers-props)
    * [Hooks](#Hooks-props)
* [Scripts](#Scripts)
* [Code of conduct](#Code-of-conduct)
* [Liscence](#Liscence)

### Installation

```bash
npm i @menseb/react-context-reducer
```

### How it works

The main goal of this package was to avoid having to define your own reducer function using a javascript [switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch). Instead, it creates the reducer function using your own actions.

Each of your action should be a function which receives the current state and additional arguments and returns an updated state.

Example :

```javascript
export function myAction(state, arguments) {
    const { bar } = state;
    const { foo } = arguments;

    return { ...state, bar: foo ? foo : bar };
}
```

You may also provide an initial state and a configuration function to give you more flexibility on your initial setup.

Example :

```javascript
export const initial = {
    bar: false
};

export function config(initial) {
    const { bar } = initial;

    if (bar) return initial;

    return { ...initial, bar: !bar };
}
```

This package will use the actions, the initial state and the configuration with the reducer hook from React, [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer), to create the state and dispatch. Then, it will enhance the ```dispatch``` function by binding it to your actions names.

Example :

```javascript
// Instead of using dispatch this way
dispatch({ type: 'myAction', foo: true });

// You would use it this way
dispatch.myAction({ foo: true });
```

Finally, the ```Provider``` in this package will expose ```dispatch``` and ```state```, which you can consume using the different ways below.

### How to use

#### Provider

```jsx
import { Provider } from '@menseb/react-context-reducer';
import config from 'path/to/config';
import initial from 'path/to/initial';
import * as actions from 'path/to/actions';

export default function MyProvider({ children }) {
    return (
        <Provider actions={actions} config={config} initial={initial}>
            {children}
        </Provider>
    );
}
```

#### Consumers

- ##### Consumer

```jsx
import { Component } from 'react';
import { Consumer } from '@menseb/react-context-reducer';

export default class MyConsumer extends Component {
    render() {
        return (
            <Consumer>
                {({ dispatch, state }) => {
                    // Use dispatch and state
                }}
            </Consumer>
        );
    }
}
```

- ##### ConsumerState

```jsx
import { Component } from 'react';
import { ConsumerState } from '@menseb/react-context-reducer';

export default class MyConsumerState extends Component {
    render() {
        return (
            <ConsumerState>
                {(state) => {
                    // Use state
                }}
            </ConsumerState>
        );
    }
}
```

- ##### ConsumerDispatch

```jsx
import { Component } from 'react';
import { ConsumerDispatch } from '@menseb/react-context-reducer';

export default class MyConsumerDispatch extends Component {
    render() {
        return (
            <ConsumerDispatch>
                {(dispatch) => {
                    // Use dispatch
                }}
            </ConsumerDispatch>
        );
    }
}
```

#### Hooks

- ##### useContextReducer

```jsx
import { useContextReducer } from '@menseb/react-context-reducer';

export default function MyHook() {
    const { dispatch, state } = useContextReducer();

    // Use dispatch or state

    return (...);
}
```

- ##### useContextState

```jsx
import { useContextState } from '@menseb/react-context-reducer';

export default function MyHookState() {
    const state = useContextState();

    // Use state

    return (...);
}
```

- ##### useContextDispatch

```jsx
import { useContextDispatch } from '@menseb/react-context-reducer';

export default function MyHookDispatch() {
    const dispatch = useContextDispatch();

    // Use dispatch

    return (...);
}
```

#### PropTypes

- ##### Provider props

| property | type | required | default |
|----------|------|----------|---------|
| actions | Object of functions | true | none |
| children | React node | true | none |
| config | Function | false | undefined |
| initial  | Object | false | {} |

- ##### Consumers props

| property | type | required | default |
|----------|------|----------|---------|
| children | Function | true | none |

- ##### Hooks props

None, but you must follow the [Rules of Hooks](https://reactjs.org/docs/hooks-rules.html) from React.

#### Scripts

See [scripts](/package.json/) from the ```package.json``` file.

#### Code of conduct

See [code of conduct](/CODE_OF_CONDUCT.md/) from the ```CODE_OF_CONDUCT.md``` file.

#### License

See [license](/LICENSE.md/) from the ```LICENSE.md``` file.
