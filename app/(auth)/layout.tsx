const AuthLayout = ({
    children 
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="flex items-center justify-center p-10"> {children}</div>
    );
}
export default AuthLayout