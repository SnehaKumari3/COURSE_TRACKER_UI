import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { addCourseAsync, editCourseAsync } from "../../actions";
import { useDispatch } from 'react-redux';


function EditModal({
  open,
  handleClose,
  initialId,
  initialCourseTitle,
  initialCourseDescription,
  typeOfRequest,
}) {
  const dispatch = useDispatch();
  const [courseTitle, setCourseTitle] = useState(initialCourseTitle);
  const [courseDescription, setCourseDescription] = useState(
    initialCourseDescription
  );

  const handleCancel = () => {
    setCourseTitle(initialCourseTitle);
    setCourseDescription(initialCourseDescription);
    handleClose();
  };

  const handleEditRequest = () =>{
    console.log("courseTitle ",courseTitle)
    console.log("coursedescription ",courseDescription)
    dispatch(editCourseAsync({initialId,courseTitle,courseDescription}));
  }
  const handleAddRequest = () => {
    dispatch(addCourseAsync({courseTitle,courseDescription}));
  }

  const handleSave = () => {
    // Perform the edit action with courseTitle and courseDescription
    if(typeOfRequest === "Edit"){
      handleEditRequest();
    }
    else{
      handleAddRequest();
    }
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <Box ml={2} mt={2}>
        {typeOfRequest === "Edit" ? (
          <Typography variant="h6" color="primary">
            Edit Course
          </Typography>
        ) : (
          <Typography variant="h6" color="primary">
            Add Course
          </Typography>
        )}
      </Box>
      <DialogContent>
        <Box mb={2}>
          <TextField
            label="Course Title"
            fullWidth
            value={courseTitle}
            onChange={(e) => setCourseTitle(e.target.value)}
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Course Description"
            fullWidth
            multiline
            rows={4}
            value={courseDescription}
            onChange={(e) => setCourseDescription(e.target.value)}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel} variant="outlined" color="primary">
          Cancel
        </Button>
        <Button onClick={handleSave} variant="contained" color="primary">
          {typeOfRequest}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default EditModal;
