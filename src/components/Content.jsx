
import {BiSolidStar} from "react-icons/bi";


function Content(props) {

  return (
    <div className="bg-slider-bg flex w-[1110px]">
        <div className="w-1/2">
            <img className="w-full h-full object-cover" src={props.imgUrl}/>
        </div>
        <div className="w-1/2 p-[50px] text-base h-auto">
            <div>
                <p>EDITOR&apos;S PICK</p>
                <p className="text-2xl text-black">{props.name}</p>
            </div>
            <p className="mb-4">{props.description}</p>
            <div className="text-sm">
                <span>{props.source}</span>
                <p className="text-slider-jun flex items-center gap-1"><span className="after:content-['•'] after:mr-1 after:ml-1">Jun 14</span>  3 min read <BiSolidStar className="w-2"/></p>
            </div>
        </div>
    </div>
  )
}

export default Content  