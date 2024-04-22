import BasicLayout from "../../layouts/BasicLayout";
import CommentInputCell from "../../components/common/CommentInputCell";
import ContentBody from "../../components/common/ContentBody";

const GridTest = ()=>{
    return (
        <BasicLayout>
            <div className="grid grid-rows-9 grid-cols-9 gap-4">
                <div className="row-span-6 col-start-3 col-end-8">
                    <ContentBody/>
                </div>
                <div className="row-span-2">
                    <CommentInputCell/>
                </div>

            </div>

        </BasicLayout>
    )
}

export default GridTest;
