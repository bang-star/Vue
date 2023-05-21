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
