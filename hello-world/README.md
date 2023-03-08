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

<br />

## 데이터와 메소드

Vue 인스턴스가 생성될 때 data 객체에 있는 모든 속성이 Vue의 반응형 시스템에 추가된다. 각 속성값이 변경될 때 뷰가 "반응"하여 새로운 값과 일치하도록 업데이트된다.

데이터가 변경되면 화면은 다시 렌더링된다. 유념할 점은 data 에 있는 속성들은 인스턴스가 생성될 때 존재한 것들만 반응형이다.

```JS
// 데이터 객체
var data = { a: 1 }

// Vue 인스턴스에 데이터 객체를 추가
var vm = new Vue({
    data : data
})

// 인스턴스에 있는 속성은 원본 데이터에 있는 값을 반환
vm.a === data.a     // => ture

// 인스턴스에 있는 속성값을 변경하면 원본 데이터에도 영향을 미칩니다.
vm.a = 2
data.a = 2

data.a = 3
vm.a = 3
```

보통 Vue Component 파일 내에서 아래와 같이 data를 선언하고 초기화 합니다.

```JS
data: {
    newTodoText: '',
    visitCount: 0,
    hideCompletedTodos: false,
    todos: [],
    error: null
}
```

기존 속성이 변경되는 것을 막아 반응형 시스템이 추적할 수 없도록 Object.freeze()를 사용할 수 있습니다. 값이 변경되지 않음을 의미합니다.

```JS
var obj = {
    foo: 'bar'
}

Object.freeze(obj)

new Vue({
    el: '#app',
    data: obj
})

<div id="app">
    <p>{{foo}}</p>
    <!-- obj.foo는 더이상 변하지 않습니다! -->
    <button v-on:click="foo= 'baz'">Change it</button>
</div>
```

Vue 인스턴스는 데이터 속성 이외에도 유용한 인스턴스 속성 및 메서드를 제공한다. 다른 사용자 정의 속성과 구분하기 위해 $ 접두어를 붙인다.

```JS
var data = { a: 1 }
var vm = new Vue({
    el: '#example',
    data: data
})

vm.$data === data
vm.$el === document.getElementById('example')

// $watch는 인스턴스 메서드입니다.
vm.$watch('a', function(newVal, oldVal) {
    // `vm.a`가 변경되면 호출된다.
})
```

<br />

## 인스턴스 라이프사이클 훅

각 Vue 인스턴스는 생성될 때 일련의 초기화 단계를 거칩니다. 예를 들어, 데이터 관찰 설정이 필요한 경우, 템플릿을 컴파일하는 경우, 인스턴스를 DOM에 마운트하는 경우, 그리고 데이터가 변경되어 DOM을 업데이트하는 경우가 있습니다. 그 과정에서 사용자 정의 로직을 실행할 수 있는 `라이프사이클 훅`도 호출됩니다.

인스턴스 라이프사이클의 여러 단계에서 호출될 다른 훅도 있습니다. 그 예로 mounted, updated 및 destoryed가 있습니다. 모든 라이프사이클 훅은 this 컨텍스트가 호출하는 Vue 인스턴스를 가리키며 호출됩니다.

Vue 세계에서 `컨트롤러`의 컨셉이 어디에 있는지 궁금할 수 있습니다. 정답은 Vue에는 컨틀롤러가 없습니다. 컴포넌트의 사용자 지정 로직은 이러한 라이프사이클 훅으로 분할됩니다.


### 주의 

> options 속성이나 콜백에 created: () => console.log(this.a) 이나 vm.$watch('a', newVal => this.mymethod()) 와 같은 화살표 함수 사용을 지양하기 바랍니다. 화살표 함수는 this 를 가지지 않기 떄문에 화살표 함수에서의 this는 다른 변수로 취급되거나 렉시컬하게 호출한 변수를 발견할 때까지 부모 스코프에서 해당 변수를 찾습니다. 이 때문에 `Uncaucht TypeError: Cannot read property of undefined` 또는 `Uncaught TypeError: this.myMethod is not a function` 와 같은 오류가 발생하게 됩니다.


### 인스턴스 라이프사이클 훅

인스턴스 라이프사이클에 대한 다이어그램입니다.

![image](https://user-images.githubusercontent.com/63120360/222989979-33b24059-a4c3-4701-86f4-df05f1412d58.png)


<br />

## 템플릿 문법

<hr>

Vue.js는 렌더링 된 DOM을 기본 Vue 인스턴스의 데이터에  선언적으로 바인딩 할 수 있는 HTML 기반 템플릿 구문을 사용합니다. 모든 Vue.js 템플릿은 스펙을 호환하는 브라우저 및 HTML 파서로 구문 분석할 수 있는 유효한 HTML 입니다.

내부적으로 Vue는 템플릿을 가상 DOM 렌더링 함수로 컴파일 합니다. 반응형 시스템과 결합된 Vue는 앱 상태가 변경될 때 최소한으로 DOM을 조작하고 다시 적용할 수 있는 최소한의 컴포넌트를 지능적으로 파악할 수 있습니다.

가상 DOM 개념에 익숙하고 JavaScript의 기본 기능을 선호하는 경우 템플릿 대신 렌더링 함수를 직접 작성할 수 있으며 선택사항으로 JSX를 지원합니다.

### 보간법(Interpolation) : 값 대입

1. 문자열(Text)

데이터 바인딩의 가장 기본 형태는 `Mustache` 구문(이중 중괄호)을 사용한 텍스트 보간입니다.

 - Mustache 태그는 해당 데이터 객체의 속성의 값으로 대체됩니다. 또한 데이터 객체의 속성이 변경될 때마다 갱신됩니다.

 - `v-once 디렉티브`를 사용하여 데이터 변경 시 업데이트 되지 않는 일회성 보간을 수행할 수 있지만, 같은 노드의 바인딩에도 영향을 미친다는 점을 유의해야 합니다.

 
        <h1>{{ message }}</h1>
        <h2 v-once>{{ message }}</h2>
        <button @click="message = 'Hello Vue World'">Update Button</button>


2. 원시 HTML(Raw HTML)

Mustach 태그는 HTML이 아닌 일반 텍스트로 데이터를 해석합니다. 실제 HTML을 출력하려면 v-html 디렉티브를 사용해야 합니다.

```JS
<p>Using mustaches: {{ rawHtml }}</p>
<p>Using v-html directive: <span v-html="rawHtml"></span></p>
<span style="color:red">This should be red.\</span>
```

span 내용을 rawHTML로 대체됩니다. 이때 데이터 바인딩은 무시됩니다. Vue는 문자열 기반 템플릿 엔진이 아니기 때문에  v-html을 이용해 템플릿을 사용할 수 없습니다. 이와 달리 컴포넌트는 UI 재사용 및 구성을 위한 기본 단위로 사용하는 것을 추천합니다.

> 웹사이트에서 임의의 HTML을 동적으로 렌더링하려면 XSS 취약점으로 쉽게 이어질 수 있으므로 매우 위험할 가능성이 있습니다. 신뢰할 수 있는 콘텐츠에서만 HTML 보간을 사용하고 사용자가 제공한 콘텐츠에서는 절대 사용하면 안됩니다.


3. 속성(Attribute)

Mustaches는 HTML 속성에서 사용할 수 없습니다. 대신 v-bind 디렉티를 사용하세요.

```JavaScript
<div v-bind:id="dynamicId"></div>
```

boolean 속성을 사용할 떄 단순히 true인 경우 v-bind는 조금 다르게 동작합니다.

```JavaScript
<button v-bind:disable="isButtonDisabled">Button</button>
```

isButtonDisabled가 null, undefined 또는 false의 값을 가지면 disabled 속성은 렌더링 된 `<button>` 엘리먼트에 포함되지 않습니다.


4. Javascript 표현식 사용

실제로 Vue.js는 모든 데이터 바인딩 내에서 JavaScript 표현식의 모든 기능을 지원합니다.

> 템플릿 표현식은 샌드박스 처리되며 Math와 Date 같은 전역으로 사용 가능한 것에만 접근할 수 있습니다. 템플릿 표현식에서 사용자 정의 전역에 액세스 하면 안된다.


- 디렉티브 

    디렉티브는 v-접두사가 있는 특수 속성입니다. 디렉티브 속성 값은 단일 JavaScript 표현식이 된다. 디렉티브의 역할은 표현식의 값이 변경될 때 사이드이펙트를 반응적으로 DOM에 적용하는 것입니다.


    1. 전달인자

        일부 디렉티브는 콜론으로 표시되는 `전달인자`를 사용할 수 있습니다. 예를 들어, v-bind 디렉티브는 반응적으로 HTML 속성을 갱신하는데 사용됩니다.

    2. 동적 argument

        2.6.0버전부터 JavaScript 표현식을 대괄호로 묶어 디렉티브의 argument로 사용하는 것도 가능해졌습니다.

        ```JavaScript
        <!-- 동적 전달인자는 "동적 전달인자의 형식 제약"의 부분에서 후술되는바와 같이, 조금의 제약이 있는 점에 주의해야한다. -->
        <a v-bind:[attributeName]="url"></a>
        ```

        여기서 `attributeName`은 JavaScript형식으로 동적 변환되어, 그 변환 결과가 argument의 최종적인 값으로 사용됩니다. 예를 들어 VUe 인스턴스에 `href`라는 값을 가진 attributeName 데이터 속성을 가진 경우, 이 바인딩은 `v-bind:href`와 동등합니다.

        <br />

        2-1. 동적 argument 값의 제약

        동적 argument는 null을 제외하고는 String으로 변환될 것으로 예상합니다. `특수 값인 null`은 명시적으로 바인딩을 제거하는데 사용됩니다. 그외의 경우, String이 아닌 값은 경고를 출력합니다.

        2-2. 동적 argument 형식의 제약

        동적 argument의 형식에는 문자상의 제약이 있습니다. 스페이스와 따옴표 같은 몇몇 문자는 HTML의 속성명으로서 적합하지 않은 문자이기 때문입니다. 이를 피하는 방법으로 스페이스나 따옴표를 포함하지 않는 형식을 사용하거나, 복잡한 표현식을 ` 계산된 속성(Computed)`으로 대체하는 것입니다. 

        `in-DOM 템플릿`을 사용할 때에는(템플릿이 HTML 파일에 직접 쓰여진 경우), 브라우저가 모든 속성명을 소문자로 만드는 관계로 대문자의 사용을 피하는 것이 좋다.

    <br />

    3. 수식어

        수식어는 점으로 표시되는 특수 접미사로, 디렉티브를 특별한 방법으로 바인딩 해야 함을 나타냅니다. 예를 들어, `.prevent` 수식어는 트리거된 이벤트에서 `event.preventDefault()`를 호출하도록 `v-on 디렉티브`에게 알려준다.


    <br />

    4. 약어(Shorthands)

        일반적인 HTML과 조금 다르게 보일 수 있는데, 하지만 `:`와 `@`는 속성 이름에 유효한 문자이며 Vue.js를 지원하는 모든 브라우저는 올바르게 구문 분석을 할 수 있습니다. 또한 최종 렌더링 된 마크업에는 나타나지 않습니다.


<br />

## Computed

<br >

### 계산된 속성(Computed)

<hr />

템플릿 내에 표현식을 넣으면 편리하다. 하지만 간단한 연산일 때만 이용하는 것이 좋습니다. 너무 많은 연산은 템플릿안에서 하면 코드가 비대해지고 유지보수가 어렵습니다.

```HTML
<div id="example">
    <p>원본 메시지: "{{ message }}"</p>
    <p>역순 메시지: "{{ reversedmessage }}"</p>
</div>
```

```JS
var vm = new Vue({
    el: '#example',
    data: {
        message: '안녕하세요'
    },
    computed: {
        reversedmessage: function() {
            return this.message.split('').reverse().join('')
        }
    }
})
```

computed 속성으로도 템플릿에서 데이터 바인딩 할 수 있습니다. Vue vm.reversedMessage가 vm.message에 의존하는 것을 알고 있습니다. 따라서 vm.message가 바뀔 때 vm.reversedMessage에 의존하는 바인딩을 모두 업데이트 할 것입니다.


<br />

### Computed 속성의 캐싱 vs 메서드

<hr />

1. 계산된 속성(computed)

```JS
<div id="example">
    <p>원본 메시지: "{{ message }}"</p>
    <p>메시지 역순: "{{ reversedMessageC }}"</p>
    <p>메시지 역순: "{{ reversedMessageM() }}"</p>
</div>

var vm = new Vue({
    el: '#example',
    data: {
        message: '안녕하세요.'
    },
    computed: {
        reversedMessageC: function() {
            return this.message.split('').reverse().join('')
        }
    },
    methods: {
        reversedMessageM: function() {
            return this.message.split('').reverse().join('')
        }
    }
})
```

 - computed 속성은 종속 대상에 따라서 저장(caching)이 됨
 - computed 속성은 해당 속성이 종속된 대상이 변경될 때만 함수를 실행
 - 즉, message가 변경되지 않는 한, computed 속성인 reversedMessage를 여러 번 요청해도 계산을 다시하지 않고 계산되어 있던 결과를 즉시 반환한다.

<br />

2. 메소드

 - 메소드를 호출하면 렌더링을 다시 할 때마다 항상 함수를 실행한다.


<br />

### 계산된 속성(Computed) - Getter and Setter

Computed 속성은 기본적으로 getter 함수만 가지고 있지만, 필요한 경우 setter 함수를 만들어 사용할 수 있다.

vm.fullName = 'John Doe'를 실행하면 설정자가 호출되고 vm.firstName과 vm.lastName이 그에 따라 업데이트 된다.

```JS
computed: {
    fullname: {
        get: function() {
            return this.firstName + ' ' + this.lastName
        },
        set: function(newVal) {
            var names = newValue.split(' ')
            this.firstName = names[0]
            this.lastName = names[names.length-1]
        }
    }
}
```

 - [Vue API Docs](https://v2.vuejs.org/v2/guide/computed.html#Computed-Setter)