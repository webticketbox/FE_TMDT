import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import {
  Box,
  Paper,
  Typography,
  Grid,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
} from "@mui/material";
import ButtonCustom from "../../components/common/ButtonCustom";
import { useNavigate } from "react-router-dom";
import { notify } from "../../utils/helpers/notify";
import { create } from "../../utils/api/event";

export default function SettingEvent() {
  const navigate = useNavigate();
  const [permission, setPermission] = useState("1");
  const [percent, setPercent] = useState(0);

  const handleCreateEvent = async () => {
    const ticketAndTime = JSON.parse(localStorage.getItem("ticketAndTime"));
    const eventInfo = JSON.parse(localStorage.getItem("eventInfo"));
    const user = JSON.parse(localStorage.getItem("user"));
    const { ticket, ...rest } = ticketAndTime;
    const { typeEvent, ...rest1 } = eventInfo;
    const payload = {
      ...rest1,
      ...rest,
      ticket: JSON.stringify(ticket),
      owner: user?._id,
      permission: Number(permission),
      typeEvent: Number(typeEvent),
      percent: Number(percent),
    };

    try {
      await create(payload);
      notify("success", "Tạo sự kiện thành công, vui lòng chờ đợi phê duyệt");
      localStorage.removeItem("eventInfo");
      localStorage.removeItem("ticketAndTime");
      navigate("/my-event");
    } catch (error) {
      notify("error", error?.response?.data?.message || "Lỗi đăng nhập");
    }
  };

  useEffect(() => {
    const existData = () => {
      const ticketAndTime = JSON.parse(localStorage.getItem("ticketAndTime"));
      const errorTicketAndTime = [];

      if (!ticketAndTime?.timeStart) {
        errorTicketAndTime.push("Bạn chưa nhập thời gian bắt đầu sự kiện");
      }

      if (!ticketAndTime?.timeEnd) {
        errorTicketAndTime.push("Bạn chưa nhập thời gian kết thúc sự kiện");
      }

      if (!ticketAndTime?.ticket?.length) {
        errorTicketAndTime.push("Bạn phải tạo ít nhất một loại vé");
      }

      if (errorTicketAndTime?.length > 0) {
        localStorage.setItem(
          "errorTicketAndTime",
          JSON.stringify(errorTicketAndTime)
        );
        navigate("/ticket-and-time");
      }
    };

    existData();
  }, []);

  return (
    <AdminLayout>
      <Box py={4} px={"8%"}>
        <Typography textAlign={"center"} variant="h4">
          Thông tin cài đặt
        </Typography>
        <Box mt={4} width={"100%"}>
          <Paper elevation={3} width={"100%"}>
            <Box p={2}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Typography variant="subtitle2" mb={1}>
                    Quyền riêng tư:
                  </Typography>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    row
                    value={permission}
                    onChange={(e) => setPermission(e.target.value)}
                  >
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label="Tất cả mọi người"
                    />
                    <FormControlLabel
                      value="0"
                      control={<Radio />}
                      label="Chỉ những người có link"
                    />
                  </RadioGroup>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle2" mb={1}>
                    Phần trăm hoa hồng:
                  </Typography>
                  <TextField
                    size="small"
                    fullWidth
                    value={percent}
                    onChange={(e) => setPercent(e.target.value)}
                    type="number"
                  />
                  <Typography variant="subtitle2" mt={1} color={"error"}>
                    * Phần trăm hoa hồng sẽ ảnh hưởng tới độ ưu tiên sự kiện
                    được tạo
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            <Box
              mt={4}
              display={"flex"}
              justifyContent={"center"}
              gap={2}
              py={2}
            >
              <ButtonCustom
                text={"Tạo sự kiện"}
                variant={"contained"}
                onClick={handleCreateEvent}
              />
            </Box>
          </Paper>
        </Box>
      </Box>
    </AdminLayout>
  );
}
