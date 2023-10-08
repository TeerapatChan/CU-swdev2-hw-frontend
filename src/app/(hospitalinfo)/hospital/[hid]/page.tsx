import Image from "next/image"
import getHospital from "@/libs/getHospital"

export default async function HospitalInfo({params} : {params:{hid:string}}) {
    const hospitalData = (await getHospital({id:params.hid})).data;

    return (
        <main className="p-10">
            <div className="flex flex-row my-5">
                <Image src={hospitalData.picture} alt='hospital' width={0} height={0} sizes="100vw"
                className="rounded-lg w-[30%] shadow-lg"></Image>
                <div className="flex flex-col gap-5">
                    <div className="font-semibold mx-10 text-2xl">{hospitalData.name}</div>
                    <div className="pl-8 mx-10 text-lg">Address : {hospitalData.address}</div>
                    <div className="pl-8 mx-10 text-lg">District : {hospitalData.district}</div>
                    <div className="pl-8 mx-10 text-lg">Province : {hospitalData.province}</div>
                    <div className="pl-8 mx-10 text-lg">Tel. : {hospitalData.tel}</div>
                </div>
            </div>
        </main>
    )
}