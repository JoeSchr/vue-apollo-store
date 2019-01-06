import Vue from 'vue'
import App from './App'
import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'
import { resolvers, defaults, typeDefs } from './resolvers'

const client = new ApolloClient({
  clientState: {
    defaults,
    resolvers,
    typeDefs
  },
  uri: ''
})

const apolloProvider = new VueApollo({
  defaultClient: client
 })

Vue.use(VueApollo)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  apolloProvider,
  render: h => h(App)
})
