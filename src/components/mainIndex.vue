<template>
	<div class="hello">
		<router-view :key="$route.path + $route.query.type"/>
	</div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="less" scoped>

</style>
