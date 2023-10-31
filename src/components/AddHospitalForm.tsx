import { TextField, Button } from "@mui/material"
import dbConnect from "@/app/db/dbConnect"
import { revalidatePath } from 'next/cache'
import Hospital from "@/app/db/models/Hospital"
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";



export default async function AddHospitalForm() {
    const session = await getServerSession(authOptions);
    if (!session || !session.user.token) return null;
    const profile = await getUserProfile(session.user.token);

    const addHospital = async (form:FormData) => {
        "use server"
        const name = form.get("name")
        const address = form.get("address")
        const district = form.get("district")
        const province = form.get("province")
        const tel = form.get("tel")
        const picture = form.get("picture")
        const postalcode = form.get("postalcode")
        try {
            dbConnect();
            
            const hospital = await Hospital.create({
                "name":name,
                "address":address,
                "district":district,
                "province":province,
                "postalcode":postalcode,
                "tel":tel,
                "picture":picture
            });
            console.log(hospital);
        }catch(err) {
            console.log(err);
        }
        revalidatePath("/hospitals");
    }
    if (profile.data.role != "admin") return null;
    return (
        <form className="bg-white w-1/2 self-center flex flex-col gap-5 items-center p-5 rounded-lg 
        shadow-xl m-5" action={addHospital}>
            <p className="text-xl">Add hospital</p>
            <TextField label="Hospital name" variant="outlined" className="w-3/4" size="small" required id="name"  name="name"/>  
            <TextField label="Address" variant="outlined" className="w-3/4" size="small" required id="address" name="address"/>
            <TextField label="District" variant="outlined" className="w-3/4" size="small" required id="district"  name="district"/>
            <TextField label="Province" variant="outlined" className="w-3/4" size="small" required id="province"  name="province"/>   
            <TextField label="Postal Code" variant="outlined" className="w-3/4" size="small" required id="postalcode"  name="postalcode"/>   
            <TextField label="Tel." variant="outlined" className="w-3/4" size="small" required id="tel"  name="tel"/>         
            <TextField label="Picture" variant="outlined" className="w-3/4" size="small" required id="picture"  name="picture"/>         
            <Button type='submit' variant="contained" color="primary" className="w-3/4">Add</Button>
        </form>
    )
}