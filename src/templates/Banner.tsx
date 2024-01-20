import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Get latest post and updates on our official instagram handle."
      subtitle="Visit our Instagram."
      button={
        <Link href="https://www.instagram.com/artophics?igsh=Mnhsa2lhMnVtcDY1">
          <Button >

              <p>Visit Instagram</p>
          </Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
