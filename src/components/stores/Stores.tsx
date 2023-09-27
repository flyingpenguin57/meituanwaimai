import { Carousel } from "@material-tailwind/react";

export default function Stores() {
    return (
        <div className="w-full">
            <Carousel
                className="rounded-xl mx-auto"
                navigation={({ setActiveIndex, activeIndex, length }) => (
                    <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                        {new Array(length).fill("").map((_, i) => (
                            <span
                                key={i}
                                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                                    }`}
                                onClick={() => setActiveIndex(i)}
                            />
                        ))}
                    </div>
                )}
            >
                <div className="w-4/5 h-64 mx-auto bg-red-500">
                    <div className="w-full h-56 bg-black grid grid-cols-5 grid-rows-2 gap-px">
                        <div className="bg-green-500">
                            <img src='https://robohash.org/4' alt="img" className="h-20 w-20 mx-auto"></img>
                            <p className="text-center">汉堡披萨</p>
                        </div>
                        <div className="bg-green-500"></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div className="bg-green-500"></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div></div>
                <div></div>
            </Carousel>

            <div className="h-96 bg-amber-300">
                                    
            </div>
        </div>
    );
}