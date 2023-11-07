import Card from './Card';
import Link from 'next/link';

export default async function HospitalCatalog({hospitalJSON}: {hospitalJSON: Object}) {
    const hospitals = await hospitalJSON;
  
    return (
        <div>
            <p className='font-semibold pt-5'>Available vaccine booking options: {hospitals.count} hospitals</p>
            <div className='flex flex-row flex-wrap mr-15 ml-15 mt-8 mb-8 justify-center gap-14'>
                {
                hospitals.data.map((hospital:Object) => (
                    <Link key={hospital.id} href={`/hospital/${hospital.id}`} className='w-3/12'>
                        <Card hospitalName={hospital.name} imgSrc={hospital.picture}/>
                    </Link>
                ))
                }
            </div>
        </div>
    );
}
