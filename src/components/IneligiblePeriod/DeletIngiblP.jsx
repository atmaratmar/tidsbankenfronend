import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  allIneligiblePeriod,
  deleteIneligibleperiod,
} from "../../modules/ineligibleperiod";
import RolesRoute from "../RolesRoute";
import { format } from "date-fns";

const IneligiblePeriod = () => {
  const dispatch = useDispatch();
  const { ineligibleperiod } = useSelector((state) => state);

  useEffect(() => {
    dispatch(allIneligiblePeriod());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="row">
      <div className="col-sm-12">
        <h1> ineligibleperiod</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Stare Date</th>
              <th>End Date </th>
            </tr>
          </thead>
          <tbody>
            {ineligibleperiod.map((ineligibleperiod) => (
              <tr key={ineligibleperiod.id}>
                <td>{ineligibleperiod.id}</td>
                <td>
                  {format(new Date(ineligibleperiod.start), "dd/MM/yyyy")}
                </td>
                <td>{format(new Date(ineligibleperiod.end), "dd/MM/yyyy")}</td>
                <td>
                  <RolesRoute roles={["admin"]}>
                    <button
                      className="btn btn-xs btn-danger"
                      onClick={() =>
                        dispatch(deleteIneligibleperiod(ineligibleperiod))
                      }
                    >
                      Delete Inegible period
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

export default IneligiblePeriod;
