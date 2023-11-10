import { Carousel } from "@material-tailwind/react";
import CircularPagination from "../pagination/Pagination";

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
                                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-orange-500" : "w-4 bg-black/50"
                                    }`}
                                onClick={() => setActiveIndex(i)}
                            />
                        ))}
                    </div>
                )}
            >
                <div className="w-4/5 h-64 mx-auto">
                    <div className="w-full h-56 grid grid-cols-5 grid-rows-2 gap-px font-sans font-light">
                        <div className="">
                            <img src='https://robohash.org/4' alt="img" className="h-20 w-20 mx-auto"></img>
                            <p className="text-center">美食</p>
                        </div>
                        <div className="">
                            <img src='https://robohash.org/5' alt="img" className="h-20 w-20 mx-auto"></img>
                            <p className="text-center">蔬菜水果</p>
                        </div>
                        <div>
                            <img src='https://robohash.org/6' alt="img" className="h-20 w-20 mx-auto"></img>
                            <p className="text-center">看病买药</p>
                        </div>
                        <div>
                            <img src='https://robohash.org/7' alt="img" className="h-20 w-20 mx-auto"></img>
                            <p className="text-center">米线面馆</p>
                        </div>
                        <div>
                            <img src='https://robohash.org/8' alt="img" className="h-20 w-20 mx-auto"></img>
                            <p className="text-center">汉堡披萨</p>
                        </div>
                        <div className="">
                            <img src='https://robohash.org/9' alt="img" className="h-20 w-20 mx-auto"></img>
                            <p className="text-center">黄焖鸡</p>
                        </div>
                        <div>
                            <img src='https://robohash.org/10' alt="img" className="h-20 w-20 mx-auto"></img>
                            <p className="text-center">包子粥铺</p>
                        </div>
                        <div>
                            <img src='https://robohash.org/11' alt="img" className="h-20 w-20 mx-auto"></img>
                            <p className="text-center">面包蛋糕</p>
                        </div>
                        <div>
                            <img src='https://robohash.org/12' alt="img" className="h-20 w-20 mx-auto"></img>
                            <p className="text-center">跑腿</p>
                        </div>
                        <div>
                            <img src='https://robohash.org/13' alt="img" className="h-20 w-20 mx-auto"></img>
                            <p className="text-center">每日神价</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="w-full h-56 grid grid-cols-5 grid-rows-2 gap-px font-sans font-light">
                        <div className="">
                            <img src='https://robohash.org/4' alt="img" className="h-20 w-20 mx-auto"></img>
                            <p className="text-center">美食</p>
                        </div>
                        <div className="">
                            <img src='https://robohash.org/5' alt="img" className="h-20 w-20 mx-auto"></img>
                            <p className="text-center">蔬菜水果</p>
                        </div>
                        <div>
                            <img src='https://robohash.org/6' alt="img" className="h-20 w-20 mx-auto"></img>
                            <p className="text-center">看病买药</p>
                        </div>
                        <div>
                            <img src='https://robohash.org/7' alt="img" className="h-20 w-20 mx-auto"></img>
                            <p className="text-center">米线面馆</p>
                        </div>
                        <div>
                            <img src='https://robohash.org/8' alt="img" className="h-20 w-20 mx-auto"></img>
                            <p className="text-center">汉堡披萨</p>
                        </div>
                        <div className="">
                            <img src='https://robohash.org/9' alt="img" className="h-20 w-20 mx-auto"></img>
                            <p className="text-center">黄焖鸡</p>
                        </div>
                        <div>
                            <img src='https://robohash.org/10' alt="img" className="h-20 w-20 mx-auto"></img>
                            <p className="text-center">包子粥铺</p>
                        </div>
                        <div>
                            <img src='https://robohash.org/11' alt="img" className="h-20 w-20 mx-auto"></img>
                            <p className="text-center">面包蛋糕</p>
                        </div>
                        <div>
                            <img src='https://robohash.org/12' alt="img" className="h-20 w-20 mx-auto"></img>
                            <p className="text-center">跑腿</p>
                        </div>
                        <div>
                            <img src='https://robohash.org/13' alt="img" className="h-20 w-20 mx-auto"></img>
                            <p className="text-center">每日神价</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="w-full h-56 grid grid-cols-5 grid-rows-2 gap-px font-sans font-light">
                        <div className="">
                            <img src='https://robohash.org/4' alt="img" className="h-20 w-20 mx-auto"></img>
                            <p className="text-center">美食</p>
                        </div>
                        <div className="">
                            <img src='https://robohash.org/5' alt="img" className="h-20 w-20 mx-auto"></img>
                            <p className="text-center">蔬菜水果</p>
                        </div>
                        <div>
                            <img src='https://robohash.org/6' alt="img" className="h-20 w-20 mx-auto"></img>
                            <p className="text-center">看病买药</p>
                        </div>
                        <div>
                            <img src='https://robohash.org/7' alt="img" className="h-20 w-20 mx-auto"></img>
                            <p className="text-center">米线面馆</p>
                        </div>
                        <div>
                            <img src='https://robohash.org/8' alt="img" className="h-20 w-20 mx-auto"></img>
                            <p className="text-center">汉堡披萨</p>
                        </div>
                        <div className="">
                            <img src='https://robohash.org/9' alt="img" className="h-20 w-20 mx-auto"></img>
                            <p className="text-center">黄焖鸡</p>
                        </div>
                        <div>
                            <img src='https://robohash.org/10' alt="img" className="h-20 w-20 mx-auto"></img>
                            <p className="text-center">包子粥铺</p>
                        </div>
                        <div>
                            <img src='https://robohash.org/11' alt="img" className="h-20 w-20 mx-auto"></img>
                            <p className="text-center">面包蛋糕</p>
                        </div>
                        <div>
                            <img src='https://robohash.org/12' alt="img" className="h-20 w-20 mx-auto"></img>
                            <p className="text-center">跑腿</p>
                        </div>
                        <div>
                            <img src='https://robohash.org/13' alt="img" className="h-20 w-20 mx-auto"></img>
                            <p className="text-center">每日神价</p>
                        </div>
                    </div>
                </div>
            </Carousel>

            <div className="bg-gray-100 pt-5 rounded-lg">
                <div className="w-10/12 h-auto mx-auto grid grid-cols-2 grid-rows-5 gap-2">
                    <div className="w-full h-44 bg-white rounded-lg">
                        <div className="w-11/12 h-40 my-2 mx-auto flex">
                            <img src="https://robohash.org/YO7.png?set=set4" alt="xx" className="h-full border-2 border-orange-50"></img>
                            <div>
                                <p className="line-clamp-1">汉堡王（徐州颐和汇临湾广场一层A区1001号）</p>
                                <div className="flex justify-between ">
                                    <div className="flex justify-between gap-2 items-center">
                                        <p className="text-green-200 text-sm">4.3分</p>
                                        <p className="text-xs text-gray-400">月售1000+</p>
                                        <p className="text-xs text-gray-400">人均¥27</p>
                                    </div>
                                    <div className="text-sm text-gray-600 bg-yellow-400 rounded">镁团专送</div>
                                </div>
                                <div className="flex justify-between">
                                    <p className="text-xs text-gray-400">起送¥20 配送约¥1.3</p>
                                    <p className="text-xs text-gray-400">35分钟 3.4km</p>
                                </div>
                                <div className="flex mt-4 mb-2 gap-1">
                                    <div className="rounded text-xs text-orange-400 bg-yellow-200">千人收藏的宝藏好店</div>
                                    <div className="rounded text-xs text-orange-400 bg-yellow-200">汉堡中的点评人气商家</div>
                                </div>
                                <div className="flex gap-1">
                                    <div className="rounded bg-white text-xs text-red-200 border-2 border-red-100 p-1">神券最高膨胀到20</div>
                                    <div className="rounded bg-white text-xs text-red-200 border-2 border-red-100 p-1">30减4</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full bg-white rounded-lg">
                        <div className="w-11/12 my-2 mx-auto flex">
                            <img src="https://robohash.org/YO7.png?set=set4" alt="xx" className="h-40 border-2 border-orange-50"></img>
                            <div>
                                <p className="line-clamp-1">汉堡王（徐州颐和汇临湾广场一层A区1001号）</p>
                                <div className="flex justify-between ">
                                    <div className="flex justify-between gap-2 items-center">
                                        <p className="text-green-200 text-sm">4.3分</p>
                                        <p className="text-xs text-gray-400">月售1000+</p>
                                        <p className="text-xs text-gray-400">人均¥27</p>
                                    </div>
                                    <div className="text-sm text-gray-600 bg-yellow-400 rounded">镁团专送</div>
                                </div>
                                <div className="flex justify-between">
                                    <p className="text-xs text-gray-400">起送¥20 配送约¥1.3</p>
                                    <p className="text-xs text-gray-400">35分钟 3.4km</p>
                                </div>
                                <div className="flex mt-4 mb-2 gap-1">
                                    <div className="rounded text-xs text-orange-400 bg-yellow-200">千人收藏的宝藏好店</div>
                                    <div className="rounded text-xs text-orange-400 bg-yellow-200">汉堡中的点评人气商家</div>
                                </div>
                                <div className="flex gap-1">
                                    <div className="rounded bg-white text-xs text-red-200 border-2 border-red-100 p-1">神券最高膨胀到20</div>
                                    <div className="rounded bg-white text-xs text-red-200 border-2 border-red-100 p-1">30减4</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-44 bg-white rounded-lg">
                        <div className="w-11/12 h-40 my-2 mx-auto flex">
                            <img src="https://robohash.org/YO7.png?set=set4" alt="xx" className="h-full border-2 border-orange-50"></img>
                            <div>
                                <p className="line-clamp-1">汉堡王（徐州颐和汇临湾广场一层A区1001号）</p>
                                <div className="flex justify-between ">
                                    <div className="flex justify-between gap-2 items-center">
                                        <p className="text-green-200 text-sm">4.3分</p>
                                        <p className="text-xs text-gray-400">月售1000+</p>
                                        <p className="text-xs text-gray-400">人均¥27</p>
                                    </div>
                                    <div className="text-sm text-gray-600 bg-yellow-400 rounded">镁团专送</div>
                                </div>
                                <div className="flex justify-between">
                                    <p className="text-xs text-gray-400">起送¥20 配送约¥1.3</p>
                                    <p className="text-xs text-gray-400">35分钟 3.4km</p>
                                </div>
                                <div className="flex mt-4 mb-2 gap-1">
                                    <div className="rounded text-xs text-orange-400 bg-yellow-200">千人收藏的宝藏好店</div>
                                    <div className="rounded text-xs text-orange-400 bg-yellow-200">汉堡中的点评人气商家</div>
                                </div>
                                <div className="flex gap-1">
                                    <div className="rounded bg-white text-xs text-red-200 border-2 border-red-100 p-1">神券最高膨胀到20</div>
                                    <div className="rounded bg-white text-xs text-red-200 border-2 border-red-100 p-1">30减4</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-44 bg-white rounded-lg">
                        <div className="w-11/12 h-40 my-2 mx-auto flex">
                            <img src="https://robohash.org/YO7.png?set=set4" alt="xx" className="h-full border-2 border-orange-50"></img>
                            <div>
                                <p className="line-clamp-1">汉堡王（徐州颐和汇临湾广场一层A区1001号）</p>
                                <div className="flex justify-between ">
                                    <div className="flex justify-between gap-2 items-center">
                                        <p className="text-green-200 text-sm">4.3分</p>
                                        <p className="text-xs text-gray-400">月售1000+</p>
                                        <p className="text-xs text-gray-400">人均¥27</p>
                                    </div>
                                    <div className="text-sm text-gray-600 bg-yellow-400 rounded">镁团专送</div>
                                </div>
                                <div className="flex justify-between">
                                    <p className="text-xs text-gray-400">起送¥20 配送约¥1.3</p>
                                    <p className="text-xs text-gray-400">35分钟 3.4km</p>
                                </div>
                                <div className="flex mt-4 mb-2 gap-1">
                                    <div className="rounded text-xs text-orange-400 bg-yellow-200">千人收藏的宝藏好店</div>
                                    <div className="rounded text-xs text-orange-400 bg-yellow-200">汉堡中的点评人气商家</div>
                                </div>
                                <div className="flex gap-1">
                                    <div className="rounded bg-white text-xs text-red-200 border-2 border-red-100 p-1">神券最高膨胀到20</div>
                                    <div className="rounded bg-white text-xs text-red-200 border-2 border-red-100 p-1">30减4</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-44 bg-white rounded-lg">
                        <div className="w-11/12 h-40 my-2 mx-auto flex">
                            <img src="https://robohash.org/YO7.png?set=set4" alt="xx" className="h-full border-2 border-orange-50"></img>
                            <div>
                                <p className="line-clamp-1">汉堡王（徐州颐和汇临湾广场一层A区1001号）</p>
                                <div className="flex justify-between ">
                                    <div className="flex justify-between gap-2 items-center">
                                        <p className="text-green-200 text-sm">4.3分</p>
                                        <p className="text-xs text-gray-400">月售1000+</p>
                                        <p className="text-xs text-gray-400">人均¥27</p>
                                    </div>
                                    <div className="text-sm text-gray-600 bg-yellow-400 rounded">镁团专送</div>
                                </div>
                                <div className="flex justify-between">
                                    <p className="text-xs text-gray-400">起送¥20 配送约¥1.3</p>
                                    <p className="text-xs text-gray-400">35分钟 3.4km</p>
                                </div>
                                <div className="flex mt-4 mb-2 gap-1">
                                    <div className="rounded text-xs text-orange-400 bg-yellow-200">千人收藏的宝藏好店</div>
                                    <div className="rounded text-xs text-orange-400 bg-yellow-200">汉堡中的点评人气商家</div>
                                </div>
                                <div className="flex gap-1">
                                    <div className="rounded bg-white text-xs text-red-200 border-2 border-red-100 p-1">神券最高膨胀到20</div>
                                    <div className="rounded bg-white text-xs text-red-200 border-2 border-red-100 p-1">30减4</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-44 bg-white rounded-lg">
                        <div className="w-11/12 h-40 my-2 mx-auto flex">
                            <img src="https://robohash.org/YO7.png?set=set4" alt="xx" className="h-full border-2 border-orange-50"></img>
                            <div>
                                <p className="line-clamp-1">汉堡王（徐州颐和汇临湾广场一层A区1001号）</p>
                                <div className="flex justify-between ">
                                    <div className="flex justify-between gap-2 items-center">
                                        <p className="text-green-200 text-sm">4.3分</p>
                                        <p className="text-xs text-gray-400">月售1000+</p>
                                        <p className="text-xs text-gray-400">人均¥27</p>
                                    </div>
                                    <div className="text-sm text-gray-600 bg-yellow-400 rounded">镁团专送</div>
                                </div>
                                <div className="flex justify-between">
                                    <p className="text-xs text-gray-400">起送¥20 配送约¥1.3</p>
                                    <p className="text-xs text-gray-400">35分钟 3.4km</p>
                                </div>
                                <div className="flex mt-4 mb-2 gap-1">
                                    <div className="rounded text-xs text-orange-400 bg-yellow-200">千人收藏的宝藏好店</div>
                                    <div className="rounded text-xs text-orange-400 bg-yellow-200">汉堡中的点评人气商家</div>
                                </div>
                                <div className="flex gap-1">
                                    <div className="rounded bg-white text-xs text-red-200 border-2 border-red-100 p-1">神券最高膨胀到20</div>
                                    <div className="rounded bg-white text-xs text-red-200 border-2 border-red-100 p-1">30减4</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-44 bg-white rounded-lg">
                        <div className="w-11/12 h-40 my-2 mx-auto flex">
                            <img src="https://robohash.org/YO7.png?set=set4" alt="xx" className="h-full border-2 border-orange-50"></img>
                            <div>
                                <p className="line-clamp-1">汉堡王（徐州颐和汇临湾广场一层A区1001号）</p>
                                <div className="flex justify-between ">
                                    <div className="flex justify-between gap-2 items-center">
                                        <p className="text-green-200 text-sm">4.3分</p>
                                        <p className="text-xs text-gray-400">月售1000+</p>
                                        <p className="text-xs text-gray-400">人均¥27</p>
                                    </div>
                                    <div className="text-sm text-gray-600 bg-yellow-400 rounded">镁团专送</div>
                                </div>
                                <div className="flex justify-between">
                                    <p className="text-xs text-gray-400">起送¥20 配送约¥1.3</p>
                                    <p className="text-xs text-gray-400">35分钟 3.4km</p>
                                </div>
                                <div className="flex mt-4 mb-2 gap-1">
                                    <div className="rounded text-xs text-orange-400 bg-yellow-200">千人收藏的宝藏好店</div>
                                    <div className="rounded text-xs text-orange-400 bg-yellow-200">汉堡中的点评人气商家</div>
                                </div>
                                <div className="flex gap-1">
                                    <div className="rounded bg-white text-xs text-red-200 border-2 border-red-100 p-1">神券最高膨胀到20</div>
                                    <div className="rounded bg-white text-xs text-red-200 border-2 border-red-100 p-1">30减4</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-44 bg-white rounded-lg">
                        <div className="w-11/12 h-40 my-2 mx-auto flex">
                            <img src="https://robohash.org/YO7.png?set=set4" alt="xx" className="h-full border-2 border-orange-50"></img>
                            <div>
                                <p className="line-clamp-1">汉堡王（徐州颐和汇临湾广场一层A区1001号）</p>
                                <div className="flex justify-between ">
                                    <div className="flex justify-between gap-2 items-center">
                                        <p className="text-green-200 text-sm">4.3分</p>
                                        <p className="text-xs text-gray-400">月售1000+</p>
                                        <p className="text-xs text-gray-400">人均¥27</p>
                                    </div>
                                    <div className="text-sm text-gray-600 bg-yellow-400 rounded">镁团专送</div>
                                </div>
                                <div className="flex justify-between">
                                    <p className="text-xs text-gray-400">起送¥20 配送约¥1.3</p>
                                    <p className="text-xs text-gray-400">35分钟 3.4km</p>
                                </div>
                                <div className="flex mt-4 mb-2 gap-1">
                                    <div className="rounded text-xs text-orange-400 bg-yellow-200">千人收藏的宝藏好店</div>
                                    <div className="rounded text-xs text-orange-400 bg-yellow-200">汉堡中的点评人气商家</div>
                                </div>
                                <div className="flex gap-1">
                                    <div className="rounded bg-white text-xs text-red-200 border-2 border-red-100 p-1">神券最高膨胀到20</div>
                                    <div className="rounded bg-white text-xs text-red-200 border-2 border-red-100 p-1">30减4</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-44 bg-white rounded-lg">
                        <div className="w-11/12 h-40 my-2 mx-auto flex">
                            <img src="https://robohash.org/YO7.png?set=set4" alt="xx" className="h-full border-2 border-orange-50"></img>
                            <div>
                                <p className="line-clamp-1">汉堡王（徐州颐和汇临湾广场一层A区1001号）</p>
                                <div className="flex justify-between ">
                                    <div className="flex justify-between gap-2 items-center">
                                        <p className="text-green-200 text-sm">4.3分</p>
                                        <p className="text-xs text-gray-400">月售1000+</p>
                                        <p className="text-xs text-gray-400">人均¥27</p>
                                    </div>
                                    <div className="text-sm text-gray-600 bg-yellow-400 rounded">镁团专送</div>
                                </div>
                                <div className="flex justify-between">
                                    <p className="text-xs text-gray-400">起送¥20 配送约¥1.3</p>
                                    <p className="text-xs text-gray-400">35分钟 3.4km</p>
                                </div>
                                <div className="flex mt-4 mb-2 gap-1">
                                    <div className="rounded text-xs text-orange-400 bg-yellow-200">千人收藏的宝藏好店</div>
                                    <div className="rounded text-xs text-orange-400 bg-yellow-200">汉堡中的点评人气商家</div>
                                </div>
                                <div className="flex gap-1">
                                    <div className="rounded bg-white text-xs text-red-200 border-2 border-red-100 p-1">神券最高膨胀到20</div>
                                    <div className="rounded bg-white text-xs text-red-200 border-2 border-red-100 p-1">30减4</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-44 bg-white rounded-lg">
                        <div className="w-11/12 h-40 my-2 mx-auto flex">
                            <img src="https://robohash.org/YO7.png?set=set4" alt="xx" className="h-full border-2 border-orange-50"></img>
                            <div>
                                <p className="line-clamp-1">汉堡王（徐州颐和汇临湾广场一层A区1001号）</p>
                                <div className="flex justify-between ">
                                    <div className="flex justify-between gap-2 items-center">
                                        <p className="text-green-200 text-sm">4.3分</p>
                                        <p className="text-xs text-gray-400">月售1000+</p>
                                        <p className="text-xs text-gray-400">人均¥27</p>
                                    </div>
                                    <div className="text-sm text-gray-600 bg-yellow-400 rounded">镁团专送</div>
                                </div>
                                <div className="flex justify-between">
                                    <p className="text-xs text-gray-400">起送¥20 配送约¥1.3</p>
                                    <p className="text-xs text-gray-400">35分钟 3.4km</p>
                                </div>
                                <div className="flex mt-4 mb-2 gap-1">
                                    <div className="rounded text-xs text-orange-400 bg-yellow-200">千人收藏的宝藏好店</div>
                                    <div className="rounded text-xs text-orange-400 bg-yellow-200">汉堡中的点评人气商家</div>
                                </div>
                                <div className="flex gap-1">
                                    <div className="rounded bg-white text-xs text-red-200 border-2 border-red-100 p-1">神券最高膨胀到20</div>
                                    <div className="rounded bg-white text-xs text-red-200 border-2 border-red-100 p-1">30减4</div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <br></br>
                <div className="mt-2 w-4/5 mx-auto mb-5">
                    <CircularPagination></CircularPagination>
                </div>
                <br></br>
            </div>
        </div>
    );
}