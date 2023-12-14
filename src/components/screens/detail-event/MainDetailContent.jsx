import { Box, Container, Divider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Recommended from "./Recommended";
import About from "./About";
import TicketInfomation from "./TicketInfomation";

function MainDetailContent({ event, recommend }) {
  const [ticket, setTicket] = useState({});

  const handleClick = (targetId) => {
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    event?.ticket && setTicket(JSON?.parse(event?.ticket));
  }, [event]);

  return (
    <Box>
      <Divider />
      <Container>
        <Box display={"flex"} gap={4} py={2} sx={{ cursor: "pointer" }}>
          <Typography variant="subtitle1" onClick={() => handleClick("about")}>
            About
          </Typography>
          <Typography
            variant="subtitle1"
            onClick={() => handleClick("ticket-information")}
          >
            Ticket Information
          </Typography>
          <Typography
            variant="subtitle1"
            onClick={() => handleClick("recommended")}
          >
            Recommended for you
          </Typography>
        </Box>
      </Container>
      <Divider />

      <Box bgcolor={"#f1f1f1"} paddingY={"30px"}>
        <Container>
          <About event={event} />
          {ticket && <TicketInfomation ticket={ticket} eventId={event?._id} />}
          <Recommended recommend={recommend} />
        </Container>
      </Box>
    </Box>
  );
}

export default MainDetailContent;
