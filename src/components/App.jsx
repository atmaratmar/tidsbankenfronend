import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
//import RequestBox from "./Request/RequestBox";
import StoreService from "../services/StoreService";
import RenderOnAnonymous from "./RenderOnAnonymous";
import RenderOnAuthenticated from "./RenderOnAuthenticated";
import Welcome from "./Welcome";
//import AddInigiblP from "../../src/components/IneligiblePeriod/AddInigiblP";
//import UserBox from "./User/UserBox";
import Routes from "../services/Routes";
import './App.css';
import Sidebar from '../Dashborad/Sidebar';

const store = StoreService.setup();

const App = () => (

  <Provider store={store}>

    <BrowserRouter>

      <div className="container">
        <RenderOnAnonymous>
          <Welcome/>
        </RenderOnAnonymous>
         <RenderOnAuthenticated>
         <Sidebar />
         <Routes/>
        </RenderOnAuthenticated>
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
