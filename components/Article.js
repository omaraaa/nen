export default ({ children, title, ...props }) => {
  return (
    <div
      {...props}
      className="p-4 space-y-2  min-h-[80vh] ring-black rounded-lg border-2 border-[#000000c0] shadow-lg shadow-black bg-[#00060d80] "
    >
      <div className="lg:px-4 py-2 text-4xl font-black">{title}</div>
      <div className="lg:px-4 py-2">{children}</div>
    </div>
  );
};
