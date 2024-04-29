import BasicLayout from "../layouts/BasicLayout";
import {Typography} from "@material-tailwind/react";
import {TeamCard} from "../components/common/TeamCard";

const members = [
    {
        img: `/img/bongo-cat.gif`,
        name: "남태욱",
        title: "Team Leader",
        git:"https://github.com/Sorune",
    },
    {
        img: `/img/bonobono.gif`,
        name: "이서준",
        title: "Team Sub Leader",
        git:"https://github.com/lsj0317",
    },
    {
        img: `/img/뽀빠이.gif`,
        name: "양지웅",
        title: "Team Member",
        git:"https://github.com/Yangjiwung",
    },
    {
        img: `/img/jerry.gif`,
        name: "전필우",
        title: "Team Member",
        git:"https://github.com/5516146",
    },
];

const AboutPage = ()=>{
    return (
        <BasicLayout>
            <section className="min-h-screen py-8 px-8 lg:py-28">
                <div className="container mx-auto">
                    <div className="mb-16 text-center lg:mb-28">
                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="text-lg"
                        >
                            Meet the Team
                        </Typography>
                        <Typography
                            variant="h1"
                            color="blue-gray"
                            className="my-2 !text-2xl lg:!text-4xl"
                        >
                            Behind the Success: Our Dedicated Team
                        </Typography>
                        <Typography
                            variant="lead"
                            className="mx-auto w-full !text-gray-500 max-w-4xl"
                        >
                            From visionary leadership to creative talent, and technical wizards,
                            each team member plays a pivotal role in delivering the exceptional
                            service and innovative solutions.
                        </Typography>
                    </div>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {members.map((props, key) => (
                            <TeamCard key={key} {...props} />
                        ))}
                    </div>
                </div>
            </section>
        </BasicLayout>
    );
}

export default AboutPage;