import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddIcon from "@mui/icons-material/Add";
import { Button, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Task from "./Task";

const tasks = [
  { id: 1, name: "Task 1" },
  { id: 2, name: "Task 2" },
  { id: 3, name: "Task 3" },
  { id: 4, name: "Task 4" },
];

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const CustomCard = ({ title, id }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ width: "100%", margin: 1 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {title[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        sx={{ fontSize: 20 }}
      />
      <CardContent sx={{ backgroundColor: "#EDEDED" }}>
        <Typography variant="body2" color="text.secondary">
          {tasks.map(({ name, id }) => (
            <div style={{ padding: "5px 0" }} key={id}>
              <Task name={name} id={id} />
            </div>
          ))}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {!expanded && <Typography sx={{ ml: 2 }}>Add more tasks</Typography>}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          {!expanded ? <AddIcon /> : <CloseIcon />}
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <form>
            <TextField
              required
              id="title"
              label="Add new task"
              placeholder="Enter title for the task"
              multiline
              rows={3}
              sx={{ width: "100%", mb: 2 }}
            />
            <Button type="submit" variant="contained">
              Add
            </Button>
          </form>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default CustomCard;
