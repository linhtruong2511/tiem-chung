import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">+</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Trung Tâm Tiêm Chủng</h3>
                <p className="text-emerald-400 text-sm">An Khang</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Trung tâm tiêm chủng uy tín với hơn 15 năm kinh nghiệm, cam kết mang đến dịch vụ chăm sóc sức khỏe tốt
              nhất cho cộng đồng.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Liên kết nhanh</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#trang-chu" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Trang chủ
                </a>
              </li>
              <li>
                <a href="#dich-vu" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Dịch vụ
                </a>
              </li>
              <li>
                <a href="#vaccine" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Thông tin Vaccine
                </a>
              </li>
              <li>
                <a href="#lien-he" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Liên hệ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Chính sách bảo mật
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Dịch vụ</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Tiêm chủng trẻ em
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Tiêm chủng người lớn
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Vaccine du lịch
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Tiêm chủng doanh nghiệp
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Tư vấn miễn phí
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Thông tin liên hệ</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">123 Đường ABC, Quận 1, TP.HCM</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                <span className="text-gray-300">Hotline: 1900-1234</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                <span className="text-gray-300">info@ankhang.com</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">T2-CN: 7:00 - 19:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© 2024 Trung Tâm Tiêm Chủng An Khang. Tất cả quyền được bảo lưu.</p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                Điều khoản sử dụng
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                Chính sách bảo mật
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
