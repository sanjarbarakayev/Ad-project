<template>
	<div>
		<v-container fluid>
			<v-layout>
				<v-flex xs12>
					<v-carousel>
						<v-carousel-item
						v-for="ad in promoAds"
						:key="ad.id"
						:src="ad.imageSrc"
							reverse-transition="fade-transition"
							transition="fade-transition"
						>
						<div class="car-link">
							<v-btn class="error" :to="'/ad/' + ad.id">{{ ad.title }}</v-btn>
						</div>
						</v-carousel-item>
					</v-carousel>
				</v-flex>
			</v-layout>
		</v-container>
		<v-container grid-list-lg>
			<v-layout row wrap>
				<v-flex
					xs12
					sm6
					md4
					v-for="ad in ads"
					:key="ad.id"
				>
					<v-card
						class="mx-auto"
						max-width="400"
						>
							<v-img
								class="white--text align-end"
								height="200px"
								:src="ad.imageSrc"
							>
							</v-img>
							<v-card-title>{{ ad.title }}</v-card-title>
							<v-card-text class="text--primary">
								<div>{{ ad.description }}</div>
							</v-card-text>
							<v-card-actions>
								<v-spacer></v-spacer>
								<v-btn
									text
									:to="'/ad/' + ad.id"
								>
									Open
								</v-btn>
								<v-btn
									raised
									class="primary"
								>
									Buy
								</v-btn>
							</v-card-actions>
						</v-card>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
export default {
	computed: {
		promoAds () {
			return this.$store.getters.promoAds
		},
		ads () {
			return this.$store.getters.ads
		},
	}
}
</script>

<style scoped>
	.car-link {
		position: absolute;
		bottom: 50px;
		left: 45%;
		background: rgba(0, 0, 0, .3);
		trandform: translate(-50%, 0);
		padding: 5px 20px;
		border-top-right-radius: 5px;
		border-top-left-radius: 5px;
	}
</style>