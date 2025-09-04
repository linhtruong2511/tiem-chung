export interface KhachHang {
  id: number;
  hoTen: string;
  ngaySinh: Date | null;
  soDienThoai: string | null;
  email: string | null;
  diaChi: string | null;
  cccd: string | null;
  gioiTinh: string | null;
  tuoi: number;
  ngayTao: Date;
}