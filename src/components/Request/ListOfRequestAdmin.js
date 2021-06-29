import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { allRequests } from "../../modules/requests";
import RolesRoute from "../RolesRoute";
import { format } from "date-fns";
import UserService from "../../services/UserService";

const ListOfRequestAdmin = () => {
  const dispatch = useDispatch();
  const { requests } = useSelector((state) => state);

  useEffect(() => {
    dispatch(allRequests());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const ChangeStatue = async (id, state) => {
    fetch("https://localhost:5001/stat/", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        id: id,
        State: state,
        ModeratorId: UserService.getUsername(),
      }),
    });
    //  .then(response =>
    //   {console.log(response.status);  return response.json();}).then(data => console.log(data));
    //   console.log(dates)
  };

  return (
    <div className="row">
      <div className="col-sm-12">
        <h1>List of Request</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Requested By</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req) => (
              <tr key={req.id}>
                <td>
                  <Link to={`/requests/${req.id}`}>{req.title}</Link>
                </td>
                <td>{format(new Date(req.periodStart), "dd/MM/yyyy")}</td>
                <td>{format(new Date(req.periodEnd), "dd/MM/yyyy")}</td>
                <td>{req.ownerName}</td>
                <td
                  style={{
                    color:
                      req.state === "Approved"
                        ? "green"
                        : req.state === "Denied"
                        ? "red"
                        : "black",
                  }}
                >
                  {req.state}
                </td>
                <td>
                  <RolesRoute roles={["admin"]}>
                    <button
                      className="btn btn-xs btn-success"
                      // onClick={() => fetchDates(req.id, "Accept")}
                      onClick={() => ChangeStatue(req.id, "Approved")}
                    >
                      Accept
                    </button>
                    <span>| |</span>
                    <button
                      className="btn btn-xs btn-danger"
                      onClick={() => ChangeStatue(req.id, "Denied")}
                    >
                      Reject
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
};

export default ListOfRequestAdmin;
