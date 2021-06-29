import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { allRequests, deleteRequest } from "../../modules/requests";
import Ineligibleperiod from "./Ineligibleperiod";
import Element from "../Element";
import UserService from "../../services/UserService";
import { format } from "date-fns";

const CurrentUserRequest = () => {
  const dispatch = useDispatch();
  const { requests } = useSelector((state) => state);
  let request = requests.filter((z) => z.ownerId === UserService.getUsername());

  useEffect(() => {
    dispatch(allRequests());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="row">
      <div style={{ float: "right" }}>
        <Ineligibleperiod />
      </div>
      <div className="col-sm-12">
        <h1>{UserService.getGivenName()}'s Request</h1>
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
            {request.map((req) => (
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
                  <Element roles={["admin"]}>
                    <button
                      className="btn btn-xs btn-danger"
                      onClick={() => dispatch(deleteRequest(req))}
                    >
                      Delete Request
                    </button>
                  </Element>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CurrentUserRequest;
