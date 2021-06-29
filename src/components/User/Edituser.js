import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { editUser } from "../../modules/users";
import UserService from "../../services/UserService";

const UserForm = (user) => {
  const [FirstName, setFirstName] = useState(user.user.firstName);
  const [LastName, setLastName] = useState(user.user.lastName);


  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (event) => {
  // console.log(event)
    event.preventDefault();
    dispatch(editUser({ Picture:"####", FirstName: FirstName, LastName: LastName, Id:UserService.getUsername() }))
      .then(() => history.push("/"))

  };

  return (
    <div className="row">

      <div className="col-sm-6">

        { <form onSubmit={handleSubmit}>
          <h1>Edit User:</h1>

          <div className="form-group">
            <label htmlFor="FirstName">First name</label>
            <input type="text" className="form-control" placeholder="First name"
                   value={FirstName} onChange={(e) => setFirstName(e.target.value)}/>
          </div>
          <div className="form-group">
            <label htmlFor="setLastName">Last Name</label>
            <input type="text" className="form-control" placeholder="Last Name"
                   value={LastName} onChange={(e) => setLastName(e.target.value)}/>
          </div>
            <button type="submit" className="btn btn-primary" >Edit Profile</button>
        </form> }
        {/* { UserService.hasRole(["admin"]) && <h1>I'm an Admin</h1> } */}
      </div>
    </div>
  );
}

export default UserForm
