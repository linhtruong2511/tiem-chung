"use client";
import { PhieuTiemDetail } from "@/types/phieu-tiem-detail";
import { use } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const mockData: PhieuTiemDetail = {
  id: 54,
  ngayTao: new Date("2025-08-17T23:17:07.99"),
  ghiChu: "Tiêm phòng uốn ván cho thai phụ",
  trangThaiThanhToan: "Chưa thanh toán",
  diaDiemTiem: "Tại cơ sở",
  viTriTiem: "Cánh tay trái",
  thanhToan: null,
  nhanVienInfo: {
    hoTen: "Vũ Thị F",
    chucVu: "Bác sĩ nội trú/định hướng/chuyên khoa",
    gioiTinh: "Nữ",
  },
  phieuKhamSangLoc: {
    phieu: {
      id: 38,
      thoiGianTao: new Date("2025-08-17T23:07:35.45"),
      maKH: 2,
      maNVKham: 6,
      duDieuKien: true,
      lyDoHoan: "",
      huyetAp: "118/78",
      mach: "72",
      thanNhiet: "36.6",
      ghiChu: "Khỏe",
    },
    tenKhachHang: null,
    tenNhanVien: "Vũ Thị F",
    khachHang: {
      id: 2,
      hoTen: "Phùng Quốc Bình",
      ngaySinh: null,
      soDienThoai: null,
      email: null,
      diaChi: null,
      cccd: null,
      gioiTinh: null,
      tuoi: 0,
      ngayTao: new Date("2025-08-16T17:39:49.383"),
    },
  },
  dichVu: {
    id: 2,
    ten: "Tiêm chủng người lớn",
    moTa: "Các loại vaccine phòng bệnh cho người lớn và người cao tuổi",
  },
  vaccines: [
    {
      id: 41,
      ten: "Vaccine sởi 1",
      hangSX: "Sanofi",
      donGia: 150000.0,
      tenLoai: null,
      donVi: "Liều",
      doTuoi: "1-5 tuổi",
    },
    {
      id: 43,
      ten: "Vaccine rubella 1",
      hangSX: "Sanofi",
      donGia: 140000.0,
      tenLoai: null,
      donVi: "Liều",
      doTuoi: "1-5 tuổi",
    },
  ],
};

export default function PhieuTiemDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  return (
    <>
      <Link className="p-2 flex items-center gap-2" href={"/so-tiem"}>
        <ArrowLeft /> Quay lại
      </Link>
      <div className="max-w-5xl mx-auto p-6 space-y-8">
        {/* Thông tin phiếu tiêm */}
        <Card className="shadow-lg rounded-2xl border-emerald-200">
          <CardHeader>
            <CardTitle className="text-2xl text-emerald-800">
              Thông tin phiếu tiêm #{mockData.id}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm">
                  <strong>Ngày tạo:</strong>{" "}
                  {mockData.ngayTao.toLocaleString("vi-VN")}
                </p>
                <p className="text-sm">
                  <strong>Ghi chú:</strong> {mockData.ghiChu}
                </p>
              </div>
              <div>
                <p className="text-sm">
                  <strong>Trạng thái thanh toán:</strong>{" "}
                  <Badge
                    variant={
                      mockData.trangThaiThanhToan === "Chưa thanh toán"
                        ? "destructive"
                        : "default"
                    }
                  >
                    {mockData.trangThaiThanhToan}
                  </Badge>
                </p>
                <p className="text-sm">
                  <strong>Địa điểm tiêm:</strong> {mockData.diaDiemTiem}
                </p>
                <p className="text-sm">
                  <strong>Vị trí tiêm:</strong> {mockData.viTriTiem}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Nhân viên */}
        <Card className="shadow-lg rounded-2xl border-emerald-200">
          <CardHeader>
            <CardTitle className="text-xl text-emerald-800">
              Nhân viên thực hiện
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-2">
            <p>
              <strong>Họ tên:</strong> {mockData.nhanVienInfo.hoTen}
            </p>
            <p>
              <strong>Chức vụ:</strong> {mockData.nhanVienInfo.chucVu}
            </p>
          </CardContent>
        </Card>

        {/* Khách hàng và phiếu khám sàng lọc */}
        <Card className="shadow-lg rounded-2xl border-emerald-200">
          <CardHeader>
            <CardTitle className="text-xl text-emerald-800">
              Thông tin khách hàng và khám sàng lọc
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-emerald-700">
                Thông tin khách hàng
              </h3>
              <div className="text-sm space-y-2 mt-2">
                <p>
                  <strong>Họ tên:</strong>{" "}
                  {mockData.phieuKhamSangLoc.khachHang.hoTen}
                </p>
                <p>
                  <strong>Mã KH:</strong> {mockData.phieuKhamSangLoc.phieu.maKH}
                </p>
                <p>
                  <strong>Ngày tạo hồ sơ:</strong>{" "}
                  {mockData.phieuKhamSangLoc.khachHang.ngayTao.toLocaleDateString(
                    "vi-VN"
                  )}
                </p>
                <p>
                  <strong>Tuổi:</strong>{" "}
                  {mockData.phieuKhamSangLoc.khachHang.tuoi || "N/A"}
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-emerald-700">
                Phiếu khám sàng lọc
              </h3>
              <div className="text-sm space-y-2 mt-2">
                <p>
                  <strong>Thời gian tạo:</strong>{" "}
                  {mockData.phieuKhamSangLoc.phieu.thoiGianTao.toLocaleString(
                    "vi-VN"
                  )}
                </p>
                <p>
                  <strong>Nhân viên khám:</strong>{" "}
                  {mockData.phieuKhamSangLoc.tenNhanVien}
                </p>
                <p>
                  <strong>Huyết áp:</strong>{" "}
                  {mockData.phieuKhamSangLoc.phieu.huyetAp}
                </p>
                <p>
                  <strong>Mạch:</strong> {mockData.phieuKhamSangLoc.phieu.mach}
                </p>
                <p>
                  <strong>Thân nhiệt:</strong>{" "}
                  {mockData.phieuKhamSangLoc.phieu.thanNhiet} °C
                </p>
                <p>
                  <strong>Đủ điều kiện:</strong>{" "}
                  <Badge
                    variant={
                      mockData.phieuKhamSangLoc.phieu.duDieuKien
                        ? "default"
                        : "destructive"
                    }
                  >
                    {mockData.phieuKhamSangLoc.phieu.duDieuKien
                      ? "Đủ điều kiện"
                      : "Không đủ điều kiện"}
                  </Badge>
                </p>
                <p>
                  <strong>Ghi chú:</strong>{" "}
                  {mockData.phieuKhamSangLoc.phieu.ghiChu || "N/A"}
                </p>
                {mockData.phieuKhamSangLoc.phieu.lyDoHoan && (
                  <p>
                    <strong>Lý do hoãn:</strong>{" "}
                    {mockData.phieuKhamSangLoc.phieu.lyDoHoan}
                  </p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Dịch vụ */}
        <Card className="shadow-lg rounded-2xl border-emerald-200">
          <CardHeader>
            <CardTitle className="text-xl text-emerald-800">Dịch vụ</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm font-semibold">{mockData.dichVu.ten}</p>
            <p className="text-sm text-gray-600">{mockData.dichVu.moTa}</p>
          </CardContent>
        </Card>

        {/* Vaccine */}
        <Card className="shadow-lg rounded-2xl border-emerald-200">
          <CardHeader>
            <CardTitle className="text-xl text-emerald-800">
              Danh sách vaccine
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Tên vaccine</TableHead>
                  <TableHead>Hãng SX</TableHead>
                  <TableHead>Đơn giá</TableHead>
                  <TableHead>Đơn vị</TableHead>
                  {/* TODO: Cập nhật thêm trường số lượng vào danh sách vaccine */}
                  <TableHead>Số lượng</TableHead>
                  <TableHead>Độ tuổi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockData.vaccines.map((v) => (
                  <TableRow key={v.id}>
                    <TableCell>{v.ten}</TableCell>
                    <TableCell>{v.hangSX}</TableCell>
                    <TableCell>{v.donGia.toLocaleString("vi-VN")} đ</TableCell>
                    <TableCell>{v.donVi}</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>{v.doTuoi}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="mt-4 text-sm font-semibold">
              Tổng chi phí:{" "}
              {mockData.vaccines
                .reduce((sum, v) => sum + v.donGia, 0)
                .toLocaleString("vi-VN")}{" "}
              đ
            </div>
          </CardContent>
        </Card>

        <div className="flex items-center gap-5 justify-end">
          {/* <Button variant={'destructive'}>Báo cáo số liệu</Button> */}
          <Button variant={"default"}>Thanh Toán Online</Button>
        </div>
      </div>
    </>
  );
}
