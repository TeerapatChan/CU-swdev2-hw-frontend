import React, { Suspense } from "react"; 
import HospitalCatalog from "@/components/hospitalCatalog";
import { LinearProgress } from "@mui/material";
import getHospitals from "@/libs/getHospitals";
import AddHospitalForm from "@/components/AddHospitalForm";

export default async function HospitalInfo() {
    const hospitals = getHospitals();

    return (
        <main className="text-center p-5 flex flex-col justify-center">
            <h1 className="font-semibold text-3xl">Choose a hospital</h1>
            <Suspense fallback={<p>Loading ... <LinearProgress/></p>}>
                <HospitalCatalog hospitalJSON={hospitals}/>
                <AddHospitalForm/>  
            </Suspense>
        </main>
    );
}