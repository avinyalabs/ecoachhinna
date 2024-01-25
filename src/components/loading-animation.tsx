import Lottie from 'lottie-react'
import loader from '../../public/animation.json'

const LoadingAnimation = () => {
  return <Lottie animationData={loader} loop autoplay />
}

export default LoadingAnimation
