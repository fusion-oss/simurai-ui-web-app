import "./App.scss";
import { LayoutContainer } from "./pages/Layoutcontainer";
import { AppRoute } from "./routes/AppRoute";
import SideBarNav from "./components/SideBar/SideBar";

function App() {
  return (
    <div className="App">
      <SideBarNav />
      <LayoutContainer>
        <AppRoute />
      </LayoutContainer>
    </div>
  );
}

export default App;
