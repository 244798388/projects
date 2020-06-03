<template>
	<view class="content">
		<view class="cu-list menu">
			<view class="cu-item">
				<view class="content">
					请选择开通时长
				</view>
			</view>
		</view>
		<view class="vip-card ">
			<view class="item" v-for="(item,index) in 4" :key="index">
				<!-- {{index}} -->
			</view>
		</view>
		<view class="cu-list menu">
			<view class="cu-item arrow">
				<view class="content">
					会员权益
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return { 
				title: 'World'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
	
	.vip-card{
		padding: 18upx;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		background: #FFF;
		.item{
			width: 344upx;
			height: 180upx;
			background: #007AFF;
			border-radius: 10upx;
			margin-bottom: 20upx;
			background: url(../../static/img/vip.png) no-repeat center center / 100% 100%;
		}
	}
</style>
