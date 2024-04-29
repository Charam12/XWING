import Image from "next/image";

export default function Header() {
    return (
        <section className="mx-auto w-10/12 mt-32 flex justify-between ">
            <div className="p-3 space-y-32">
                <div className="space-y-6">
                    <div className="flex gap-6">
                        <Image 
                            src="/exchange.png"
                            width={75}
                            height={50}
                            alt="Crypto Exchange"
                            
                        />
                        <div className="space-y-2">
                            <h3 className="text-4xl font-semibold">Exchange Crypto</h3>
                            <p className="text-lg font-semibold tracking-wide indent-3">In Tbilisi at a favorable rate</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Image src="/lightning-fill.svg" width={20} height={20} alt="Lighting"/>
                        <p>within 5 minutes,in the center of town!</p>
                    </div>
                </div>
                <div className="space-y-2">
                    <p className="text-sm">Follow us on</p>
                    <ul className="flex space-x-6">
                        <li>
                            <Image 
                                src="/facebook.svg"
                                width={30}
                                height={30}
                                alt="Facebook"
                            />
                        </li>
                        <li>
                            <Image 
                                src="/line.svg"
                                width={30}
                                height={30}
                                alt="line"
                            />
                        </li>
                        <li>
                            <Image
                                src="/instagram.svg"
                                width={30}
                                height={30}
                                alt="instagram"
                            />
                        </li>
                        <li>
                        <Image
                                src="/telegram.svg"
                                width={30}
                                height={30}
                                alt="telegram"
                            />
                        </li>
                    </ul>   
                </div>
                <div className="text-black grid grid-cols-3 gap-4">
                    <div className="rounded-lg shadow-[0_3px_12px_1px_rgba(0,0,0,0.3)] p-6 w-80 bg-white flex gap-5">
                        <Image src="/exchange2.png" width={85} height={30} alt="Exchange2" className="w-16 h-16 self-center"/>
                        <div>
                            <p className="font-semibold">Select currencies for exchange</p>
                            <p className="text-sm">Pick one of the pairs to exchange for a beneficial rate without commission</p>
                        </div>
                    </div>
                    <div className="rounded-lg shadow-[0_3px_12px_1px_rgba(0,0,0,0.3)] p-6 w-80 bg-white flex gap-5">
                        <Image src="/clipboard2-plus.svg" width={85} height={30} alt="Exchange2" className="w-16 h-16 self-center"/>
                        <div>
                            <p className="font-semibold">Create an application Online</p>
                            <p className="text-sm">Pick one of the pairs to exchange for a beneficial rate without commission</p>
                        </div>
                    </div>
                    <div className="rounded-lg shadow-[0_3px_12px_1px_rgba(0,0,0,0.3)] p-6 w-80 bg-white flex gap-5">
                    <Image src="/cash-stack.svg" width={85} height={30} alt="Exchange2" className="w-16 h-16 self-center"/>
                        <div>
                            <p className="font-semibold">Make an exchange in 5 minutes</p>
                            <p className="text-sm">Pick one of the pairs to exchange for a beneficial rate without commission</p>
                        </div>
                    </div>
                </div>
            </div>
            <section className="p-8 w-96 h-fit rounded-xl bg-white text-black text-center shadow-xl z-10">
                <div className="border-b-[1px] pb-4 space-y-2">
                    <h4 className="text-2xl text-black/80 uppercase font-bold">Money Exchange</h4>
                    <p className="text-xs">You Can calculate and exchange money here</p>
                </div>
                <div className="text-left text-sm border-b-[1px] py-4 space-y-3">
                    <div className="space-y-1">
                        <p>Give</p>
                        <div className="join shadow-lg">
                            <input placeholder="0.0000000" className="input input-bordered bg-white w-full join-item"/>
                            <select className="select select-bordered join-item bg-white">
                                <option selected>
                                    BTC
                                </option>
                            </select>
                        </div> 
                    </div>
                    <div className="space-y-1">
                        <p>Get</p>
                        <div className="join shadow-lg">
                            <input placeholder="0.0000000" className="input input-bordered bg-white w-full join-item"/>
                            <select className="select select-bordered join-item bg-white">
                                <option selected>
                                    USD
                                </option>
                            </select>
                        </div> 
                    </div>
                    <p className="text-xs text-center">1BTC = 64305.40275049USD</p>
                    <button className="btn btn-warning btn-block text-white font-semibold"><Image src="/exchange.png" width={20} height={20} alt="Exchange Icon"/>Exchange</button>
                </div>
                <div className="py-4 space-y-2">
                    <span className="flex gap-2 text-xs items-center"><Image src="/check2-circle.svg" width={20} height={20} alt="checked"/>Excellent market rates</span>
                    <span className="flex gap-2 text-xs items-center"><Image src="/check2-circle.svg" width={20} height={20} alt="checked"/>No hidden fees or added commissions</span>
                    <span className="flex gap-2 text-xs items-center"><Image src="/check2-circle.svg" width={20} height={20} alt="checked"/>Multiple currency pairs</span>
                    <span className="flex gap-2 text-xs items-center"><Image src="/check2-circle.svg" width={20} height={20} alt="checked"/>Online support via Telegram</span>
                </div>
                <div className="flex text-xs text-left items-center gap-2">
                    <Image src="/visa.png" width={60} height={50} alt="visa"/>
                    <div>
                        <p className="font-bold">VISA</p>
                        <p>supported Payment Systems</p>
                    </div>
                </div>
            </section>
        </section>
    );
}