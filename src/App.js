import './App.css';
import { Switch, Route } from 'react-router-dom';
import Provider from './context/Provider';
import Planner from './pages/Planner';

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/" component={ Planner } />
      </Switch>
   </Provider>
  );
}

export default App;
