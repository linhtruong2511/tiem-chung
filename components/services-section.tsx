import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Syringe, Baby, Users, Heart, Shield, Clock } from "lucide-react"

const services = [
  {
    icon: Baby,
    title: "Tiêm chủng trẻ em",
    description: "Chương trình tiêm chủng đầy đủ theo khuyến cáo của Bộ Y tế cho trẻ từ 0-18 tuổi",
    features: ["Vaccine cơ bản", "Vaccine mở rộng", "Tư vấn lịch tiêm"],
  },
  {
    icon: Users,
    title: "Tiêm chủng người lớn",
    description: "Các loại vaccine phòng bệnh cho người lớn và người cao tuổi",
    features: ["Vaccine cúm", "Vaccine viêm gan B", "Vaccine phòng zona"],
  },
  {
    icon: Heart,
    title: "Tiêm chủng phụ nữ",
    description: "Chương trình tiêm chủng đặc biệt dành cho phụ nữ mang thai và cho con bú",
    features: ["Vaccine HPV", "Vaccine rubella", "Tư vấn tiền mang thai"],
  },
  {
    icon: Shield,
    title: "Vaccine du lịch",
    description: "Tiêm chủng phòng bệnh khi đi du lịch nước ngoài",
    features: ["Vaccine vàng da", "Vaccine tả", "Vaccine não mô cầu"],
  },
  {
    icon: Syringe,
    title: "Tiêm chủng doanh nghiệp",
    description: "Dịch vụ tiêm chủng tại doanh nghiệp cho nhân viên",
    features: ["Tiêm tại công ty", "Chương trình ưu đãi", "Báo cáo chi tiết"],
  },
  {
    icon: Clock,
    title: "Tiêm chủng khẩn cấp",
    description: "Dịch vụ tiêm chủng khẩn cấp sau phơi nhiễm",
    features: ["Vaccine dại", "Vaccine uốn ván", "Hỗ trợ 24/7"],
  },
]

export function ServicesSection() {
  return (
    <section id="dich-vu" className="py-20 bg-white px-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Dịch vụ tiêm chủng toàn diện</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chúng tôi cung cấp đầy đủ các dịch vụ tiêm chủng từ cơ bản đến chuyên sâu, phù hợp với mọi độ tuổi và nhu
            cầu của khách hàng.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-emerald-200"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-emerald-200 transition-colors">
                  <service.icon className="h-8 w-8 text-emerald-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
