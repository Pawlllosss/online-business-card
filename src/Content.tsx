import Info from "./Info.tsx";
import ImageHolder from "./ImageHolder.tsx";

const Content = () => {
    return <div className="flex h-[60vh] justify-center flex-row space-x-20">
        <Info/>
        <ImageHolder/>
    </div>
}

export default Content;