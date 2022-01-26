import ReactDOM from 'react-dom';
import App from './App';
import ErrorBoundry from './components/errorBoundry/errorBoundry';

import './index.css';

ReactDOM.render(
  <ErrorBoundry>
    <App />
  </ErrorBoundry>,
  document.getElementById('root')
);
