import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

const vaccines = [
  {
    name: "Vaccine COVID-19",
    type: "Phòng bệnh COVID-19",
    efficacy: "95%",
    ageGroup: "Từ 12 tuổi trở lên",
    description: "Vaccine phòng COVID-19 giúp tạo miễn dịch chống lại virus SARS-CoV-2",
    sideEffects: ["Đau nhẹ tại chỗ tiêm", "Sốt nhẹ", "Mệt mỏi"],
    schedule: "Tiêm 2 mũi cách nhau 3-4 tuần",
  },
  {
    name: "Vaccine cúm",
    type: "Phòng bệnh cúm mùa",
    efficacy: "70-90%",
    ageGroup: "Từ 6 tháng tuổi",
    description: "Vaccine phòng cúm mùa, được cập nhật hàng năm theo khuyến cáo WHO",
    sideEffects: ["Đau nhẹ tại chỗ tiêm", "Sốt nhẹ trong 1-2 ngày"],
    schedule: "Tiêm 1 mũi mỗi năm",
  },
  {
    name: "Vaccine HPV",
    type: "Phòng ung thư cổ tử cung",
    efficacy: "99%",
    ageGroup: "9-45 tuổi",
    description: "Vaccine phòng virus HPV gây ung thư cổ tử cung và các bệnh lý khác",
    sideEffects: ["Đau tại chỗ tiêm", "Chóng mặt nhẹ"],
    schedule: "Tiêm 2-3 mũi trong 6 tháng",
  },
  {
    name: "Vaccine viêm gan B",
    type: "Phòng viêm gan B",
    efficacy: "95%",
    ageGroup: "Mọi lứa tuổi",
    description: "Vaccine phòng virus viêm gan B, bảo vệ gan khỏi tổn thương",
    sideEffects: ["Đau nhẹ tại chỗ tiêm", "Mệt mỏi nhẹ"],
    schedule: "Tiêm 3 mũi trong 6 tháng",
  },
]

export function VaccineInfoSection() {
  return (
    <section id="vaccine" className="py-20 bg-gray-50 px-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Thông tin chi tiết về Vaccine</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tìm hiểu thông tin chi tiết về các loại vaccine, hiệu quả, tác dụng phụ và lịch tiêm khuyến cáo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {vaccines.map((vaccine, index) => (
            <Card key={index} className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl font-bold text-gray-900 mb-2">{vaccine.name}</CardTitle>
                    <CardDescription className="text-gray-600 mb-3">{vaccine.description}</CardDescription>
                  </div>
                  <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                    {vaccine.efficacy} hiệu quả
                  </Badge>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">{vaccine.type}</Badge>
                  <Badge variant="outline">{vaccine.ageGroup}</Badge>
                </div>
              </CardHeader>

              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="schedule">
                    <AccordionTrigger className="text-left">Lịch tiêm khuyến cáo</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-600">{vaccine.schedule}</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="side-effects">
                    <AccordionTrigger className="text-left">Tác dụng phụ có thể gặp</AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-1">
                        {vaccine.sideEffects.map((effect, effectIndex) => (
                          <li key={effectIndex} className="flex items-center text-gray-600">
                            <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                            {effect}
                          </li>
                        ))}
                      </ul>
                      <p className="text-sm text-gray-500 mt-3">
                        * Các tác dụng phụ thường nhẹ và tự khỏi trong 1-2 ngày
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
