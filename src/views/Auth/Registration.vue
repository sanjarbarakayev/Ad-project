<template>
	<v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="6"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Registration form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form
									v-model="valid"
									lazy-validation
                >
                  <v-text-field
                    label="Email"
                    name="email"
                    prepend-icon="mdi-account"
                    type="email"
                    v-model="email"
                    :rules="emailRules"
                  ></v-text-field>

                  <v-text-field
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    v-model="password"
                    :counter="6"
                    :rules="passwordRules"
                  ></v-text-field>

                  <v-text-field
                    label="Confirm Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    v-model="confirmPassword"
                    :counter="6"
                    :rules="confirmPasswordRules"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                color="primary"
                @click="onSubmit"
                :disabled="!valid"
                >
									Create account</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
</template>

<script>
	const emailRegex = /.+@.+\..+/;

	export default {
		data () {
			return {
				email: '',
				password: '',
				confirmPassword: '',
				valid: false,
				emailRules: [
					v => !!v || 'E-mail is required',
					v => emailRegex.test(v) || 'E-mail must be valid'
				],
				passwordRules: [
					v => !!v || 'Password is required',
					v => (v && v.length >= 6) || 'Password must be equal or more than 6 characters'
				],
				confirmPasswordRules: [
					v => !!v || 'Password is required',
					v => v === this.password || 'Password should match'
				]
			}
		},
		methods: {
			onSubmit () {
				if (this.$refs.form.validate()) {
					const user = {
						email: this.email,
						password: this.password,
					}
					console.log(user)
				}
			}
		}
	}
</script>