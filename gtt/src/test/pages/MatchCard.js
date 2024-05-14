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
import Stadium from "./Stadium"

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

    // 랜덤으로 stadium 배열 생성
    const stadium = ["LOL PARK", "KSPO DOME"];
    const randomStadium = stadium[Math.floor(Math.random() * stadium.length)];

    useEffect(() => {
        setIsLoading(true);
        getTournament(818)
            .then(data => {
                console.log("API data:", data);

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
                <Card key={match.matchId} className="mb-4"
                      style={{

                          height:"150px",
                          backgroundImage: `url(/img/LCK.png)`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          backgroundColor: 'rgba(255, 255, 255, 1.0)'}}>
                    <CardBody>
                        <div className="row-start-1 items-center text-center mb-0">
                            <Typography variant="h6" color="white">
                                <small>{tournament.name}</small>
                            </Typography>
                        </div>
                        <div className="grid grid-cols-8 gap-5 flex items-center">
                            <div className="col-start-1 col-end-2 ">
                                <Typography variant="h6" color="white">
                                    <small>{match.matchDate}</small>
                                </Typography>
                            </div>

                            <div className="col-start-2 col-end-3 ">
                                <Typography variant="h6" color="white">
                                    {tournament.stadium}
                                </Typography>
                            </div>

                            <div className="col-start-3 col-end-7 flex justify-center">
                                <Typography variant="h4" color="white">
                                    {match.serverTeam1.teamName} <small>vs</small> {match.serverTeam2.teamName}
                                </Typography>
                            </div>
                            <div className="col-start-8 flex justify-end w-full">
                                <Button onClick={() => handleOpenModal(match)} className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl">
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
                        <div>
                            <Typography color="white" variant="h5">{tournament.name} -</Typography>
                        </div>
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
                        {tournament.stadium === "LOL PARK" ? <Stadium matchData={matchData} stadium={tournament.stadium} /> : <TestStadium matchData={matchData} stadium={tournament.stadium}/>}
                        {/* 예매 정보 추가 */}
                    </div>
                </DialogBody>
            </Dialog>
        </div>
    );
};

export default MatchCard;