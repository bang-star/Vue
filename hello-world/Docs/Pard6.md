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