import { Box, Paper, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import { useNavigate } from "react-router-dom";
import ButtonCustom from "../components/common/ButtonCustom";
import { notify } from "../utils/helpers/notify";
import { create } from "../utils/api/user";

function SignUp() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleCreateUser = async (e) => {
    e.preventDefault();
    try {
      if (password !== confirmPassword)
        return notify("warn", "Mật khẩu nhập lại không khớp");
      await create({ phone, password });
      setPhone("");
      setPassword("");
      setConfirmPassword("");
      notify("success", "Tạo tài khoản mới thành công");
    } catch (error) {
      notify(
        "error",
        error?.response?.data?.message || "Đăng kí tài khoản không thành công"
      );
    }
  };

  useEffect(() => {
    const checkLogin = () => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) navigate("/");
    };
    checkLogin();
  }, []);

  return (
    <Box
      bgcolor={"#F5F7FC"}
      width={"100vw"}
      height={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Paper elevation={3}>
        <Box
          p={2}
          minWidth={"20vw"}
          component={"form"}
          onSubmit={handleCreateUser}
        >
          <Box
            display={"flex"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            position={"relative"}
            sx={{ cursor: "pointer" }}
          >
            <ArrowBackIosOutlinedIcon
              sx={{ height: 20 }}
              onClick={() => navigate("/")}
            />
            <Box
              position={"absolute"}
              left={"50%"}
              sx={{ transform: "translateX(-50%)" }}
            >
              <Typography fontSize={16} fontWeight={"700"} textAlign={"center"}>
                Sign Up
              </Typography>
            </Box>
            <Box mt={4}></Box>
          </Box>
          <Box mt={4} px={2}>
            <Box>
              <Typography variant="subtitle2">Phone number:</Typography>
              <Box>
                <TextField
                  required
                  fullWidth
                  size="small"
                  placeholder="+848141778178"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="number"
                />
              </Box>
            </Box>
            <Box mt={2}>
              <Typography variant="subtitle2">Password:</Typography>
              <Box>
                <TextField
                  required
                  fullWidth
                  size="small"
                  placeholder="Input password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Box>
            </Box>
            <Box mt={2}>
              <Typography variant="subtitle2">Confirm Password:</Typography>
              <Box>
                <TextField
                  required
                  fullWidth
                  size="small"
                  placeholder="Retype password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </Box>
            </Box>
            <Box mt={4}>
              <ButtonCustom
                fullWidth
                variant="contained"
                text={"Continue"}
                type="submit"
              />
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

export default SignUp;
