import React, { forwardRef, useEffect, useState, useMemo } from "react";
import { Card } from "@material-tailwind/react";
import ReactQuill, {Quill} from "react-quill";
import "react-quill/dist/quill.snow.css";
import ImageDrop from "quill-image-drop-module";
import ImageResize from "quill-image-resize-module-react/src/ImageResize";

Quill.register('modules/imageResize', ImageResize);
Quill.register('modules/imageDrop',ImageDrop);

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



const QuilEditor = forwardRef(({ value, onChange }, ref) => {
    const [localValue, setLocalValue] = useState(value || "");

    const handleChange = (content, delta, source, editor) => {
        const deltaString = JSON.stringify(delta.ops);
        console.log(deltaString); // 에디터의 변경사항 로그 출력

        if (onChange) {
            onChange(content.ops);
        }
    };

    const modules = {
        toolbar: {
            container: [
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'},{'align':[]}],
                ['link', 'image', 'video'],
                ['clean'],
            ],
            handlers:{image:ImageHandler}
        },
        imageResize:{
            parchment: Quill.import('parchment'),
            modules: [ 'Resize', 'DisplaySize']
        },
        imageDrop:true,
    };
    
    useEffect(() => {
        if (ref && ref.current) {
            const editor = ref.current.getEditor();
            editor.setContents(localValue);
        }
    }, [localValue, ref]);

    const quill = useMemo(() => {
        return (
            <ReactQuill
                ref={ref}
                modules={modules}
                formats={formats}
                theme="snow"
                value={localValue}
                onChange={handleChange}
            />
        );
    }, [localValue, handleChange]);

    return <Card>{quill}</Card>;
});

export default QuilEditor;
