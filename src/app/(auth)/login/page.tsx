import LoginPage from "./LoginPage";
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from "next/navigation";


const Login = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    if (session) {
        redirect('/')
    }

    return (
        <div>
            <LoginPage />
        </div>
    )
}
export default Login;