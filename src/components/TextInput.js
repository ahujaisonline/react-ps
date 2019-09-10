import React from "react";

function TextInput(props) {
  return (
    <>
      <div
        className={
          "form-group" + (props.error && props.error.length ? " has-error" : "")
        }
      >
        <label htmlFor={props.name}>{props.label}</label>
        <div className="field">
          <input
            id={props.name}
            value={props.value}
            type="text"
            name={props.name}
            className="form-control"
            onChange={props.onChangeForm}
          />
        </div>
        {props.error && <div className="alert alert-danger">{props.error}</div>}
      </div>
    </>
  );
}

export default TextInput;
