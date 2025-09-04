"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Bar,
  BarChart,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Calendar,
  Users,
  Syringe,
  TrendingUp,
  Download,
  Filter,
} from "lucide-react";

const monthlyData = [
  { month: "T1", appointments: 245, completed: 230 },
  { month: "T2", appointments: 312, completed: 298 },
  { month: "T3", appointments: 428, completed: 415 },
  { month: "T4", appointments: 389, completed: 375 },
  { month: "T5", appointments: 456, completed: 442 },
  { month: "T6", appointments: 523, completed: 510 },
];

const vaccineData = [
  { name: "COVID-19", value: 35, color: "#10b981" },
  { name: "Cúm", value: 25, color: "#3b82f6" },
  { name: "Viêm gan B", value: 20, color: "#f59e0b" },
  { name: "Uốn ván", value: 12, color: "#ef4444" },
  { name: "Khác", value: 8, color: "#8b5cf6" },
];

const recentAppointments = [
  {
    id: "001",
    name: "Nguyễn Văn An",
    vaccine: "COVID-19",
    time: "09:00",
    status: "Hoàn thành",
  },
  {
    id: "002",
    name: "Trần Thị Bình",
    vaccine: "Cúm",
    time: "09:30",
    status: "Đang chờ",
  },
  {
    id: "003",
    name: "Lê Minh Cường",
    vaccine: "Viêm gan B",
    time: "10:00",
    status: "Hoàn thành",
  },
  {
    id: "004",
    name: "Phạm Thị Dung",
    vaccine: "COVID-19",
    time: "10:30",
    status: "Đã hủy",
  },
  {
    id: "005",
    name: "Hoàng Văn Em",
    vaccine: "Uốn ván",
    time: "11:00",
    status: "Đang chờ",
  },
];

export default function AdminDashboard() {
  return (
    <>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Tổng lịch hẹn hôm nay
            </CardTitle>
            <Calendar className="h-4 w-4 text-emerald-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-gray-600">+12% so với hôm qua</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Đã tiêm thành công
            </CardTitle>
            <Syringe className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-gray-600">75% tỷ lệ hoàn thành</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Bệnh nhân mới</CardTitle>
            <Users className="h-4 w-4 text-amber-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-gray-600">+3 so với hôm qua</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Doanh thu tháng
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">125M</div>
            <p className="text-xs text-gray-600">+8.2% so với tháng trước</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="hidden md:grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
        {/* Bar Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Thống kê lịch hẹn theo tháng</CardTitle>
            <CardDescription>
              Số lượng lịch hẹn và hoàn thành trong 6 tháng qua
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                appointments: {
                  label: "Lịch hẹn",
                  color: "#3b82f6",
                },
                completed: {
                  label: "Hoàn thành",
                  color: "#10b981",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="appointments" fill="#3b82f6" radius={4} />
                  <Bar dataKey="completed" fill="#10b981" radius={4} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Pie Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Phân bố loại vaccine</CardTitle>
            <CardDescription>
              Tỷ lệ các loại vaccine được tiêm trong tháng
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                value: {
                  label: "Tỷ lệ",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={vaccineData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {vaccineData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload;
                        return (
                          <div className="bg-white p-3 border rounded-lg shadow-lg">
                            <p className="font-medium">{data.name}</p>
                            <p className="text-sm text-gray-600">
                              {data.value}%
                            </p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
            <div className="flex flex-wrap gap-2 mt-4">
              {vaccineData.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm text-gray-600">{item.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Appointments Table */}
      <Card>
        <CardHeader>
          <CardTitle>Lịch hẹn gần đây</CardTitle>
          <CardDescription>
            Danh sách lịch hẹn trong ngày hôm nay
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium text-gray-900">
                    Mã số
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">
                    Họ tên
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">
                    Loại dịch vụ
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">
                    Giờ hẹn
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">
                    Trạng thái
                  </th>
                </tr>
              </thead>
              <tbody>
                {recentAppointments.map((appointment) => (
                  <tr
                    key={appointment.id}
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="py-3 px-4 text-sm font-mono">
                      {appointment.id}
                    </td>
                    <td className="py-3 px-4 text-sm font-medium">
                      {appointment.name}
                    </td>
                    <td className="py-3 px-4 text-sm">{appointment.vaccine}</td>
                    <td className="py-3 px-4 text-sm">{appointment.time}</td>
                    <td className="py-3 px-4">
                      <Badge
                        variant={
                          appointment.status === "Hoàn thành"
                            ? "default"
                            : appointment.status === "Đang chờ"
                            ? "secondary"
                            : "destructive"
                        }
                        className={
                          appointment.status === "Hoàn thành"
                            ? "bg-emerald-100 text-emerald-800 hover:bg-emerald-100"
                            : appointment.status === "Đang chờ"
                            ? "bg-amber-100 text-amber-800 hover:bg-amber-100"
                            : ""
                        }
                      >
                        {appointment.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
