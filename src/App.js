import "./App.css";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

function App() {
  return (
    <MuiThemeProvider>
      <div>
        <Navbar />
        <Search />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
