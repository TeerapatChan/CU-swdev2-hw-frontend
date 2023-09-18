'use client'
export default function InteractiveCard({children}: {children: React.ReactNode}) {
    return (
        <div className='w-full h-80 bg-white shadow-md rounded-xl p-4 m-4 hover:cursor-pointer hover:shadow-xl hover:bg-neutral-200'>
            {children}
        </div>
    )
}