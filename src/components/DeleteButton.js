import React from 'react';
import { connect } from 'react-redux';
import { Delete } from '../redux/actions/componentActions';

function DeleteButton({ id, Delete, OnDelete }) {
  const handleDelete = () => {
    Delete(id);
    OnDelete();
  };

  return (
    <button onClick={handleDelete}>Delete</button>
  );
}

const mapDispatchToProps = {
  Delete,
};

export default connect(null, mapDispatchToProps)(DeleteButton);
