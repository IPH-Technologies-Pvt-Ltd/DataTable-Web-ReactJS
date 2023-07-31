const Modal = ({ rowData, onClose }) => {
  if (!rowData) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Employee Details</h2>
        <p>ID: {rowData.id}</p>
        <p>First Name: {rowData.First_name}</p>
        <p>Last Name: {rowData.Last_name}</p>
        <p>Email: {rowData.email}</p>
        <p>Contact: {rowData.Contact}</p>
        <img src={rowData.pic} alt="Profile Pic" />
      </div>
    </div>
  );
};
