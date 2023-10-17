
export default function InputForm(){
    return (
        <div className="flex flex-col gap-3">
            <p className="text-base font-semibold">First Name</p>
            <input type="text" className="rounded-md outline-slate-300 outline outline-[0.25px] pl-2 h-9 w-full"/>
            <p className="text-base font-semibold">Last Name</p>
            <input type="text" className="rounded-md outline-slate-300 outline outline-[0.25px] pl-2 h-9 w-full"/>
            <p className="text-base font-semibold">ID Card</p>
            <input type="text" className="rounded-md outline-slate-300 outline outline-[0.25px] pl-2 h-9 w-full"/>
            <div className="flex flex-row gap-48">
                <p className="text-base font-semibold">Date</p>
                <p className="text-base font-semibold">Location</p>
            </div>
        </div>
    )
}