import Foo from '../components/Foo.vue'
import Bar from '../components/Bar.vue'
import Product from '../components/Product.vue'

const Routes = [
    { path: '/foo', name: 'foo', component: Foo, alias: '/foofoo' },
    { path: '/bar', name: 'bar', component: Bar },
    { path: '/product/:id', name: 'product', component: Product },
]

export default Routes