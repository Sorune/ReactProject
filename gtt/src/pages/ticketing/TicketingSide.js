import { Card, CardBody, Typography } from "@material-tailwind/react";

const TicketingSide = () => {
    // 팀 정보 테스트용 코드
    const teams = [
        { teamRank: "1", teamName: "Gen.G", totalRound: "18", teamWin: "17", teamDraw: "0", teamLose: "1", teamPoint: "17" },
        { teamRank: "2", teamName: "SKT1", totalRound: "18", teamWin: "15", teamDraw: "0", teamLose: "3", teamPoint: "15" },
        { teamRank: "3", teamName: "Hanwha Life Esports", totalRound: "18", teamWin: "15", teamDraw: "0", teamLose: "3", teamPoint: "15" },
        { teamRank: "4", teamName: "kt Rolster", totalRound: "18", teamWin: "11", teamDraw: "0", teamLose: "7", teamPoint: "11" },
        { teamRank: "5", teamName: "Dplus KIA", totalRound: "18", teamWin: "9", teamDraw: "0", teamLose: "0", teamPoint: "9" },
        {teamRank: "6", teamName: "KWANGODNG FREECS", totalRound: "18", teamWin: "7", teamDraw: "0", teamLose: "11", teamPoint: "7"},
        {teamRank: "7", teamName: "FearX", totalRound: "18", teamWin: "6", teamDraw: "0", teamLose: "12", teamPoint: "6"},
        {teamRank: "8", teamName: "Nongshim RedForce", totalRound: "18", teamWin: "4", teamDraw: "0", teamLose: "14", teamPoint: "4"},
        {teamRank: "9", teamName: "DRX", totalRound: "18", teamWin: "3", teamDraw: "0", teamLose: "15", teamPoint: "3"},
        {teamRank: "10", teamName: "OKSavingBank BRION", totalRound: "18", teamWin: "3", teamDraw: "0", teamLose: "15", teamPoint: "3"}
    ];

    return (
        <div className="fade-in">
            <Card className="mt-6 w-full">
                <CardBody>
                    <div className="flex justify-center">
                        <Typography>팀 순위</Typography>
                    </div>
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <td className={`text-xs text-center flex`}>순위</td>
                                    <td className={`text-xs text-center`}>팀명</td>
                                    <td className={`text-xs text-center`}>승점</td>
                                </tr>
                            </thead>
                            <tbody>
                                {teams.map((team, index) => (
                                    <tr key={index}>
                                        <td>{team.teamRank}</td>
                                        <td>{team.teamName}</td>
                                        <td>{team.teamPoint}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}

export default TicketingSide;