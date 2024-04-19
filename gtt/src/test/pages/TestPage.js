import BasicLayout from "../../layouts/BasicLayout";
import CommentCell from "../../components/common/CommentCell";
import CommentInputCell from "../../components/common/CommentInputCell";
import ContentHeader from "../../components/common/ContentHeader";
import ContentBody from "../../components/common/ContentBody";
import UplodComponent from "../../components/common/UplodComponent";
import LexicalEditor from "../../components/common/LexicalEditor";
import DropFiles from "../../components/common/DropFiles";
import CustomCarousel from "../../components/common/CustomCarousel";

const TestPage = ()=>{
    return (
        <BasicLayout>
            <p>컨텐츠 헤더</p>
            <ContentHeader />
            <p>컨텐츠 바디</p>
            <ContentBody />
            <p>댓글 작성</p>
            <CommentInputCell />
            <p>댓글 보기</p>
            <CommentCell />
            <p>파일 입력</p>
            <UplodComponent />
            <p>Editor</p>
            <LexicalEditor />
            <p>Drop Down</p>
            <DropFiles />
            <p>Custom Carousel</p>
                <CustomCarousel>
                        <img
                            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                            alt="image 1"
                            className="h-full w-full object-cover"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                            alt="image 2"
                            className="h-full w-full object-cover"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                            alt="image 3"
                            className="h-full w-full object-cover"
                        />
                </CustomCarousel>
        </BasicLayout>
    )
}

export default TestPage;