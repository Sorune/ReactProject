import TicketingNav from "./TicketingNav";
import TicketingPage from "./TicketingPage";
import TicketingSide from "./TicketingSide";
import BasicLayout from "../../layouts/BasicLayout";
import SidebarLayout from "../../layouts/SidebarLayout";
import {useState} from "react";

const TicketingMain = () => {
    const [selectedTeam, setSelectedTeam] = useState(null);

    return (
        <SidebarLayout>
            <div>
                <div>
                    {/* 티켓팅 페이지 상단 */}
                    <TicketingNav onTeamSelect={setSelectedTeam} ></TicketingNav>
                </div>
                <div className="grid col-auto gap-5 mt-6 p-6">
                    <div className="col-start-1 col-end-2">
                        {/* 티켓팅 메인 사이드 */}
                        <TicketingSide></TicketingSide>
                    </div>
                    <div className="col-start-2 col-end-4 justify-center">
                        {/* 티켓팅 메인 본문 */}
                        <TicketingPage selectedTeam={selectedTeam} ></TicketingPage>
                    </div>
                </div>
            </div>
        </SidebarLayout>

    );
}

export default TicketingMain;