import React, { useState } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/course.actions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

function CoursesPage({ actions, courses }) {
  const [course, setCourse] = useState({ title: "" });

  // Event Functions
  const handle = {
    change: (e) => {
      setCourse((prevState) => {
        return { ...prevState, title: e.target.value };
      });
    },
    submit: (e) => {
      e.preventDefault();
      actions.createCourse(course);
      setCourse({ title: "" });
    },
  };

  return (
    <div>
      <form onSubmit={handle.submit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input type="text" onChange={handle.change} value={course.title} />
        <button type="submit">Submit</button>
        {courses.map((c, i) => (
          <div key={i}>{c.title}</div>
        ))}
      </form>
    </div>
  );
}

/* Component Prop Types */
CoursesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired,
};

/* Redux Connect */
const mapStateToProps = (state) => {
  return { courses: state.courses };
};
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(courseActions, dispatch),
  };
};

// const mapDispatchToProps = {
//   createCourse: courseActions.createCourse,
// };

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
