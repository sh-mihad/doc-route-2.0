import Lottie from "lottie-react";
import errorAnimationData from '../assets/nodata/error.json';

export default function Error() {
  return (
    <div className="h-screen flex items-center justify-center text-white">
      <Lottie loop={true} animationData={errorAnimationData} className="aspect-video" />
    </div>
  )
}