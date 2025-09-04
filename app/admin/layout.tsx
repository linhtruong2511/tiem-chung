import { Menu, Syringe } from "lucide-react";
import Link from "next/link";
import React from "react";

const LayoutAdmin = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href={"/admin"} className="flex items-center space-x-4">
              <Syringe className="h-8 w-8 text-emerald-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  Trang quản trị
                </h1>
                <p className="text-sm text-gray-500">
                  Trung Tâm Tiêm Chủng An Khang
                </p>
              </div>
            </Link>
            <ul className="hidden lg:flex items-center space-x-4 text-gray-700">
              <li className="hover:text-emerald-500 cursor-pointer transition-colors">
                <Link href={"/admin/customer"}>Khách hàng</Link>
              </li>
              <li className="hover:text-emerald-500 cursor-pointer transition-colors">
                <Link href={"/admin/vaccine"}>Vaccine</Link>
              </li>
              <li className="hover:text-emerald-500 cursor-pointer transition-colors">
                <Link href={"/admin/appointment"}>Lịch hẹn</Link>
              </li>
              <li className="hover:text-emerald-500 cursor-pointer transition-colors">
                <Link href={"/admin/history"}>Lịch sử tiêm chủng</Link>
              </li>
            </ul>

            <Menu className="lg:hidden"></Menu>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
};

export default LayoutAdmin;
