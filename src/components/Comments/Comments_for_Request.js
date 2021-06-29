import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allComments } from "../../modules/comment";
import UserService from "../../services/UserService";
import AddComments from "./AddComments";

const CommentsforRequest = ({ dataParentToChild }) => {
  const dispatch = useDispatch();
  const { comment } = useSelector((state) => state);
  useEffect(() => {
    dispatch(allComments(dataParentToChild.id));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="row">
      <div className="col-sm-12">
        {/* <h6>{UserService.getUsername()}</h6> */}
        <h1>comments</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {comment.map((user) => (
              <tr key={user.id}>
                <td>{user.userName}</td>
                <td>
                  <p>{user.myMessage}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <AddComments comentsId={dataParentToChild.id} />
    </div>
  );
};

export default CommentsforRequest;
