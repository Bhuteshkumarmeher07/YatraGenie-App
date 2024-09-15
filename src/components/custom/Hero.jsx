import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Hero = () => {
    return (
        <div className="flex flex-col items-center md:mx-48 lg:mx-96 gap-9">
            <h1 className="text-center font-semibold text-[32px] md:text-[36px] lg:text-[40px] mt-10">
                <span className="text-[#f56551]">
                    Discover your Next Adventure with YatraGenie AI <br />
                </span>
                Your Perfect Trips, Just a Tap Away!
            </h1>

            <p className="text-center text-sm md:text-base lg:text-lg">
                Plan the perfect getaway with our personalized trip planner. Explore, book, and enjoy your dream vacation.
            </p>

            <Link to={'/create-trip'}>
                <Button>
                    Get Started. It's free
                </Button>
            </Link>

            <img src='/landing.jpg' className='-mt[20]' alt='Landing' />

            {/* Creator details */}
            <div className="flex flex-col items-center mt-10">
                <h2 className="text-center font-semibold text-xl mt-4">
                    Created by Bhutesh Kumar Meher
                </h2>
                <div className="flex gap-4 mt-2">
                    <a href="https://www.linkedin.com/in/bhutesh-kumar-meher-474992231/" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                        LinkedIn
                    </a>
                    <a href="https://www.instagram.com/bk_1977_/?locale=%E5%AE%9A%E8%A5%BF%E5%A4%A7%E5%AD%A6%E5%AD%A6%E7%94%9F%E6%9C%8D%E5%8A%A1(%E8%96%87%E4%BF%A18363919).poyq&hl=en" target="_blank" rel="noopener noreferrer" className="text-pink-600">
                        Instagram
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
