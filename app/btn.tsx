
interface ButtonProps {
    text: string;
    width?: string; // Optional width pr
    textcolor?: string;
    bcolor?:string;
    onHandler?:() => void;
  }
 const Btn:React.FC<ButtonProps> = ({text,width,bcolor = "black",textcolor ="white",onHandler })=> {
  return (
    <div className="flex justify-center items-center text-center mt-10"><button onClick={onHandler}  style={{ backgroundColor: bcolor,width:width, color:textcolor}} className="text-white rounded-xl p-2 w-[300px]" >{text}</button></div>


  
  )  
}
 export default Btn