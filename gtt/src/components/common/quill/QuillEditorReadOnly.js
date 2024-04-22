import React, {forwardRef, useMemo, useState} from "react";
import ReactQuill, {Quill} from "react-quill";
import {Card} from "@material-tailwind/react";
import {ImageHandler} from "./handler/imageHandler";


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
    const [localValue, setLocalValue] = useState(value || "");
    const modules =  {
        toolbar:false,
        imageResize:false,
        imageDropAndPaste:false,
    };

const quill = useMemo(() => {
    return (
        <ReactQuill
            ref={ref}
            modules={modules}
            formats={formats}
            value={localValue}
            readOnly={true}
        />
    );
}, [localValue, onChange]);

return <Card>{quill}</Card>;
})

export default QuilEditorReadOnly;