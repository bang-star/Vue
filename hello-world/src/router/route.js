// import Foo from '../components/Foo.vue'
// import Bar from '../components/Bar.vue'
// import Product from '../components/Product.vue'
import HelloWorld from '../components/HelloWorld.vue'

const Routes = [
    // { path: '/foo', name: 'foo', component: Foo, alias: '/foofoo' },
    // { path: '/bar', name: 'bar', component: Bar },
    // { path: '/product/:id', name: 'product', props: {news: false}, component: Product, beforeEnter: (to, from) => {
    //     console.log(to, from)
    // } },
    { path: '*', component: HelloWorld }
]

export default Routes