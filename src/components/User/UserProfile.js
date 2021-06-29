import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { allUsers } from "../../modules/users";
import Edituser from './Edituser'
import UserService from '../../services/UserService';
const UserProfile = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state);
  const [user, setUser] = useState();

  useEffect(() => {
    dispatch(allUsers());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setUser(users.find((user) => user.id === UserService.getUsername()));
  }, [userId, users]);


  return user ? (
    <div className="row">
      <div className="col-sm-12">
        <h1>Email :  {user.id}</h1>
        <hr />
        <h3> Name :&nbsp;&nbsp; {user.firstName}</h3>
        <h3>Title : &nbsp;&nbsp; {user.lastName}</h3>
        <hr />
        <p>

        </p>
      </div>
      <Edituser user = {user}/>
      <span></span>
      <Link to="/">&laquo; back to list</Link>
    </div>

  ) : null;

};

export default UserProfile;
