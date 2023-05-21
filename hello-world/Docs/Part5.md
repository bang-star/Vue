# Part5

## 싱글 파일 컴포넌트

### 싱글 파일 컴포넌트

많은 Vue 프로젝트에서, 전역 컴포넌트는 Vue.component를 사용해 정의되고, 다음에 모든 페이지의 container 엘리먼트를 대상으로 하는 new Vue({el: '#container'})가 정의됩니다.

- 전역 정의: 모든 구성 요소에 대해 고유한 이름을 지정하도록 강요됩니다.
- 문자열 템플릿: 구문 강조가 약해 여러 줄로 된 HTML에 보기 안좋은 슬래시가 많이 필요합니다.
- CSS 지원 없음: HTML 및 javascript 가 컴포넌트로 모듈화 되어 있으나 CSS가 빠져 있는 것을 말합니다.
- 빌드 단계 없음: Pug (이전의 Jade) 및 Babel 과 같은 전처리기가 아닌 HTML 및 ES5 JavaScript로 제한됩니다.

<br />

### 관심사의 분리

주목해야 할 중요한 점은 관심사 분리가 파일 타입 분리와 같지 않다는 것입니다. 현대적인 UI 개발에서 코드베이스를 서로 얽혀있는 세 개의 거대한 레이어로 나누는 대신, 느슨하게 결합 된 컴포넌트로 나누고 구성하는 것이 더 중요합니다. 컴포넌트 내부에서 템플릿, 로직 및 스타일이 본질적으로 결합되어 배치되면 컴포넌트의 응집력과 유지 보수성이 향상됩니다.

싱글 파일 컴포넌트에 대한 아이디어가 마음에 들지 않더라도 Javascript와 CSS를 별도의 파일로 분리하여 핫 리로드 및 사전 컴파일 기능을 활용할 수 있습니다.

```HTML
<template>
    <div>이곳은 사전에 컴파일 됩니다.</div>
</template>
<script src="./my-component.js"></script>
<script src="./my-component.css"></script>
```

### 참고

- 예제 : https://codesandbox.io/s/o29j95wx9

JavaScript에서 모듈 빌드 시스템을 처음 사용하는 사용자를 위한 내용

- Node Package Manager (NPM): [시작 안내서](https://docs.npmjs.com/packages-and-modules/getting-packages-from-the-registry)
- ES2015/16를 사용하는 최신 JavaScript: Babel의 [ES2015 교육 가이드](https://babeljs.io/docs/learn)
- vue-cli: [가이드 문서](https://cli.vuejs.org/)

고급 사용자를 위한 내용
- vue-cli는 대부분의 구성을 관리하지만, 자체 구성 옵션을 통한 세밀한 [사용자 정의 구성](https://cli.vuejs.org/config/)도 허용합니다.
- 빌드 설정을 처음부터 직접 구성하길 원한다면, Webpack과 [vue-loader](https://vue-loader.vuejs.org/)을 수동으로 구성해야 합니다.
- Webpack에 대한 더 자세한 내용은 [Webpack 공식 문서](https://webpack.js.org/configuration/)와 [Webpack Academy](https://webpack.academy/p/the-core-concepts)를 확인하세요.
- Webpack에 대해 이미 알고 있고, 빌드 효율화를 고민한다면 [vite](https://vitejs-kr.github.io/)도 고려해보세요.


<hr />

## 단위 테스팅

### 단위 테스팅

컴퓨터 프로그래밍에서 소스 코드의 특정 모듈이 의도된 대로 정확히 작동하는지 검증하는 절차

즉, 모든 함수와 메소드에 대한 테스트 케이스(Test case)를 작성하는 절차를 말한다. 이를 통해서 언제라도 코드 변경으로 인해 문제가 발생할 경우, 단 시간 내에 이를 파악하고 바로 잡을 수 있도록 해준다. 이상적으로, 각 테스트 케이스는 서로 분리(Mutually Exclusive Collectively Exhaustive) 되어야 한다. 이를 위해 가짜 객체(Mock Object)를 생성하는 것도 좋은 방법이다. 유닛 테스트는 (일반적인 테스트와 달리) 개발자(developer) 뿐만 아니라 보다 더 심도있는 테스트를 위해 테스트(tester)에 의해 수행되기도 한다.

Vue CLI는 Ject 혹은 Mocha를 사용해 어려운 설정 없이 유닛 테스트를 진행하기 위한 옵션이 있습니다.

<br />

### 간단한 테스팅 하기

테스팅을 위한 코드 구성 측면에서, 특별한 추가로 해야할 작업이 없습니다. 원시 옵션들만 내보내면 됩니다.

```HTML
<template>
    <span>{{ message }}</span>
</template>

<script>
export default {
    data() {
        return {
            message: 'hello!'
        }
    },
    created() {
        this.message = 'bye!'
    }
}
</script>
```

```JS
import Vue from 'vue'
import MyComponent from 'path/to/MyComponent.vue'

// Jasmie 2.0 테스트는 다음과 같습니다.
// 원하는 테스트 러너 / 테스트 라이브러리를 사용할 수 있습니다.
describe('MyComponent', () => {
    // 원시 컴포넌트 옵션을 검사합니다.
    it('has a created hook', () => {
        expect(typeof MyComponent.created).toBe('function')
    })

    // 원시 컴포넌트 옵션에서 함수 결과를 테스트합니다.
    it('sets the correct default data', () => {
        expect(typeof MyComponent.data).toBe('function')
        const defaultData = MyComponent.data()
        expect(defaultData.message).toBe('hello!')
    })

    // 마운트 할 때 컴포넌트 인스턴스를 검사합니다.
    it('correctly sets the message when created', () => {
        const vm = new Vue(MyComponent).$mount()
        expect(vm.message).toBe('bye!')
    })

    // 인스턴스를 마운트하고 출력된 결과를 검사합니다.
    it('renders the correct message', () => {
        const Constructor = Vue.extend(MyComponent)
        const vm = new Constructor().$mount()
        expect(vm.$el.textContent).toBe('bye!')
    })
})
```

<br />

### 테스트 가능한 컴포넌트 작성

많은 컴포넌트 렌더링 출력은 주로 받은 props 에 의해 결정됩니다. 사실, 컴포넌트의 렌더링 출력이 그 props에만 의존하는 경우 다른 전달인자를 가지는 순수한 삼수의 반환 값을 검사하는 것과 마찬가지로 테스트하기가 매우 쉽습니다.

```HTML
<template>
    <p>{{ msg }}</p>
</template>

<script>
export default {
    props: ['msg']
}
</script>
```

```JS
import Vue from 'vue'
import MyComponent from 'path/to/MyComponent.vue'

// 렌더링 된 텍스트를 마운트하고 반환하는 헬퍼 함수
function getRenderedText(Component, propsData) {
    const Constructor = Vue.extend(Component)
    const vm = new Constructor({ propsData: propsData }).$mount()
    return vm.$el.textContent
}

describe('MyComponent', () => {
    it('renders correctly with different props', () => {
        expect(getRenderedText(MyComponent, {
            msg: 'Hello'
        })).toBe('Hello')

        expect(getRenderedText(MyComponent, {
            msg: 'Bye'
        })).toBe('Bye')
    })
})
```

<br />

### 비동기 업데이트 검사

Vue는 DOM 업데이트를 비동기적으로 수행하기 때문에, 상태 변경으로 인한 DOM 업데이트에 대한 검사는 Vue.nextTick 콜백에서 수행해야 합니다.

```JS
// 상태 갱신 후 생성된 HTML을 검사합니다.
it('updates the rendered message when vm.message updates', done => {
    const vm = new Vue(MyComponent).$mount()
    vm.message = 'foo'

    // DOM 변경을 검사하기 전에 상태가 변경된 후 "tick"을 기다립니다.
    Vue.nextTick(() => {
        expect(vm.$el.textContent).toBe('foo')
        done()
    })
})
```

<hr />

## Typescript 지원

### TS 지원, 추천 설정

정적 타입(Type) 시스템은 특히 애플리케이션이 성장함에 따라 많은 잠재적 런타임 오류를 방지하는 데 도움이 될 수 있습니다. 이것이 Vue가 Vue 코어뿐만 아니라 vue-router 및 Vuex 에서도 Typescript에 대한 공식 유형 선언과 함께 제공되는 이유입니다. 이것들은 NPM에 게시되고 최신 TypeScript는 NPM 패키지의 유형 선언을 해결하는 방법을 알고 있기 때문에 NPM을 통해 설치할 때 Vue와 함께 TypeScript를 사용하기 위해 추가 도구가 필요하지 않습니다.

```JS
// tsconfig.json
{
    'compilerOptions': {
        // Vue의 브라우저 지원과 같습니다.
        "target": "es5",
        // 이러면 'this'에 대한 데이터 속성에 대한 더 엄격한 추측이 가능합니다.
        "strict": true,
        // webpack 2 이상 또는 rollup을 사용하여 트리세이킹을 하려면,
        "module": "es2015",
        "moduleResolution": "node"
    }
}
```

<br />

### TS 지원, 프로젝트 생성

```shell
# 1. Install Vue CLI, If it's not already installed
npm install --global @vue/cli

# 2. Create a new Project, then choose the 'Manually select features' option
vue create my-project-name
```

<br />

### TS 지원, 에디터 서포트

TypeScript 를 사용해 Vue를 개발하려면 VS Code를 사용하세요. TypeScript에 대한 기본적인 지원이 포함되어 있습니다. 싱글 파일 컴포넌트(SFCs)를 사용하는 경우 훌륭한 Vetur extension를 사용해 TypeScript 유추를 제공합니다. 싱글 파일 컴포넌 트 및 기타 많은 훌륭한 기능을 제공합니다. 또한 WebStorm은 타입스크립와 Vue.js를 모두 지원합니다.

<br />

### TS 지원, 기본 사용법

Vue 컴포넌트 옵션안에서 TypeScript를 사용하려면 `Vue.component` 또는 `Vue.extend`로 컴포넌트를 정의해야 합니다.

```JS
import Vue from 'vue'

const Component = Vue.extend({
    // 타입 유추기능 사용
})

const Component = {
    // 이 방식은 타입 유추가 되지 않습니다.
    // TypeScript가 Vue 컴포넌트에 대한 옵션을 알 수 없기 떄문
}
```

<br />

### TS 지원, 클래스 스타일 Vue 컴포넌트

컴포넌트를 선언할 때 클래스 기반 API를 선호하는 경우 공식 [vue-class-component](https://class-component.vuejs.org/) 데코레이터(Decorator)를 사용할 수 있습니다.

```JS
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
    // 모든 컴포넌트 옵션이 이곳에 허용됩니다.
    template: '<button @click="onClick">Click!</button>'
})

export default class MyComponent extends Vue {
    // 초기 데이터는 인스턴스 속성으로 선언할 수 있습니다.
    message: string = "Hello!"

    // 컴포넌트 메소드는 인스턴스 메소드로 선언할 수 있습니다.
    onClick (): void {
        window.alert(this.message)
    }
}
```

<br />

<hr />

## 프로덕션 배포

### 프로덕션 모드

개발 과정에서 Vue는 일반적인 오류 및 함정을 해결하는 데 도움이 되는 많은 경고를 제공합니다. 그러나 이러한 경고 문자열은 프로덕션에서는 쓸모 없으며 앱의 페이로드 크기를 키웁니다. 또한 이러한 경고 검사 중 일부는 프로덕션 모드에서 피할 수 있는 런타임 비용이 적습니다.

- 빌드 도구를 사용하지 않는 경우
    
    전체 빌드를 사용하는 경우(즉, 빌드 도구 없이 스크립트 태그를 통해 Vue를 직접 포함하는 경우) 프로덕션 환경을 위해 축소 버전(vue.min.js)을 사용해야 합니다.

<br />

### 프로덕션 모드, 빌드 도구를 사용하는 경우

Webpack이나 Browserify와 같은 빌드 툴을 사용할 때, 프로덕션 모드는 Vue의 소스 코드 안에있는 process.env.NODE_ENV에 의해 결정 될 것이며, 기본적으로 개발 모드가 될 것입니다. 두 빌드 도구 모두 이 변수를 덮어 쓸 수 있는 방법을 제공하여 Vue의 프로덕션 모드를 사용할 수 있게하고 빌드하는 동안 minifier가 경고를 제거합니다. 모든 vue-cli 템플릿에는 다음과 같은 것들이 미리 설정 되어 있습니다. 그러나 그것이 어떻게 처리되는지 아는 것은 유익할 것입니다.

#### Webpack

1. V4

```JS
module.exports = {
    mode: 'production'
}
```

2. V3

```JS
var webpack = require('webpack')

module.exports = {
    // ...
    plugins: [
        // ...
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
}
```

<br />

#### Rollup

```JS
const replace = require('rollup-plugin-replace')

rollup({
    // ...
    plugins: [
        replace({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
}).then()
```

<br />

### 사전 컴파일한 템플릿

DOM 안의 템플릿 또는 JavaScript 안의 템플릿 문자열을 사용하면 템플릿에서 렌더 함수로의 컴파일이 즉시 수행됩니다. 일반적으로 대부분의 경우 속도가 빠르지만 애플리케이션이 성능에 민감한 경우에는 사용하지 않는 것이 가장 좋습니다.

템플릿을 미리 컴파일하는 가장 쉬운 방법은 [싱글 파일 컴포넌트](https://vuejs.org/guide/scaling-up/sfc.html)를 사용하는 것입니다. 관련 빌드 설정은 자동으로 사전 컴파일을 수행하므로 내장 코드에 원시 템플릿 문자열 대신 이미 컴파일 된 렌더링 함수가 포함되어 있습니다.

**Webpack** 을 사용하고 JavaScript 및 템플릿 파일을 분리하는 것을 선호하는 경우에 [vue-template-loader](https://github.com/ktsn/vue-template-loader)를 사용하여 템플릿 파일을 JavaScript로 변환할 수 있습니다. 빌드 단계 중 렌더 함수를 수행합니다.


<br />

### 컴포넌트의 CSS 추출하기

싱글 파일 컴포넌트를 사용할 때, 컴포넌트 내부의 CSS는 JavaScript를 통해 `<script>` 태그로 동적으로 삽입됩니다. 런타임 비용이 적고, 서버 측 렌더링을 사용하는 경우 "스타일이 없는 내용의 깜빡임"이 발생합니다. 모든 컴포넌트에서 css를 같은 파일로 추출하는 것은 이러한 문제를 피할 수 있고, css 축소 및 캐싱을 향상시킬 수 있습니다. 이를 적용하려면 해당 빌드 도구 문서를 참조하면 좋습니다.

 - [Webpack + vue-loader](https://vue-loader.vuejs.org/guide/extract-css.html)
 - [Browerify + vueify](https://github.com/vuejs/vueify)
 - [Rollup + rollup-plugin-vue](https://rollup-plugin-vue.vuejs.org/)

<br />

### 런타임 에러 추적하기

구성 요소의 렌더링 중에 런타임 오류가 발생하면 전역 Vue.config.errorHandler config 함수로 전달됩니다. 이 훅을 공식적인 통합을 제공하는 Sentry와 같은 오류 추적 서비스와 함께 활용하면 좋습니다.

<br />

## 스케일링업

<hr />

### 라우팅

> 라우팅은 애플리케이션 엔드 포인트(URI)의 정의, 그리고 URI가 클라이언트 요청에 응답하는 방식을 말합니다. [참조 - Express](https://expressjs.com/ko/guide/routing.html)

매우 단순한 라우팅만 필요하고 완전한 기능을 가 ㅈ춘 라우터 라이브러리를 사용하지 않으려면 다음과 같이 페이지 수준 컴포넌트를 동적으로 렌더링하면 됩니다.

 - [HTML5 History API 주소](https://developer.mozilla.org/en-US/docs/Web/API/History_API)
 - [HTML5 Histroy API를 사용한 간단한 router 프로젝트](https://github.com/chrisvfritz/vue-2.0-simple-routing-example)
 - [써드파티 라우터인 Page.js를 사용한 router 프로젝트](https://github.com/chrisvfritz/vue-2.0-simple-routing-example/tree/pagejs)

=> 정신건강을 위해 vue-router 사용

```JS
const NotFound = { template: '<p>Page not found</p>'}
const Home = { template: '<p>Home page</p>'}
const About = { template: '<p>About page</p>'}

const routes = {
    '/': Home,
    '/about': About
}

new Vue({
    el: '#app',
    data: {
        currentRoute: window.location.pathname
    },
    computed: {
        ViewComponent () {
            return routes[this.currentRoute] || NotFound
        }
    },
    render(h) { return h(this.ViewComponent) }
})
```

<br />

### 상태관리

#### 공식 Flux 유사 구현

대규모 어플리케이션은 여러 컴포넌트에 분산되어있는 여러 상태와 그 상호 작용으로 인해 복잡해집니다. 이 문제를 해결하기 위해 Vue는 [Elm](https://elm-lang.org/)에서 영감을 얻은 상태 관리 라이브러리인 vuex를 제공합니다. 또한 vue-devtools를 사용한다면 설정에 따로 ㅅ ㅣ간을 보내지 않아도 디버깅을 사용할 수 있습니다.

<br />

#### React 개발자를 위한 안내

React 경험이 있는 개발자라면, vuex가 React 생태계에서 가장 인기있는 Flux 구현인 redux와 어떻게 비교되는지 궁금할 것입니다. Vuex가 Redux와 다른 점이라면 Vue app에 대해서 "알고 있다"는 점입니다. 이를 통해 더 직관적인 API와 향상된 개발경험을 Vue에 통합할 수 있습니다.

<br />

#### 간단한 상태 관리 시작하기

Vue 어플리케이션에서 가장 근본이 되는 것은 원시 data 객체라는 것을 종종 간과하게 됩니다. Vue 인스턴스는 단순히 그것에 대한 액세스를 프록시합니다. 따라서 여러 인스턴스에서 공유해야하는 상태가 있으면 ID로 간단히 공유할 수 있습니다.


```JS
const sourceOfTruth = {}
const vmA = new Vue({
    data: sourceOfTruth
})

const vmB = new Vue({
    data: sourceOfTruth
})
```

이 문제를 해결하기 위해 간단한 store 패턴(중앙 집중식 상태 관리)을 사용할 수 있습니다.

```JS
var  store = {
    debug: true,
    state: {
        message: 'Hello!'
    },
    setMessageAction(newVal) {
        if(this.debug) console.log('setMessageAction triggered with', newVal)
        this.state.message = newVal
    },
    clearMessageAction() {
        if(this.debug) console.log('clearMessageAction triggered with')
        this.state.message = ''
    }
}
```

```JS
const vmA = new Vue({
    data: {
        privateState: {},
        sharedState: store.state
    }
})

const vmB = new Vue({
    data: {
        privateState: {},
        sharedState: store.state
    }
})
```

컴포넌트가 store에 속한 상태를 직접 변이 시킬 수 없지만, store에 조작을 수행하도록 알리는 이벤트를 보내야하는 컨벤션을 계속 개발할 때 결국 Flux 아키텍처에 다다르게 됩니다. 이 컨벤션의 이점은 store에서 발생하는 모든 상태 변이를 기록하기 mutation 로그, 스냅 샷 및 히스토리기 되돌리기와 같은 고급 디버깅 도우미를 구현할 수 있다는 것입니다.

![image](https://github.com/bang-star/Vue/assets/63120360/8698bc2f-f8c1-4fee-99bc-46c044b4b98a)

=> 결론적으로 정신 건강을 위해서는 vuex를 사용하는 것이 좋다.

<br />

### 서버사이드 렌더링(Server-Side Rendering)

- 더 빠른 컨텐츠 도달 속도

    느린 인터넷이나 느린 장치에서 더 두드러집니다. 서버 렌더링 마크업은 모든 JavaScript가 다운로드 및 실행되어 표시될 때까지 기다릴 필요가 없으므로 사용자가 완전히 렌더링된 페이지를 더 빨리 볼 수 있습니다. 또한 데이터 fetching 은 초기 전달을 위해 서버 측에서 수행되므로 클라이언트보다 데이터베이스에 더 빠르게 연결할 수 있습니다.

    콘텐츠에 도달하는 시간이 전환율과 직접적으로 관련된 애플리케이션에 중요할 수 있습니다.

- SEO(Search Engine Optimization)

    검색 엔진 크롤러는 완전히 렌더링된 페이지를 직접 보게 됩니다. 검색 엔진에 높은 우선 순위로 노출되어야 하는 어플리케이션에 중요합니다.

<br />

<hr />

### 보안

#### Vue가 보안을 위해 힘쓰는 포인트, HTML 컨텐츠

템플릿을 사용하든 렌더 함수를 사용하든, 컨텐츠는 자동으로 이스케이프 됩니다.

```HTML
<h1>{{ userProvidedString }}</h1>
```

만약 userProvidedString가 다음 값을 가지고 있다면

```JS
<script>alert('hi')</script>
```

```HTML
&lt;script&gt;alert(&quot;hi &quot;)&lt;/script&gt;
```

<br />

#### Vue가 보안을 위해 힘쓰는 포인트, 속성 바인딩

동적 속성 바인딩도 자동으로 이스케이프 됩니다.

```HTML
<h1 v-bind:title="userProvidedString">
    hello
</h1>
```

만약 userProvidedString가 다음 값을 가지고 있다면

```JS
'" onclick="alert(\'hi\')'
```

```HTML
&quot;onclick=&quot;)&lt;alert('hi')
```

<br />

#### 잠재적 위험, HTML 주입

어떠한 웹 어플리케이션에서도 정제되지 않은 사용자가 제공한 컨텐츠를 HTML, CSS 또는 자바스크립트로 실행하는 것은 잠재적으로 위험하므로 가능한 한 피해야 합니다. 그러나 일부 위험이 허용되는 경우가 있습니다.

 - 템플릿을 사용하는 경우
    
    ```HTML
    <div v-html="userProvidedString"></div>
    ```

 - JSX 렌더 함수를 사용하는 경우
  
    ```HTML
    <div domPropsInnerHTML={this.userProvidedString}></div>
    ```

 - 렌더 함수를 사용하는 경우

    ```JS
    h('div', {
        domProps: {
            innerHTML: this.userProvidedString
        }
    })
    ```

<br />

#### 잠재적 위험, URL 주입

URL에 JavaScript를 사용하여 JavaScript 실행을 막기 위한 "정제 작업"을 하지 않으면 잠재적 보안 문제가 있습니다.

```HTML
<a v-bind:href="userProvidedString">
    click me
</a>
```

 - 참고
   
   - https://www.npmjs.com/package/@braintree/sanitize-url
   - https://ko.wikipedia.org/wiki/클릭재킹
   - http://www.tcpschool.com/html-tag-attrs/iframe-sandbox

<br />

#### 잠재적 위험, Style 주입

sanitizedURL을 정제된 것으로 간주하여 자바스크립트가 아닌 실제 URL 이라고 가정하겠습니다. 그러나 악의적인 사용자는 여전히 userProvidedStyles에 "click jack" CSS 를 제공할 수 있습니다. (예: "로그인" 버튼 위의 투명한 상자에 링크 스타일 지정)

만약 https://user-controlled-website.com이 어플리케이션의 로그인 페이지와 유사하게 빌드 된 경우 사용자의 실제 로그인 정보를 캡쳐했을 수 있습니다.

`<style>`요소에 사용자 제공 컨텐츠를 허용하는 것은 사용자에게 전체 페이지 스타일 지정을 완전히 제어 가능하도록 하므로 얼마나 더 큰 취약점을 발생시킬지 상상할 수 있습니다.

```HTML
<a  v-bind:href="sanitizedUrl"
    v-bind:style="userProvideredStyles"> 
    Click me
</a>
```

```HTML
<a  v-bind:href="sanitizedUrl"
    v-bind:style="{
        color: userProvideredColor,
        background: userProvideredBackground
    }"> 
    Click me
</a>
```

- [클릭재킹](https://ko.wikipedia.org/wiki/클릭재킹)

<br />

#### 잠재적 위험, Javascript 주입

템플릿과 렌더 함수에 부작용이 없어야 하므로 `<script>` 요소를 Vue와 함께 렌더링하는 것은 옳지 않습니다. 그러나 이것이 런타임에 JavaScript로 평가되는 문자열을 포함시키는 유일한 방법은 아닙니다. 

모든 HTML 요소는 onclick, onfocus, 그리고 onmouserenter와 같은 속성들의 값으로 자바스크립트 문자열을 받습니다. 사용자에게서 제공된 자바스크립트를 이러한 이벤트 속성에 바인딩하는 것은 잠재적 보안 위험이 있으므로 피해야 합니다.

<br />

### 반응형

#### 변경 내용을 추적하는 방법

Vue 인스턴스에 Javascript 객체를 `data` 옵션으로 전달하면 Vue는 모든 속성에 Object.defineProperty를 사용하여 getter/setter로 변환합니다. 이는 Vue가 ES5를 사용할 수 없는 IE8 이하를 지원하지 않는 이유입니다.

getter/setter는 사용자에게 보이지 않으나 속성에 액세스 하거나 수정할 대 Vue가 종속성 추적 및 변경 알림을 수행할 수 있습니다. 한 가지 주의 사항은 변환된 데이터 객체가 기록될 때 브라우저가 getter/setter 형식을 다르게 처리하므로 친숙한 인터페이스를 사용하기 위해 vue-devtools를 설치하는 것이 좋습니다.

모든 컴포넌트 인스턴스에는 해당 watcher 인스턴스가 있으며, 이 인스턴스는 컴포넌트가 종속적으로 렌더링되는 동안 "수정"된 모든 속성을 기록합니다. 나중에 종속적인 setter가 트리거되면 watcher에 알리고 컴포넌트가 다시 렌더링 됩니다.

[Virtual DOM과 Vue 렌더링 원리](https://blog.kakaocdn.net/dn/VSYVy/btq8bqdHrHo/wlkq94hnNbWDkl3SrDGkU0/img.png)

<br />

#### 변경 감지 경고(Object)

최신 Javascript의 한계로 인해 Vue는 속성의 추가 제거를 감지할 수 없습니다. Vue는 인스턴스 초기화 중에 getter/setter 변환 프로세스를 수행학기 때문에 data 객체 속성이 있어야 vue가 이를 변환하고 응답할 수 있습니다.

```Javascript
var vm = new Vue({
    data: {
        a: 1
    }
})

// `vm.a`는 반응형이지만, `vm.b'는 반응적 X
vm.b = 2
```

```JS
Vue.set(vm.someObject, 'b', 2)

this.$set(this.someObject, 'b', 2)

// Object.assign(this.someObject, { a: 1, b:2 }) or Object.extend
this.someObject = Object.assign({}, this.someObject, {a: 1, b: 2})
```

객체에 추가된 속성은 변경내용을 트리거하지 않는데 원본 객체와 믹스인 객체를 사용하여 새로운 객체를 생성하게 됩니다. 

<br />

#### 변경 감지 경고(Array)

Vue는 아래 같은 배열의 변경을 감지할 수 없습니다.

1. vm.items[indexOfItem] = newValue
2. vm.items.length = newLength

```Javascript
var vm = new Vue({
    data: {
        items: ['a', 'b', 'c']
    }
})

vm.items[1] = 'x'       // is NOT reactive
vm.items.length = 2     // is NOT reactive 
```

```JS
// Vue.set
Vue.set(vm.items, indexOfItem, newValue)

// Array.prototype.splice
vm.items.splice(indexOfItem, 1, newValue)

vm.$set(vm.items, indexOfItem, newValue)

vm.items.splice(newLength)
```

<br />

#### 반응형 속성 선언하기

Vue는 루트 수준의 반응성 속성을 동적 으로 추가할 수 없으므로 모든 루트 수준의 반응성 데이터 속성을 빈 값으로라도 초기에 선언하여 Vue 인스턴스를 초기화해야 합니다.

```Javascript
var vm = new Vue({
    data: {
        // 빈 값으로 메시지를 선언 합니다.
        message: ''
    },
    template: '<div>{{ message }}</div>'
})

// 나중에 `message`를 설정합니다.
vm.message = 'Hello'
```

<br />

#### 비동기 갱신 큐(Async Update Queue)

Vue는 DOM 업데이트를 비동기로 합니다. 데이터 변경이 발견 될 때마다 큐(Queue)를 열고 같은 이벤트 루프에서 발생하는 모든 데이터 변경을 버퍼에 답습니다. 같은 Watcher가 여러 번 발생하면 대기열에서 한 번만 푸시됩니다. 이 버퍼링된 중복의 제거는 불필요한 계산돠 DOM 조작을 피하는 데 있어 중요합니다. 그 다음, 이벤트 루프 "tick"에서 Vue는 대기열을 비우고 실제 (이미 중복 제거 된) 작업을 수행합니다. 내부적으로 Vue는 비동기 큐를 위해 네이티브 Promise.then와 MessageChannel를 시도하고 setTimeout(fn, 0)으로 돌아갑니다.

vm.someData = 'new Value'

Vue.js는 일반적으로 개발자가 "데이터 중심"방식으로 생각하고 DOM을 직접 만지지 않도록 권장하지만 때로는 건드려야 할 수 도 있습니다. Vue.js가 데이터 변경 후 DOM 업데이트를 마칠 때까지 기다리면 데이터 변경된 직후에 `Vue.nextTick` (콜백)을 사용할 수 잇습니다. 콜백은 DOM이 업데이트 된 후에 호출됩니다.

- Vue.nextTick

    ```JS
    var vm = new Vue({
        el: '#example',
        data: {
            message: '123'
        }
    })

    vm.message = 'new message'                  // 데이터 변경
    vm.$el.textContext === 'new mesage'         // fase
    Vue.nextTick(function() {
        vm.$el.textContext === 'new message'    // false
    })
    ````

- this.$nextTick()

    ```JS
    Vue.component('example', {
        template: '<span>{{ message }}</span>',
        data: function() {
            return {
                message: '갱신 안됨'
            }
        },
        methods: {
            updateMessage: function() {
                this.message = '갱신됨'
                console.log(this.$el.textContext)       // ==> '갱신 안됨'
                this.$nextTick(function() {
                    console.log(this.$el.textContext)   // ==> '갱신됨'
                })
            }
        }
    })
    ```

`$nextTick()`은 promise를 반환하므로, ES2017 async/await 문법을 사용하여 똑같은 동작을 수행할 수 있습니다.

```JS
methods: {
    updateMessage: async function() {
        this.message = '갱신됨'
        console.log(this.$el.textContext)       // ==> '갱신 안됨'
        await this.$nextTick()
        console.log(this.$el.textContext)   // ==> '갱신됨'
    }
}
```