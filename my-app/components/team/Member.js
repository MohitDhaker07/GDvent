import Image from "next/image"

export default function Memeber(props) {
  return (
    <div className="flex flex-col items-center">
      <Image src={props.pfp} alt="image" />
      <span className="large-bold-text">Mohit Dhaker</span>
      <span className="large-bold-text">Mohit Dhaker</span>
      <span className="large-bold-text">Mohit Dhaker</span>
      <span className="large-bold-text">Mohit Dhaker</span>
      <span className="small-bold-text mb-16"></span>
    </div>
  );
}