import './App.scss';
import { LayoutContainer } from './pages/Layoutcontainer';
import { AppRoute } from './routes/AppRoute';

function App() {
  return (
    <div className="App">
      <LayoutContainer>
        <AppRoute />
      </LayoutContainer>
    </div>
  );
}

export default App;
