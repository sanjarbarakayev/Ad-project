import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

	const routes = [
	{
		path: '',
		name: 'home',
		component: () => import('@/views/Home')
	},
	{
		path: '/ad/:id',
		props: true,
		name: 'add',
		component: () => import('@/views/Ads/Ad')
	},
	{
		path: '/list',
		name: 'list',
		component: () => import('@/views/Ads/AdList')
	},
	{
		path: '/new',
		name: 'new',
		component: () => import('@/views/Ads/NewAd')
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('@/views/Auth/Login')
	},
	{
		path: '/registration',
		name: 'registration',
		component: () => import('@/views/Auth/Registration')
	},
	{
		path: '/orders',
		name: 'orders',
		component: () => import('@/views/User/Orders')
	},
	]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
