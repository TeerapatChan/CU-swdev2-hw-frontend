export default async function getHospital({id}: { id: string }) {
    const response = await fetch(`http://localhost:5000/api/v1/hospitals/${id}`);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    const data = await response.json();
    return data;

}
