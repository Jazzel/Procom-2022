import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import { updateTask, assignUser, updateLabel } from "../../actions/board";

const Task = ({
  title,
  id,
  label,
  label_id,
  updates,
  member_id,
  member,
  description,
  updateTask,
  users,
  assignUser,
  updateLabel,
}) => {
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

  const comments = [
    { text: "Hello world", user: "Member 1" },
    { text: "Hello world", user: "Member 2" },
  ];

  const [comment, setComment] = React.useState("");
  const [showForm, setShowForm] = React.useState(false);
  const [taskDetails, setTaskDetails] = React.useState(title);
  const [tLabel, setTLabel] = React.useState(label);

  const [userAssign, setUserAssign] = React.useState("");

  return (
    <div>
      <Card sx={{ width: "100%", cursor: "pointer" }} onClick={handleOpen}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {title}
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
            Task: <span style={{ fontWeight: "bolder" }}> {title}</span>
          </Typography>
          <hr />
          {!showForm && (
            <>
              <Button
                sx={{ ml: 1, float: "right" }}
                onClick={() => setShowForm(!showForm)}
                size="small"
                color="primary"
              >
                Update
              </Button>
            </>
          )}
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Description:
          </Typography>
          <hr />
          {!showForm ? (
            <>
              <Typography
                id="modal-modal-description"
                variant="body2"
                sx={{ mt: 2 }}
              >
                {description}
              </Typography>
              <Typography>Label: {label}</Typography>
            </>
          ) : (
            <FormControl fullWidth>
              <br />

              <InputLabel id="simple-select-label3">Label</InputLabel>
              <Select
                labelId="simple-select-label3"
                id="simple-select"
                value={tLabel}
                label="Label"
                onChange={(e) => setTLabel(e.target.value)}
              >
                {[
                  { name: "Low", id: 1 },
                  { name: "Medium", id: 2 },
                  { name: "High", id: 3 },
                ].map(({ name, id }) => (
                  <MenuItem key={id} value={id}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
              <br />
              <TextField
                value={taskDetails}
                type="text"
                label="Task"
                onChange={(e) => setTaskDetails(e.target.value)}
              ></TextField>
              <br />

              <Button
                fullWidth
                variant="contained"
                onClick={() => {
                  // alert(tLabel);
                  // alert(taskDetails);
                  updateTask(id, title, taskDetails);
                  updateLabel(id, tLabel);
                  setComment("");
                  setShowForm(!showForm);
                }}
              >
                Update Task
              </Button>
            </FormControl>
          )}
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Member:
          </Typography>
          <hr />
          <Typography
            id="modal-modal-description"
            variant="body2"
            sx={{ mt: 2 }}
          >
            {member_id ? (
              <> {member.first_name + " " + member.last_name}</>
            ) : (
              <>
                Un-assigned
                <br />
                <br />
                <FormControl fullWidth>
                  <InputLabel id="simple-select-label4">Assign user</InputLabel>

                  <Select
                    labelId="simple-select-label4"
                    id="simple-select"
                    value={userAssign}
                    label="Assign user"
                    onChange={(e) => setUserAssign(e.target.value)}
                  >
                    {users &&
                      users.map(({ id, first_name, last_name }) => {
                        return (
                          <MenuItem key={id} value={id}>
                            {first_name + " " + last_name}
                          </MenuItem>
                        );
                      })}
                  </Select>
                  <Button
                    fullWidth
                    variant="contained"
                    onClick={() => {
                      assignUser(id, userAssign);
                      setUserAssign("");
                    }}
                  >
                    Assgin
                  </Button>
                </FormControl>
              </>
            )}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Comments:
          </Typography>
          <hr />
          {updates ? (
            updates.map((update) => (
              <div key={update}>
                <Typography>
                  "{update.text}" by{" "}
                  {update.user.first_name + update.user.last_name}
                </Typography>
              </div>
            ))
          ) : (
            <>No comments</>
          )}
          <FormControl fullWidth>
            <br />
            <TextField
              value={comment}
              type="text"
              label="Add comment"
              onChange={(e) => setComment(e.target.value)}
            />
            <br />

            <Button
              fullWidth
              variant="contained"
              onClick={() => {
                alert(comment);
                setComment("");
              }}
            >
              Add Comment
            </Button>
          </FormControl>
        </Box>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {
  updateTask,
  assignUser,
  updateLabel,
})(Task);
