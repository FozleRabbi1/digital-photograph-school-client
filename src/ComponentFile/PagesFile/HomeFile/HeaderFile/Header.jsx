import Slider from "./Slider";
import "./Header.css"


const Header = () => {
    return (
        <div>

            <div className="slider-div">
                <Slider></Slider>
            </div>

            <div className="textdiv  text-white">
                <h2 className="text-base md:text-2xl text-red-100 ">Welcome  Our Summer Camp <span className="text-red-700 text-lg md:text-3xl font-bold italic">Photography</span> School</h2>
                <h2 className="md:text-xl text-red-100 ">This is The School of Photography...</h2>
                <p className="py-1 md:py-2" >Since <span className="text-red-700 font-semibold italic" >2020</span> we have been training people to take beautiful photographs. By investing in our education, you will be giving yourself the clearest, most concise and enjoyable photography training in the world. </p>

                <button className=" border-b-2 my-1 md:my-2 text-xl border-red-500 hover:text-red-300 duration-700 ">Read More</button>
            </div>


        </div>
    );
};

export default Header;