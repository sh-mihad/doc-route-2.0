import LoadingAnim from "../assets/loading/docLoading.json";
import Lottie from "lottie-react"

const Loading = () => {
    return (
        <div className="h-screen flex items-center justify-center text-white">
            <Lottie loop={true} animationData={LoadingAnim}/>
        </div>
    );
};

export default Loading;