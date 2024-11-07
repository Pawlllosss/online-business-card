import Info from "./Info.tsx";
import ImageHolder from "./ImageHolder.tsx";

const Content = () => {
    return <div className="flex flex-row justify-evenly items-center">
        <Info/>
        <ImageHolder/>
    </div>
}

export default Content;