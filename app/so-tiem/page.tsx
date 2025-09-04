"use client";
import { Button } from "@/components/ui/button";
import { PhieuTiem } from "@/types/phieu-tiem";
import { PhieuTiemDetail } from "@/types/phieu-tiem-detail";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { mock } from "node:test";
import React, { useState } from "react";

const mockData: PhieuTiem[] = [
  {
    id: 54,
    ngayTao: new Date("2025-08-17T23:17:07.99"),
    ghiChu: "Tiêm phòng uốn ván cho thai phụ",
    trangThaiThanhToan: "Chưa thanh toán",
    diaDiemTiem: "Tại cơ sở",
    viTriTiem: "Cánh tay trái",
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
  },
  {
    id: 54,
    ngayTao: new Date("2025-08-17T23:17:07.99"),
    ghiChu: "Tiêm phòng uốn ván cho thai phụ",
    trangThaiThanhToan: "Chưa thanh toán",
    diaDiemTiem: "Tại cơ sở",
    viTriTiem: "Cánh tay trái",
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
  },
  {
    id: 54,
    ngayTao: new Date("2025-08-17T23:17:07.99"),
    ghiChu: "Tiêm phòng uốn ván cho thai phụ",
    trangThaiThanhToan: "Chưa thanh toán",
    diaDiemTiem: "Tại cơ sở",
    viTriTiem: "Cánh tay trái",
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
  },
  {
    id: 54,
    ngayTao: new Date("2025-08-17T23:17:07.99"),
    ghiChu: "Tiêm phòng uốn ván cho thai phụ",
    trangThaiThanhToan: "Chưa thanh toán",
    diaDiemTiem: "Tại cơ sở",
    viTriTiem: "Cánh tay trái",
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
  },
  {
    id: 54,
    ngayTao: new Date("2025-08-17T23:17:07.99"),
    ghiChu: "Tiêm phòng uốn ván cho thai phụ",
    trangThaiThanhToan: "Chưa thanh toán",
    diaDiemTiem: "Tại cơ sở",
    viTriTiem: "Cánh tay trái",
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
  },
  {
    id: 54,
    ngayTao: new Date("2025-08-17T23:17:07.99"),
    ghiChu: "Tiêm phòng uốn ván cho thai phụ",
    trangThaiThanhToan: "Chưa thanh toán",
    diaDiemTiem: "Tại cơ sở",
    viTriTiem: "Cánh tay trái",
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
      }
    ],
  },
];
const SoTiem = () => {
  const [count, setCount] = useState<number>(mockData.length);
  return (
    <div className="items-center">
      <div className="text-left">
        <Link href="/" className="p-2 flex gap-2 cursor-pointer">
          <ArrowLeft /> Quay lại.
        </Link>
      </div>
      <h2 className="text-3xl my-5 font-semibold text-center">
        Số lần thực hiện tiêm tại cơ sở: {count}
      </h2>
      <ul className="mx-3 md:mx-0">
        {mockData.map((item) => (
          
            <li key={item.id} className="flex items-center justify-between gap-16 relative border-l-2 border-gray-800 max-w-[500px] mx-auto p-5">
              <div>
                <time className="md:absolute text-emerald-500 top-1/3 -left-25">
                  {item.ngayTao.toLocaleDateString("vi-VN")}
                </time>
                <h3 className="font-semibold text-gray-700">
                  {item.dichVu.ten}
                </h3>
                <p className="flex gap-2 text-gray-500">
                  <strong>Vaccines: </strong>
                  <span className="flex flex-col">
                    {item.vaccines.map((v) => (
                      <span>{v.ten}</span>
                    ))}
                  </span>
                </p>
                <span className="absolute h-5 w-5 rounded-full bg-emerald-500 block top-1/3 -left-[11px]"></span>
              </div>
              <Button
                onClick={() => redirect("so-tiem/1")}
                className="mt-5 cursor-pointer"
              >
                Xem chi tiết
              </Button>
            </li>
          
        ))}
      </ul>
    </div>
  );
};

export default SoTiem;
