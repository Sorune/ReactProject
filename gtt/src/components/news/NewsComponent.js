import {Avatar, Typography} from "@material-tailwind/react";
import useCustomMove from "../../hooks/useCustomMove";
import {memo, useEffect, useState} from "react";


const img = "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg"

const ListComponent = memo(({serverData,page,size,path}) =>{
    const {moveToRead} = useCustomMove()
    const [dtoList,setDtoList] = useState([])
    const [num, setNum] = useState([])
    console.log(dtoList)
    useEffect(() => {
        setDtoList(serverData.dtoList)
        if (path==="news"){
            setNum(serverData.dtoList.map(dto=>dto.newsNo))
        } else if (path === "free"){
            setNum(serverData.dtoList.map(dto=>dto.fno))
        } else if (path==="board"){
            setNum(serverData.dtoList.map(dto=>dto.bno))
        }
    }, []);
    console.log(num)
    return (
        <tbody>
            {dtoList.map( (dto,index) => {
                const isLast = index === serverData.dtoList.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
                return (
                    <tr key={num[index]} onClick={()=> moveToRead({pathName:`/${path}/read`,num:num[index],totalPage:serverData.totalCount})}>
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
})

export default ListComponent
