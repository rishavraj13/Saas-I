import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation";

export default async function dashboard(){

    const session = await getServerSession(authOptions)

    return(
        <div className="bg-black min-h-screen">
            
        </div>
    )
}