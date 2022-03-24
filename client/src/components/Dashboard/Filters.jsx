import React from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Modal,
  Select,
  Typography,
  Grid,
  MenuItem,
  TextField,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

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

const Filters = ({ onClickAction }) => {
  const [open, setOpen] = React.useState(false);

  const [time, setTime] = React.useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div style={{ width: "100%" }}>
      <Button variant="contained" onClick={onClickAction}>
        <FilterAltIcon sx={{ mr: 1 }} />
        Filter
      </Button>
      <Button sx={{ ml: 1 }} onClick={handleOpen} variant="contained">
        <AccessTimeIcon sx={{ mr: 1 }} />
        Set Time
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h4">Filters</Typography>
          <hr />
          <Grid container>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <br />
                <TextField
                  value={time}
                  type="time"
                  label="Time"
                  onChange={(e) => setTime(e.target.value)}
                />
                <br />
                <Button
                  fullWidth
                  variant="contained"
                  onClick={() => {
                    alert(time);
                  }}
                >
                  Fetch
                </Button>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
      </Modal>
      <hr />
    </div>
  );
};

export default Filters;
