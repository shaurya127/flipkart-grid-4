import "./App.css";
import "antd/dist/antd.css";
import Routes from "./Routes";
import { Helmet } from "react-helmet";
import "./styles/global.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { AuthProvider } from "./context/AuthContext";
function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Helmet>
          <title>Import Win</title>
          <meta name="description" content="Warranty system using NFT" />
        </Helmet>
        <Provider store={store}>
          <Routes />
        </Provider>
      </div>
    </AuthProvider>
  );
}

export default App;
