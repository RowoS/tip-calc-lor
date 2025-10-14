import Image from "next/image";
import LogoIcon from "../public/logo.svg"

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <Image 
          src={LogoIcon}
          alt=""
        />
        <div className="bg-main-container-color max-w-4x1 rounded-3xl p-32 mt-10">
          <div className="grid grid-cols-2 gap-12">
            <div className="flex flex-col gap-8">
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
