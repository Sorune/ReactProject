import {Avatar, Typography} from "@material-tailwind/react";
import useCustomMove from "../../hooks/useCustomMove";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

const MyPostCardList = ({pathName, serverData,page,size}) =>{
    const {moveToRead} = useCustomMove()
    const dtoList = Array.isArray(serverData.dtoList)?serverData.dtoList:[]

    return (
        <tbody>
        {dtoList.map( (dto,index) => {
            const isLast = index === serverData.dtoList.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

            return (
                <tr key={dto.newsNo || dto.notiNo || dto.pno} onClick={() => moveToRead({ pathName: pathName, num: dto.newsNo || dto.notiNo || dto.pno, totalPage: serverData.totalCount })}>

                <td>
                        <div className="flex flex-col">
                            <Typography variant="small" color="blue-gray" className="font-normal">{dto.title}</Typography>
                        </div>
                    </td>
                    <td className={classes}>
                        <Typography variant="small" color="blue-gray" className="font-normal">{dto.writer}</Typography>
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

export default MyPostCardList
