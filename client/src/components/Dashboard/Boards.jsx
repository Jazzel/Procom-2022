import { Box, Grid, List, ListItem, Stack } from "@mui/material";
import React from "react";
import CustomCard from "./Card";

const cards = [
  { id: 1, title: "Card 1", type: "Todo" },
  { id: 2, title: "Card 2", type: "Todo" },
  { id: 3, title: "Card 3", type: "Todo" },
  { id: 4, title: "Card 4", type: "Todo" },
  { id: 5, title: "Card 5", type: "Todo" },
];

const Boards = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <List component={Stack} direction="row">
        {cards
          .filter((cards) => cards.type === "Todo")
          .map(({ title, id }) => (
            <ListItem sx={{ minWidth: "350px" }} disablePadding key={id}>
              <CustomCard title={title} id={id} />
            </ListItem>
          ))}
      </List>
    </Box>
  );
};

export default Boards;
