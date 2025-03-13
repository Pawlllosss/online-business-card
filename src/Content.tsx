import Info from "./Info.tsx";
import ImageHolder from "./ImageHolder.tsx";

const Content = () => {
    return <div className="flex h-[60vh] items-stretch justify-center flex-row space-x-6 mx-52">
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