import './App.scss';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import middleware from "./middleware";
import Routes from './routes';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer, composeEnhancers(middleware)
);

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <Routes />
      </Provider>
    </div>
  );
}

export default App;
