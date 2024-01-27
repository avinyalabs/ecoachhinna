import Lottie from 'lottie-react'
import loader from '../../public/animation.json'

const LoadingAnimation = () => {
  return <Lottie className="h-20" animationData={loader} loop autoplay />
}

export default LoadingAnimation
