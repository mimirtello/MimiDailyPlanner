import './App.css';
import { Switch, Route } from 'react-router-dom';
import Provider from './context/Provider';
import DailyPlanner from './pages/DailyPlanner'

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/" component={ DailyPlanner } />
      </Switch>
   </Provider>
  );
}

export default App;
