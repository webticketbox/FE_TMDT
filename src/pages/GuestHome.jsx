import React, { useEffect, useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import Swipper from "../components/screens/guest-home/Swipper";
import ListEvent from "../components/screens/guest-home/ListEvent";
import { getListEvent } from "../utils/api/event";
import { useSearchParams } from "react-router-dom";

function GuestHome() {
  const [listEvent, setListEvent] = useState();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getListEvent({
          permission: 1,
          isApprove: 1,
          name: searchParams.get("name") || "",
        });
        setListEvent(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [searchParams.get("name")]);

  return (
    <MainLayout>
      <Swipper />
      <ListEvent data={listEvent} />
      {/* <Box display={"flex"} mt={8} gap={4} alignItems={"center"}>
        <Box
          width={"100%"}
          height={"2px"}
          bgcolor="rgb(230, 235, 245)"
          flex={1}
        />
        <Box
          bgcolor={"rgb(45,194,117)"}
          color={"white"}
          sx={{
            padding: "14px 30px",
            fontWeight: "bold",
            fontSize: 18,
            cursor: "pointer",
            borderRadius: "20px",
            "&:hover": {
              background: "rgb(35, 168, 100)",
            },
          }}
        >
          See More
        </Box>
        <Box
          width={"100%"}
          height={"2px"}
          bgcolor="rgb(230, 235, 245)"
          flex={1}
        />
      </Box> */}
    </MainLayout>
  );
}

export default GuestHome;
