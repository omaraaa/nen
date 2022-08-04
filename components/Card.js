export default ({ children, title, className, ...props }) => {
  return (
    <div
      {...props}
      className={
        className
          ? className
          : "" +
            " h-full flex rounded-lg shadow-lg shadow-black p-4 min-w-[8rem] items-center justify-center space-x-2 bg-gray-100 text-[#00050e]"
      }
    >
      <div className="flex-grow flex flex-col justify-center items-center">
        {title ? (
          <div className="text-lg font-bold text-center">{title}</div>
        ) : (
          ""
        )}
        <div className="py-px bg-[#00050e]"></div>
        <div className="text-lg font-semibold">{children}</div>
      </div>
      {/* <div className="items-center justify-center m-auto">&#10132;</div> */}
    </div>
  );
};
