"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Search,
  Plus,
  Filter,
  MoreHorizontal,
  Edit,
  Trash2,
  Eye,
  Calendar,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

// Mock data for customers
const mockCustomers = [
  {
    id: 1,
    name: "Nguyễn Văn An",
    phone: "0901234567",
    email: "nguyenvanan@email.com",
    birthDate: "1990-05-15",
    gender: "Nam",
    address: "123 Đường ABC, Quận 1, TP.HCM",
    status: "active",
    lastVisit: "2024-01-15",
    totalVisits: 5,
  },
  {
    id: 2,
    name: "Trần Thị Bình",
    phone: "0912345678",
    email: "tranthibinh@email.com",
    birthDate: "1985-08-22",
    gender: "Nữ",
    address: "456 Đường XYZ, Quận 3, TP.HCM",
    status: "active",
    lastVisit: "2024-01-10",
    totalVisits: 3,
  },
  {
    id: 3,
    name: "Lê Minh Cường",
    phone: "0923456789",
    email: "leminhcuong@email.com",
    birthDate: "1992-12-03",
    gender: "Nam",
    address: "789 Đường DEF, Quận 7, TP.HCM",
    status: "inactive",
    lastVisit: "2023-11-20",
    totalVisits: 2,
  },
  {
    id: 4,
    name: "Phạm Thị Dung",
    phone: "0934567890",
    email: "phamthidung@email.com",
    birthDate: "1988-03-18",
    gender: "Nữ",
    address: "321 Đường GHI, Quận 5, TP.HCM",
    status: "active",
    lastVisit: "2024-01-12",
    totalVisits: 7,
  },
  {
    id: 5,
    name: "Hoàng Văn Em",
    phone: "0945678901",
    email: "hoangvanem@email.com",
    birthDate: "1995-07-25",
    gender: "Nam",
    address: "654 Đường JKL, Quận 2, TP.HCM",
    status: "active",
    lastVisit: "2024-01-08",
    totalVisits: 1,
  },
  {
    id: 6,
    name: "Võ Thị Hoa",
    phone: "0956789012",
    email: "vothihoa@email.com",
    birthDate: "1993-09-12",
    gender: "Nữ",
    address: "987 Đường MNO, Quận 4, TP.HCM",
    status: "active",
    lastVisit: "2024-01-05",
    totalVisits: 4,
  },
  {
    id: 7,
    name: "Đặng Văn Giang",
    phone: "0967890123",
    email: "dangvangiang@email.com",
    birthDate: "1987-11-30",
    gender: "Nam",
    address: "246 Đường PQR, Quận 6, TP.HCM",
    status: "active",
    lastVisit: "2024-01-03",
    totalVisits: 6,
  },
  {
    id: 8,
    name: "Bùi Thị Kim",
    phone: "0978901234",
    email: "buithikim@email.com",
    birthDate: "1991-04-08",
    gender: "Nữ",
    address: "135 Đường STU, Quận 8, TP.HCM",
    status: "inactive",
    lastVisit: "2023-12-15",
    totalVisits: 2,
  },
  {
    id: 9,
    name: "Lý Văn Long",
    phone: "0989012345",
    email: "lyvanlong@email.com",
    birthDate: "1989-06-20",
    gender: "Nam",
    address: "579 Đường VWX, Quận 9, TP.HCM",
    status: "active",
    lastVisit: "2024-01-01",
    totalVisits: 8,
  },
  {
    id: 10,
    name: "Trương Thị Mai",
    phone: "0990123456",
    email: "truongthimai@email.com",
    birthDate: "1994-02-14",
    gender: "Nữ",
    address: "864 Đường YZ, Quận 10, TP.HCM",
    status: "active",
    lastVisit: "2023-12-28",
    totalVisits: 3,
  },
]

export default function CustomersPage() {
  const [customers, setCustomers] = useState(mockCustomers)
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("name")
  const [filterStatus, setFilterStatus] = useState("all")
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)

  const [ageRange, setAgeRange] = useState("all")
  const [gender, setGender] = useState("all")
  const [visitRange, setVisitRange] = useState("all")
  const [dateRange, setDateRange] = useState("all")

  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(5)

  const [newCustomer, setNewCustomer] = useState({
    name: "",
    phone: "",
    email: "",
    birthDate: "",
    gender: "",
    address: "",
  })

  // Calculate age from birth date
  const calculateAge = (birthDate: string) => {
    const today = new Date()
    const birth = new Date(birthDate)
    let age = today.getFullYear() - birth.getFullYear()
    const monthDiff = today.getMonth() - birth.getMonth()
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--
    }
    return age
  }

  // Filter and sort customers
  const filteredCustomers = customers
    .filter((customer) => {
      const matchesSearch =
        customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.phone.includes(searchTerm) ||
        customer.email.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesStatus = filterStatus === "all" || customer.status === filterStatus

      const age = calculateAge(customer.birthDate)
      const matchesAge =
        ageRange === "all" ||
        (ageRange === "0-18" && age <= 18) ||
        (ageRange === "19-35" && age >= 19 && age <= 35) ||
        (ageRange === "36-60" && age >= 36 && age <= 60) ||
        (ageRange === "60+" && age > 60)

      const matchesGender = gender === "all" || customer.gender === gender

      const matchesVisits =
        visitRange === "all" ||
        (visitRange === "1-3" && customer.totalVisits >= 1 && customer.totalVisits <= 3) ||
        (visitRange === "4-10" && customer.totalVisits >= 4 && customer.totalVisits <= 10) ||
        (visitRange === "10+" && customer.totalVisits > 10)

      const lastVisitDate = new Date(customer.lastVisit)
      const today = new Date()
      const daysDiff = Math.floor((today.getTime() - lastVisitDate.getTime()) / (1000 * 60 * 60 * 24))
      const matchesDate =
        dateRange === "all" ||
        (dateRange === "7" && daysDiff <= 7) ||
        (dateRange === "30" && daysDiff <= 30) ||
        (dateRange === "90" && daysDiff <= 90) ||
        (dateRange === "365" && daysDiff <= 365)

      return matchesSearch && matchesStatus && matchesAge && matchesGender && matchesVisits && matchesDate
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name)
        case "lastVisit":
          return new Date(b.lastVisit).getTime() - new Date(a.lastVisit).getTime()
        case "totalVisits":
          return b.totalVisits - a.totalVisits
        case "age":
          return calculateAge(a.birthDate) - calculateAge(b.birthDate)
        default:
          return 0
      }
    })

  const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const paginatedCustomers = filteredCustomers.slice(startIndex, endIndex)

  // Reset to first page when filters change
  const handleFilterChange = () => {
    setCurrentPage(1)
  }

  const handleCreateCustomer = () => {
    const customer = {
      id: customers.length + 1,
      ...newCustomer,
      status: "active" as const,
      lastVisit: new Date().toISOString().split("T")[0],
      totalVisits: 0,
    }
    setCustomers([...customers, customer])
    setNewCustomer({
      name: "",
      phone: "",
      email: "",
      birthDate: "",
      gender: "",
      address: "",
    })
    setIsCreateModalOpen(false)
  }

  const getStatusBadge = (status: string) => {
    return status === "active" ? (
      <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100">Hoạt động</Badge>
    ) : (
      <Badge variant="secondary">Không hoạt động</Badge>
    )
  }

  return (
    <div>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Tổng khách hàng</p>
                <p className="text-2xl font-bold text-gray-900">{customers.length}</p>
              </div>
              <div className="h-12 w-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-emerald-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Khách hàng hoạt động</p>
                <p className="text-2xl font-bold text-gray-900">
                  {customers.filter((c) => c.status === "active").length}
                </p>
              </div>
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Eye className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Khách hàng mới tháng này</p>
                <p className="text-2xl font-bold text-gray-900">12</p>
              </div>
              <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Plus className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Tổng lượt tiêm</p>
                <p className="text-2xl font-bold text-gray-900">
                  {customers.reduce((sum, c) => sum + c.totalVisits, 0)}
                </p>
              </div>
              <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Calendar className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
        {/* Advanced Search Panel */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-lg font-semibold flex items-center">
              <Filter className="h-5 w-5 mr-2 text-emerald-600" />
              Bộ lọc nâng cao
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Age Range Filter */}
            <div>
              <Label className="text-sm font-medium text-gray-700">Độ tuổi</Label>
              <Select
                value={ageRange}
                onValueChange={(value) => {
                  setAgeRange(value)
                  handleFilterChange()
                }}
              >
                <SelectTrigger className="w-full mt-1">
                  <SelectValue placeholder="Chọn độ tuổi" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả độ tuổi</SelectItem>
                  <SelectItem value="0-18">0-18 tuổi</SelectItem>
                  <SelectItem value="19-35">19-35 tuổi</SelectItem>
                  <SelectItem value="36-60">36-60 tuổi</SelectItem>
                  <SelectItem value="60+">Trên 60 tuổi</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Gender Filter */}
            <div>
              <Label className="text-sm font-medium text-gray-700">Giới tính</Label>
              <Select
                value={gender}
                onValueChange={(value) => {
                  setGender(value)
                  handleFilterChange()
                }}
              >
                <SelectTrigger className="w-full mt-1">
                  <SelectValue placeholder="Chọn giới tính" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả</SelectItem>
                  <SelectItem value="Nam">Nam</SelectItem>
                  <SelectItem value="Nữ">Nữ</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Visit Range Filter */}
            <div>
              <Label className="text-sm font-medium text-gray-700">Số lần khám</Label>
              <Select
                value={visitRange}
                onValueChange={(value) => {
                  setVisitRange(value)
                  handleFilterChange()
                }}
              >
                <SelectTrigger className="w-full mt-1">
                  <SelectValue placeholder="Chọn số lần khám" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả</SelectItem>
                  <SelectItem value="1-3">1-3 lần</SelectItem>
                  <SelectItem value="4-10">4-10 lần</SelectItem>
                  <SelectItem value="10+">Trên 10 lần</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Date Range Filter */}
            <div>
              <Label className="text-sm font-medium text-gray-700">Khoảng thời gian khám</Label>
              <Select
                value={dateRange}
                onValueChange={(value) => {
                  setDateRange(value)
                  handleFilterChange()
                }}
              >
                <SelectTrigger className="w-full mt-1">
                  <SelectValue placeholder="Chọn thời gian" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả thời gian</SelectItem>
                  <SelectItem value="7">7 ngày qua</SelectItem>
                  <SelectItem value="30">30 ngày qua</SelectItem>
                  <SelectItem value="90">3 tháng qua</SelectItem>
                  <SelectItem value="365">1 năm qua</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Reset Filters */}
            <Button
              variant="outline"
              className="w-full bg-transparent"
              onClick={() => {
                setAgeRange("all")
                setGender("all")
                setVisitRange("all")
                setDateRange("all")
                setFilterStatus("all")
                setSearchTerm("")
                handleFilterChange()
              }}
            >
              Xóa bộ lọc
            </Button>
          </CardContent>
        </Card>

        {/* Main Content */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <CardTitle className="text-xl font-semibold">Danh Sách Khách Hàng ({filteredCustomers.length})</CardTitle>

              {/* Tools */}
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Tìm kiếm khách hàng..."
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value)
                      handleFilterChange()
                    }}
                    className="pl-10 w-full sm:w-64"
                  />
                </div>

                {/* Create Button */}
                <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-emerald-600 hover:bg-emerald-700 w-full sm:w-auto">
                      <Plus className="h-4 w-4 mr-2" />
                      Thêm khách hàng
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Thêm Khách Hàng Mới</DialogTitle>
                      <DialogDescription>Nhập thông tin khách hàng mới vào hệ thống</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid gap-2">
                        <Label htmlFor="name">Họ và tên *</Label>
                        <Input
                          id="name"
                          value={newCustomer.name}
                          onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })}
                          placeholder="Nhập họ và tên"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="phone">Số điện thoại *</Label>
                        <Input
                          id="phone"
                          value={newCustomer.phone}
                          onChange={(e) => setNewCustomer({ ...newCustomer, phone: e.target.value })}
                          placeholder="Nhập số điện thoại"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={newCustomer.email}
                          onChange={(e) => setNewCustomer({ ...newCustomer, email: e.target.value })}
                          placeholder="Nhập email"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="birthDate">Ngày sinh</Label>
                        <Input
                          id="birthDate"
                          type="date"
                          value={newCustomer.birthDate}
                          onChange={(e) => setNewCustomer({ ...newCustomer, birthDate: e.target.value })}
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="gender">Giới tính</Label>
                        <Select
                          value={newCustomer.gender}
                          onValueChange={(value) => setNewCustomer({ ...newCustomer, gender: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Chọn giới tính" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Nam">Nam</SelectItem>
                            <SelectItem value="Nữ">Nữ</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="address">Địa chỉ</Label>
                        <Input
                          id="address"
                          value={newCustomer.address}
                          onChange={(e) => setNewCustomer({ ...newCustomer, address: e.target.value })}
                          placeholder="Nhập địa chỉ"
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="button" variant="outline" onClick={() => setIsCreateModalOpen(false)}>
                        Hủy
                      </Button>
                      <Button
                        type="button"
                        onClick={handleCreateCustomer}
                        className="bg-emerald-600 hover:bg-emerald-700"
                        disabled={!newCustomer.name || !newCustomer.phone}
                      >
                        Thêm khách hàng
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </CardHeader>

          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Họ và tên</TableHead>
                    <TableHead>Liên hệ</TableHead>
                    <TableHead>Tuổi/Giới tính</TableHead>
                    <TableHead>Địa chỉ</TableHead>
                    <TableHead>Trạng thái</TableHead>
                    <TableHead>Lần khám cuối</TableHead>
                    <TableHead>Số lần khám</TableHead>
                    <TableHead className="text-right">Thao tác</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedCustomers.map((customer) => (
                    <TableRow key={customer.id}>
                      <TableCell className="font-medium">{customer.name}</TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="text-sm">{customer.phone}</div>
                          <div className="text-xs text-gray-500">{customer.email}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="text-sm">{calculateAge(customer.birthDate)} tuổi</div>
                          <div className="text-xs text-gray-500">{customer.gender}</div>
                        </div>
                      </TableCell>
                      <TableCell className="max-w-xs truncate">{customer.address}</TableCell>
                      <TableCell>{getStatusBadge(customer.status)}</TableCell>
                      <TableCell>{new Date(customer.lastVisit).toLocaleDateString("vi-VN")}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{customer.totalVisits} lần</Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Eye className="mr-2 h-4 w-4" />
                              Xem chi tiết
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit className="mr-2 h-4 w-4" />
                              Chỉnh sửa
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              <Trash2 className="mr-2 h-4 w-4" />
                              Xóa
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {filteredCustomers.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-500">Không tìm thấy khách hàng nào</p>
              </div>
            )}

            {filteredCustomers.length > 0 && (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 pt-4 border-t">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-700">Hiển thị</span>
                  <Select
                    value={itemsPerPage.toString()}
                    onValueChange={(value) => {
                      setItemsPerPage(Number(value))
                      setCurrentPage(1)
                    }}
                  >
                    <SelectTrigger className="w-20">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">5</SelectItem>
                      <SelectItem value="10">10</SelectItem>
                      <SelectItem value="20">20</SelectItem>
                      <SelectItem value="50">50</SelectItem>
                    </SelectContent>
                  </Select>
                  <span className="text-sm text-gray-700">trên {filteredCustomers.length} kết quả</span>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Trước
                  </Button>

                  <div className="flex items-center gap-1">
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      let pageNumber
                      if (totalPages <= 5) {
                        pageNumber = i + 1
                      } else if (currentPage <= 3) {
                        pageNumber = i + 1
                      } else if (currentPage >= totalPages - 2) {
                        pageNumber = totalPages - 4 + i
                      } else {
                        pageNumber = currentPage - 2 + i
                      }

                      return (
                        <Button
                          key={pageNumber}
                          variant={currentPage === pageNumber ? "default" : "outline"}
                          size="sm"
                          className={currentPage === pageNumber ? "bg-emerald-600 hover:bg-emerald-700" : ""}
                          onClick={() => setCurrentPage(pageNumber)}
                        >
                          {pageNumber}
                        </Button>
                      )
                    })}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                  >
                    Sau
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
