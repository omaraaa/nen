export default ({ children, title, ...props }) => {
  return (
    <div {...props} className='my-4 p-4  pb-8'>
      <div className='text-black text-4xl font-black pb-4'>{title}</div>
      {children}
    </div>
  )
}