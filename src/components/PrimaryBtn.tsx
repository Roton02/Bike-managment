import { MoveRight } from "lucide-react";

 type PrimaryBtnProps = {
    title:string,       

}


const PrimaryBtn = ({title}:PrimaryBtnProps) => {
    return (
       <span  className="bg-primary flex font-semibold text-white p-2 items-center gap-3 rounded-sm">{title} <MoveRight />

       </span>
    );
};

export default PrimaryBtn;