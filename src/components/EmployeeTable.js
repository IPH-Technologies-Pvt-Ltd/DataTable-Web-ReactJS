import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-buttons-dt/css/buttons.dataTables.min.css";
import "datatables.net-buttons/js/dataTables.buttons";
import "datatables.net-buttons/js/buttons.html5";
import "datatables.net-buttons/js/buttons.print";
import "datatables.net-buttons-bs5";
import "datatables.net-select-bs5";
import "datatables.net-fixedheader-bs5";
import data from "./empdata.js";
import "../App.css";
import "datatables.net-responsive-bs5";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Table = () => {
  const [show, setShow] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (emp) => {
    setSelectedEmployee(emp);
    setShow(!show);
  };

  const tableRef = useRef(null);

  useEffect(() => {
    if (data && data.length) {
      const dataTable = $(tableRef.current).DataTable({
        retrieve: true,
        fixedHeader: true,
        // select: true,
        dom: "Bfrtip",
        buttons: ["csv", "print"],
        // columnDefs: [
        //   {
        //     targets: 0,
        //     checkboxes: {
        //       selectRow: true,
        //     },
        //   },
        // ],
        // select: {
        //   style: "multi",
        // },
      });
    }
  }, []);

  return (
    <>
      <h1>Employee Table</h1>
      <div className="">
        <table ref={tableRef} id="myTable" className="display shadow ">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>City</th>
              <th>Designation</th>
              <th>Contact</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((emp) => (
                <tr key={emp.id}>
                  <td>{emp.id}</td>
                  <td>{emp.First_name}</td>
                  <td>{emp.Last_name}</td>
                  <td>{emp.email}</td>
                  <td>{emp.City}</td>
                  <td>{emp.Designation}</td>
                  <td>{emp.Contact}</td>
                  <td>
                    <Button variant="primary" onClick={() => handleShow(emp)}>
                      {emp.view}
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Employee Description</Modal.Title>
        </Modal.Header>
        {selectedEmployee && (
          <Modal.Body>
            <form>
              <label htmlFor="id">ID:</label>
              <input
                type="text"
                id="id"
                name="id"
                value={selectedEmployee.id}
                readOnly
              />
              <br />

              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={selectedEmployee.First_name}
                readOnly
              />
              <br />

              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={selectedEmployee.Last_name}
                readOnly
              />
              <br />

              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={selectedEmployee.email}
                readOnly
              />
              <br />

              <label htmlFor="city">City:</label>
              <input
                type="text"
                id="city"
                name="city"
                value={selectedEmployee.City}
                readOnly
              />
              <br />

              <label htmlFor="designation">Designation:</label>
              <input
                type="text"
                id="designation"
                name="designation"
                value={selectedEmployee.Designation}
                readOnly
              />
              <br />

              <label htmlFor="contact">Contact:</label>
              <input
                type="tel"
                id="contact"
                name="contact"
                value={selectedEmployee.Contact}
                readOnly
              />
              <br />

              <label htmlFor="dob">DOB:</label>
              <input
                type="tel"
                id="dob"
                name="dob"
                value={selectedEmployee.DOB}
                readOnly
              />
              <br />

              <label htmlFor="gender">Gender:</label>
              <input
                type="tel"
                id="gender"
                name="gender"
                value={selectedEmployee.Gender}
                readOnly
              />
              <br />

              <label htmlFor="pincode">Pin Code:</label>
              <input
                type="tel"
                id="pincode"
                name="pincode"
                value={selectedEmployee.Pincode}
                readOnly
              />
              <br />

              <label htmlFor="state">State:</label>
              <input
                type="tel"
                id="state"
                name="state"
                value={selectedEmployee.State}
                readOnly
              />
              <br />
            </form>
          </Modal.Body>
        )}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Table;
