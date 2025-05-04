import React from "react";
import { useState, useEffect } from "react";
const SubFooter = () => {
    const [sub, setSub] = useState(true)
    useEffect(() => {
        console.log("footersub")
    }, []);

    useEffect(() => {
        console.log("update del footersub")
    });

    useEffect(() => {
        console.log("update dello state del footersub")
    }, [sub]);
    return (
        <>
         <SubFooter className="w-full bg-[#0f192e] rounded-[25px] flex items-center justify-center">
                    <div className="w-full flex justify-center border-t">
                        <p >2025 - Copyright . All rights reserved. From S.M.S.A.!TEAM with love.
                        </p>
                    </div>
                </SubFooter>
        <div onClick={setSub}>
            {sub}
        </div>
        </>
    );
}
export default SubFooter;