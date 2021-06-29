import PropTypes from 'prop-types'
import { Route } from "react-router-dom";
import UserService from "../services/UserService";


const Element = ({ roles, children, ...rest }) => (
  <Route {...rest}>
    {UserService.hasRole(roles) ? children : null}
  </Route>
)
Element.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Element
