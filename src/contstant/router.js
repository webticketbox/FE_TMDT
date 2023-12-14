import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import DetailEvent from "../pages/DetailEvent";
import GuestHome from "../pages/GuestHome";
import CreateEvent from "../pages/CreateEvent";
import EventInfo from "../pages/event-create/EventInfo";
import TicketAndTime from "../pages/event-create/TicketAndTime";
import SettingEvent from "../pages/event-create/SettingEvent";
import ApproveEvent from "../pages/event-create/ApproveEvent";
import InfoPaymentEvent from "../pages/event-create/InfoPaymentEvent";
import MyEvent from "../pages/event-create/MyEvent";
import MyRevenue from "../pages/event-create/MyRevenue";
import AdminRevenue from "../pages/event-create/AdminRevenue";
import MyAccount from "../pages/MyAccount";

export const listRouter = [
  { path: "/login", element: <Login /> },
  { path: "/sign-up", element: <SignUp /> },
  { path: "/event-info", element: <EventInfo /> },
  { path: "/ticket-and-time", element: <TicketAndTime /> },
  { path: "/info-payment-event", element: <InfoPaymentEvent /> },
  { path: "/setting-event", element: <SettingEvent /> },
  { path: "/approve-event", element: <ApproveEvent /> },
  { path: "/my-event", element: <MyEvent /> },
  { path: "/my-revenue", element: <MyRevenue /> },
  { path: "/admin-revenue", element: <AdminRevenue /> },
  { path: "/event/create", element: <CreateEvent /> },
  { path: "/event/:id", element: <DetailEvent /> },
  { path: "/account/:id", element: <MyAccount /> },
  { path: "/", element: <GuestHome /> },
];
