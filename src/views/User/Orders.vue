<template>
	<v-container>
		<v-layout>
			<v-flex xs12 sm6 offset-sm3>
				<h1 class="text--secondary mb-3">Orders</h1>
				<v-list-item-group
          multiple
        >
          <v-list-item
            v-for="order in orders"
            :key="order"
          >
            <v-list-item-action>
              <v-checkbox
                :input-value="order.done"
                @change="markDone(order)"
                color="success"
              ></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ order.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ order.phone }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-btn
              class="primary"
              :to="'/ad/' + order.adId"
             >
            Open</v-btn>
          </v-list-item>
        </v-list-item-group>
			</v-flex>
		</v-layout>

	</v-container>
</template>

<script>

	export default {
		data () {
			return {
				orders: [
					{
						id: 'fds3',
						name: 'sanjar',
						phone: '996552146',
						adId: '123',
						done: false
					}
				]
			}
		},
		methods: {
			markDone (order) {
				order.done = true
			}
		}
	}
</script>