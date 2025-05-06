const NavContainer=()=>{
    return(
    <>
    <div>
                            <span className="container-links ">
                                <img src="../../public/images/icon.png" className="p-20 w-50" alt="logo" />
                            <Link to="/">Home</Link>
                            </span>
                        </div>
                        <div>
                        <span className="p-4 margin-4  flex flex-row justify-center ">
                            <img src="../../public/images/icon.png" className="p-20 w-50" alt="logo" />
                            <Link to="/login">Login</Link>
                            </span>
                        </div>
                        <div>
                        <span className="p-4 margin-4  flex flex-row justify-center ">
                            <img src="../../public/images/icon.png" className="p-20 w-50" alt="logo" />
                            <Link to="/register">Register</Link>
                            </span>
                            </div>
    </>
    )
}
export default NavContainer;