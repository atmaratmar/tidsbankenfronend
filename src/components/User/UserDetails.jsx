import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { allUsers } from "../../modules/users";
import Edituser from './Edituser'

const UserDetails = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state);
  const [user, setUser] = useState();

  useEffect(() => {
    dispatch(allUsers());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setUser(users.find((user) => user.id === userId));
  }, [userId, users]);
  return user ? (
    <div className="row">
      <div className="col-sm-12">
        <hr />
        <h3>Empolyee :</h3>
        <p className="lead">{user.firstName}</p>
        <h3>Title :</h3>
        <p className="lead">{user.lastName}</p>
        <hr />
        <p>
          <Link to="/">&laquo; back to list</Link>
        </p>
      </div>
      <Edituser user = {user} />
    </div>
  ) : null;
};

export default UserDetails;
