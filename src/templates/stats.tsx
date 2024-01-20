import React from "react";
import {motion} from "framer-motion";
import {Section} from "@/layout/Section";




 const Stats =()=>{

    return(
            <Section>
            <div className="container px-5 py-5 mx-auto">
                <div className="flex flex-wrap -m-4 text-center">
                    <div className="p-4 sm:w-1/4 w-1/2">
                        <motion.h2
                            className="title-font font-medium sm:text-4xl text-3xl text-gray-900"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 5 }}
                        >
                            15+
                        </motion.h2>
                        <p className="leading-relaxed text-lg font-bold">Clients</p>
                    </div>
                    <div className="p-4 sm:w-1/4 w-1/2">
                        <motion.h2
                            className="title-font font-medium sm:text-4xl text-3xl text-gray-900"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 5 }}
                        >
                            10+
                        </motion.h2>
                        <p className="leading-relaxed text-lg font-bold">Projects</p>
                    </div>
                    <div className="p-4 sm:w-1/4 w-1/2">
                        <motion.h2
                            className="title-font font-medium sm:text-4xl text-3xl text-gray-900"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 5 }}
                        >
                            3
                        </motion.h2>
                        <p className="leading-relaxed text-lg font-bold">Awards</p>
                    </div>
                    <div className="p-4 sm:w-1/4 w-1/2">
                        <motion.h2
                            className="title-font font-medium sm:text-4xl text-3xl text-gray-900"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 5 }}
                        >
                            5
                        </motion.h2>
                        <p className="leading-relaxed text-lg font-bold">Innovations</p>
                    </div>
                </div>
            </div>
            </Section>

    );
}

export default Stats;