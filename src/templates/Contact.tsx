import {Section} from "@/layout/Section";


const Contact = () => {
    return (

            <div style={{backgroundColor: "#caf6ff"}}>
                <Section>
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col text-center w-full mb-12">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact
                                Us</h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Contact us directly , Write us a
                                mail and mention your query!</p>
                        </div>
                        <div className="lg:w-1/2 md:w-2/3 mx-auto">
                            <div className="flex flex-wrap -m-2">
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label htmlFor="name"
                                               className="leading-7 text-lg font-bold text-gray-600">Name</label>
                                        <input type="text" id="name" name="name"
                                               className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                    </div>
                                </div>


                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label htmlFor="email"
                                               className="leading-7 text-lg font-bold text-gray-600">Email</label>
                                        <input type="email" id="email" name="email"
                                               className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                    </div>
                                </div>


                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="message"
                                               className="leading-7 text-lg font-bold text-gray-600">Message</label>
                                        <textarea id="message" name="message"
                                                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                    </div>
                                </div>


                                <div className="p-2 w-full">
                                    <button
                                        className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send
                                    </button>
                                </div>


                                <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                                    <a href="mailto:info@artophics.com"
                                       className="text-indigo-500 font-bold text-lg">info@artophics.com</a>
                                    <p className="leading-normal my-5 font-bold text-lg ">Mobile No.
                                        <br/>+91 8668348069
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>
            </div>

    )
}

export default Contact