import {Button, IconButton} from "@material-tailwind/react";

const PageComponet = ({serverData, movePage})=>{
    return (
        <div className="m-6 flex justify-center">
            {serverData.prev?
                <Button variant="outlined" size="sm" onClick={()=>movePage({page:serverData.prevPage})}>Previous</Button>
                : <></>
            }
            {serverData.pageNumList.map(pageNum =>
                <IconButton variant={`${serverData.current ===pageNum? 'outlined':'text'}`} onClick={()=>movePage({page:pageNum})} size="sm">1</IconButton>
            )}
            {serverData.next ?
                <Button variant="outlined" size="sm" onClick={()=>movePage({page:serverData.nextPage})}>Next</Button>
                :<></>
            }
        </div>
    )
}

export default PageComponet;