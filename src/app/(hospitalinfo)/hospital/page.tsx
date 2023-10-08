import React, { Suspense } from "react"; 
import HospitalCatalog from "@/components/hospitalCatalog";
import { LinearProgress } from "@mui/material";
import getHospitals from "@/libs/getHospitals";

export default function HospitalInfo() {
    const hospitals = getHospitals();
    return (
        <main className="text-center p-5">
            <h1 className="font-semibold text-3xl">Choose a hospital</h1>
            <Suspense fallback={<p>Loading ... <LinearProgress/></p>}>
                <HospitalCatalog hospitalJSON={hospitals}/>
            </Suspense>
        </main>
    );
}

