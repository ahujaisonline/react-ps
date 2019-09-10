import React from "react";
import TextInput from "./TextInput";

function CourseForm(props) {
  return (
    <form onSubmit={props.onSubmitManage}>
      <TextInput
        name="title"
        label="Title"
        value={props.course.title}
        onChangeForm={props.onChangeManage}
        error={props.error.title}
      ></TextInput>

      <div className="form-group">
        <label htmlFor="author">Author</label>
        <div className="field">
          <select
            id="author"
            name="authorId"
            value={props.course.authorId || ""}
            className="form-control"
            onChange={props.onChangeManage}
          >
            <option value="" />
            <option value="1">Cory House</option>
            <option value="2">Scott Allen</option>
          </select>
        </div>
        {props.error && props.error.authorId && (
          <div className="alert alert-danger">{props.error.authorId}</div>
        )}
      </div>

      <TextInput
        name="category"
        label="Category"
        value={props.course.category}
        onChangeForm={props.onChangeManage}
        error={props.error.category}
      ></TextInput>

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

export default CourseForm;
