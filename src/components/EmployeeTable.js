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
            <p>
              <strong>ID:</strong> {selectedEmployee.id}
              <br />
              <strong>First Name:</strong> {selectedEmployee.First_name}
              <br />
              <strong>Last Name:</strong> {selectedEmployee.Last_name}
              <br />
              <strong>Email:</strong> {selectedEmployee.email}
              <br />
              <strong>City:</strong> {selectedEmployee.City}
              <br />
              <strong>Designation:</strong> {selectedEmployee.Designation}
              <br />
              <strong>Contact:</strong> {selectedEmployee.Contact}
              <br />
              <strong>DOB:</strong> {selectedEmployee.DOB}
              <br />
              <strong>Gender:</strong> {selectedEmployee.Gender}
              <br />
              <strong>Pin Code:</strong> {selectedEmployee.Pincode}
              <br />
              <strong>State:</strong> {selectedEmployee.State}
              <br />
            </p>
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
