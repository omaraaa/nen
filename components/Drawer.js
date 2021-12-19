
export default ({ children, open, ...props }) => {
    return (open &&
        <span {...props}>
            {children}
        </span>
    )
}