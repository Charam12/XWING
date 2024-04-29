import Navbar from "@/components/navbar";
import Wave from "@/components/wave";
import Header from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="wave-header -z-10">
        <Navbar />
        <Wave />
        <Header />
        <div className="text-black w-[1600px] my-10 mx-auto">
          <h3 className="text-left font-semibold text-xl">
            XWING.GE - One of the largest crypto exchange points in Tbilisi with a history in the business of over 6 years. 
          </h3>
          <div className="grid grid-cols-2 gap-10 px-8 my-10">
            <div className="bg-white shadow-[0_3px_10px_-1px_rgba(0,0,0,0.3)] w-full py-6 pl-10 pr-24 rounded-2xl">
              <p className="font-bold">
                Exchange to cash in Tbilisi and 238 other cities and 32 countries
              </p>
              <p className="text-sm">We will arrange cash delivery within 60 minutes, whereever you are</p>
              <ul className="grid grid-cols-2 mt-8 text-sm gap-2">
                <li className="country_item">
                  <Image src="/all-flag/ge.png" width={30} height={20} alt="Gorgia" className="border-[1px]"/>
                  Georgia
                </li>
                <li className="country_item">
                  <Image src="/all-flag/tr.png" width={30} height={20} alt="Turkiye" className="border-[1px]"/>
                  Turkiye
                </li>
                <li className="country_item">
                  <Image src="/all-flag/am.png" width={30} height={20} alt="Armeria" className="border-[1px]"/>
                  Armeria
                </li>
                <li className="country_item">
                  <Image src="/all-flag/ae.png" width={30} height={20} alt="UAE" className="border-[1px]"/>
                  UAE
                </li>
                <li className="country_item">
                  <Image src="/all-flag/cn.png" width={30} height={20} alt="China" className="border-[1px]"/>
                  China
                </li>
                <li className="country_item">
                  <Image src="/all-flag/kg.png" width={30} height={20} alt="Kyrgyzstan" className="border-[1px]"/>
                  Kyrgyzstan
                </li>
                <li className="country_item">
                  <Image src="/all-flag/kz.png" width={30} height={20} alt="Kazakhstan" className="border-[1px]"/>
                  Kazakhstan
                </li>
                <li className="country_item">
                  <Image src="/all-flag/uz.png" width={30} height={20} alt="Uzbekistan" className="border-[1px]"/>
                  Uzbekistan
                </li>
              </ul>
            </div>
            <div className="bg-white shadow-[0_3px_10px_-1px_rgba(0,0,0,0.3)] w-full py-6 pl-6 pr-24 rounded-2xl flex flex-col">
              <p className="font-semibold">
                Friendly support 24/7 for online transactions
              </p>
              <ul className="text-sm list-disc list-inside marker:text-primary">
                <li >
                  Confirms the status of the application
                </li>
                <li>
                  Will answer any questions
                </li>
                <li>
                  Will help with solving any problems
                </li>
              </ul>
              <button className="bg-gray-300 font-bold text-black flex items-center gap-2 btn btn-wide border-0 rounded-2xl mt-auto hover:text-white"><Image
                        src="/telegram.svg"
                        width={40}
                        height={40}
                        alt="telegram"
                        className=""/>XWING Telegram</button>
            </div>
          </div>
        </div>
        <div className="text-black w-[1600px] my-10 mx-auto p-2 grid grid-cols-2 border-2 border-primary rounded-xl">
          <div className="w-full h-20 border-r-2 flex justify-center items-center gap-3">
            <Image src="/clock-history.svg" width={10} height={10} alt="History" className="w-10 h-10"/>
            <div>
              <p className="font-bold text-xl">750 000</p>
              <p className="font-semibold text-sm">Successful Transaction</p>
            </div>
          </div>
          <div className="w-full h-20 flex justify-center items-center gap-3">
            <Image src="/people-fill.svg" width={10} height={10} alt="History" className="w-10 h-10"/>
            <div>
              <p className="font-bold text-xl">150 000</p>
              <p className="font-semibold text-sm">Satisfied customers over 4 years</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
