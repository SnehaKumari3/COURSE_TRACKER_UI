import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getCoursesAsync } from '../../actions'; // Import your action

import Course from '../Card/Course';
import { Button } from '@mui/material';
import EditModal from '../modal/EditModal';



function Courses({ coursesFromRedux, getCoursesAsync }) {
  const [courses, setCourses] = useState([]);

  
  const [openAdd, setOpenAdd] = useState(false);

  const handleOpenAdd = () => {
    setOpenAdd(true);
  };

  const handleCloseAdd = () => {
    setOpenAdd(false);
  };

  useEffect(() => {
    getCoursesAsync();
  }, [getCoursesAsync]); 

  useEffect(() => {
    setCourses(coursesFromRedux);
  }, [coursesFromRedux]);


  const handleAddCourse = () => {
    handleOpenAdd();
  }

  return (
    <div className="bg-gray-100 container mt-0">
      <div className="text-center">
        <div className="mb-2">
          <h1 className="font-bold text-3xl pt-1">Here is your courses list...</h1>
        </div>
        <div className='mb-2'>
          <Button variant="outlined" color="primary" onClick={handleAddCourse}>Add Course</Button>
        </div>
      </div>
      <div className="row">
        {courses.map((course) => (
          <div key={course.id} className="col-md-4 mb-4">
            <Course
              courseId={course.id}
              courseName={course.title}
              courseDescription={course.description}
            />
          </div>
        ))}
      </div>
      <EditModal open={openAdd} handleClose={handleCloseAdd} initialCourseTitle={""} initialCourseDescription={""} typeOfRequest={"Add"}/>
    </div>
  );
}

// Map the courses from Redux state to the component's props
const mapStateToProps = (state) => ({
  coursesFromRedux: state.courses, // Assuming 'courses' is the relevant property in your Redux state
});

// Map your action creator to the component's props
const mapDispatchToProps = {
  getCoursesAsync,
};

// Connect the component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(Courses);
