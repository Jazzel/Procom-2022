import {
  Box,
  Button,
  FormControl,
  Grid,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { addBoard } from "../../actions/board";
import { connect } from "react-redux";

const AddModal = ({ addBoard }) => {
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

  const [title, setTitle] = React.useState("");

  return (
    <div>
      <ListItemButton
        onClick={handleOpen}
        sx={{
          minHeight: 48,
          justifyContent: open ? "initial" : "center",
          px: 2.5,
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: open ? 3 : "auto",
            justifyContent: "center",
          }}
        >
          <AddIcon />
        </ListItemIcon>
        <ListItemText primary={"Add Board"} sx={{ opacity: open ? 1 : 0 }} />
      </ListItemButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h4">Add new Board</Typography>
          <hr />
          <Grid container>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <br />
                <TextField
                  value={title}
                  type="text"
                  label="Board Title"
                  onChange={(e) => setTitle(e.target.value)}
                ></TextField>
                <br />
                <Button
                  fullWidth
                  variant="contained"
                  onClick={() => {
                    addBoard(title);
                    setTitle("");
                    handleClose();
                  }}
                >
                  Add Board
                </Button>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, { addBoard })(AddModal);
