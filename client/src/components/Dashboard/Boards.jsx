import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  List,
  ListItem,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import CustomCard from "./Card";
import Filters from "./Filters";

const cards = [
  { id: 1, title: "Card 1", type: "Todo", members: "Member 1" },
  {
    id: 2,
    title: "Card 2",
    type: "Todo",
    label: "medium",
    members: "Member 2",
  },
  { id: 3, title: "Card 3", type: "Todo", members: "Member 3" },
  { id: 4, title: "Card 4", type: "Todo", members: "Member 4" },
  {
    id: 5,
    title: "Card 5",
    type: "Todo",
    label: "medium",
    members: "Member 5",
  },
];

const members = ["Member 1", "Member 2", "Member 3", "Member 4"];

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

const Boards = ({ name, id, data, nonBoardUser }) => {
  const [filters, setFilters] = React.useState({ label: "all", member: "all" });

  console.log(nonBoardUser);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ width: "100%" }}>
      <Filters onClickAction={handleOpen} />
      <List component={Stack} direction="row">
        <ListItem sx={{ minWidth: "350px" }} disablePadding>
          <CustomCard
            title={data[1].name}
            id={data[1].id}
            tasks={data[1].cards}
            users={nonBoardUser}
          />
        </ListItem>
        <ListItem sx={{ minWidth: "350px" }} disablePadding>
          <CustomCard
            title={data[2].name}
            id={data[2].id}
            users={nonBoardUser}
            tasks={data[2].cards}
          />
        </ListItem>
        <ListItem sx={{ minWidth: "350px" }} disablePadding>
          <CustomCard
            title={data[3].name}
            id={data[3].id}
            tasks={data[3].cards}
            users={nonBoardUser}
          />
        </ListItem>
        <ListItem sx={{ minWidth: "350px" }} disablePadding>
          <CustomCard
            title={data[4].name}
            id={data[4].id}
            tasks={data[4].cards}
            users={nonBoardUser}
          />
        </ListItem>
      </List>
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
                <InputLabel id="simple-select-label2">Labels</InputLabel>
                <Select
                  labelId="simple-select-label2"
                  id="simple-select"
                  value={filters.label}
                  label="Members"
                  onChange={(e) =>
                    setFilters({
                      label: e.target.value,
                      member: filters.member,
                    })
                  }
                >
                  {["Low", "Medium", "High"].map((label) => (
                    <MenuItem key={label} value={label}>
                      {label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <br />
              <br />
              <FormControl fullWidth>
                <InputLabel id="simple-select-label">Members</InputLabel>

                <Select
                  labelId="simple-select-label"
                  id="simple-select"
                  value={filters.member}
                  label="Members"
                  onChange={(e) =>
                    setFilters({ label: filters.label, member: e.target.value })
                  }
                >
                  {members.map((member) => (
                    <MenuItem key={member} value={member}>
                      {member}
                    </MenuItem>
                  ))}
                </Select>
                <br />
                <Button
                  fullWidth
                  variant="contained"
                  onClick={() => console.log("fetching")}
                >
                  Fetch
                </Button>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </Box>
  );
};

export default Boards;
