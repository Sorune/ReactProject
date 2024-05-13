import React, {useCallback, useEffect, useState} from "react";
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Dialog,
    DialogBody,
    DialogHeader,
    Typography
} from "@material-tailwind/react";
import {getTournament} from "../../api/matchAPI";
import TestStadium from "./TestStadium";
import Stadium from "./Stadium";

const MatchCard = () => {
    const [tournament, setTournament] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [openModal, setOpenModal] = useState(false)
    const [matchData, setMatchData] = useState(null)
    const [showDialog, setShowDialog] = useState(false);

    const handleOpenModal = useCallback((match) => {
        setMatchData(match)
        setOpenModal(true);
    }, [setOpenModal]);

    const handleOpenDialog = () => {
        setShowDialog(true)
    };
    const handleCloseDialog = () => {
        setShowDialog(false);
    };


    useEffect(() => {
        setIsLoading(true);
        getTournament(815)
            .then(data => {
                console.log("API data:", data);
                // 랜덤으로 stadium 배열 생성
                const stadium = ["LOL PARK", "KSPO DOME"];
                const randomStadium = stadium[Math.floor(Math.random() * stadium.length)];
                // 토너먼트 객체에 stadium 속성 추가
                const updatedTournament = {
                    ...data.tournament,
                    stadium: randomStadium
                };
                setTournament(updatedTournament);
            })
            .catch(error => {
                console.error("Error fetching tournament data:", error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <Typography>Loading...</Typography>;
    }

    if (!tournament) {
        return <Typography>No data found.</Typography>;
    }

    return (
        <div>
            {tournament.matches.map((match, index) => (
                <Card key={match.matchId} className="mb-4">
                    <CardBody className="grid grid-rows-2 ">
                        <div className="row-start-1 items-center text-center mb-0 ">
                            <Typography variant="h6">
                                <small>{tournament.name}</small>
                            </Typography>
                        </div>
                        <div className="grid grid-cols-6 flex items-center text-center">
                            <Typography variant="h6">
                               <small> {match.matchDate}</small>
                            </Typography>
                            <Typography variant="h6">
                                {tournament.stadium}
                            </Typography>
                            <div className="col-start-3 col-end-6">
                                <Typography variant="h5">
                                    {match.serverTeam1.teamName} vs {match.serverTeam2.teamName}
                                </Typography>
                            </div>
                            <div className="span-2 text-center mt-2">
                                <Button onClick={() => handleOpenModal(match)}
                                        className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl">
                                    예매
                                </Button>
                            </div>
                        </div>
                    </CardBody>
                </Card>

            ))}
            <Dialog open={openModal} onClose={() => {
                setOpenModal(false)
                setMatchData(null)
            }} handler={handleOpenModal}>
                <Dialog.Header
                    className="rounded-t-lg flex justify-between bg-gradient-to-r from-cyan-500 to-blue-500 bg-gradient-to-bl items-center">
                    <Typography color="white" variant="h4">
                        예매 정보 <small>{tournament.name}</small>
                    </Typography>
                </Dialog.Header>
                <Dialog.Body>
                    {tournament && matchData && (
                        <div>
                            <Typography variant="h6">
                                <p>{matchData.matchDate}</p>
                                <p>{tournament.stadium}</p>
                            </Typography>
                            {matchData && (
                                <Typography variant="h5">
                                    {matchData.serverTeam1.teamImg}{matchData.serverTeam1.teamName} vs {matchData.serverTeam2.teamImg}{matchData.serverTeam2.teamName}
                                </Typography>
                            )}
                        </div>
                    )}
                </Dialog.Body>
                <Dialog.Footer>
                    <Button onClick={() => {
                        handleOpenDialog(matchData);
                        setOpenModal(false);
                    }}>예매</Button>
                    <Button onClick={() => {
                        setOpenModal(false)
                    }}>닫기</Button>
                </Dialog.Footer>
            </Dialog>

            {/*좌석선택*/}
            <Dialog size="lg" className="w-full" open={showDialog} handler={handleCloseDialog}>
                <DialogHeader
                    className="rounded-t-lg flex justify-between bg-gradient-to-r from-cyan-500 to-blue-500 bg-gradient-to-bl items-center">
                    <div className="flex items-center">
                        <Typography color="white" variant="h3" className="mr-4">
                            예매하기
                        </Typography>
                        <Typography color="white" variant="h5">{tournament.name} -</Typography>
                        &nbsp;
                        {matchData && (
                            <Typography variant="h5" color="white">
                                {matchData.serverTeam1.teamName} vs {matchData.serverTeam2.teamName}
                            </Typography>
                        )}
                    </div>
                    <Button variant="gradient" color="red" size="sm" onClick={handleCloseDialog}>
                        X
                    </Button>
                </DialogHeader>
                <DialogBody className="overflow-hidden ">
                    <div className="max-w-full max-h-full h-[34.5rem]">
                        {tournament.stadium === "LOL PARK" ? <Stadium/> : <TestStadium/>}
                        {/* 예매 정보 추가 */}
                    </div>
                </DialogBody>
            </Dialog>
        </div>
    );
};

export default MatchCard;