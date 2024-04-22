import { Card, CardBody, Typography } from "@material-tailwind/react";

const TicketingSide = () => {
    
    const teams = [

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