import BasicLayout from "../layouts/BasicLayout";
import CommentCell from "../components/common/CommentCell";
import CommentInputCell from "../components/common/CommentInputCell";
import ContentHeader from "../components/common/ContentHeader";
import ContentBody from "../components/common/ContentBody";
import UplodComponent from "../components/common/UplodComponent";

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

        </BasicLayout>
    )
}

export default TestPage;