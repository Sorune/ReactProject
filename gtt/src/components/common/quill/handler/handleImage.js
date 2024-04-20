import {useEffect} from "react";

const handleImage =()=>{
    const input = document.createElement("input");
    input.setAttribute("type","file");
    input.setAttribute("accept","image/*");
    input.click();
    input.onchange = async ()=>{};
}

export default handleImage
