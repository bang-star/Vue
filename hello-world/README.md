# Vue 기본문법

현재 회사에서 개발을 위한 기술스택으로 Vue가 필요하게 되어 공부를 시작하게 되었다.

## Computed와 Watch

### Computed 속성

Computed는 계산된 속성 대신 동일한 함수를 메서드로 정의할 수 있습니다.

메서드와 Computed는 최종 결과에 대한 접근 방식은 실제로 정확히 동일합니다.

차이점은 계산된 속성이 반응 종속성에 따라 캐시된다는 것이다.

Computed는 캐싱을 하고, method는 캐싱을 하지 않는다.

### watch 속성

대부분의 경우 computed 속성이 더 적합하지만 사용자 지정 감시자가 필요한 경우가 있습니다. 이것이 Vue가 옵션을 통해 데이터 변경에 반응하는 보다 일반적인 방법을 제공하는 이유입니다 watch 는 데이터 변경에 대한 응답으로 비동기식 또는 비용이 많이 드는 작업을 수행하려는 경우에 가장 유용합니다.

## v-if와 v-show

v-if is “real” conditional rendering because it ensures that event listeners and child components inside the conditional block are properly destroyed and re-created during toggles.

v-if is also lazy: if the condition is false on initial render, it will not do anything - the conditional block won’t be rendered until the condition becomes true for the first time.

In comparison, v-show is much simpler - the element is always rendered regardless of initial condition, with CSS-based toggling.

Generally speaking, v-if has higher toggle costs while v-show has higher initial render costs. So prefer v-show if you need to toggle something very often, and prefer v-if if the condition is unlikely to change at runtime.₩


 - [Vue 공식 문서])(https://vuejs.org/)

## 선언적 렌더링

Vue.js의 핵심에는 간단한 템플릿 구문을 사용하여 DOM에서 데이터를 선언적으로 렌더링할 수 있는 시스템이 있다.

v-bind 속성은 디렉티브이라고 합니다. 디렉티브는 Vue에서 제공하는 특수 속성임을 나타내는 v-접두어가 붙어있으며 사용자가 짐작할 수 있듯 렌더링 된 DOM에 특수한 반응형 동작을 합니다. 기본적으로 "이 요소의 title 속성을 Vue 인스턴스의 message 속성으로 최신 상태를 유지 합니다."

## 조건문과 반복문

### 조건문

엘리먼트가 표시되는지에 대한 여부를 제어하는 것은 아주 간단하다.

텍스트와 속성뿐 아니라 DOM의 구조에도 데이터를 바인딩 할 수 있음을 보여준다. 또한 Vue 엘리먼트가 Vue에 삽입/업데이트/제거될 때 자동으로 트랜지션 효과를 적용할 수 있는 강력한 전환 효과 시스템을 제공한다.

### 반복문

v-for 디렉티브는 배열의 데이터를 바인딩하여 ToDO 목록을 표시하는데 사용할 수 있습니다.

## 사용자 입력 핸들링

사용자가 앱과 상호 작용할 수 있게 하기 위해 v-on 디렉티브를 사용하여 Vue 인스턴스에서 메소드를 호출하는 이벤트리스너를 추가할 수 있습니다.

Vue는 또한 양식에 대한 입력과 앱 상태를 양방향으로 바인딩하는 v-model 디렉티브를 제공한다.


## 컴포넌트를 사용한 작성방법

컴포넌트 시스템은 Vue의 또 다른 중요한 개념입니다. 이는 작고 독립적이며 재사용할 수 있는 컴포넌트로 구성된 대규모 애플리케이션을 구축할 수 있게 해주는 추상적 개념입니다. 생각해보면 거의 모든 유형의 애플리케이션 인터페이스 컴포넌트 트리로 추상화할 수 있습니다.

Vue에서 컴포넌트는 미리 정의된 옵션을 가진 Vue 인스턴스입니다. Vue에서 컴포넌트를 등록하는 방법은 간단합니다.

부모 영역의 데이터를 자식 컴포넌트에 전달할 수 있어야 합니다.

```VUE
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})
```

대규모 애플리케이션에서는 개발을 보다 쉽게 관리할 수 있도록 전체 앱을 컴포넌트로 나누는 것이 필수적입니다.


<br />

## Vue 개념 돌아보기

### Vue 인스턴스 생성

모든 Vue 앱은 Vue 함수로 새 Vue 인스턴스를 만드는 것부터 시작한다.

엄격히 MVVM 패턴과 관련이 없지만 Vue의 디자인은 부분적으로 그것에 영감을 받았습니다.

모델-뷰-뷰 모델(Model-View-ViewModel, MVVM)은 하나의 소프트웨어 아키텍처 패턴으로 GUI 코드로 구현하는 그래픽 사용자 인터페이스(뷰)의 개발을 비즈니스 로직 또는 백엔드 로직(모델)로부터 분리시켜서 뷰가 어느 특정한 모델 플랫폼에 종속되지 않도록 해준다.

- 참고: [MVVM](https://ko.wikipedia.org/wiki/%EB%AA%A8%EB%8D%B8-%EB%B7%B0-%EB%B7%B0%EB%AA%A8%EB%8D%B8)

<br />

Vue 인스턴스를 참조하기 위해 종종 변수 vm(ViewModel의 약자)을 사용합니다.

Vue 인스턴스를 생성할 때는 options 객체를 전달해야 한다. 전체 옵션 목록은 API reference에서 확인할 수 있다.

1. data : Object | Function, Vue  인스턴스의 데이터 객체
2. props : Array<String> | Object, 부모 컴포넌트 데이터 메타
3. propsData: {[key: String]: any}, 인스턴스 생성하는 동안 속성 전달
4. computed: { [key: String]: Function}, Vue 인스턴스의 계산된 속성
5. methods: {[key: String]: Function}, Vue 인스턴스의 method
6. watch: {[key: String] String | Function | Object | Array }, 키가 표시되는 표현식이고 값이 콜백

- 참고: [Vue API Reference](https://vuejs.org/api/)
