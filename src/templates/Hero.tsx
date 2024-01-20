import Link from 'next/link';

import {Background} from '../background/Background';
import {Button} from '../button/Button';
import {HeroOneButton} from '../hero/HeroOneButton';
import {Section} from '../layout/Section';
import {NavbarTwoColumns} from '../navigation/NavbarTwoColumns';
import {Logo} from './Logo';
import {motion} from "framer-motion";

const Hero = () => (
    <Background color="bg-gray-100">
        <Section yPadding="py-6">
            <NavbarTwoColumns logo={<Logo xl/>}>
                <li>
                    <Link href='/'>
                        Contact Us
                    </Link>
                </li>
                <li>
                    <Link href="/">Explore</Link>
                </li>
            </NavbarTwoColumns>
        </Section>

        <Section yPadding="pt-20 pb-32">
            <motion.h1
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 1.5}}
            >
                <HeroOneButton
                    title={
                        <>
                            {'Welcome to Artophics, where technology\n'}
                            <span className="text-primary-500">meets sustainability for a brighter future.</span>
                        </>
                    }
                    description="Innovative Tech Solutions for a Sustainable Tomorrow."
                    button={
                        <Link href="/">
                            <Button xl>Explore</Button>
                        </Link>
                    }
                />
            </motion.h1>
        </Section>
    </Background>
);

export {Hero};
