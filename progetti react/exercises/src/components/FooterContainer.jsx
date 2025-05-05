import React from "react";


const FooterContainer = ({children}) => {

    return (
        <>
        <div className="grid grid-cols-[repeat(3,auto)] gap-x-[20px] justify-center">{children}
        <div>
        </div>
        </div>
        </>
    );
}
export default FooterContainer ;