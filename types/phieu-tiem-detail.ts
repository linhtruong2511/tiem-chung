import { DichVu } from "./dich-vu";
import { NhanVien } from "./nhan-vien";
import { PhieuKhamSangLoc } from "./phieu-kham-sang-loc";
import { Vaccine } from "./vaccine";

export interface PhieuTiemDetail {
  id: number;
  ngayTao: Date;
  ghiChu: string;
  trangThaiThanhToan: string;
  diaDiemTiem: string;
  viTriTiem: string;
  thanhToan: any; // không rõ loại dữ liệu này
  nhanVienInfo: NhanVien;
  phieuKhamSangLoc: PhieuKhamSangLoc;
  dichVu: DichVu;
  vaccines: Vaccine[];
}