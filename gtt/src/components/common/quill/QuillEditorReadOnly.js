import React, {forwardRef, useMemo, useState} from "react";
import ReactQuill, {Quill} from "react-quill";
import {Card} from "@material-tailwind/react";
import {ImageHandler} from "./handler/imageHandler";
import {isDisabled} from "@testing-library/user-event/dist/utils";


const formats = [
    'font',
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'color',
    'background',
    'align',
    'size',
    'code-block',
    'height',
    'width'
];

const QuilEditorReadOnly = forwardRef(({ value, onChange }, ref) => {
    const modules =  {
        toolbar:false,
    };

const quill = useMemo(() => {
    return (
        <ReactQuill
            className="w-full h-[100%]"
            ref={ref}
            modules={modules}
            formats={formats}
            value={value||""}
            readOnly={true}
            disable={true}
        />
    );
}, [value]);

return <Card>{quill}</Card>;
})

export default QuilEditorReadOnly;
