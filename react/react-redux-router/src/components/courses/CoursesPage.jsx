import React, { useState } from "react";

export default function CoursesPage() {
  const [title, setTitle] = useState({ course: "" });

  // Event Functions
  const handle = {
    change: (e) => {
      setTitle((prevState) => {
        return { ...prevState, course: e.target.value };
      });
    },
    submit: (e) => {
      e.preventDefault();
      setTitle({ course: "" });
    },
  };

  return (
    <div>
      <form onSubmit={handle.submit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input type="text" onChange={handle.change} value={title.course} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
