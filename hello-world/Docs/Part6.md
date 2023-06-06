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

<br />

### 라우트 컴포넌트에 속성 전달

#### 개념

컴포넌트에서 $route를 사용하면 특정 URL에서만 사용할 수 있는 컴포넌트의 유연성을 제한하는 라우트와 강한 결합을 만듭니다.

 - $route에 의존성 추가

    ```JS
    const User = {
        template: '<div>User {{ $router.params.id }}</div>'
    }

    const router = new VueRouter({
        routes: [
            {path: '/user/:id', component: User}
        ]
    })
    ```

 - 속성에 의존성 해제

    ```JS
    const User = {
        props: ['id'],
        template: '<div>User {{ id }}</div>'
    }

    const router = new VueRouter({
        routes: [
            { path: '/user/:id', component: User, props: true }
        ]
    })
    ```

    <br />

    - Boolean 모드

        props를 true로 설정하면 router.params가 컴포넌트 props로 설정됩니다.

컴포넌트에서 $route를 사용하면 특정 URL에서만 사용할 수 있는 컴포넌트의 유연성을제한하는 라우트와 강한 결합을 만듭니다.

 - 객체 모드

    props가 객체일 때 컴포넌트 props가 있는 그대로 설정됩니다. props가 정적일 때 유용합니다.

    ```JS
    const router = new VueRouter({
        routes: [
            {path: '/promotion/from-newsletter', component, Promotion, props: { newsletterPopup: false }}
        ]
    })
    ```

<br />

- 함수 모드

    props를 반환하는 함수를 만들 수 있습니다. 이를 통해 전달인자를 다른 타입으로 캐스팅하고 적정인 값을 라우트 기반 값과 결합됩니다. '/search?q=vue'는 '{query="vue"}'를 SearchUser 컴포넌트에 전달합니다.

    라우트 변경시에만 평가되므로 props 함수는 상태를 저장하지 않도록 합니다. props를 정의할 상태가 필요한 경우 래퍼 컴포넌트를 사용하면 상태가 변경될 때마다 응답할 수 있습니다.

    ```JS
    const router = new VueRouter({
        routes: [
            {path: '/search', component: SearchUser, props: (route) => ({ query: route.query.q })}
        ]
    })
    ```

<br />

### HTML5 히스토리 모드

#### Concept

vue-router의 기본 모드는 hash mode 입니다. URL 해시를 사용하여 전체 URL을 시뮬레이트하므로 URL이 변경될 때 페이지가 다시 로드 되지 않습니다. 

`i.e) http://oursite.com/#/user/id`

해시(#)를 제거하기 위해 `라우터의 history 모드`를 사용할 수 있습니다. `history.pushState API`를 활용하여 페이지를 다시 로드하지 않고도 URL 탐색을 할 수 있습니다.

```JS
const router = new VueRouter({
    mode: 'history',
    routes: [...]
})
```

그러나 문제는 다음과 같습니다.
웹이 적절한 서버 설정이 없는 단일 페이지 클라이언트(SPA) 앱이기 때문에 사용자가 직접 `http://oursite.con.user/id`에 접속하면 404 오류가 발생합니다. 문제를 해결하려면 서버에 간단하게 포괄적인 대체 경로를 추가하기만 하면 됩니다. URL이 정책 에셋(static asset)과 일치하지 않으면 앱이 있는 동일한 index.html 페이지를 제공해야 합니다.

<br />

#### 서버 설정 에제

- Apache

    ```XML
    <IfMoudle mod_rewrite.c>
        RewriteEngine On
        RewirteBase /
        RewirteRule ^index\.html$ - [L]
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d
        RewriteRule . /index.html [L]
    </IfModule>
    ```

- nginx.conf

    ```JS
    location / {
        try_files $uri $uri /index.html
    }
    ```

<br />

#### 주의 사항

주의 사항이 있습니다. 위에서 세팅한 서버는 404 에러(not found error)를 보고하지 않을 것입니다. 왜냐하면 모든 발견되지 않은 경로가 이제 index.html파일을 제공하기 때문입니다. 이 문제를 해결하려면 Vue 앱에서 catch-all 라우트를 구현하여 404 페이지를 표시해야 합니다.

```JS
const router = new VueRouter({
    mode: 'history',
    routes: [{ path: '*', component: NotFoundComponent }]
})
```

<br />

## 부가 사용법

### 네이게이션 가드

#### 개념

vue-router가 제공하는 네비게이션 가드는 주로 리다이렉션하거나 취소할 때, 네비게이션을 보호하는 데 사용됩니다. router 탐색 프로세스에 연결하는 방법에는 전역, 라우트별 또는 컴포넌특 ㅏ잇습니다.

Params 또는 쿼리를 변경하면 네비게이션 가드가 실행되지 않습니다. 단순히 $route 객체를 감시하고 그 변화에 따라 로직을 만들면 됩니다 .또는 컴포넌트 가드의 beforeRouteUpdate를 사용하세요.

#### 전역 가드

`router.beforeEach`를 사용하여 보호하기 이전에 전역 등록을 할 수 잇습니다. 

네비게이션이 트리거 될 때마다 작성 순서에 따라 호출되기 전의 모든 경우에 발생합니다. 가드는 비동기식으로 실행될 수 있으며 네비게이션은 모든 Hook이 해결되기 전까지 보류 중으로 간주됩니다.

모든 가드 기능은 세 가지 전달인자(to, from, next())를 받습니다.

 - to 라우트: 대상 Route 객체로 이동
 - from 라우트: 현재 라우트로 오기 전 라우트
 - next 함수: 이 함수는 훅을 해결하기 위해 호출 되어야 합니다. 액션은 next에 제공된 전달인자에 달려 있습니다.
    
    - next() : 파이프라인의 다음 훅으로 이동하십시오. 훅이 없는 경우 네비게이션은 승인됩니다.
    - next(false) : 현재 네비게이션을 중단합니다. 브라우저 URL이 변경되면(사용자 또는 뒤로 버튼을 통해 수동으로 변경됨) from 경로의 URL로 재설정됩니다.
    - next('/') 또는 next({path: '/'}): 다른 위치로 리다이렉션 합니다. 현재 네비게이션이 중단되고, 새 네비게이션이 시작됩니다. 
    - next(error): (2.4.0 이후 추가) next에 전달된 인자가 Error의 인스턴스이면 탐색이 중단되고 router.onError()를 이용해 등록된 콜백에 에러가 전달됩니다. 

항상 next 함수를 호출해야 합니다. 그렇지 않으면 훅이 절대 호출되지 않습니다.

- **router.beforeResolve** - Global Resolve Guard

    `router.beforeResolve`를 사용하여 글로벌 가드를 등록할 수 있습니다. 이는 router.beforeEach와 유사합니다. 모든 컴포넌트 가드와 비동기 라우트 컴포넌트를 불러온 후 네비게이션 가드를 확인하기 전에 호출된다는 차이가 있습니다.

<br />

#### Gloabl After Hooks

 - router.afterEach

    Hook 이후 전역으로 등록할  수도 있지만 가드와 달리 이러한 Hook은 다음 기능을 가져오지 않으며 탐색에 영향을 줄 수 없ㅅ브니다. 분석, 페이지 제목 변경, 페이지 발표와 같은 접근성 기능 및 기타 여러 작업에 유용합니다.


    ```js
    router.afterEach((to, from) => {
        sendToAnalytics(to.fullPath)
    })
    ```

<br />

#### 라우트별 가드

`beforeEnter` 가드를 라우트의 설정 객체에 직접 정의할 수 있습니다.

```JS
const routes = [
    {
        path: '/user/:id',
        component: UserDetails,
        beforeEnter: (to, from) => {
            // reject the navigation
            return false
        }
    }
]
```

<br />

#### 컴포넌트 내부 가드

**beforeRouterEnter**와 **beforeRouteLeave**를 사용하여 라우트 컴포넌트(라우트 설정으로 전달되는 컴포넌트) 안에 라우트 네비게이션 가드를 직접 정의할 수 있습니다.

```JS
const Foo = {
    template: '...',
    beforeRouterEnter (to, from, next) {
        // 이 컴포넌트를 렌더링하는 라우트 앞에 호출됩니다.
        // 이 가드가 호출 될 때 아직 생성되지 않았기 때문에
        // `this` 컴포넌트 인스턴스에 접근할 수 없습니다.
    },
    beforeRouteLeave (to, from, next) {
        // 이 컴포넌트를 렌더링하는 라우트가 이전으로 네비에기션 될 때 호출됩니다.
        // `this` 컴포넌트 인스턴스에 접근 할 수 있습니다.
    }
}
```

**beforeRouteEnter** 가드는 네비이게이션이 확인되기 전에 가드가 호출되어서 새로운 엔트리 컴포넌트가 아직 생성되지 않았기 때문에 this에 접근하지 못합니다. 그러나 콜백은 next에 전 달하여 인스턴스에 액세스 할 수 있습니다. 네비게이션이 확인되고 컴포넌트 인스턴스가 콜백에 전달인자로 전달 할 때 콜백이 호출됩니다.

```JS
beforeRouteLeave (to, from, next) {
    next(vm => {
        // 'vm'을 통한 컴포넌트 인스턴스 접근
    })
}
```

<br />

#### 전체 네비게이션 시나리오

 1. 네비게이션이 트기러 됨.
 2. 비활성될 컴포넌트에서 가드를 호출.
 3. 전역 beforeEach 가드 호출
 4. 재사용되는 컴포넌트에서 `beforeRouterUpdate` 가드 호출 (2.2 이상)
 5. 라우트 설정에서 `beforeEnter` 호출
 6. 비동기 라우트 컴포넌트 해결
 7. 활성화된 컴포넌트에서 beforeRouteEnter 호출
 8. 전역 `beforeResolve` 가드 호출. (2.5 이상)
 9. 네비게이션 완료.
 10. 전역 afterEach Hook 호출
 11. DOM 갱신 트리거 됨.
 12. 인스턴스화 된 인스턴스들의 beforeRouteEnter 가드에서 next에 저달된 콜백으로 호출합니다.

<br />

### 라우트 메타 필드

#### 개념

라우트를 정의 할 때 meta 필드를 포함시킬 수 있습니다.

```JS
const router = new Vuerouter({
    routes: [
        {
            path: '/foo',
            component: Foo,
            children: [
                {
                    path: 'bar',
                    component: Bar,
                    // 메타 필드
                    meta: { requiresAuth: true }
                }
            ]
        }
    ]
})
```

routes 설정의 각 라우트 객체를 라우트 레코드라고 합니다.

라우트 레코드는 중첩될 수 있습니다. 따라서 라우트가 일치하면 둘 이상의 라우트 레코드와 잠재적으로 일치 할 수 있습니다. 예를 들어, 위의 라우트 구성에서 URL /foo/bar는 상위 라우트 레코드와 하위 라우트 레코드 모두와 일치합니다.

```JS
router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        // 이 라우트는 인증이 필요하며 로그인 한 경우 확인하십시오.
        // 그렇지 않은 경우 로그인 페이지로 리다이렉션 하십시오.
        if(!auth.loggedIn()) {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        }else {
            next()
        }
    }else {
        next()  // 반드시 next()를 호출하십시오.
    }
})
```

라우트와 일치하는 모든 라우트 레코드는 $route 객체(네비게이션 가드의 라우트 객체)에 $route.matched 배열로 노출됩니다. 그러므로 우리는 $route.matched를 반복하며 라우트 레코드의 메타 필드를 검사할 필요가 있습니다.

<br />

## 트랜지션

### 개념

`<router-view>`는 본질적으로 동적인 컴포넌트이기 때문에 `<transition>` 컴포넌트를 사용하는 것과 같은 방식으로 트랜지션 효과를 적용할 수 있습니다.

```HTML
<transition>
    <router-view></router-view>
</transition>
```

### 라우트 별 트랜지션

각 라우트의 컴포넌트가 서로 다른 트랜지션을 갖도록 하려면 각 라우트 컴포넌트 내에서 다른 이름으로 `<transtion>`을 사용할 수 있습니다.

```JS
const Foo = {
    template: `
    <template name="slide">
        <div class="foo">...</div>
    </template>`
}

const Bar = {
    template: `
    <template name="fade">
        <div class="bar">...</div>
    </template>`
}
```

### 라우트 기반 동적 트랜지션

대상 라우트와 현재 라우트 간의 관게를 기반으로 동적으로 사용할 트랜지션을 결정할 수 있습니다.

```HTML
<!-- 동적 트랜지션을 위한 name을 지정 -->
<transition :name="transitionName">
    <router-view></router-view>
</transition>
```

```JS
//그런 다음 부모 구성 요소에서 `$route`를 보고 사용할 트랜지션을 결정합니다.
watch: {
    '$route'(to, from) {
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
}
```

<br />

## 데이터 가져오기

### 개념

때로는 라우트가 활성화될 때 서버에서 데이터를 가져와야 합니다.

예를 들어, 사용자 프로필을 렌더링하기 전에 서버에서 사용자의 데이터를 가져와야 합니다.

 - 탐색 후 가져오기: 먼저 탐색하고 컴포넌트의 라이프 사이클 훅에서 데이터를 가져옵니다. 데이터를 가져오는 동안 로드 상태를 표시
 - 탐색 전 가져오기: 라우트 가드에서 경로를 탐색하기 전에 데이터를 가져오고 그 후에 탐색을 수행

<br />

### 탐색 후 가져오기

이 방법을 사용하면 들어오는 컴포넌트를 즉시 탐색하고 렌더링하며 컴포넌트의 created 훅에서 데이터를 가져옵니다. 네트워크를 통해 데이터를 가져오는 동안 로드 상태를 표시할 수 있는 기회를 제공하며 각 뷰 마다 로드를 다르게 처리할 수 도 있습니다.

```HTML
<template>
    <div class="post">
        <div class="loading" v-if="loading">
            Loading...
        </div>

        <div v-if="error" class="error">
            {{ error }}
        </div>

        <div v-if="content" class="post">
            <h2> {{ post.title }}</h2>
            <h2> {{ post.content }}</h2>
        </div>
    </div>
</template>
```

```JS
export default {
    data() {
        return {
            loading: false,
            post: null,
            error: null
        }
    },
    created() {
        // 뷰가 생성되고 데이터가 이미 감시되고 있을 때 데이터를 가져온다.
        this.fetchData()
    },
    watch() {
        // 라우트가 변경되면 메소드를 다시 호출됩니다.
        '$route': 'fecthData'
    },
    methods: {
        fetchData() {
            this.error = this.post = null
            this.loading = true
            // `getPost`를 데이터 가져오기 위한 유틸리티/API 래퍼로 변경
            getPost(this.$route.params.id, (err, post) => {
                this.loading = false
                if(err) {
                    this.error = err.toString()
                } else {
                    this.post = post
                }
            })
        }
    }
}
```

<br />

### 탐색하기 전에 가져오기

이 접근 방식을 사용하면 실제로 새 경로로 이동하기 전에 데이터를 가져옵니다. 들어오는 컴포넌트에서 `beforeRouteEnter` 가드에서 데이터를 가져올 수 있으며 fetch(데이터 가져오기)가 완료되면 next만 호출할 수 있습니다.


```JS
export default {
    data() {
        return {
            post: null,
            error: null
        }
    },
    beforeRouteEnter(to, from, next) {
        getPost(to.params.id, (err, post) => {
            next(vm => vm.setData(err, post))
        })
    },
    watch() {
        // 라우트가 변경되면 메소드를 다시 호출됩니다.
        '$route': 'fecthData'
    },
    methods: {
        fetchData() {
            this.error = this.post = null
            this.loading = true
            // `getPost`를 데이터 가져오기 위한 유틸리티/API 래퍼로 변경
            getPost(this.$route.params.id, (err, post) => {
                this.loading = false
                if(err) {
                    this.error = err.toString()
                } else {
                    this.post = post
                }
            })
        }
    }
}
```

<br />

## 스크롤 동작

### 개념

클라이언트 측 라우팅을 사용할 때 새로운 경로로 이동할 때 맨 위로 스크롤하거나 실제 페이지로 다시 로드하는 것처럼 컨텐츠 항목의 스크롤 위치를 유지할 수 있습니다. `vue-router`는 이런 기능을 지원하며, **라우트 탐색에서 스크롤 동작**은 완전히 사용자 정의할 수 있게 합니다. (참고. 이기능은 HTML5 히스토리 모드에서만 작동합니다.)

라우트 인스턴스를 생성할 때 **scrollBehavior** 함수를 제공할 수 있습니다. **savedPosition은** 브라우저의 뒤로/앞으로 버튼으로 트리거되는 postion 네비게이션인 경우에만 사용할 수 있습니다.

 - { x: number, y: number }
 - { selector: string, offest? : { x: number, y: number }}

> 참고: 잘못된 값이나 빈 객체가 반환되면 스크롤이 발생하지 않습니다.

```JS
const router = new VueRouter({
    routes: [...],
    scrollBehavior(to, from, savedPostion) {
        // 원하는 위치로 돌아가기
    }
})
```

<br />

### 예제

```JS
// 1. 모든 라우트 네비게이션에 대해 페이지가 맨 위로 스크롤
scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0}
}

// 2. savedPostion을 반환하면 뒤로/앞으로 버튼으로 탐색할 때 네이티브와 같은 동작이 발생
scrollBehavior(to, from, savedPosition) {
    if(savedPostion) {
        return savedPostion
    } else {
        return { x: 0, y: 0}
    }
}

// 3. `anchor로 스크롤` 동작을 시뮬레이트
scrollBehavior(to, from, savedPosition) {
    if(to.hash) {
        return {
            selector: to.hash
            // , offset: { x: 0, y: 0}
        }
    }
}

```