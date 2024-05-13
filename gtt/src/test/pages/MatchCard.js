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
    const [stadiumName, setStadiumName] = useState("")
    const [showDialog, setShowDialog] = useState(false);

    const handleOpenModal = useCallback((match,stadiumName) => {
        setMatchData(match)
        setStadiumName(stadiumName)
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
    useEffect(() => {
        setIsLoading(true);
        getTournament(818)
            .then(data => {
                console.log("API data:", data);
                setTournament({...data.tournament});
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
            {tournament.matches.map((match, index) => {
                const name = stadium[parseInt(Math.random() * stadium.length)]
                return(
                    <Card key={match.matchId} className="mb-4">
                        <CardBody className="grid grid-rows-2 ">
                            <div className="row-start-1 items-center text-center mb-0 ">
                                <Typography variant="h6">
                                    <small>{tournament.name}</small>
                                </Typography>
                            </div>
                            <div className="grid grid-cols-4 flex items-center ">
                                <Typography variant="h6">
                                    <small> {match.matchDate}</small>
                                </Typography>
                                <Typography variant="h6">
                                    {name}
                                </Typography>
                                <div className="col-start-3">
                                    <Typography variant="h5">
                                        {match.serverTeam1.teamName} <small>vs</small> {match.serverTeam2.teamName}
                                    </Typography>
                                </div>
                                <div className="span- text-center mt-2">
                                    <Button onClick={() => handleOpenModal(match,name)}
                                            className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl">
                                        예매
                                    </Button>
                                </div>
                            </div>
                        </CardBody>
                    </Card>

                )
            })}
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
                                <p>{stadiumName}</p>
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
                        {stadiumName === "LOL PARK" ? <Stadium/> : <TestStadium/>}
                        {/* 예매 정보 추가 */}
                    </div>
                </DialogBody>
            </Dialog>
        </div>
    );
};

export default MatchCard;