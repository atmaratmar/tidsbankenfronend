import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addComment } from "../../modules/comment";
import UserService from "../../services/UserService";

const AddComments = (dataParentToChild) => {
  const [Message, setMessage] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = () => {
    if (!Message) {
      return;
    }
    dispatch(
      addComment({
        Message: Message,
        CreatedOn: new Date(),
        UpdatedOn: new Date(),
        UserId: UserService.getUsername(),
        RequestId: dataParentToChild.comentsId,
      })
    )
  };
  return (
    <div className="row">
      <div className="col-sm-6">
        <form onSubmit={handleSubmit}>
          <h1>Add comments:</h1>
          <div className="form-group">
            <label htmlFor="Message">Message</label>
            <input
              type="text"
              className="form-control"
              placeholder="Message"
              value={Message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Add Comment
          </button>
        </form>
        {/* { UserService.hasRole(["admin"]) && <h1>I'm an Admin</h1> } */}
      </div>
    </div>
  );
};

export default AddComments;
