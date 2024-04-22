import BasicLayout from "../../layouts/BasicLayout";
import CommentCell from "../../components/common/CommentCell";
import CommentInputCell from "../../components/common/CommentInputCell";
import ContentHeader from "../../components/common/ContentHeader";
import ContentBody from "../../components/common/ContentBody";
import ReadPage from "../../pages/news/ReadPage";
const GridTest = () => {
    return (
        <BasicLayout>
            <div className="grid grid-rows-3 grid-cols-9 gap-4">
                <div className="col-start-1 col-end-8 row-span-4">
                    <ContentHeader  /> {/* 헤더 높이 조절 */}
                </div>
                <div className="col-start-3 col-end-8 auto-rows-auto">
                    <ContentBody />
                </div>
                <div className="col-start-3 col-end-8 row-span-3">
                    <CommentInputCell />
                </div>
                <div className="col-start-3 col-end-8 auto-rows-auto">
                    <CommentCell />
                </div>
            </div>
        </BasicLayout>
    );
};

export default GridTest;
