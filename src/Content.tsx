import Info from "./Info.tsx";
import ImageHolder from "./ImageHolder.tsx";

const Content = () => {
    return <div className="flex items-center justify-center flex-row mx-8">
        {/*<div className="flex h-[60vh]">*/}
        {/*<div className="flex flex-row justify-evenly items-center w-full">*/}
        <Info/>
        <ImageHolder/>
    </div>
    {/*</div>*/
    }
    {/*    https://play.tailwindcss.com/tNx497gtGH*/
    }
    // </div>
}

export default Content;