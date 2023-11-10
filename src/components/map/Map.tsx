import { useContext, useEffect, useState } from "react";
import AMapLoader from "@amap/amap-jsapi-loader";
import { AppContext } from "../../App";
import axios from "axios";


interface PostionInfoType {
    logitude: number
    latitude: number
    postions: any[]
}


export default function MapContainer() {

    const { location, setLocation } = useContext(AppContext)

    const [curPositionInfo, setCurPositionInfo] = useState<PostionInfoType>({
        logitude: location.longitude,
        latitude: location.latitude,
        postions: []
    })

    let map: any = null;

    useEffect(() => {

        AMapLoader.load({
            key: "775301e671c3b4735a4bd6abbb27e686", // 申请好的Web端开发者Key，首次调用 load 时必填
            version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
            plugins: ['AMap.Geolocation'], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
        })
            .then(async (AMap) => {
                //初始化地图
                map = new AMap.Map("container", {
                    // 设置地图容器id
                    viewMode: "2D", // 是否为3D地图模式
                    zoom: 16, // 初始化地图级别
                    center: [location.longitude, location.latitude], // 初始化地图中心点位置
                });

                //初始化 标记点的数据
                const { data } = await axios.get(
                    `https://restapi.amap.com/v3/geocode/regeo?key=cbefd5c8ab5e919d4cf0f0a9cd6c64ae&location=${location.longitude},${location.latitude}&radius=1000&extensions=all&roadlevel=0`
                )
                setCurPositionInfo({
                    logitude: location.longitude,
                    latitude: location.latitude,
                    postions: data.regeocode.pois.slice(0,20)
                })
                const initMarker = new AMap.Marker({
                    position: new AMap.LngLat(location.longitude, location.latitude)
                });
                map.add(initMarker)

                //绑定地图点击事件
                map.on('click', async function (e: any) {
                    const { data } = await axios.get(
                        `https://restapi.amap.com/v3/geocode/regeo?key=cbefd5c8ab5e919d4cf0f0a9cd6c64ae&location=${e.lnglat.getLng()},${e.lnglat.getLat()}&radius=1000&extensions=all&roadlevel=0`
                    )
                    const position = new AMap.LngLat(e.lnglat.getLng(), e.lnglat.getLat()); // Marker经纬度
                    const marker = new AMap.Marker({
                        position: position
                    });
                    map.add(marker)
                    //更新curPosition
                    setCurPositionInfo({
                        logitude: e.lnglat.getLng(),
                        latitude: e.lnglat.getLat(),
                        postions: data.regeocode.pois.slice(0,20)
                    })
                })
            })
            .catch((e: any) => {
                console.log(e);
            });

        return () => {
            map?.destroy();
        };
    }, []);

    return (
        <div className="flex w-full" style={{
            height: '600px'
        }}>
            <div id='container' style={{
                height: '600px'
            }} className="w-4/5">
            </div>
            <ul className="w-1/5 ml-1">
                {curPositionInfo.postions.map((p) => {
                    return <li onClick={() => {
                        const var1:string[] = p.location.split(',')
                        setLocation({longitude:parseFloat(var1[0]), latitude:parseFloat(var1[1]), name: p.name})
                    }} 
                    className="hover:cursor-pointer hover:bg-gray-100 hover:text-orange-500">{p.name}</li>;
                })}
            </ul>
        </div>
    );
}


