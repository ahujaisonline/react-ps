import React from "react";
import { getCourses } from "../api/courseApi";

class CoursesPage extends React.Component {
  state = {
    courses: []
  };

  componentDidMount() {
    getCourses().then(res => {
      this.setState({
        courses: res
      });
    });
  }

  render() {
    return (
      <div className="container">
        <h2>Courses Table</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Author Id</th>
              <th>Title</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {this.state.courses.map(course => {
              return (
                <tr key={course.id}>
                  <td>{course.authorId}</td>
                  <td>{course.title}</td>
                  <td>{course.category}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CoursesPage;
