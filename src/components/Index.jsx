import React from "react";
import { formatNumber } from "../services/helpers/utils";
import { useSelector, useDispatch } from "react-redux";
import { incrementRoom } from "../store/action/actionCreator";

export default function Index() {
  const mystyle = {
    backgroundColor: "transparent",
    borderColor: "#ccc",
    color: "gray"
  };
  const doubleStyle = {
    color: "#228b22",
    fontWeight: 600
  };
  const avatarStyle = {
    verticalAlign: "middle",
    width: "50px",
    height: "50px",
    borderRadius: "50%"
  };

  const data = useSelector((state) => state.reducer);
  const dispatch = useDispatch()

  console.log("Data here? ", data);

  return (
    <div className="container mt-5 mb-4">
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Move-out List</h3>
        </div>
        <div className="card-body">
          <table className="table table-responsive">
            <thead>
              <tr>
                <th scope="col">Move-Out Date</th>
                <th scope="col">ID</th>
                <th scope="col">Address</th>
                <th scope="col">Room</th>
                <th scope="col">Location</th>
                <th scope="col">Last Occupant</th>
                <th scope="col">UID</th>
                <th scope="col">Balance</th>
              </tr>
            </thead>
            {data?.map((data, i) => {
              return (
                <tbody key={data.id}>
                  <tr>
                    <td className="align-middle">{data.date}</td>
                    <td className="align-middle">{data.id}</td>
                    <td
                      className="align-middle text-truncate"
                      style={doubleStyle}
                    >
                      <img
                        src={data.image}
                        alt="Avatar"
                        style={avatarStyle}
                        className="mr-2"
                      />

                      {data.address}
                    </td>
                    <td className="align-middle">{data.room}</td>
                    <td className="align-middle">{data.location}</td>
                    <td className="align-middle" style={doubleStyle}>
                      {data.occupant}
                    </td>
                    <td className="align-middle">{data.uid}</td>
                    <td className="align-middle">
                      ({formatNumber(data.balance)})
                    </td>
                    <td className="align-middle">
                      <button
                        className="btn btn-primary-outline"
                        style={mystyle}
                        onClick={() => dispatch(incrementRoom(data.id))}
                      >
                        Flip room
                      </button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
}
