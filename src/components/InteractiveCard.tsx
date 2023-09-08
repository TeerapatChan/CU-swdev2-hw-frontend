'use client'

export default function InteractiveCard({children}: {children: React.ReactNode}) {
    function onCardMouseAction(event:React.SyntheticEvent) {
        if (event.type === 'mouseover') {
            event.currentTarget.classList.remove('shadow-md');
            event.currentTarget.classList.add('shadow-xl');
            event.currentTarget.classList.remove('bg-white');
            event.currentTarget.classList.add('bg-neutral-200');
        }else{
            event.currentTarget.classList.remove('shadow-xl');
            event.currentTarget.classList.add('shadow-md');
            event.currentTarget.classList.add('bg-white');
            event.currentTarget.classList.remove('bg-neutral-200');
        }
    }

    return (
        <div className='w-3/12 h-80 bg-white shadow-md rounded-xl p-4 m-4 hover:cursor-pointer'
        onMouseOver={onCardMouseAction} onMouseOut={onCardMouseAction}>
            {children}
        </div>
    )
}