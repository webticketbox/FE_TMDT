import { request } from "./request";

export const list = async () => await request.get("/api/payment");

export const create = async (payload) =>
  await request.post("/api/payment", payload);

export const getByUserId = async (id) =>
  await request.get("/api/payment/user/" + id);

export const getByEventId = async (payload) =>
  await request.post("/api/payment/event/", payload);

export const numberTicketSell = async (payload) =>
  await request.post("/api/payment/count-ticket-sell/", payload);
