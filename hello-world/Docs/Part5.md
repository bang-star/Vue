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