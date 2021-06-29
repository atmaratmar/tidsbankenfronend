import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { allRequests } from "../../modules/requests";
import  CommentsforRequest from "../Comments/Comments_for_Request"
import { format } from "date-fns";


const RequestDetails = () => {
  const { requestId } = useParams();
  const dispatch = useDispatch();
  const { requests } = useSelector((state) => state);
  const [request, setRequest] = useState();

  useEffect(() => {
    dispatch(allRequests())
  }, []);    // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setRequest(requests.find(user => user.id === parseInt(requestId)))
  }, [requestId, requests]);

  return request ? (
    <div className="row">
      <div className="col-sm-12">
        <h3>Title :   {request.title}</h3>
        <hr/>
        <p>Period Start</p>
        <h3>{format(new Date(request.periodStart), "dd/MM/yyyy")}</h3>
        <p>Period End</p>
        <h3>{format(new Date(request.periodEnd), "dd/MM/yyyy")}</h3>
        <p>Status</p>
        <p className="lead">{request.state }</p>
        <p>Moderated At</p>
        <h3>{format(new Date(request.moderatedAt), "dd/MM/yyyy")}</h3>
        <hr/>
      </div>
      <CommentsforRequest dataParentToChild = {request}/>
      <span></span>
      <p>
          <Link to="/">&laquo; back to list</Link>
        </p>
    </div>
  ) : null
}
export default RequestDetails
