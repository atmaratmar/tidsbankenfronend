import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { allUsers, deleteUser } from "../../modules/users";
import RolesRoute from "../RolesRoute";

const UserList = () => {

  const dispatch = useDispatch();
  const { users } = useSelector((state) => state);

  useEffect(() => {
    dispatch(allUsers())
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="row">
      <div className="col-sm-12">
        <h1>TidsBanken User List</h1>
        <table className="table table-striped">
          <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Last Name</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                <Link to={`/users/${user.id}`}>{user.firstName}</Link>
              </td>
              <td>{user.lastName}</td>
              <td>
                <RolesRoute  roles={['admin']}>
                <button  className="btn btn-xs btn-danger" onClick={() => dispatch(deleteUser(user))}>
                  Delete User
                </button>
                </RolesRoute>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserList
