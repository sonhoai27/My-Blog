import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './modules/index';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import initStore from './config/store';
const store = initStore()

ReactDOM.render(
  <Provider store={store}>
        <>
            <App />
        </>
    </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
