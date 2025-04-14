const CustomButton = ({ onBtnClick=() => {},isActive,activeLabel, inactiveLabel }) => {
    return(
    <>
    <button onClick={onBtnClick}>{isActive?activeLabel : inactiveLabel}</button>
    </>
    )
}
export default CustomButton;