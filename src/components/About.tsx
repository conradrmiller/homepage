import { content } from '../content';

const About = () => {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hi, I'm Conrad.
                        <br />I love to build amazing apps.
                    </h1>
                    <p className="mb-8 leading-relaxed">{content.intro}</p>
                    <div className="flex justify-center">
                        <a
                            href="https://www.conradrmiller.com/hosted-assets/Conrad-Miller-Resume.pdf"
                            className="inline-flex text-white bg-lime border-0 py-2 px-6 focus:outline-none hover:bg-opacity-75 rounded text-lg"
                        >
                            Resume
                        </a>
                        {/* <a
                                href="#projects"
                                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
                            >
                                See My Past Work
                            </a> */}
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="./memoji.png"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
