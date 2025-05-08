

import { SignUp } from "../../components/landingpage/SignUp";


export const metadata = {
    title: 'Download',
    description: 'Join the waitlist!',
}



export default function Page() {
    return (<>
        <main className='flex items-center justify-center min-h-screen '>
            <SignUp />
        </main>
    </>
    );
};

