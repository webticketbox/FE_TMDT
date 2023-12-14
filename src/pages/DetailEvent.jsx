import React, { useEffect, useState } from "react";
import EventLayout from "../components/layout/EventLayout";
import InfoEvent from "../components/screens/detail-event/InfoEvent";
import MainDetailContent from "../components/screens/detail-event/MainDetailContent";
import { useParams } from "react-router-dom";
import { getListEvent, getListEventById } from "../utils/api/event";

function DetailEvent() {
  const { id } = useParams();
  const [detailEvent, setDetailEvent] = useState({});
  const [listRecommend, setListRecommend] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const [eventId, typeEvent] = id?.split("-");
        const res = await getListEventById(eventId);
        const res1 = await getListEvent({
          permission: 1,
          isApprove: 1,
          typeEvent: Number(typeEvent),
        });

        setDetailEvent(res.data);
        setListRecommend(res1.data?.filter((e) => e._id !== res?.data?._id));
      } catch (error) {}
    };
    getData();
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <EventLayout>
      <InfoEvent event={detailEvent} />
      <MainDetailContent event={detailEvent} recommend={listRecommend} />
    </EventLayout>
  );
}

export default DetailEvent;
