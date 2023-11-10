import {
    MapPinIcon
} from "@heroicons/react/24/outline";
import { Button } from "@material-tailwind/react";
import { useContext, useEffect } from "react";
import AMapLoader from "@amap/amap-jsapi-loader";
import { AppContext } from "../../App";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Location() {

    const { location, setLocation } = useContext(AppContext)

    function getLocation() {
        AMapLoader.load({
            key: "775301e671c3b4735a4bd6abbb27e686", // 申请好的Web端开发者Key，首次调用 load 时必填
            version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
            plugins: ['AMap.Geolocation'], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
        }).then((AMap) => {
            AMap.plugin('AMap.Geolocation', function () {
                let geolocation = new AMap.Geolocation({
                    enableHighAccuracy: true, // 是否使用高精度定位，默认：true
                    timeout: 10000, // 设置定位超时时间，默认：无穷大
                    offset: [10, 20],  // 定位按钮的停靠位置的偏移量
                    zoomToAccuracy: true,  //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
                    position: 'RB' //  定位按钮的排放位置,  RB表示右下
                })

                geolocation.getCurrentPosition(async function (status: any, result: any) {
                    if (status === 'complete') {
                        //请求高德地图web服务
                        const { data } = await axios.get(
                            `https://restapi.amap.com/v3/geocode/regeo?key=cbefd5c8ab5e919d4cf0f0a9cd6c64ae&location=${result.position.lng},${result.position.lat}&radius=1000&extensions=all&roadlevel=0`
                        )
                        console.log(data.regeocode.formatted_address)
                        //把当前位置放置到上下文中
                        setLocation({
                            name: data.regeocode.formatted_address,
                            latitude: result.position.lat,
                            longitude: result.position.lng
                        })
                    } else {
                        console.log(result)
                    }
                })

            }
            )
        })
    }

    //在组件加载时，获取当前位置信息
    useEffect(getLocation, [])

    const navigate = useNavigate();

    const onButtonClick = () => {
        navigate('/location');
      }

    return (
            <Button className="flex gap-1 bg-gray-100 text-black border-0 rounded-none shadow-none items-center hover:shadow-none" size="sm" onClick={onButtonClick}>
                <MapPinIcon className="h-5 w-5"></MapPinIcon>
                <p className="w-80 text-left line-clamp-1">{location.name}</p>
            </Button>
    )
}