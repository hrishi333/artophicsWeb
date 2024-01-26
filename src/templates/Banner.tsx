import Link from 'next/link';

import {CTABanner} from '../cta/CTABanner';
import {Section} from '../layout/Section';

const Banner = () => (
    <Section>
        <CTABanner
            title="Get latest post and updates on our official instagram handle."
            subtitle="Visit our Instagram."
            button={
                <Link href="https://www.instagram.com/artophics?igsh=Mnhsa2lhMnVtcDY1">
                    <button>

                        <p>Visit Instagram</p>
                    </button>
                </Link>
            }
        />
    </Section>
);

export {Banner};
