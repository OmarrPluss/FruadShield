import React from 'react';

const FeedbackTable = ({ data }) => {
  return (
    <table className="feedback-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Type</th>
          <th>Submitted</th>
          <th>Status</th>
          <th>Priority</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.type}</td>
            <td>{item.submitted}</td>
            <td>
              <span className={`status-dot ${item.status}`}></span>
              {item.statusText}
            </td>
            <td>{item.priority}</td>
            <td>
              <button className="btn btn-primary btn-sm">View</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FeedbackTable;

