const Footer1= ()=>{
    return(
        <>
        <footer className="grid grid-cols-3 bg-cyan-950 w-full text-blue-300 p-20 gap-8 relative">
            <div className="p-4 margin-4 flex flex-row absolute left-0 text-blue-300 ">
                <h1 className="flex flex-row bg-cyan-950 text-blue-300 p-2 text-transform: uppercase Roboto">Aquatic Paradise</h1>
                <img src="../../public/images/logotop.jpg" className="top flex flex-row bg-gray-700 p-5 w-50" alt="logotop" />
                <p className="text-transform: uppercase Roboto flex flex-row ">ten years in one click </p>
            </div>
            <div className="flex flex-row absolute right-0 top-0">
                <span className="w-20 flex flex-row right-0 justify-end border-t">
                    <button className="p-4 margin-4 text-slate-600 bg-blue-300 hover:bg-blue-300 hover:text-cyan-950 rounded-xl underline italic decoration-wavy">FOLLOW US
                        <span className="w-10">
                            <img src="../../public/images/wtslogo.jpg" className="p-0 w-20" alt="logo" />
                        </span>
                    </button>
                    <button className="p-4 margin-4 text-slate-600 bg-blue-300 hover:bg-blue-300 hover:text-cyan-950 rounded-xl underline italic decoration-wavy">FOLLOW US
                        <span className="w-10">
                            <img src="../../public/images/Instagramlogo.png" className="p-0 w-20" alt="logo" />
                        </span>
                    </button>
                    <button className="p-4 margin-4 text-slate-600 bg-blue-300 hover:bg-blue-300 hover:text-cyan-950 rounded-xl italic underline decoration-wavy">FOLLOW US
                        <span className="w-10">
                            <img src="../../public/images/fblogo.png" className="p-0 w-20" alt="logo" />
                        </span>
                    </button>
                    <button className="p-4 margin-4 text-slate-600 bg-blue-300 hover:bg-blue-300 hover:text-cyan-950 italic rounded-xl underline decoration-wavy">FOLLOW US
                        <span className="w-10">
                            <img src="../../public/images/ttlogo.jpg" className="p-0 w-20" alt="logo" />
                        </span>
                    </button>
                </span>
                <div className="flex absolute m-auto bottom-0 border-t bg-cyan-950">
                    <p>2025 Copiright-AquaticParadise-by Silvia ,Manuel,Sara & Alessia</p>
                </div>
            </div>

        </footer>
        </>
    )
}
export default Footer1;