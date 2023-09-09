// src/api/apiFunctions.js

import apiInstance from "./api";

export const fetchCourses = async () => {
  try {
    const response = await apiInstance.get('/courses');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addCourse = async ({courseTitle,courseDescription}) => {
  try {
    let body={
      title: courseTitle,
      description: courseDescription,
    }
    const response = await apiInstance.post('/courses', body);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const editCourse = async ({initialId,courseTitle,courseDescription}) => {
  try {
    let body={
      id: initialId,
      title: courseTitle,
      description: courseDescription,
    }
    console.log("body for put request ",body)
    const response = await apiInstance.put('/courses', body);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteCourse = async (courseId) => {
  try {
    const response = await apiInstance.delete(`/courses/${courseId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
