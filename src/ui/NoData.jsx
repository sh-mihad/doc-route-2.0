import Lottie from "lottie-react";
import noDataFound from '../assets/nodata/nodata.json';

export default function NoData() {
  return (
    <div className="h-screen flex items-center justify-center text-white">
      <Lottie loop={true} animationData={noDataFound} className="aspect-video" />
    </div>
  )
}