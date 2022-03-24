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
import { addTask } from "../../actions/board";
import { connect } from "react-redux";

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

const CustomCard = ({ title, id, label, tasks, addTask, users }) => {
  const [expanded, setExpanded] = React.useState(false);

  console.log(users);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [taskTitle, setTaskTitle] = React.useState("");
  const [taskDes, setTaskDes] = React.useState("");

  return (
    <Card sx={{ width: "100%", margin: 1 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {title[0]}
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     {/* <MoreVertIcon /> */}
        //   </IconButton>
        // }
        title={title}
        sx={{ fontSize: 20 }}
      />
      <CardContent sx={{ backgroundColor: "#EDEDED" }}>
        <Typography variant="body2" color="text.secondary">
          {tasks &&
            Object.values(tasks) &&
            Object.values(tasks).map(
              ({
                title,
                id,
                label,
                label_id,
                updates,
                member_id,
                member,
                description,
              }) => (
                <div style={{ padding: "5px 0" }} key={id}>
                  <Task
                    title={title}
                    id={id}
                    label={label}
                    label_id={label_id}
                    updates={updates}
                    member_id={member_id}
                    member={member}
                    description={description}
                    users={users}
                  />
                </div>
              )
            )}
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
              sx={{ width: "100%", mb: 2 }}
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
            />
            <TextField
              required
              id="description"
              label="Description"
              placeholder="Enter description for the task"
              multiline
              rows={3}
              value={taskDes}
              onChange={(e) => setTaskDes(e.target.value)}
              sx={{ width: "100%", mb: 2 }}
            />
            <Button variant="contained" onClick={() => addTask(id, taskDes)}>
              Add
            </Button>
          </form>
        </CardContent>
      </Collapse>
    </Card>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { addTask })(CustomCard);
