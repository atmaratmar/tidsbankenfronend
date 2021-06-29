import UserService from "../services/UserService";
import './App.css';

const Welcome = () => (
  <div className="jumbotron">
    <h1>Login!</h1>
    <p className="lead">Please authenticate yourself!</p>
    <p>
      <button className="btn btn-lg btn-warning" onClick={() => UserService.doLogin()}>Login</button>
    </p>
  </div>
)

export default Welcome
