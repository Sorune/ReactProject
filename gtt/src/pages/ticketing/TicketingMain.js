import TicketingNav from "./TicketingNav";
import TicketingPage from "./TicketingPage";
import TicketingSide from "./TicketingSide";

const TicketingMain = () => {

    return (
        <div>
            {/* 티켓팅 페이지 상단 */}
            <div>
                <TicketingNav></TicketingNav>
            </div>
            <div className="grid col-auto gap-5 mt-6 p-6">
                {/* 티켓팅 메인 사이드 */}
                <div className="col-start-1 col-end-2">
                    <TicketingSide></TicketingSide>
                </div>
                {/* 티켓팅 메인 본문 */}
                <div className="col-start-2 col-end-4 justify-center">
                    <TicketingPage></TicketingPage>
                </div>
            </div>
        </div>
    );
}

export default TicketingMain;