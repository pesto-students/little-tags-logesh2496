import './App.scss';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { createStore } from 'redux';
import Layout from './container/layout';

const store = createStore(
  rootReducer, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Layout />
      </Provider>
    </div>
  );
}

export default App;
