import {useEffect, useState} from "react";
import {getOnePlayer} from "../../api/playerApi";

const initState = {
    pno : 0,
    age : 0,
    nickName : '',
    realName : '',
    teamName : '',
    position : '',
    birthDate : null
}

const ReadComponent = ({pno}) => {
    const [player, setPlayer] = useState(initState)

    return (
        <div>

        </div>
    )
}

export default ReadComponent
