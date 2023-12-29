import darkPng from "../../assets/website/dark-mode-button.png"
import lightPng from "../../assets/website/light-mode-button.png"

const DarkMode = () => {
  return (
    <>
<div>
    <img src={darkPng} alt="" className="w-12" />
    <img src={lightPng} alt="" className="w-12" />
</div>
    </>
  )
}

export default DarkMode