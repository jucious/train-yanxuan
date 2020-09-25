import React,{useState,useEffect} from 'react'
import { getHomeData }  from '../../services/api'
import Banner from './banner/banner' 
import { View } from '@tarojs/components'

function home() {
     /* eslint-disable */
    const [homeInfo,setHomeInfo] = useState({focus:[]});
    useEffect(()=>{
        getHomeData().then(res=>{
            setHomeInfo(res.data.data)
           
        })
    },[])
    /* eslint-disable */
    return (
        <View>
            <Banner list={homeInfo.focus} />
            {
                homeInfo.focus.map(item => {
                    <View>{item.rank}</View>
                })
            }
        </View>
        
    )
 }
 export default home;