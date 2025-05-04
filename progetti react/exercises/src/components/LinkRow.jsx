import React from "react";
import { useState, useEffect } from "react";
import Section from "./Section";
import FooterObj from "./FooterObj";
const LinkRow = () => {
    const [link, setLink] = useState(true)
    useEffect(() => {
        console.log("footerlink")
    }, []);

    useEffect(() => {
        console.log("update del footerlink")
    });

    useEffect(() => {
        console.log("update dello state del footerlink")
    }, [link]);
    return (
        <>
        {FooterObj.map((elem, i) => (
                        <Section key={i}>
                            <h3 className="text-[color:#4281a4ff]">{elem.title}</h3>
                            {elem.links.map((link, j) =>
                                <LinkRow className="min-w-[200px] flex items-center mt-[2px]" key={j}>{link}
                                    <h6 className="text-[color:#f5f5f5ff] hover:text-[#f5f5f5ff]">{link}
                                        {link.icon && <span className="w-[25px] bg-[color:#0f192eff] rounded-full flex items-center justify-center ">{link.icon}</span>}
                                        {link.name}</h6>
                                </LinkRow>
                            )}
                        </Section>
                    ))}

        <div onClick={setLink}>
            {link}
        </div>
        </>
    );
}
export default LinkRow;