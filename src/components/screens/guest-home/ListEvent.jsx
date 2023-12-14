import { Box, Grid } from "@mui/material";
import React from "react";
import EventItem from "./EventItem";
import { useNavigate } from "react-router-dom";

function ListEvent({ data }) {
  const navigate = useNavigate();
  return (
    <Box mt={"120px"}>
      <Box display={"flex"} justifyContent={"center"}>
        <Box component={"img"} src="/img/event.png" />
      </Box>
      <Grid container mt={"40px"} spacing={4}>
        {data?.map((event) => (
          <Grid
            item
            xs={3}
            onClick={() => navigate(`/event/${event._id}-${event.typeEvent}`)}
            key={event._id}
          >
            <EventItem event={event} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ListEvent;
