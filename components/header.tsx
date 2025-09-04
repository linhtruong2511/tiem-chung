"use client";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { redirect } from "next/navigation";
import { useState } from "react";

export function Header() {
  const [customerIdentity, setCustomerIdentity] = useState<string>("");
  const handleRedirect = () => {
    // check customer identity -> redirect if ok
    redirect("/so-tiem/" + customerIdentity);
  };
  return (
    <>
      {/* Top bar with contact info */}
      <header className="bg-emerald-50 py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between text-sm text-emerald-700">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Phone className="h-4 w-4" />
                <span>Hotline: 1900-1234</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>T2-CN: 7:00 - 19:00</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>123 Đường ABC, Quận 1, TP.HCM</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4 shadow-sm top-0 sticky z-[20] bg-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">+</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                Trung Tâm Tiêm Chủng
              </h1>
              <p className="text-sm text-emerald-600 font-medium">An Khang</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#trang-chu"
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Trang chủ
            </a>
            <a
              href="#dich-vu"
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Dịch vụ
            </a>
            <a
              href="#vaccine"
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Thông tin Vaccine
            </a>
            <a
              href="#lien-he"
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Liên hệ
            </a>
          </nav>

          <Dialog>
            <DialogTrigger asChild>
              <div>
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  Kiểm tra sổ tiêm
                </Button>
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Kiểm tra lịch sử khám, tiêm</DialogTitle>
                <DialogDescription>
                  Vui lòng nhập mã định danh trên sổ tiêm của bạn
                </DialogDescription>
              </DialogHeader>

              <Input
                placeholder="Mã định danh trên sổ tiêm cá nhân"
                value={customerIdentity}
                onChange={(e) => setCustomerIdentity(e.target.value)}
              />
              <p className="text-gray-600">Ví dụ: nguyen-van-a-12</p>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Thoát</Button>
                </DialogClose>
                <Button type="submit">
                  <a href="/so-tiem">Kiểm tra</a>
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  );
}
