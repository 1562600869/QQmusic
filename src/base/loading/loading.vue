<template>
	<div class="loading">
		<img src="./load.gif" width="50" height="50" />
		<p class="desc">{{title}}</p>
	</div>
</template>

<script>
	export default{
		props:{
			title:{
				type:String,
				default:'正在载入中.....'
			}
		}
	}
</script>

<style  scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"

     .loading
       width:100%
       text-align:center
       .desc
         line-height:20px
         font-size:$font-size-small
         color:$color-text-l
</style>