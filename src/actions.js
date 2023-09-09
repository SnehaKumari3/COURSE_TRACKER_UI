import { fetchCourses, addCourse, deleteCourse,editCourse } from './apiFunctions';

export const getCoursesAsync = () => {
  return async (dispatch) => {
    try {
      const courses = await fetchCourses();
      dispatch({
        type: 'GET_COURSES',
        payload: courses,
      });
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };
};

export const addCourseAsync = ({courseTitle,courseDescription}) => {
  return async (dispatch) => {
    try {
      const newCourse = await addCourse({courseTitle,courseDescription});
      dispatch({
        type: 'ADD_COURSE',
        payload: newCourse,
      });
    } catch (error) {
      console.error('Error adding course:', error);
    }
  };
};
export const editCourseAsync = ({initialId,courseTitle,courseDescription}) => {
  return async (dispatch) => {
    try {
      const newCourse = await editCourse({initialId,courseTitle,courseDescription});
      dispatch({
        type: 'ADD_COURSE',
        payload: newCourse,
      });
    } catch (error) {
      console.error('Error editing course:', error);
    }
  };
};

export const deleteCourseAsync = (courseId) => {
  return async (dispatch) => {
    try {
      const newCourse = await deleteCourse(courseId);
      dispatch({
        type: 'ADD_COURSE',
        payload: newCourse,
      });
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };
};
