import { Route, Switch } from "react-router-dom";
import Menu from "../components/Menu";
import NoMatch from "../components/NoMatch";
import RolesRoute from "../components/RolesRoute";
import ListOfRequests from "../components/Request/ListOfRequests";
import RequestDetails from '../components/Request/RequestDetails';
import AddingRequest from '../components/Request/AddingRequest';
import CurrentUserRequest from '../components/Request/CurrentUserRequest';
import AddInigiblP from "../components/IneligiblePeriod/AddInigiblP";
import ListOfRequestAdmin from "../components/Request/ListOfRequestAdmin";
import UserForm from "../components/User/UserForm";
import UserList from "../components/User/UserList";
import   UserProfile from "../components/User/UserProfile";
import UserDetails from "../components/User/UserDetails";
import SettingList from '../components/Settings/SettingList';
import Calendar from "../components/Calendar/Calendar"

import '../components/App.css';



const Routes = () => (
  <>
    <Menu/>
    <Switch>

      <Route exact path="/">
      <ListOfRequests/>
      </Route>

      <Route path="/AddingRequest">
       <AddingRequest/>
      </Route>

      <Route path="/Calendar">
       <Calendar/>
      </Route>

      <Route path="/requests/:requestId">
      <RequestDetails/>
      </Route>

      <Route path="/UserList">
      <UserList/>
      </Route>
      <Route path="/users/:userId">
        <UserDetails/>
      </Route>

      <Route path="/CurrentUserRequest">
      <CurrentUserRequest/>
      </Route>
      <Route path="/UserProfile">
      <UserProfile/>
      </Route>


      <RolesRoute path="/AddInigiblP" roles={['admin']}>
      <Route >
      <AddInigiblP/>
      </Route>
      </RolesRoute>
      <RolesRoute path="/ListOfRequestAdmin" roles={['admin']}>
      <Route >
      <ListOfRequestAdmin/>
      </Route>
      </RolesRoute>

      <RolesRoute path="/UserForm" roles={['admin']}>
      <Route >
      <UserForm/>
      </Route>
      </RolesRoute>

      <RolesRoute path="/SettingList" roles={['admin']}>
      <Route >
      <SettingList/>
      </Route>
      </RolesRoute>


      <Route path="*">
        <NoMatch/>
      </Route>

    </Switch>
  </>
)

export default Routes
