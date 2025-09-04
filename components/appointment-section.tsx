import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Phone, MapPin } from "lucide-react";

export function AppointmentSection() {
  return (
    <section id="appointment" className="py-20 bg-white px-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Đặt lịch hẹn tiêm chủng
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Đặt lịch hẹn dễ dàng và nhanh chóng. Chúng tôi sẽ liên hệ xác nhận
            trong vòng 24 giờ.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Appointment Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Thông tin đặt lịch
              </CardTitle>
              <CardDescription>
                Vui lòng điền đầy đủ thông tin để chúng tôi có thể hỗ trợ bạn
                tốt nhất
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Họ và tên *</Label>
                  <Input id="fullName" placeholder="Nhập họ và tên" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Số điện thoại *</Label>
                  <Input id="phone" placeholder="Nhập số điện thoại" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Nhập địa chỉ email"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Ngày mong muốn</Label>
                  <Input id="date" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Giờ mong muốn</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn giờ" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="08:00">08:00</SelectItem>
                      <SelectItem value="09:00">09:00</SelectItem>
                      <SelectItem value="10:00">10:00</SelectItem>
                      <SelectItem value="11:00">11:00</SelectItem>
                      <SelectItem value="14:00">14:00</SelectItem>
                      <SelectItem value="15:00">15:00</SelectItem>
                      <SelectItem value="16:00">16:00</SelectItem>
                      <SelectItem value="17:00">17:00</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="service">Dịch vụ cần sử dụng</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn dịch vụ" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="covid">Vaccine COVID-19</SelectItem>
                    <SelectItem value="flu">Vaccine cúm</SelectItem>
                    <SelectItem value="hpv">Vaccine HPV</SelectItem>
                    <SelectItem value="hepatitis">
                      Vaccine viêm gan B
                    </SelectItem>
                    <SelectItem value="children">Tiêm chủng trẻ em</SelectItem>
                    <SelectItem value="travel">Vaccine du lịch</SelectItem>
                    <SelectItem value="other">Khác</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Ghi chú</Label>
                <Textarea
                  id="notes"
                  placeholder="Thông tin bổ sung (tiền sử bệnh, dị ứng, thuốc đang sử dụng...)"
                  rows={4}
                />
              </div>

              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-lg py-3">
                Đặt lịch hẹn ngay
              </Button>

              <p className="text-sm text-gray-500 text-center">
                * Chúng tôi sẽ liên hệ xác nhận lịch hẹn trong vòng 24 giờ
              </p>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-emerald-50 border-emerald-200">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-emerald-800">
                  Thông tin liên hệ
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-emerald-600" />
                  <div>
                    <p className="font-medium text-emerald-800">Hotline</p>
                    <p className="text-emerald-700">1900-1234</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-emerald-600" />
                  <div>
                    <p className="font-medium text-emerald-800">Địa chỉ</p>
                    <p className="text-emerald-700">
                      123 Đường ABC, Quận 1, TP.HCM
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-emerald-600" />
                  <div>
                    <p className="font-medium text-emerald-800">Giờ làm việc</p>
                    <p className="text-emerald-700">
                      Thứ 2 - Chủ nhật: 7:00 - 19:00
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Quy trình tiêm chủng
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-emerald-600 font-bold text-sm">
                        1
                      </span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Đăng ký và khám sàng lọc
                      </h4>
                      <p className="text-sm text-gray-600">
                        Kiểm tra sức khỏe và tư vấn vaccine phù hợp
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-emerald-600 font-bold text-sm">
                        2
                      </span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Tiêm chủng</h4>
                      <p className="text-sm text-gray-600">
                        Thực hiện tiêm chủng theo đúng quy trình
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-emerald-600 font-bold text-sm">
                        3
                      </span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Theo dõi sau tiêm
                      </h4>
                      <p className="text-sm text-gray-600">
                        Quan sát 15-30 phút và tư vấn chăm sóc
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
