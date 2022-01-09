export default ({ children, title, ...props }) => {
  return (
    <div {...props} className='py-4 space-y-2'>
      <div className='text-4xl font-black'>{title}</div>
      {children}
    </div>
  )
}