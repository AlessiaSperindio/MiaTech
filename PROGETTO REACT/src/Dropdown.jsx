import { useState } from "react";

const Dropdown = ({children,initialOpenState})=> {
    const [isOpen, setIsOpen] = useState(initialOpenState) 
    return(
        <>
        {
        isOpen&&children
        }
        </>
    )
}
export default Dropdown;