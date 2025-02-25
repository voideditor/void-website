
import { Metadata } from 'next';
import Changelog from './Changelog';

export const metadata: Metadata = {
    // title: 'Welcome to Your Platform',
    // description: 'Transform your experience with our innovative solution.',
    // openGraph: {
    //     title: 'Welcome to Your Platform',
    //     description: 'Transform your experience with our innovative solution.',
    // },
};

export default function Page() {
    return (<>
        <Changelog />
    </>);
}