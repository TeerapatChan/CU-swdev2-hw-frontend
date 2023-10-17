import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import getUserProfile from '@/libs/getUserProfile'

export default async function userProfile() {
    const session = await getServerSession(authOptions);
    if (!session || !session.user.token) return null;

    const profile = await getUserProfile(session.user.token);
    var createdAt = new Date(profile.data.createdAt);

    return (
        <div>
            <main className="bg-slate-100">
                <div>{profile.data.name}</div>
                <table className='table-auto border-separate border-spacing-2'>
                <tbody>
                    <tr><td>Email : {profile.data.email}</td></tr>
                    <tr><td>Tel. : {profile.data.tel}</td></tr>
                    <tr><td>Member since : {createdAt.toString()}</td></tr>
                </tbody>
                </table>
            </main>
        </div>
    )
}