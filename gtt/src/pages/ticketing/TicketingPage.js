import { Button, Card, CardBody, Typography } from "@material-tailwind/react";

const TicketingPage = () => {
    const games = [
        {
            matchDay: "5.11(토)",
            matchHour: "17:00",
            matchName: "LCK 스프링",
            matchRound: "1라운드",
            matchOpponent: "GEN.G vs SKT1"
        },
        {
            matchDay: "5.12(일)",
            matchHour: "19:00",
            matchName: "LCK 스프링",
            matchRound: "2라운드",
            matchOpponent: "T1 vs KT"
        }
    ];

    return (
        <div>
            {games.map((game, index) => (
                <Card key={index} className="mt-6 w-full">
                    <CardBody>
                        <div className="grid col-auto gap-5">
                            <div className="col-start-1 col-end-1">
                                <Typography>{game.matchDay}</Typography>
                            </div>
                            <div className="col-start-2 col-end-2">
                                <Typography>{game.matchHour}</Typography>
                            </div>
                            <div className="col-start-3 col-end-3">
                                <Typography>
                                    {game.matchName}
                                    <br/>
                                    {game.matchRound} / {game.matchOpponent}
                                </Typography>
                            </div>
                            <div className="col-start-4 col-end-4">
                                <Button className="w-full h-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800">예매</Button>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            ))}
        </div>
    );
}

export default TicketingPage;
