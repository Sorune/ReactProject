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
                            GTT 프로젝트 팀원을 소개합니다
                        </Typography>
                        <div className="text-left">
                            <Typography variant="lead"  className="mx-auto w-full !text-gray-500 max-w-4xl">
                                조장 남태욱 : 전체적인 프로젝트 기획 및 라이브러리 관리, 폴더 구조 관리, 스프링 시큐리티 및 JWT 사용
                            </Typography>
                            <Typography variant="lead"  className="mx-auto w-full !text-gray-500 max-w-4xl">
                                부조장 이서준 : 버그리포팅 및 프로젝트의 전반적인 work-flow관리, 로그인 처리 및 검증 로직
                            </Typography>
                            <Typography variant="lead"  className="mx-auto w-full !text-gray-500 max-w-4xl">
                                팀원 양지웅 : 전반적인 디자인, 화면 구성, 게시판 작성. UI 이벤트 및 예매, 결제 로직 작성
                            </Typography>
                            <Typography variant="lead"  className="mx-auto w-full !text-gray-500 max-w-4xl">
                                팀원 전필우 : 게시판 작성 및 API 통신 구현, API 서버 작성 및 쿼리 작성
                            </Typography>
                        </div>
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