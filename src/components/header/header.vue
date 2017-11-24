<template>
	<div class="header">
		<i class="icon"></i>
		<h1 class="text">ANAN Music</h1>
		<router-link tag="div" class="mine" to="/use">
			<i class="icon-mine"></i>
		</router-link>
	</div>
</template>

<script>
</script>

<style lang="stylus" scoped rel="styleshet/stylus">
    @import '~common/stylus/variable'
    @import '~common/stylus/mixin'
    .header
      position:relative
      height:44px
      text-align:center
      
      font-size:0
      
      
    .text
        font-size:$font-size-large
        text-align:center
        line-height:44px
        color:$color-theme
        display:inline-block
        
      .icon
         display:inline-block
         vertical-align:top
         font-size:$font-size-larage-x
         color:white
         margin-top:6px
         margin-right:9px
         width:30px
         height:32px
         bg-image('logo')
         background-size:30px 32px
       .mine
      position: absolute
      top: 0
      right: 0
      .icon-mine
        display: block
        padding: 12px
        font-size: 20px
        color: $color-theme   
        
</style>