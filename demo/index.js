import React from 'react';
import { render } from 'react-dom';
import * as Context from '~';

function Demo() {
    return (
        <Context.Provider>
            <div id="demo" />;
        </Context.Provider>
    );
}

render(<Demo />, document.getElementById('root'));
