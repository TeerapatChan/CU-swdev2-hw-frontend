import Image from "next/image"

export default function HospitalInfo({params} : {params:{hid:string}}) {
    const mockData = new Map()
    mockData.set("001", {name:"Chulalongkorn Hospital", img:"/img/chula.jpg"})
    mockData.set("002", {name:"Rajavithi Hospital", img:"/img/rajavithi.jpg"})
    mockData.set("003", {name:"Thammasat University Hospital", img:"/img/thammasat.jpg"})

    return (
        <main className="text-center p-5">
        <div className="flex flex-row my-5">
            <Image src={(mockData.get(params.hid)).img} alt='hospital' width={0} height={0} sizes="100vw"
            className="rounded-lg w-[30%]"></Image>
            <div className="font-semibold mx-10 text-2xl">{(mockData.get(params.hid)).name}</div>
        </div>
        </main>
    )
}