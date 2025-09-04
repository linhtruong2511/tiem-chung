import { KhachHang } from "./khach-hang";

export interface PhieuKhamSangLoc {
  phieu: {
    id: number;
    thoiGianTao: Date;
    maKH: number;
    maNVKham: number;
    duDieuKien: boolean;
    lyDoHoan: string;
    huyetAp: string;
    mach: string;
    thanNhiet: string;
    ghiChu: string;
  };
  tenKhachHang: string | null;
  tenNhanVien: string;
  khachHang: KhachHang;
}