import { BrowserRouter } from "react-router-dom";
import RoutesList from "./RoutesList";
import { BreakpointProvider } from 'react-socks';

function App() {

  return (
    <>
      <BrowserRouter>
        <BreakpointProvider>
          <RoutesList />
        </BreakpointProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
