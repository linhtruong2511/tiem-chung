"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  Edit,
  Trash2,
  Eye,
  Package,
  AlertTriangle,
  CheckCircle,
  Clock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

// Mock data for vaccines
const mockVaccines = [
  {
    id: 1,
    name: "Pfizer-BioNTech COVID-19",
    manufacturer: "Pfizer",
    type: "mRNA",
    ageGroup: "12+ tuổi",
    doses: 2,
    interval: "21 ngày",
    price: 500000,
    stock: 150,
    status: "available",
    description: "Vaccine COVID-19 dành cho người từ 12 tuổi trở lên",
    sideEffects: "Đau tại chỗ tiêm, mệt mỏi, đau đầu",
    contraindications: "Dị ứng với thành phần vaccine",
    storage: "2-8°C",
    expiry: "2024-12-31",
  },
  {
    id: 2,
    name: "Hepatitis B",
    manufacturer: "GSK",
    type: "Protein subunit",
    ageGroup: "Tất cả độ tuổi",
    doses: 3,
    interval: "0, 1, 6 tháng",
    price: 200000,
    stock: 75,
    status: "low_stock",
    description: "Vaccine phòng viêm gan B",
    sideEffects: "Đau nhẹ tại chỗ tiêm",
    contraindications: "Sốt cao, bệnh nặng",
    storage: "2-8°C",
    expiry: "2025-06-15",
  },
  {
    id: 3,
    name: "Influenza Quadrivalent",
    manufacturer: "Sanofi",
    type: "Inactivated",
    ageGroup: "6 tháng+",
    doses: 1,
    interval: "Hàng năm",
    price: 300000,
    stock: 0,
    status: "out_of_stock",
    description: "Vaccine cúm 4 chủng",
    sideEffects: "Đau tại chỗ tiêm, sốt nhẹ",
    contraindications: "Dị ứng trứng gà",
    storage: "2-8°C",
    expiry: "2024-10-30",
  },
  {
    id: 4,
    name: "Pneumococcal 13-valent",
    manufacturer: "Pfizer",
    type: "Conjugate",
    ageGroup: "2 tháng - 17 tuổi",
    doses: 4,
    interval: "2, 4, 6, 12-15 tháng",
    price: 1200000,
    stock: 45,
    status: "available",
    description: "Vaccine phòng phế cầu khuẩn 13 chủng",
    sideEffects: "Đau tại chỗ tiêm, khó chịu",
    contraindications: "Dị ứng với vaccine trước",
    storage: "2-8°C",
    expiry: "2025-03-20",
  },
  {
    id: 5,
    name: "Rotavirus",
    manufacturer: "Merck",
    type: "Live attenuated",
    ageGroup: "6 tuần - 8 tháng",
    doses: 3,
    interval: "2, 4, 6 tháng",
    price: 800000,
    stock: 30,
    status: "low_stock",
    description: "Vaccine phòng tiêu chảy do Rotavirus",
    sideEffects: "Nôn nhẹ, tiêu chảy nhẹ",
    contraindications: "Suy giảm miễn dịch",
    storage: "2-8°C",
    expiry: "2024-11-10",
  },
]

const statusConfig = {
  available: { label: "Còn hàng", color: "bg-green-100 text-green-800", icon: CheckCircle },
  low_stock: { label: "Sắp hết", color: "bg-yellow-100 text-yellow-800", icon: AlertTriangle },
  out_of_stock: { label: "Hết hàng", color: "bg-red-100 text-red-800", icon: Clock },
}

export default function VaccinesPage() {
  const [vaccines, setVaccines] = useState(mockVaccines)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")
  const [manufacturerFilter, setManufacturerFilter] = useState("all")
  const [sortBy, setSortBy] = useState("name")
  const [sortOrder, setSortOrder] = useState("asc")
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [selectedVaccine, setSelectedVaccine] = useState(null)
  const [isViewModalOpen, setIsViewModalOpen] = useState(false)

  // New vaccine form state
  const [newVaccine, setNewVaccine] = useState({
    name: "",
    manufacturer: "",
    type: "",
    ageGroup: "",
    doses: "",
    interval: "",
    price: "",
    stock: "",
    description: "",
    sideEffects: "",
    contraindications: "",
    storage: "",
    expiry: "",
  })

  // Filter and search logic
  const filteredVaccines = vaccines.filter((vaccine) => {
    const matchesSearch =
      vaccine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vaccine.manufacturer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || vaccine.status === statusFilter
    const matchesType = typeFilter === "all" || vaccine.type === typeFilter
    const matchesManufacturer = manufacturerFilter === "all" || vaccine.manufacturer === manufacturerFilter

    return matchesSearch && matchesStatus && matchesType && matchesManufacturer
  })

  // Sort logic
  const sortedVaccines = [...filteredVaccines].sort((a, b) => {
    let aValue = a[sortBy]
    let bValue = b[sortBy]

    if (sortBy === "price" || sortBy === "stock") {
      aValue = Number(aValue)
      bValue = Number(bValue)
    }

    if (sortOrder === "asc") {
      return aValue > bValue ? 1 : -1
    } else {
      return aValue < bValue ? 1 : -1
    }
  })

  // Pagination logic
  const totalPages = Math.ceil(sortedVaccines.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedVaccines = sortedVaccines.slice(startIndex, startIndex + itemsPerPage)

  const handleCreateVaccine = () => {
    const vaccine = {
      id: vaccines.length + 1,
      ...newVaccine,
      price: Number(newVaccine.price),
      stock: Number(newVaccine.stock),
      doses: Number(newVaccine.doses),
      status: Number(newVaccine.stock) > 50 ? "available" : Number(newVaccine.stock) > 0 ? "low_stock" : "out_of_stock",
    }

    setVaccines([...vaccines, vaccine])
    setNewVaccine({
      name: "",
      manufacturer: "",
      type: "",
      ageGroup: "",
      doses: "",
      interval: "",
      price: "",
      stock: "",
      description: "",
      sideEffects: "",
      contraindications: "",
      storage: "",
      expiry: "",
    })
    setIsCreateModalOpen(false)
  }

  const handleDeleteVaccine = (id) => {
    setVaccines(vaccines.filter((v) => v.id !== id))
  }

  const resetFilters = () => {
    setSearchTerm("")
    setStatusFilter("all")
    setTypeFilter("all")
    setManufacturerFilter("all")
    setSortBy("name")
    setSortOrder("asc")
    setCurrentPage(1)
  }

  // Get unique values for filters
  const uniqueTypes = [...new Set(vaccines.map((v) => v.type))]
  const uniqueManufacturers = [...new Set(vaccines.map((v) => v.manufacturer))]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Quản lý Vaccine</h1>
          <p className="text-gray-600">Quản lý thông tin và tồn kho vaccine</p>
        </div>
        <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
          <DialogTrigger asChild>
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              <Plus className="mr-2 h-4 w-4" />
              Thêm vaccine mới
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Thêm vaccine mới</DialogTitle>
              <DialogDescription>Nhập thông tin chi tiết về vaccine mới</DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name">Tên vaccine *</Label>
                <Input
                  id="name"
                  value={newVaccine.name}
                  onChange={(e) => setNewVaccine({ ...newVaccine, name: e.target.value })}
                  placeholder="Nhập tên vaccine"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="manufacturer">Nhà sản xuất *</Label>
                <Input
                  id="manufacturer"
                  value={newVaccine.manufacturer}
                  onChange={(e) => setNewVaccine({ ...newVaccine, manufacturer: e.target.value })}
                  placeholder="Nhập nhà sản xuất"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="type">Loại vaccine *</Label>
                <Select
                  value={newVaccine.type}
                  onValueChange={(value) => setNewVaccine({ ...newVaccine, type: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn loại vaccine" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mRNA">mRNA</SelectItem>
                    <SelectItem value="Protein subunit">Protein subunit</SelectItem>
                    <SelectItem value="Inactivated">Inactivated</SelectItem>
                    <SelectItem value="Live attenuated">Live attenuated</SelectItem>
                    <SelectItem value="Conjugate">Conjugate</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="ageGroup">Độ tuổi *</Label>
                <Input
                  id="ageGroup"
                  value={newVaccine.ageGroup}
                  onChange={(e) => setNewVaccine({ ...newVaccine, ageGroup: e.target.value })}
                  placeholder="VD: 12+ tuổi"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="doses">Số mũi *</Label>
                <Input
                  id="doses"
                  type="number"
                  value={newVaccine.doses}
                  onChange={(e) => setNewVaccine({ ...newVaccine, doses: e.target.value })}
                  placeholder="Số mũi tiêm"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="interval">Khoảng cách *</Label>
                <Input
                  id="interval"
                  value={newVaccine.interval}
                  onChange={(e) => setNewVaccine({ ...newVaccine, interval: e.target.value })}
                  placeholder="VD: 21 ngày"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="price">Giá (VNĐ) *</Label>
                <Input
                  id="price"
                  type="number"
                  value={newVaccine.price}
                  onChange={(e) => setNewVaccine({ ...newVaccine, price: e.target.value })}
                  placeholder="Giá vaccine"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="stock">Tồn kho *</Label>
                <Input
                  id="stock"
                  type="number"
                  value={newVaccine.stock}
                  onChange={(e) => setNewVaccine({ ...newVaccine, stock: e.target.value })}
                  placeholder="Số lượng tồn kho"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="storage">Bảo quản</Label>
                <Input
                  id="storage"
                  value={newVaccine.storage}
                  onChange={(e) => setNewVaccine({ ...newVaccine, storage: e.target.value })}
                  placeholder="VD: 2-8°C"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="expiry">Hạn sử dụng</Label>
                <Input
                  id="expiry"
                  type="date"
                  value={newVaccine.expiry}
                  onChange={(e) => setNewVaccine({ ...newVaccine, expiry: e.target.value })}
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="description">Mô tả</Label>
                <Textarea
                  id="description"
                  value={newVaccine.description}
                  onChange={(e) => setNewVaccine({ ...newVaccine, description: e.target.value })}
                  placeholder="Mô tả về vaccine"
                  rows={2}
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="sideEffects">Tác dụng phụ</Label>
                <Textarea
                  id="sideEffects"
                  value={newVaccine.sideEffects}
                  onChange={(e) => setNewVaccine({ ...newVaccine, sideEffects: e.target.value })}
                  placeholder="Các tác dụng phụ có thể xảy ra"
                  rows={2}
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="contraindications">Chống chỉ định</Label>
                <Textarea
                  id="contraindications"
                  value={newVaccine.contraindications}
                  onChange={(e) => setNewVaccine({ ...newVaccine, contraindications: e.target.value })}
                  placeholder="Các trường hợp chống chỉ định"
                  rows={2}
                />
              </div>
            </div>
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setIsCreateModalOpen(false)}>
                Hủy
              </Button>
              <Button onClick={handleCreateVaccine} className="bg-emerald-600 hover:bg-emerald-700">
                Thêm vaccine
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Tổng vaccine</p>
                <p className="text-2xl font-bold text-gray-900">{vaccines.length}</p>
              </div>
              <Package className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Còn hàng</p>
                <p className="text-2xl font-bold text-green-600">
                  {vaccines.filter((v) => v.status === "available").length}
                </p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Sắp hết</p>
                <p className="text-2xl font-bold text-yellow-600">
                  {vaccines.filter((v) => v.status === "low_stock").length}
                </p>
              </div>
              <AlertTriangle className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Hết hàng</p>
                <p className="text-2xl font-bold text-red-600">
                  {vaccines.filter((v) => v.status === "out_of_stock").length}
                </p>
              </div>
              <Clock className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Bộ lọc và tìm kiếm</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            <div className="lg:col-span-2">
              <Label htmlFor="search">Tìm kiếm</Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  id="search"
                  placeholder="Tìm theo tên hoặc nhà sản xuất..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="status">Trạng thái</Label>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả</SelectItem>
                  <SelectItem value="available">Còn hàng</SelectItem>
                  <SelectItem value="low_stock">Sắp hết</SelectItem>
                  <SelectItem value="out_of_stock">Hết hàng</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="type">Loại</Label>
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả</SelectItem>
                  {uniqueTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="manufacturer">Nhà sản xuất</Label>
              <Select value={manufacturerFilter} onValueChange={setManufacturerFilter}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả</SelectItem>
                  {uniqueManufacturers.map((manufacturer) => (
                    <SelectItem key={manufacturer} value={manufacturer}>
                      {manufacturer}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end">
              <Button variant="outline" onClick={resetFilters} className="w-full bg-transparent">
                <Filter className="mr-2 h-4 w-4" />
                Xóa bộ lọc
              </Button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Label htmlFor="sortBy">Sắp xếp theo:</Label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name">Tên</SelectItem>
                    <SelectItem value="manufacturer">Nhà SX</SelectItem>
                    <SelectItem value="price">Giá</SelectItem>
                    <SelectItem value="stock">Tồn kho</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button variant="outline" size="sm" onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}>
                {sortOrder === "asc" ? "↑" : "↓"}
              </Button>
            </div>
            <div className="text-sm text-gray-600">
              Hiển thị {startIndex + 1}-{Math.min(startIndex + itemsPerPage, sortedVaccines.length)} trong{" "}
              {sortedVaccines.length} kết quả
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Vaccines Table */}
      <Card>
        <CardHeader>
          <CardTitle>Danh sách vaccine</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Tên vaccine</TableHead>
                  <TableHead>Nhà sản xuất</TableHead>
                  <TableHead>Loại</TableHead>
                  <TableHead>Độ tuổi</TableHead>
                  <TableHead>Số mũi</TableHead>
                  <TableHead>Giá</TableHead>
                  <TableHead>Tồn kho</TableHead>
                  <TableHead>Trạng thái</TableHead>
                  <TableHead>Thao tác</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedVaccines.map((vaccine) => {
                  const StatusIcon = statusConfig[vaccine.status].icon
                  return (
                    <TableRow key={vaccine.id}>
                      <TableCell className="font-medium">{vaccine.name}</TableCell>
                      <TableCell>{vaccine.manufacturer}</TableCell>
                      <TableCell>{vaccine.type}</TableCell>
                      <TableCell>{vaccine.ageGroup}</TableCell>
                      <TableCell>{vaccine.doses}</TableCell>
                      <TableCell>{vaccine.price.toLocaleString()} VNĐ</TableCell>
                      <TableCell>{vaccine.stock}</TableCell>
                      <TableCell>
                        <Badge className={statusConfig[vaccine.status].color}>
                          <StatusIcon className="mr-1 h-3 w-3" />
                          {statusConfig[vaccine.status].label}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem
                              onClick={() => {
                                setSelectedVaccine(vaccine)
                                setIsViewModalOpen(true)
                              }}
                            >
                              <Eye className="mr-2 h-4 w-4" />
                              Xem chi tiết
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit className="mr-2 h-4 w-4" />
                              Chỉnh sửa
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600" onClick={() => handleDeleteVaccine(vaccine.id)}>
                              <Trash2 className="mr-2 h-4 w-4" />
                              Xóa
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </div>

          {/* Pagination */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
            <div className="flex items-center space-x-2">
              <Label htmlFor="itemsPerPage">Hiển thị:</Label>
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
              <span className="text-sm text-gray-600">mục</span>
            </div>

            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
                Trước
              </Button>

              <div className="flex items-center space-x-1">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum
                  if (totalPages <= 5) {
                    pageNum = i + 1
                  } else if (currentPage <= 3) {
                    pageNum = i + 1
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i
                  } else {
                    pageNum = currentPage - 2 + i
                  }

                  return (
                    <Button
                      key={pageNum}
                      variant={currentPage === pageNum ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(pageNum)}
                      className="w-8 h-8 p-0"
                    >
                      {pageNum}
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
        </CardContent>
      </Card>

      {/* View Vaccine Detail Modal */}
      <Dialog open={isViewModalOpen} onOpenChange={setIsViewModalOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Chi tiết vaccine</DialogTitle>
          </DialogHeader>
          {selectedVaccine && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium text-gray-600">Tên vaccine</Label>
                  <p className="text-lg font-semibold">{selectedVaccine.name}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-600">Nhà sản xuất</Label>
                  <p>{selectedVaccine.manufacturer}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-600">Loại vaccine</Label>
                  <p>{selectedVaccine.type}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-600">Độ tuổi</Label>
                  <p>{selectedVaccine.ageGroup}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-600">Số mũi tiêm</Label>
                  <p>{selectedVaccine.doses} mũi</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-600">Khoảng cách</Label>
                  <p>{selectedVaccine.interval}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-600">Giá</Label>
                  <p className="text-lg font-semibold text-emerald-600">{selectedVaccine.price.toLocaleString()} VNĐ</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-600">Tồn kho</Label>
                  <p>{selectedVaccine.stock} liều</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-600">Bảo quản</Label>
                  <p>{selectedVaccine.storage}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-600">Hạn sử dụng</Label>
                  <p>{selectedVaccine.expiry}</p>
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-600">Mô tả</Label>
                <p className="mt-1">{selectedVaccine.description}</p>
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-600">Tác dụng phụ</Label>
                <p className="mt-1">{selectedVaccine.sideEffects}</p>
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-600">Chống chỉ định</Label>
                <p className="mt-1">{selectedVaccine.contraindications}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
      
    </div>
  )
}
