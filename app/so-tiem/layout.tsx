const LayoutSoTiem = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <header className="flex items-center justify-between back shadow p-5 bg-emerald-700 text-white">
        <h1
          className="text-3xl font-bold"
          style={{ fontFamily: "sans-serif" }}
        >
          Sổ tiêm khách hàng
        </h1>
        <div className="">
          <p>Xin chào: Trương Khánh Linh</p>
          <p>Hôm nay: {new Date().toLocaleDateString()}</p>
        </div>
      </header>
      {children}
    </div>
  );
};

export default LayoutSoTiem;
