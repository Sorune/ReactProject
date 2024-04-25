import { Card, CardBody, Typography } from "@material-tailwind/react";

const TicketingSide = () => {

    // 팀 정보 테스트용 코드
    const teams = [
        {
            teamRank: "1",
            teamName: "Gen.G",
            totalRound: "18",
            teamWin: "17",
            teamDraw: "0",
            teamLose: "1",
            teamPoint: "17"
        },
        {
            teamRank: "2",
            teamName: "SKT1",
            totalRound: "18",
            teamWin: "15",
            teamDraw: "0",
            teamLose: "3",
            teamPoint: "15"
        },
        {
            teamRank: "3",
            teamName: "한화생명",
            totalRound: "18",
            teamWin: "15",
            teamDraw: "0",
            teamLose: "3",
            teamPoint: "15"
        },
        {
            teamRank: "4",
            teamName: "KT롤스터",
            totalRound: "18",
            teamWin: "11",
            teamDraw: "0",
            teamLose: "7",
            teamPoint: "11"
        },
        {
            teamRank: "5",
            teamName: "디플러스기아",
            totalRound: "18",
            teamWin: "9",
            teamDraw: "0",
            teamLose: "0",
            teamPoint: "9"
        },
        {
            teamRank: "6",
            teamName: "광동프릭스",
            totalRound: "18",
            teamWin: "7",
            teamDraw: "0",
            teamLose: "11",
            teamPoint: "7"
        },
        {
            teamRank: "7",
            teamName: "FearX",
            totalRound: "18",
            teamWin: "6",
            teamDraw: "0",
            teamLose: "12",
            teamPoint: "6"
        },
        {
            teamRank: "8",
            teamName: "농심레드포스",
            totalRound: "18",
            teamWin: "4",
            teamDraw: "0",
            teamLose: "14",
            teamPoint: "4"
        },
        {
            teamRank: "9",
            teamName: "DRX",
            totalRound: "18",
            teamWin: "3",
            teamDraw: "0",
            teamLose: "15",
            teamPoint: "3"
        },
        {
            teamRank: "10",
            teamName: "브리온",
            totalRound: "18",
            teamWin: "3",
            teamDraw: "0",
            teamLose: "15",
            teamPoint: "3"
        }

    ];

    return (
        <div>
            <Card className="mt-6 w-full">
                <CardBody>
                    <div className="flex justify-center">
                        <Typography>
                            팀 순위
                        </Typography>
                    </div>
                    <div className="">
                        <ul className="text-center">
                            <li>
                                <Typography>Gen.G</Typography>
                            </li>
                            <li>
                                <Typography>SKT1</Typography>
                            </li>
                            <li>
                                <Typography>Hanwha Life Esports</Typography>
                            </li>
                            <li>
                                <Typography>Dplus KIA</Typography>
                            </li>
                            <li>
                                <Typography>kt Rolster</Typography>
                            </li>
                            <li>
                                <Typography>KWANGODNG FREECS</Typography>
                            </li>
                            <li>
                                <Typography>FearX</Typography>
                            </li>
                            <li>
                                <Typography>Nongshim RedForce</Typography>
                            </li>
                            <li>
                                <Typography>RDX</Typography>
                            </li>
                            <li>
                                <Typography>OKSavingBank BRION</Typography>
                            </li>
                        </ul>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}

export default TicketingSide;