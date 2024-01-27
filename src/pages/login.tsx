

import { useRouter } from 'next/router';
import {useEffect} from "react";

/*export const getServerSideProps = async ({ res }) => {
    // Redirect to the root route
    res.writeHead(302, { Location: '/' });
    res.end();

    return {
        props: {},
    };
};*/

const login = () => {
    const router = useRouter();

    // Check if router is available before using it
    if (!router) {
        return <div>Loading...</div>;
    }

    // Now you can safely use router.push


    useEffect(() => {
        // Now you can safely use router.push
        const handleRedirect = () => {
            router.push('/');
        };

        handleRedirect();
        return () => {
        };
    }, [router]);

    return (
        <div>
            <button >Go to Some Page</button>
        </div>
    );
};

export default login;