import { Button } from "@/components/ui/button"
import { Shield, Users, Award, Clock } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-emerald-50 to-white py-20 px-10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Sức khỏe của bạn, <span className="text-emerald-600">ưu tiên hàng đầu</span> của chúng tôi
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Khám phá các dịch vụ tiêm chủng an toàn và đáng tin cậy với đội ngũ y bác sĩ chuyên nghiệp. Đặt lịch hẹn
                ngay hôm nay để bảo vệ sức khỏe gia đình bạn.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-3">
                Đặt lịch hẹn ngay
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all duration-500 text-lg px-8 py-3 bg-transparent"
              >
                Tìm hiểu về Vaccine
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Shield className="h-8 w-8 text-emerald-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600">An toàn</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="h-8 w-8 text-emerald-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">50K+</div>
                <div className="text-sm text-gray-600">Khách hàng</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Award className="h-8 w-8 text-emerald-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">15+</div>
                <div className="text-sm text-gray-600">Năm kinh nghiệm</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Clock className="h-8 w-8 text-emerald-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Hỗ trợ</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/hero-img.jpg"
                alt="Bác sĩ chuyên nghiệp tại trung tâm tiêm chủng"
                className="rounded-2xl shadow-2xl w-full"
                width={700}
                height={400}
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-100 rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-emerald-200 rounded-full opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
