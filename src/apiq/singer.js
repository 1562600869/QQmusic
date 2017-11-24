import jsonp from '@/common/js/jsonp'
import {commonParams, options} from './config'
 
export function getSingerList(){    //定义一个方法
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'    // 获取qq音乐歌手页的json数据
  const data = Object.assign({},commonParams,{
    channel:'singer',
    page:'list',
    key:'all_all_all',
    pagesize:100,
    pagenum:1,
    g_tk:5381 ,
    platform:'yqq',
    hostUin:0
  })
  
  return jsonp(url,data,options)
}

export function getSingerDetail(singerId){
 const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'
 const  data = Object.assign({},commonParams,{
  hostUin:0,
  platform:'yqq',
  needNewCode:0,
  order:'Listen',
  begin:0,
  num:100,
  g_tk:5381,
  songstatus:1,
  singermid:singerId
 })  
 return jsonp(url,data,options)
}
