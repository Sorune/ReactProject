import ReactDOM from "react-dom";

const AddrPopup = ({ children }) => {
    const element = document.getElementById("popupDom");
    return ReactDOM.createPortal(children, element);
}

export default AddrPopup;