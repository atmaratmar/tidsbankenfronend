import { useState } from "react";
import { useDispatch } from "react-redux";
//import { useHistory } from "react-router";
import { addIneligibleperiod } from "../../modules/ineligibleperiod";
import RenderOnRole from "../RenderOnRole";
import DeletIngiblP from "./DeletIngiblP";
import ShowIngiblP from "./ShowIngiblP";
const AddInigiblP = () => {
  const [start, setStrart] = useState("");
  const [end, setEnd] = useState("");

  const dispatch = useDispatch();
  //const history = useHistory();

  const handleSubmit = () => {
    if (!start || !end) {
      return;
    }
    dispatch(addIneligibleperiod({ start: start, end: end }))
  };

  return (
    <div className="row">
      <div className="col-sm-6">
        <form onSubmit={handleSubmit}>
          <h1>Ineligible period</h1>

          <div className="form-group">
            <label htmlFor="start">start</label>
            <input
              type="Date"
              className="form-control"
              placeholder="start"
              value={start}
              onChange={(e) => setStrart(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="end">end </label>
            <input
              type="Date"
              className="form-control"
              placeholder="end"
              value={end}
              onChange={(e) => setEnd(e.target.value)}
            />
          </div>
          <RenderOnRole roles={["user"]}>
            <button type="submit" className="btn btn-primary">
              Add Ineligible Period
            </button>
          </RenderOnRole>
        </form>
        {/* { UserService.hasRole(["admin"]) && <h1>I'm an Admin</h1> } */}
      </div>

      <div style={{ float: "right" }}>
        <ShowIngiblP />
        <DeletIngiblP />
      </div>
    </div>
  );
};

export default AddInigiblP;
