import React from "react";

function ConfirmedOrders() {
  return (

    <>
      <a
        href="/booked"
        className="fw-bold text-info"
        style={{ textDecoration: "none" }}
        >
        <i className="fa-solid fa-arrow-left"></i> Back
      </a>
    
    <div className="container-fluid mt-5">
      <div
        className="p-4 rounded shadow-sm"
        style={{
          width: "100%",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        }}
        >
        <h2 className="text-center text-info mb-4 fw-bold">Confirmed Orders</h2>

        {/* Scrollable table wrapper for small screens */}
        <div className="table-responsive">
          <table className="table table-striped table-hover table-bordered align-middle">
            <thead className="text-info text-center">
              <tr className="bg-info">
                <th className="bg-info text-light">#</th>
                <th className="bg-info text-light">Name</th>
                <th className="bg-info text-light">Email</th>
                <th className="bg-info text-light">Phone No:</th>
                <th className="bg-info text-light">Description</th>
                <th
                  style={{ minWidth: "150px" }}
                  className="bg-info text-light"
                  >
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="text-info fw-bolder text-center">
              <tr>
                <td>1</td>
                <td>Dhanish</td>
                <td>nishal@gmail.com</td>
                <td>6383844274686</td>
                <td>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Totam, magni deleniti reiciendis saepe tempora libero, cumque
                  nesciunt
                </td>
                <td>
                  <button className="btn btn-warning btn-sm me-2 mt-2">
                    Delete Confirmed
                  </button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Dhanish</td>
                <td>nishal@gmail.com</td>
                <td>6383844274686</td>
                <td>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Totam, magni deleniti reiciendis saepe tempora libero, cumque
                  nesciunt.
                </td>
                <td>
                  <button className="btn btn-warning btn-sm me-2 mt-2">
                    Delete Confirmed
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
                  </>
  );
}

export default ConfirmedOrders;