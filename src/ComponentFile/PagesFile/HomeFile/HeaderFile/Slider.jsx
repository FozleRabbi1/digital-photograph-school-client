import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./SliderStyle.css"

const animation = { duration: 25000, easing: (t) => t }

const Slider = () => {

    const [sliderRef] = useKeenSlider({
        loop: true,
        renderMode: "performance",
        drag: false,
        created(s) {
            s.moveToIdx(.5, true, animation)
        },
        updated(s) {
            s.moveToIdx(s.track.details.abs + .5, true, animation)
        },
        animationEnded(s) {
            s.moveToIdx(s.track.details.abs + .5, true, animation)
        }
    })

    return (
        <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide number-slide1">
                <img className="img-style" src="https://iso.500px.com/wp-content/uploads/2021/08/Hobby-photographer-waiting-for-beautiful-sunset-By-Jarom%C3%ADr-Chalabala-2.jpg" alt="" />
            </div>
            <div className="keen-slider__slide number-slide2">
                <img className="img-style h-hull" src="https://media.nomadicmatt.com/2018/advancedphoto1.jpg" alt="" />
            </div>

            <div className="keen-slider__slide number-slide2">
                <img className="img-style h-80" src="https://static1.squarespace.com/static/568429b7c647addb5746fafe/568477d30e4c1155e1f3e99d/57a3a464cd0f6870016ab2bb/1556069761857/adventure-lifestyle-1.jpg?format=1500w" alt="" />
            </div>

            <div className="keen-slider__slide number-slide2">
                <img className="img-style h-80" src="https://media.cntraveler.com/photos/58d56b31ed5947303561e60b/16:9/w_2560%2Cc_limit/GettyImages-628874708.jpg" alt="" />
            </div>


        </div>
    );
};

export default Slider;