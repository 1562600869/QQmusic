<template>
  <div id="app">
  	
   <headered></headered>
   <tab></tab>
   <keep-alive>  <!--把dom缓存的内存中-->
    <router-view></router-view>
    </keep-alive>
    <player></player>
  </div> 
</template>

<script>
	import headered from '@/components/header/header'
	import tab from '@/components/tab/tab'
  import Player from '@/components/player/player'
export default {
  name: 'app',
  components:{
  	headered,
    tab,
    Player
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
