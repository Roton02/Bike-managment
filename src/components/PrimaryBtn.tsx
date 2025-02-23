import { MoveRight } from "lucide-react";

 type PrimaryBtnProps = {
    title:string,       
    type?:"button" | "submit" | "reset" | undefined

}


const PrimaryBtn = ({title,type}:PrimaryBtnProps) => {
    return (
       <button  type={type?type:'button'} className="bg-primary flex font-semibold text-white p-2 items-center gap-3 rounded-sm">{title} <MoveRight />

       </button>
    );
};

export default PrimaryBtn;