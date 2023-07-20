import { Html,useProgress } from "@react-three/drei"

const Loader = () => {
  const {progress}=useProgress()
  return (
    <Html>
      <span className="cannvas-load"></span>
      <p className=" text-xl font-semibold text-[#F1F1F1] mt-5">{progress.toFixed(2)}%</p>
    </Html>
  )
}

export default Loader