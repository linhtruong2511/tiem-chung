"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/map"), {
  ssr: false,
});

export function ContactSection() {
  return (
    <section id="lien-he" className="py-20 bg-gray-50 px-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Liên hệ với chúng tôi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chúng tôi luôn sẵn sàng hỗ trợ và tư vấn cho bạn về các dịch vụ tiêm
            chủng.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Cards */}
          <div className="space-y-6">
            <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle className="text-lg font-bold text-gray-900">
                  Điện thoại
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-2">
                <p className="text-gray-600">Hotline 24/7</p>
                <p className="text-xl font-bold text-emerald-600">1900-1234</p>
                <p className="text-gray-600">Tư vấn miễn phí</p>
                <p className="text-lg font-semibold text-gray-900">
                  (028) 3456-7890
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle className="text-lg font-bold text-gray-900">
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-2">
                <p className="text-gray-600">Gửi câu hỏi cho chúng tôi</p>
                <p className="text-emerald-600 font-medium">info@ankhang.com</p>
                <p className="text-gray-600">Hỗ trợ khách hàng</p>
                <p className="text-emerald-600 font-medium">
                  support@ankhang.com
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Address & Hours */}
          <div className="space-y-6">
            <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle className="text-lg font-bold text-gray-900">
                  Địa chỉ
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-2">
                <p className="text-gray-900 font-medium">
                  Trung Tâm Tiêm Chủng An Khang
                </p>
                <p className="text-gray-600">123 Đường ABC, Phường XYZ</p>
                <p className="text-gray-600">Quận 1, TP. Hồ Chí Minh</p>
                <p className="text-sm text-emerald-600 mt-3">
                  Gần bệnh viện ABC, đối diện trường học XYZ
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle className="text-lg font-bold text-gray-900">
                  Giờ làm việc
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Thứ 2 - Thứ 6:</span>
                  <span className="font-medium text-gray-900">
                    7:00 - 19:00
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Thứ 7:</span>
                  <span className="font-medium text-gray-900">
                    7:00 - 17:00
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Chủ nhật:</span>
                  <span className="font-medium text-gray-900">
                    8:00 - 16:00
                  </span>
                </div>
                <p className="text-sm text-emerald-600 text-center">
                  Hotline 24/7 cho trường hợp khẩn cấp
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Map & Social */}
          <div className="space-y-6">
            <Card className="bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-gray-900 text-center">
                  Bản đồ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                  <Map />
                </div>
                <p className="text-sm text-gray-600 text-center mt-3">
                  Nhấn để xem đường đi chi tiết
                </p>
              </CardContent>
            </Card>

            <Card className="bg-emerald-50 border-emerald-200">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-emerald-800 text-center">
                  Theo dõi chúng tôi
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center gap-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                    <Facebook className="h-5 w-5 text-white" />
                  </div>
                  <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-700 transition-colors">
                    <Instagram className="h-5 w-5 text-white" />
                  </div>
                  <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-700 transition-colors">
                    <Youtube className="h-5 w-5 text-white" />
                  </div>
                </div>
                <p className="text-sm text-emerald-700 text-center mt-4">
                  Cập nhật thông tin y tế và chương trình khuyến mãi
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
