# Vue Router

## 기본 사용법

### Vue-Router

Vue와 Vue-router를 이용해 실글 페이지 앱(SPA)를 만드는 것은 매우 쉽습니다. Vue.js를 사용한다면 이미 컴포넌트로 앱을 구성하고 있을 것입니다. Vue router를 함께 사용할 때 추가로 해야할 것은 route에 컴포넌트를 매핑한 후, **어떤 주소에서 렌더링**할 지 알려주는 것 뿐입니다.

 - 설치하기
    
    모듈 시스템에서 사용하면 Vue.use()을 통해 명시적으로 라우터를 추가해야 합니다.

    ```shell
    npm install vue-router
    ```

    ```JS
    import Vue from 'vue'
    import VueRouter from 'vue-router'

    Vue.use(VueRouter)
    ```

- this.$routes: 전역 라우트 객체 사용
    
    `<router-link>`는 현재 라우트와 일치할 때 자동으로 route-link-active 클래스가 추가됩니다.

    ```JS
    // Home.vue
    export default {
        computed: {
            username() {
                // 'params' 확인할 수 있습니다.
                return this.$route.params.username
            }
        },
        methods: {
            goBack() {
                window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
            }
        }
    }
    ```

<br />

### 동적 라우트 매칭

주어진 패턴을 가진 라우트를 동일한 컴포넌트에 매핑해야하는 경우가 자주 있습니다.

예를들어 모든 사용자에 대해 동일한 레이아웃을 가지지만, 다른 사용자 ID로 렌더링 되어야하는 User 컴포넌트가 있을 수 있습니다. `vue-router`에서 우리는 경로에서 동적 세ㅔ그먼트를 사용하여 다음을 할 수 있습니다.

```JS
const User = {
    templates: '<div>User</div>'
}

const router = {
    routes: [
        // 동적 세그먼트는 콜론으로 시작합니다.
        { path: '/user/:id', component: User}
    ]
}
```

```JS
const User = {
    template: '<div>User {{ $route.params.id }}</div>'
}
```

동적 세그먼트는 `콜론 :`으로 표시됩니다. 라우트가 일치하면 동적 세그먼트 값은 모든 컴포넌트에서 this.$routes.params로 표시됩니다. 그러므로 User의 템플릿을 다음과 같이 갱신하여 현재 사용자 ID를 표시할 수 있습니다.

동일한 라우에 여러 동적 세그먼트를 가질 수 있으며, `$route.params`의 해당 필드에 매핍됩니다. `$route.params`외에도 `$route` 객체는 `$route.query` {URL에 쿼리가 있는 경우}, `$route.hash` 등의 유용한 정보를 제공합니다.

#### Params 변경 사항에 대응하기

매개 변수와 함께 라우트를 사용할 때 주의해야 할 점은 사용자가 `/user/foo`에서 `/user/bar`로 이동할 때 동일한 컴포넌ㅌ르ㅗ 인스턴스가 재사용된다는 것입니다. 두 라우트 모두 동일한 컴포넌트를 렌더링하므로 이전 인스턴스를 삭제 한 다음 새 인스턴스를 만드는 것보다 효율적입니다. 이는 컴포넌트의 라이프 사이클 훅이 호출되지 않음을 의미합니다.

```JS
const User = {
    template: '...',
    watch: {
        '$route' (to, from) {
            // 경로 변경에 반응하여...
        }
    }
}
```

```JS
const User = {
    template: '...',
    beforeRouteUpdate (to, from, next) {
        // react to route changes ...
        // don't forget to call next()
    }
}
```

<br />

#### 매칭 우선순위

동일한 URL이 여러 라우트와 일치하는 경우가 있습니다. 이 경우 일치하는 우선 순위는 라우트 정의의 순서에 따라 결정됩니다. 즉, 경로가 더 먼저 정의될수록 우선 순위가 높아집니다.

<br />

### 중첩된 라우팅

#### 중첩된 매칭

실제 앱 URL은 일반적으로 여러 단계로 중첩된 컴포넌트로 이루어져 있습니다. URL의 세그먼트가 중첩된 컴포넌트의 특정 구조와 일치하다는 것은 매우 일반적입니다.

```HTML
<div>
    <router-view></router-view>
</div>
```

```JS
const User = {
    templates: '<div>User {{$route.params.id }} </div>'
}

const router = new VueRouter({
    routes: [
        {path: 'user/:id', component: User }
    ]
})
```

/로 시작하는 중첩된 라우트는 루트 경로로 취급됩니다. 이렇게 하면 중첩된 URL을 사용하지 않고도 컴포넌트 중첩을 활용할 수 있습니다.

```JS
const User = {
    template: `
    <div class="user">
        <h2>User {{ $route.params.id }} </h2>
        <router-view></router-view>
    </div>`
}
```

```JS
const router = new VueRouter({
    routes: [
        {   path: 'user/:id', 
            component: User,
            children: [
                {
                    // /user/:id/profile 과 일치할 때
                    // UserProfile은 User의 <router-view> 내에 렌더링 됩니다.
                    path: 'profile',
                    component: UserProfile
                },{
                    // /user/:id/post 과 일치할 때
                    // UserPost가 User의 <router-view> 내에 렌더링 됩니다.
                    path: 'post',
                    component: UserPost
                }
            ] 
        }

    ]
})
```

빈 서브 루트 경로를 제공할 수 있습니다.

```JS
const router = new VueRouter({
    routes: [
        {
            path: 'user/:id', component: User,
            children: [
                // UserHome은 /user/:id가 일치할 때
                // User의 <router-view> 내에 렌더링 됩니다.
                { path: '', component: UserHome },
                // ... 또 다른 서브 라우트
            ],
        }
    ]
})
```

<br />

### 프로그래밍 방식 네비게이션

#### 프로그래밍 방식 네비게이션

`<router-link>`를 사용하여 선언적 네비게이션용 anchor 태그를 만드는 것 외에도 라우터의 인스턴스 메소드를 사용하여 프로그래밍으로 이를 수행할 ㅅ ㅜ있습니다.

- router.push(location, onComplete?, onAbort?) || this.$router.push(location, onComplete?, onAbort?)

    다른 URL로 이동하려면 router.push를 사용하세요! 이 router 메소드는 새로운 항목을 router 히스토리 스택에 넣기 때문에 사용자가 브라우저의 뒤로 가기 버튼을 클릭하면 이전 URL로 이동하게 됩니다.

    - 선언적 방식 : `<router-link :to="...">`
    - 프로그래밍 방식 : `router.push(...)`


    ```JS
    //  리터럴 String
    router.push('home')

    // object
    router.push({path: 'home'})

    // 이름을 가지는 라우트
    router.push({name: 'user', params: {userId: 123}})

    // 쿼리와 함께 사용. 결과는 /register?plan=private 입니다.
    router.push({ path: 'register', query: { plan: 'private' }})
    ```

    선택적으로 router.push 또는 router.replace에 두 번째와 세 번째 전달인자로 `onComplete`와 `onAbort` 콜백을 제공합니다. 이 콜백은 탐색이 성공적으로 완료되거나(모든 비동기 훅이 해결된 후) 또는 중단(해결 탐색이 완료되기 전에 동일한 경로로 이동하거나 다른 경로 이동)될 때 호출 됩니다.

 - router.replace(location) || this.$router.replace(location)

    router.push와 같은 역할을 하지만 유일한 차이는 새로운 히스토리 항목에 추가하지 않고 탐색한다는 것입니다. 이름에서 알 수 있듯이 현재 항목을 대체합니다.

- router.go(n) || this.$router.go(n)

    이 메소드는 window.history.go(n)와 비슷하게 라우터 히스토리 스택에서 앞으로 또는 뒤로 이동하는 단계를 나타내는 하나의 정수를 매개 변수로 사용합니다.

    ```JS
    // 한 단계 앞으로 갑니다. history.forward()와 동일
    router.go(1)

    // 한 단계 뒤로 갑니다. history.go(-1)와 동일
    router.go(-1)

    // 3 단계 앞으로 갑니다.
    router.go(3)

    // 지정한 만큼의 기록이 없음녀 자동으로 실패
    router.go(-100)
    router.go(100)
    ```

<br />

#### history 조작

router.push, router.replace 및 router.go는 window.history.pushSate, window.history.replaceSate 및 window.history.go와 상응합니다. 이 router 메서드들은 window.history API를 모방합니다.

따라서 브라우저 히스토리 API에 이미 익숙하다면, vue-router를 사용하여 히스토리를 손쉽게 조작할 수 있습니다.

vue-router 네비게이션 메소드(push, replace, go)는 모든 라우터 모드(history, bash 및 abstract)에서 일괄되게 동작합니다.

<br />

### 이름을 가지는 라우트

#### 이름을 가지는 라우트

라우트에 연결하거나 탐색을 수행할 때 이름이 있는 라우트를 사용하는 것이 더 편리합니다. Router 인스턴스를 생성하는 동안 routes 옵션에 이름을 명시한 라우트를 지정할 수 있습니다.

```JS
const router = new VueRouter({
	routes: [
		{
			path: 'user/:userId',
			name: 'user',
			component: User
		}
	]
})
```

 1. router-link를 통한 name routes 이동
	
	```HTML
	<router-link :to="{name: 'user', params= {userId: 123}}">User</router-link>

	```

2. router.push를 통한 name route 이동

	```JS
	router.push({name: 'user', params: {userId: 123}})
	```

<br />

### 이름을 가지는 뷰

여러 개의 뷰를 중첩하지 않고 동시에 표시해야 하는 경우가 있습니다. sidebar 뷰와 main 뷰로 레이아웃을 생성합니다. 이름이 지정된 뷰가 편리한 경우입니다 뷰에 하나씩 outlet이 있는 대신 여러 개를 사용하여 각 outlet에 이름을 지정할 수 있습니다. 이름이 없는 router-view는 이름으로 default가 주어집니다.

```HTML
<router-view class="view one"></router-view>
<router-view class="view two" name="a"></router-view>
<router-view class="view three" name="b"></router-view>
```

```JS
const router = new VueRouter({
    routes: [
        {
            path: '/',
            components: {
                default: Foo,
                a: Bar,
                b: Bar
            }
        }
    ]
})
```

<br />

### 리다이렉트와 별칭

#### 리다이렉트

리다이렉션은 routes 설정에서도 할 수 잇습니다.

1. 일반적인 redirect(path)

    ```JS
    const router = new VueRouter({
        routes: [
            { path: '/a', redirect: '/b' }
        ]
    })
    ```

2. route name을 이용한 redirect

    ```JS
    const router = new VueRouter({
        routes: [
            { path: '/a', redirect: {name: 'foo'} }
        ]
    })
    ```

3. Function을 이용한 redirect

    ```JS
    const router = new VueRouter({
        routes: [
            { 
                path: '/a', redirect: to => {
                // 함수는 인수로 대상 라우트를 받습니다.
                // 여기서 path/location 반환
                }
            }
        ]
    })
    ```

    <br />

    ```JS
    const {hash, params, query} = to
    if(query.to === 'foo') {return {path: '/foo', query: null }}
    if(hash=== '#baz') {return {name: 'baz', hash: "" }}
    if(params.id) {return '/with-params/:id'}
    else {return '/bar'}
    ```

<br />

#### 별칭

/a의 별칭이 /b는 사용자가 /b를 방문했을 때 URL을 유지하지만 사용자가 /a를 방문한 것처럼 매칭합니다. 위는 라우트 구성에서 다음과 같이 표현할 수 있습니다.

```JS
const router = new VueRouter({
    routes: [
        { path: '/a', component: A, alias: '/b'}
    ]
})
```