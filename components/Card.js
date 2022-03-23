export default ({ children, className, ...props }) => {
  return (
    <div
      {...props}
      className={
        className +
        "ring-black rounded-lg border-2 border-[#000000c0] shadow-lg shadow-black bg-[#000000c0]"
      }
    >
      {children}
    </div>
  );
};
