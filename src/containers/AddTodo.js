import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div className="row mb-2">
      <form
        onSubmit={e => {
          e.preventDefault();
          if(!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value))
          // alert(input.value);
          input.value = '';
        }}
        className="form-inline float-right"
      >
        <input
          ref={node => {
            input = node;
          }}
          className="form-control"
        />
        <button type="submit" className="btn">
          Add Todo
        </button>
      </form>
    </div>
  )
}

AddTodo = connect()(AddTodo);

export default AddTodo;