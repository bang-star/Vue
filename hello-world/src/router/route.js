import Foo from '../components/Foo.vue'
import Bar from '../components/Bar.vue'
import Product from '../components/Product.vue'

const Routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar },
    { path: '/product/:id', component: Product },
]

export default Routes