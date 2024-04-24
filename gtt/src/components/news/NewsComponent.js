import {Avatar, Typography} from "@material-tailwind/react";
import useCustomMove from "../../hooks/useCustomMove";
import {useNavigate} from "react-router-dom";


const img = "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg"

const ListComponent = ({serverData,page,size}) =>{
    const {moveToRead} = useCustomMove()
    const navigate = useNavigate()
    const dtoList = Array.isArray(serverData.dtoList)?serverData.dtoList:[]
    console.log(dtoList)
    return (
        <tbody>
            {dtoList.map( (dto,index) => {
                const isLast = index === serverData.dtoList.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                return (
                    <tr key={dto.newsNo} onClick={()=> moveToRead({pathName:'/news/read',num:dto.newsNo,totalPage:serverData.totalCount})}>
                        <td className={classes}>
                                <div className="flex items-center gap-3">
                                    <Avatar src={img} alt={dto.theTeam} size="sm"/>
                                    <div className="flex flex-col">
                                        <Typography variant="small" color="blue-gray" className="font-normal">{dto.theTeam}</Typography>
                                    </div>
                                </div>
                        </td>
                        <td>
                            <div className="flex flex-col">
                                <Typography variant="small" color="blue-gray" className="font-normal">{dto.title}</Typography>
                            </div>
                        </td>
                        <td className={classes}>
                            <Typography variant="small" color="blue-gray"className="font-normal">{dto.writer}</Typography>
                        </td>
                        <td className={classes}>
                            <Typography variant="small" color="blue-gray" className="font-normal">{dto.hits}</Typography>
                        </td>
                        <td className={classes}>
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                            >
                                {dto.recomNo}
                            </Typography>
                        </td>
                        <td>
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                            >
                                {dto.regDate /*.format("yyyy-MM-dd")*/}
                            </Typography>
                        </td>
                    </tr>
                );

            })}
        </tbody>
    )
}

export default ListComponent
