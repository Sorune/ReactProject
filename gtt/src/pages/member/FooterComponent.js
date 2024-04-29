import {Accordion,AccordionHeader,AccordionBody,Card, CardBody} from "@material-tailwind/react";
import React from "react";

const FooterComponent = () => {

    const [open, setOpen] = React.useState(1);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <>
            <Card>
                <CardBody>
                    <div className="col-auto gap-5">
                        <div className="col-start-1 col-end-2">
                            <Accordion open={open === 1}>
                                <AccordionHeader onClick={() => handleOpen(1)}>What is Material Tailwind?</AccordionHeader>
                                <AccordionBody>
                                    We&apos;re not always in the position that we want to be at. We&apos;re constantly
                                    growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                                    ourselves and actualize our dreams.
                                </AccordionBody>
                            </Accordion>
                        </div>
                        <div className="col-start-3 col-end-4">
                            <Accordion open={open === 2}>
                                <AccordionHeader onClick={() => handleOpen(2)}>What is Material Tailwind?</AccordionHeader>
                                <AccordionBody>
                                    We&apos;re not always in the position that we want to be at. We&apos;re constantly
                                    growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                                    ourselves and actualize our dreams.
                                </AccordionBody>
                            </Accordion>
                        </div>
                        <div className="col-start-5 col-end-6">
                            <Accordion open={open === 3}>
                                <AccordionHeader onClick={() => handleOpen(3)}>What is Material Tailwind?</AccordionHeader>
                                <AccordionBody>
                                    We&apos;re not always in the position that we want to be at. We&apos;re constantly
                                    growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                                    ourselves and actualize our dreams.
                                </AccordionBody>
                            </Accordion>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </>
    );
}

export default FooterComponent;