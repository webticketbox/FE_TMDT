import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import { Box, Typography, Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import moment from "moment";
import { list } from "../../utils/api/payment";

export default function AdminRevenue() {
  const [listPayment, setListPayment] = useState([]);
  const columns = [
    {
      field: "nameEvent",
      headerName: "Tên sự kiện",
      width: 120,
      renderCell: (params) => params.row?.event?.name,
    },
    {
      field: "name",
      headerName: "Loại vé",
      width: 100,
    },
    {
      field: "price",
      headerName: "Mệnh giá",
      width: 120,
      valueGetter: (params) => {
        return params.value + " VNĐ";
      },
    },
    {
      field: "number",
      headerName: "Số lượng",
      width: 80,
    },
    {
      field: "amount",
      headerName: "Thanh toán",
      width: 120,
      valueGetter: (params) => {
        return params.value + " VNĐ";
      },
    },
    {
      field: "event",
      headerName: "Người Tổ chức",
      width: 120,
      valueGetter: (params) => {
        return params.value?.owner?.phone;
      },
    },
    {
      field: "user",
      headerName: "Người đặt",
      width: 120,
      valueGetter: (params) => {
        return params.value?.phone;
      },
    },
    {
      field: "createdAt",
      headerName: "Thời gian thanh toán",
      width: 180,
      valueGetter: (params) => {
        return moment(params.value).format("DD/MM/YYYY HH:mm:ss");
      },
    },
    {
      field: "",
      headerName: "Hoa hồng",
      width: 100,
      renderCell: (params) => (
        <Typography>{params.row?.event?.percent + "%"}</Typography>
      ),
    },

    {
      field: "name1",
      headerName: "Thu",
      width: 120,
      renderCell: (params) => (
        <Typography variant="subtitle2">
          {(
            (Number(params.row.amount) * Number(params.row.event.percent)) /
            100
          ).toFixed(2) + " VNĐ"}
        </Typography>
      ),
    },
  ];

  useEffect(() => {
    const getPayment = async () => {
      try {
        const res = await list();
        setListPayment(res.data?.map((i) => ({ id: i?._id, ...i })));
      } catch (error) {}
    };
    getPayment();
  }, []);

  return (
    <AdminLayout>
      <Box py={4} px={"8%"}>
        <Typography textAlign={"center"} variant="h4">
          Doanh thu
        </Typography>
        <Box mt={4} width={"100%"}>
          <Paper elevation={3} width={"100%"}>
            <Box p={2} height={"50vh"}>
              <DataGrid rows={listPayment} columns={columns} />
            </Box>
          </Paper>
        </Box>
      </Box>
    </AdminLayout>
  );
}
