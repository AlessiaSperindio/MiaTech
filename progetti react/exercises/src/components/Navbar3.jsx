import React from "react";

const Navbar3 = () => {

    return (<>
        <nav className="flex flex-col fixed bg-[color:#0f192eff;] w-full text-[color:#4281a4ff] p-20 columns-3 gap-8">
            <div className="flex flex-col justify-center items-center gap-8 p-2 m-4 border-[color:#50b99aff;] bg-[color:#0f192eff;] text-[color:#4281a4ff;] hover:bg-[color:#0f192eff;] hover:text-[color:#4281a4ff;] w-[1060px]">
            </div>
            <div className="flex flex-col justify-center items-center gap-8 p-2 m-4 border-[color:#50b99aff;] bg-[color:#0f192eff;] text-[color:#4281a4ff;] hover:bg-[color:#0f192eff;] hover:text-[color:#4281a4ff;] w-[1060px]">


                <button>Search here!</button>


            </div>
            <div className="flex flex-col justify-center items-center gap-8 p-2 m-4 border-[color:#50b99aff;] bg-[color:#0f192eff;] text-[color:#4281a4ff;] hover:bg-[color:#0f192eff;] hover:text-[color:#4281a4ff;] w-[1060px]">
                <button></button>
                <button></button>
                <button></button>
                <button></button>
            </div>
            <div className="flex flex-col justify-center items-center gap-8 p-2 m-4 border-[color:#50b99aff;] bg-[color:#0f192eff;] text-[color:#4281a4ff;] hover:bg-[color:#0f192eff;] hover:text-[color:#4281a4ff;] w-[1060px]">
                <h1> AquaticParadise</h1>
                <h2>Ten years in one minute!</h2>
                <img src="" />
            </div>
            <div className="flex flex-col justify-center items-center gap-8 p-2 m-4 border-[color:#50b99aff;] bg-[color:#0f192eff;] text-[color:#4281a4ff;] hover:bg-[color:#0f192eff;] hover:text-[color:#4281a4ff;] w-[1060px] top:0 right:0">
                <div>
                    <span className="p-4 margin-4  flex flex-row justify-center ">
                        <img src="" className="p-20 w-50" alt="logo" />
                        <ul>Home</ul>
                    </span>
                </div>
                <div>
                    <span className="p-4 margin-4  flex flex-row justify-center ">
                        <img src="" className="p-20 w-50" alt="logo" />
                        <ul>Login</ul>
                    </span>
                </div>
                <div>
                    <span className="p-4 margin-4  flex flex-row justify-center ">
                        <img src="" className="p-20 w-50" alt="logo" />
                        <ul >Register</ul>
                    </span>
                </div>
            </div>
        </nav>
    </>
    )
}
export default Navbar3;

