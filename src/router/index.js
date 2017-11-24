import Vue from 'vue'
import Router from 'vue-router'
// import Tuijian from '@/components/tab/tuijian'
// import Geshou from '@/components/tab/geshou'
// import Paihang from '@/components/tab/paihang'
// import Ss from '@/components/tab/ss'
// import SingerDetail from '@/components/singer-detail/slinger-detail'
// import Disc from '@/components/disc/disc'
// import TopList from '@/components/top-list/top-list'
// import UserCenter from '@/components/user-center/user-center'
Vue.use(Router)

const Tuijian = (resolve)=>{
  import('@/components/tab/tuijian').then((module)=>{
      resolve(module)
  })
}
const Geshou = (resolve)=>{
  import('@/components/tab/geshou').then((module)=>{
      resolve(module)
  })
}

const Ss = (resolve)=>{
  import('@/components/tab/ss').then((module)=>{
      resolve(module)
  })
}

const Paihang = (resolve)=>{
  import('@/components/tab/paihang').then((module)=>{
      resolve(module)
  })
}
const SingerDetail = (resolve)=>{
  import('@/components/singer-detail/slinger-detail').then((module)=>{
      resolve(module)
  })
}
const Disc = (resolve)=>{
  import('@/components/disc/disc').then((module)=>{
      resolve(module)
  })
}
const TopList = (resolve)=>{
  import('@/components/top-list/top-list').then((module)=>{
      resolve(module)
  })
}
const UserCenter = (resolve)=>{
  import('@/components/user-center/user-center').then((module)=>{
      resolve(module)
  })
}


export default new Router({
  routes: [
    {
      path:'/use',
      component:UserCenter
      },
  {
    path:"/tuijian",
    component:Tuijian,
    children:[
      {
        path:':id',
        component:Disc
      }
    ]
  },
  {
    path:"/geshou",
    component:Geshou,
    children:[
      {path:':id',component:SingerDetail}
    ]
},
  {
    path:"/paihang",
    component:Paihang,
  children:[
    {
      path:':id',
      component:TopList
  }
  ]
  },
  {
    path:"/ss",
    component:Ss,
    children:[
      {path:':id',component:SingerDetail}
    ]
  },
  {path:"/",redirect:"/tuijian"},

  ]
})
