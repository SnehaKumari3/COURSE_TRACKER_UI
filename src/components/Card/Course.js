import {React , useState} from 'react';
import EditModal from '../modal/EditModal';
import { deleteCourseAsync } from '../../actions';
import { useDispatch } from 'react-redux';

function Course({courseId, courseName, courseDescription}) {
  const dispatch = useDispatch();
  const [openEdit, setOpenEdit] = useState(false);
  const handleOpenEdit = () => {
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  const handleDelete = () => {
    dispatch(deleteCourseAsync(courseId));
  }

  return (
    <div className="flex justify-between p-4">
      <div className="w-1/4"></div> {/* 25% space on the left */}
      <div className="w-1/2 bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-2">{courseName}</h2>
        <p className="text-gray-600 mb-4">
          {courseDescription}
        </p>
        <div className="flex justify-start space-x-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded" onClick={handleOpenEdit}>
            Edit
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded" onClick={handleDelete}>
            Delete
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
            Done
          </button>
        </div>
      </div>
      <div className="w-1/4"></div> {/* 25% space on the right */}
      <EditModal open={openEdit} handleClose={handleCloseEdit} initialId={courseId} initialCourseTitle={courseName} initialCourseDescription={courseDescription} typeOfRequest={"Edit"}/>
    </div>
  );
}

export default Course;
