import { DichVu } from "./dich-vu";
import { Vaccine } from "./vaccine";

export interface PhieuTiem {
  id: number;
  ngayTao: Date;
  ghiChu: string;
  trangThaiThanhToan: string;
  diaDiemTiem: string;
  viTriTiem: string;
  dichVu: DichVu;
  vaccines: Vaccine[];
}