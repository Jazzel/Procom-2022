import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Modal,
  Typography,
} from "@mui/material";
import React from "react";

const Task = ({ name, id }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Card sx={{ width: "100%", cursor: "pointer" }} onClick={handleOpen}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {name}
          </Typography>
        </CardContent>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Task: <span style={{ fontWeight: "bolder" }}> {name}</span>
          </Typography>
          <hr />
          <Button sx={{ float: "right" }} size="small" color="error">
            Delete
          </Button>
          <Button sx={{ ml: 1, float: "right" }} size="small" color="primary">
            Update
          </Button>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Description:
          </Typography>
          <hr />
          <Typography
            id="modal-modal-description"
            variant="body2"
            sx={{ mt: 2 }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus in
            dolores ut libero inventore, dolore quo quas nesciunt odit est
            labore non! Quas et ullam blanditiis quidem, repellendus laboriosam
            iste!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Users:
          </Typography>
          <hr />
          <Typography
            id="modal-modal-description"
            variant="body2"
            sx={{ mt: 2 }}
          ></Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default Task;
