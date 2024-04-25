import ContentHeader from "../../components/common/ContentHeader";
import { Card, CardBody } from "@material-tailwind/react";
import React, { forwardRef, useEffect, useState } from "react";
import ContentInputBody from "../../components/common/ContentInputBody";
import { useRecoilValue } from "recoil";
import useCustomMove from "../../hooks/useCustomMove";
import { pageState } from "../../atoms/pageState";
import { getOne } from "../../api/newsApi";

const testTeam = {
    teamName: "Gen.G",
    teamImg: "/img/team/geng.png",
};

const ModifyPage = forwardRef(({ newsDTO }, ref) => {
    const page = useRecoilValue(pageState);
    const { moveToModify } = useCustomMove(); // useCustomMove 훅 사용
    const [serverData, setServerData] = useState(newsDTO);

    function parseDeltaOrString(data) {
        if (typeof data === "string" && data.includes('"ops"')) {
            return JSON.parse(data);
        } else {
            return data; // 그냥 문자열로 반환
        }
    }

    return (
        <section className="bg-white w-full h-full p-2 py-2">
            <ContentHeader pathName={"/news/modify"} moveToModify={moveToModify} serverData={newsDTO} />
            <Card className="flex flex-auto p-1">
                <CardBody>
                    <ContentInputBody
                        ref={ref}
                        teamName={testTeam.teamName}
                        teamImg={testTeam.teamImg}
                        title={serverData.title}
                        content={parseDeltaOrString(serverData.content)}
                        date={serverData.regDate}
                    />
                </CardBody>
            </Card>
        </section>
    );
});
export default ModifyPage;
