export interface NhanVien {
  id?: number;
  hoTen: string;
  chucVu: string;
  gioiTinh: string | null;
  soDienThoai?: string | null;
  email?: string | null;
  ngaySinh?: Date;
  diaChi?: string;
  ngayTao?: Date | null;
  anh?: string | null;
}