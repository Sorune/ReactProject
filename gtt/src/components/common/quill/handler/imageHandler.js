import {insertFiles} from "../../../../api/filesApi";
import {useState} from "react";

export const imageHandler =  ()=>{

    const input = document.createElement('input');
    let URL = '';
    input.setAttribute('type','file');
    input.setAttribute('accept','image/*');
    input.click();

    input.addEventListener('change',()=>{
        const file = input.files[0];
        if (!file) return;
        URL = insertFiles(file).toString()
        console.log(URL)
    })

    return URL;
}
