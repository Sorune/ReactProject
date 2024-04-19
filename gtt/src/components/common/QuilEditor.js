import {Card} from "@material-tailwind/react";
import {useMemo, useRef} from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const QuilEditor = ()=>{
    const quillReff = useRef(null);
    const modules = useMemo(
        () => ({
            toolbar: {
                container: [
                    [{ header: '1' }, { header: '2' }],
                    [{ size: [] }],
                    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                    [{ list: 'ordered' }, { list: 'bullet' }, { align: [] }],
                    ['image'],
                ],
                handlers: { image: imageHandler },
            },
            clipboard: {
                matchVisual: false,
            },
        }),
        [],
    );

    const formats = [
        'header',
        'font',
        'size',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'bullet',
        'align',
        'image',
    ];
    return (
        <Card>
            <ReactQuill
                ref={quillRef}
                onChange={setHtml}
                className={styles.quill}
                modules={modules}
                formats={formats}
                value={html}
                placeholder={'후원받고자 하는 동물의 자세한 정보를 입력해주세요!'}
                theme="snow"
            />
        </Card>
    )
}

export default QuilEditor