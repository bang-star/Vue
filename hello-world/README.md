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


 - [Vue 공식 문서](https://vuejs.org/)

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

<br />

## Watch

<hr />

### 감시자(Watch)

대부분의 경우 computed 속성이 더 적합하지만 사용자가 만든 감시자(watch)가 필요한 경우가 있다. 그래서 Vue는 watch 옵션을 통해 데이터 변경에 반응하는 보다 일반적인 방법을 제공한다. 이는 데이터 변경에 대한 응답으로 비동기식 또는 시간이 많이 소요되는 조작을 수행하려는 경우에 가장 유용하다.

```JS
<!-- Since there is already a rich ecosystem of ajax libraries    -->
<!-- and collections of general-purpose utility methods, Vue core -->
<!-- is able to remain small by not reinventing them. This also   -->
<!-- gives you the freedom to use what you're familiar with.      -->
<script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lodash@4.13.1/lodash.min.js"></script>
<script>
var watchExampleVM = new Vue({
  el: '#watch-example',
  data: {
    question: '',
    answer: 'I cannot give you an answer until you ask a question!'
  },
  watch: {
    // whenever question changes, this function will run
    question: function (newQuestion, oldQuestion) {
      this.answer = 'Waiting for you to stop typing...'
      this.debouncedGetAnswer()
    }
  },
  created: function () {
    // _.debounce is a function provided by lodash to limit how
    // often a particularly expensive operation can be run.
    // In this case, we want to limit how often we access
    // yesno.wtf/api, waiting until the user has completely
    // finished typing before making the ajax request. To learn
    // more about the _.debounce function (and its cousin
    // _.throttle), visit: https://lodash.com/docs#debounce
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
  },
  methods: {
    getAnswer: function () {
      if (this.question.indexOf('?') === -1) {
        this.answer = 'Questions usually contain a question mark. ;-)'
        return
      }
      this.answer = 'Thinking...'
      var vm = this
      axios.get('https://yesno.wtf/api')
        .then(function (response) {
          vm.answer = _.capitalize(response.data.answer)
        })
        .catch(function (error) {
          vm.answer = 'Error! Could not reach the API. ' + error
        })
    }
  }
})
</script>
```

watch 옵션을 사용하면 비동기 연산 (API 엑세스)를 수행하고, 우리가 그 연산을 얼마나 자주 수행하는지 제한하고, 최종 읍답을 얻을 때까지 중간 상태를 설정할 수 있다.

- [Vue Watcher](https://v2.vuejs.org/v2/guide/computed.html)


<br />

### Computed vs Watch

<hr>

#### Computed 

 - 계산해야 하는 목표 데이터를 정의하는 방식으로 소프트웨어 공학에서 이야기하는 `선언형 프로그래밍` ㅂ아식.
 - 다른 데이터 기반으로 변경할 필요가 있는 데이터가 있는 경우, `watch`보다 `computed` 속성을 사용하는 것이 더 좋다.

 - [선언형 프로그래밍](https://ko.wikipedia.org/wiki/%EC%84%A0%EC%96%B8%ED%98%95_%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D)

#### Watch

 - 감시할 데이터를 지정하고 그 데이터가 바뀌면 이런 함수를 실행하라는 방식으로 소프트웨어 공학에서 이야기하는 `명령형 프로그래밍` 방식.

 - [명령형 프로그래밍](https://ko.wikipedia.org/wiki/%EB%AA%85%EB%A0%B9%ED%98%95_%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D)


```JS
<div id="demo">{{ fullName }}</div>

// Computed
var vm = new Vue({
    el: '#demo',
    data: {
        firstName: 'Foo',
        lastName: 'Bar'
    },
    computed: {
        fullName: function() {
            return this.firstName + ' ' + this.lastName
        }
    }
})

// Watch
var vm = new Vue({
    el: '#demo',
    data: {
        firstName: 'Foo',
        lastName: 'Bar',
        fullName: 'Foo Bar'
    },
    computed: {
        firstName: function(val) {
            this.fullName = val + ' ' + this.lastName
        },
        lastName: function(val) {
            this.fullName = this.firstName + ' ' + val
        },
    }
})
```

<br />

## 클래스와 스타일 바인딩

### 클래스와 스타일 바인딩(Class and Style Bindings)

- 데이터 바인딩은 엘리먼트의 클래스 목록과 인라인 스타일(inline style)을 조작하기 위해 일반적으로 사용됩니다.

- 이 두 속성은 v-bind를 사용하여 처리할 수 있습니다.

- 문자열 연결에 간섭하는 것은 짜증나는 일이며 오류가 발생하기 쉽습니다.

- Vue는 class와 style에 v-bind를 사용할 때 특별히 향상된 기능을 제공합니다.

- 표현식은 문자열 이외에 객체(Object) 또는 배열(Array)을 이용할 수 있습니다.

### 클래스 바인딩

#### HTML 클래스 바인딩하기(객체 구문)

클래스를 동적으로 토글하기 위해 v-bind:class에 객체를 전달할 수 있습니다.

```JS
// active 클래스의 존재 여부가 데이터 속성 isActive의 Boolean 값에 의해 결정되는 것을 의미합니다.
<div v-bind:class="{ active: isActive }"></div>

// 객체에 Key가 더 있으면 여러 클래스를 토글할 수 있습니다. 또한 v-bind:class 디렉티브는 일반 class 속성과 공존할 수 있습니다.
<div class="static" v-bind:class="{ active: isActive, 'text-danger': hasError }"></div>

data: {
    isActive: true,
    hasError: false
}

<div class="static active"></div>
```

<br />

- 바인딩 객체가 인라인일 필요는 없습니다.

```JS
<div v-bind:class="classObject"></div>

data: {
    classObject: {
        active: true,
        'text-danger': false
    }
}
```

<br />

- 객체가 Computed 속성일 수 있습니다.

```JS
<div v-bind:class="classObject"></div>

data: {
    isActive: true,
    error: null
},
computed: {
    classObject: function() {
        return {
            active: this.isActive && !this.error,
            'text-danger': this.error && this.error.type === 'fatal'
        }
    }
}
```

#### HTML 클래스 바인딩하기(배열 구문)

 - 배열을 v-bind:class에 전달하여 클래스 목록을 지정할 수 있습니다.

```JS
<div v-bind:class="[activeClass, errorClass]"></div>

data: {
    activeClass: 'active',
    errorClass: 'text-danger'
},
computed: {
    classObject: function() {
        return {
            active: this.isActive && !this.error,
            'text-danger': this.error && this.error.type === 'fatal'
        }
    }
}
```

 - 항상 errorClass를 적용하고 isActive가 ture일 때만 activeClass를 적용합니다.

```JS
<div v-bind:class="[isActive ? activeclass : '', errorClass]"></div>

<div v-bind:class="[{active : isActive}, errorClass]"></div>
```

#### HTML 클래스 바인딩하기(컴포넌트와 함께 사용하는 방법)

사용자 정의 컴포넌트로 class 속성을 사용하면, 클래스가 컴포넌트의 루트 엘리먼트에 추가됩니다. 이 엘리먼트는 기존 클래스는 덮어쓰지 않습니다.

```Javascript
Vue.component('my-component', {
    template: '<p class="foo bar">Hi</p>'
})

<my-component class="baz boo"></my-component>

<p class="foo bar baz boo">Hi</p>

<my-component v-bind:class="{ active : isActive }"></my-component>

<p class="foo bar active">Hi</p>
```
<br />

### 스타일 바인딩

#### 인라인 스타일 바인딩하기(객체 구문)

v-bind:style 객체 구문은 매우 직설적입니다. 거의 CSS처럼 보이지만 JavaScript 객체입니다. 속성 이름에 camelCase와 kebab-case(따옴표를 함께 사용해야 합니다)를 사용할 수 있습니다.

```JavaScript
<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>

data {
    activeColor: 'red',
    fontSize: 30
}
```

<br />

```JavaScript
<div v-bind:style="styleObject"></div>

data {
    styleObject : {
        color: 'red',
        fontSize: '13px'
    }
}
```

#### 인라인 스타일 바인딩하기(배열 구문)

v-bind:style에 대한 배열 구문은 같은 스타일의 엘리먼트에 여러 개의 스타일 객체를 사용할 수 있게 합니다.

```JavaScript
<div v-bind:style="[baseStyle, overridingStyles]"></div>
```

#### 인라인 스타일 바인딩하기(다중 값 제공)

브라우저가 지원하는 배열의 마지막 값만 렌더링합니다. 이 예제에서는 flexBox의 접두어가 붙지 않은 버전을 지원하는 브라우저에 대해 display: flex를 렌더링합니다.

```JavaScript
<div v-bind:style="{ display: ['-webkit-box', '-ms-flexbox', 'flex']}"></div>
```

<br />

## 조건부 렌더링

### v-if

v-if 디렉티브는 조건에 따라 블록을 렌더링하기 위해 사용됩니다. 디렉티브의 표현식이 true 값을 반환할 때만 렌더링 됩니다.

```html
<h1 v-if="awesome">Vue is awesome!</h1>
```

v-else와 함께 'else 블록'을 추가하는 것도 가능하다.


### <template>에 v-if을 갖는 조건부 그룹 만들기

v-if는 디렉티브이기 때문에 하나의 엘리먼트에 추가해야합니다. 하지만 하나 이상의 엘리먼트를 트랜지션하려면 어떻게 해야할 까요?

이 경우 보이지 않는 래퍼 역할을 하는 `<template>` 엘리먼트에 v-if를 사용할 수 있습니다. 최종 렌더링 결과에는 `<template>` 엘리먼트가 포함되지 않습니다.

### v-else

v-else 엘리먼트는 v-if 엘리먼트 또는 v-else-if 엘리먼트 바로 뒤에 있어야 합니다. 그렇지 않으면 인식할 수 없습니다.

### v-else-if

v-else-if는 이름에서 알 수 있듯, v-if에 대한 `else if 블록` 역할을 합니다. 또한 여러 개를 사용할 수 있습니다. `v-else`와 마찬가지로, `v-else-if` 엘리먼트는 `v-if` 또는 `v-else if` 엘리먼트 바로 뒤에 와야 합니다.

### key를 이용한 재사용 가능한 엘리먼트 제어

Vue는 가능한 한 효율적으로 엘리먼트를 렌더링하려고 시도하며 종종 처음부터 렌더링을 하지 않고 다시 사용합니다. Vue를 매우 빠르게 만드는데 도움이 되는 것이외에 몇가지 유용한 이점이 있습니다. 예를 들어 사용자가 여러 로그인 유형을 트랜지션할 수 있도록 허용하는 경우입니다.

```JS
<template v-if="loginType === 'username'">
    <label>사용자 이름</label>
    <input placeholder="사용자 이름을 입력하세요.">
</template>
<template v-else>
    <label>이메일</label>
    <input placeholder="이메일 주소를 입력하세요.">
</template>
```

이 코드에서는 loginType을 바꾸어도 사용자가 이미 입력한 내용은 지워지지 않습니다. 두 템플릿 모두 같은 요소를 사용하므로 `<input>`은 대체되지 않고 단지 placeHolder만 변경됩니다.

```JS
<template v-if="loginType === 'username'">
    <label>사용자 이름</label>
    <input placeholder="사용자 이름을 입력하세요." key='username-input'>
</template>
<template v-else>
    <label>이메일</label>
    <input placeholder="이메일 주소를 입력하세요." key='email-input'>
</template>
```

유일한 값으로 key 속성을 추가하였다. `<label>`엘리먼트는 key 속성이 없기 때문에 여전히 효율적으로 재사용됩니다.

<br />

### v-show

엘리먼트를 조건부로 표시하기 위한 또 다른 옵션은 `v-show 디렉티브` 입니다. 사용법은 거의 동일하다. 차이점은 `v-show`가 있는 엘리먼트는 항상 렌더링 되고 DOM에 남아있다는 점입니다. v-show는 단순히 엘리먼트에 display CSS 속성을 토글합니다.

```Javascript
<h1 v-show='ok'>안녕하세요</h1>
```

<br />

## 리스트 렌더링

### v-for로 엘리먼트에 배열 매핑하기

- `v-for 디렉티브`를 사요하여 배열을 기반으로 리스트를 렌더링할 수 있습니다. `v-for 디렉티브`는 item in items 형태로 특별한 문법이 필요합니다. 여기서 `items`는 `원본 데이터 배열`이고 `item`은 반복되는 배열 엘리먼트의 별칭(alias)입니다.

```Javascript
<ul id='example-1'>
    <li v-for='item in items'>
        {{ item.message }}
    </li>
</ul>

var example1 = new Vue({
    el: '#example-1',
    data: {
        parentItem: 'Parent',
        items: [
            { message: 'Foo' },
            { message: 'Bar' },
        ]
    }
})
```

- v-for 블록 안에는 부모 범위 속성에 대한 모든 권한이 있습니다. v-for는 또한 현재 항목의 인덱스에 대한 두 번째 argument 옵션을 제공합니다.

- in 대신에 of를 구분자로 사용할 수 있습니다.

<br />

### v-for와 객체

v-for 디렉티브를 사용하여 객체의 속성을 반복할 수 있습니다.

```Javascript
<ul id='example-1'>
    <li v-for='value in object'>
        {{ value }}
    </li>
</ul>

var example1 = new Vue({
    el: '#example-1',
    data: {
        object: {
            title : 'title',
            author: 'Daniel',
            publishedAt: '2016-04-10'
        }
    }
})
```

- 키에 대한 두 번째 argument 옵션을 제공합니다.

```JavaScript
<ul id='example-1'>
    <li v-for="(value, name) in object">
        {{ value }} : {{ name }}
    </li>
</ul>
```

- 값, 키에 더불어 index도 사용할 수 있습니다.

```JavaScript
<ul id='example-1'>
    <li v-for="(value, name, index) in object">
        {{ value }} : {{ name }} : {{index}}
    </li>
</ul>
```

> 객체를 반복할 때 순서는 `Object.keys()`의 키 나열 순서에 따라 결정됩니다. 이 순서는 JavaScript 엔진 구현간에 ** 일관적이지는 않습니다.**

<br />

### Maintaining State

Vue가 `v-for`에서 렌더링된 엘리먼트 목록을 갱신할 때 기본적으로 "in-place patch" 전략을 사용합니다. 데이터 항목의 순서가 변경된 경우 항목의 순서와 일치하도록 DOM 요소를 이동하는 대신 Vue 는 각 요소를 적절한 위치를 패치하고 해당 인덱스에서 렌더링할 내용을 반영하는지 확인합니다.

Vue에서 개별 DOM 노드들을 추적하고 기존 엘리먼트를 재사용, 재정렬하기 위해서 v-for의 각 항목들에 `고유한 key` 속성을 제공해야 합니다. key에 대한 이상적인 값은 각 항목을 식별할 수 있는 `고유한 ID` 입니다.

```HTML
<div v-for="item in items" v-bind:key="item.id">
    <!-- content-->
</div>
```

> 객체나 배열처럼, 기본 타입(Primitive value)이 아닌 값을 키로 사용해서는 안됩니다. 대신 문자열이나 숫자를 사용하세요.

<br />

### 배열 변경 감지 - 변이 메소드

Vue는 감시중인 배열의 변이 메소드를 래핑하여 `뷰 갱신`을 트리거합니다.

 - push()
 - pop()
 - shift()
 - unshift()
 - splice()
 - sort()
 - reverse()

### 배열 변경 감지 - 배열 대체

이름에서 알 수 있듯 변이 메소드는 호출된 원본 배열을 변형합니다. 이와 비교하여 변형을 하지 않는 방법도 있습니다.

바로 `filter()`, `concant()` 와 `slice()` 입니다. 이 방법을 사용하면 원본 배열을 변형하지 않고 항상 새 배열을 반환합니다. 변형이 없는 방법으로 작업할 때 이전 배열을 새 배열로 바꿀 수 있습니다.

```javascript
example1.items = example1.items.filter(function(item) {
    return item.message.match(/Foo/)
})
```

<br />

### 배열 변경 감지 - 주의 사항

Javascript의 제한으로 인해 Vue는 배열에 대해 다음과 같은 변경 사항을 감지할 수 없습니다.

  1. 인덱스로 배열에 있는 항목을 직접 설정하는 경우
    
    예: vm.items[indexOfItem] = newValue

  2. 배열의 길이를 수정하는 경우

    예: vm.items.length = newLength

<br />

```Javascript
var vm = new Vue({

    data: { items: ['a', 'b', 'c', 'd'] }

    vm.items[1] = 'x'       // reactive 하지 않음
    vm.items.length = 2     // reactive 하지 않음

    // 주의사항 1번 극복 방법1
    Vue.set(vm.items, indexOfItem, newValue)

    // 주의사항 1번 극복 방법2
    vm.items.splice(indexOfItem, 1, newValue)

    // 주의사항 1번 극복 방법3
    vm.$set(vm.items, indexOfItem, newValue)

    // 주의사항 1번 극복 방법4
    vm.items.splice(newLength)
})
```

<br />



### 객체 변경 감지에 관한 주의 사항

모던 JavaScript의 한계로 Vue는 속성 추가 및 삭제를 감지하지 못합니다. Vue는 이미 만들어진 인스턴스에 새로운 루트레벨의 반응형 속성을 동적으로 추가하는 것을 허용하지 않습니다.

```JavaScript
var vm = new Vue({
    data: {
        a: 1
    }
})

// `vm.a`는 반응형이지만, `vm.b`는 반응형이 아닙니다.
vm.b = 2
```

1. `Vue.set(object, propertyName, value)` 메서드를 사용하여 중첩된 객체에 반응형 속성을 추가할 수 있습니다.

```Javascript
Vue.set(vm.userProfile, 'age', 27)
vm.$set(vm.userProfile, 'age', 27)
```

2. `Object.assign()`을 사용해 기존의 객체에 새 속성을 할당할 수 있습니다. 이 경우 두 객체의 속성을 사용해 새 겍체를 만들어야 합니다.

```Javascript
vm.userProfile = Object.assign({}, vm.userProfile, {
    age: 27,
    favoriateColor: 'Vue Green'
})
```

### 필터링/정렬 된 결과 표시하기

원본 데이터를 실제로 변경하거나 재설정하지 않고 배열의 필터링된 버전이나 정렬된 버전을 표시해야 할 필요가 있습니다. 이 경우 필터링 된 배열이나 정렬된 배열을 반환하는 `계산된 속성`을 만들 수 있습니다.

1. 계산된 속성을 사용하는 경우

```HTML
<li v-for="n in evenNumbers">{{ n }}</li>
```

```Javascript
data: {
    numbers: [1,2,3,4,5]
},
computed: {
    evenNumbers: function() {
        return this.numbers.filter(function(number)) {
            return number % 2 == 0
        }
    }
}
```

<br />

2. 계산된 속성을 사용할 수 없는 경우 `(중첩된 v-for)`

```HTML
<li v-for="n in even(numbers)">{{ n }}</li>
```

```Javascript
data: {
    numbers: [1,2,3,4,5]
},
methods: {
    even: function(numbers) {
        return numbers.filter(function(number)) {
            return number % 2 == 0
        }
    }
}
```

<br />

3. `Range v-for`

v-for는 숫자를 사용할 수 있습니다. 이 경우 템플릿을 여러번 반복합니다.

```HTML
<div>
    <span v-for="n in 10">{{ n }}</span>
</div>
```

<br />

4. `v-for 템플릿`

템플릿 `v-if`와 마찬가지로, `<template> 태그`를 사용해 여러 엘리먼트의 블럭을 렌더링 할 수 있습니다.

```HTML
<ul>
    <template v-for="item in items">
        <li>{{ item.msg }}</li>
        <li class="divider" role="presentation"></li>
    </template>
</ul>
```

<br />

5. `v-for와 v-if`

`v-if`와 `v-for`를 동시에 사용하는 것을 추천하지 않습니다.

동일한 노드에 두 가지 모두 있다면, v-for가 v-if보다 높은 우선순위를 갖습니다. 즉, v-if는 루프가 반복될 때마다 실행됩니다. 이는 일부 항목만 렌더링 하려는 경우 유용합니다.

```HTML
<!-- V-for > V-if -->
<li v-for="todo in todos" v-if="!todo.isComplete">
    {{ todo }}
</li>

<!-- Useful -->
<ul v-if="todos.length">
    <li v-for="todo in todos">
        {{ todo }}
    </li>
</ul>
<p v-else>No todos left!</p>
```

* [Avoid v-if with v-for](https://v2.vuejs.org/v2/style-guide/#Avoid-v-if-with-v-for-essential)

> 객체를 반복할 때 순서는 `Object.keys()`의 키 나열 순서에 따라 결정됩니다. 이 순서는 JavaScript 엔진 구현간에 ** 일관적이지는 않습니다.**

<br/> 

## 이벤트 핸들링

<hr />

<br />

### 이벤트 청취 

<hr />

`v-on 디렉티브`를 사용하여 DOM 이벤트를 듣고 트리거 될때 Javascript 를 실행할 수 있습니다.

```Javascript
<div id="example-1">
    <button v-on:click="counter += 1">Add 1</button>
    <p>위 버튼을 클릭한 횟수는 {{counter}} 번 입니다.</p>
</div>

var example1 = new Vue({
    el: '#example-1',
    data: {
        counter: 0
    }
})
```

### 메서드 이벤트 핸들러

<hr />

이전 예시에서는 간단한 counter 조작이었지만, 복잡한 로직이 사용될 것이라면 이벤트 핸들러에 메소드를 사용할 수 있습니다.

```Javascript
<div id="example-2">
    <!-- `greet`는 메소드 이름으로 아래에 정의되어 있습니다. -->
    <button v-on:click="greet">Greet</button>
</div>

var example2 = new Vue({
    el: '#example-2',
    data: {
        name: 'Vue.js'
    },
    methods: {
        greet: function(event) {
            // 메서드 안에서 사용하는 `this`는 Vue 인스턴스를 가리킵니다.
            alert('Hello' + this.name + '!')

            // `event`는 네이티브 DOM 이벤트입니다.
            if(event) {
                alert(event.target.tagName)
            }
        }
    }
})

// 또한 JavaScript를 이용해서 메소드를 호출할 수 있습니다.
example2.greet()        // => 'Hello Vue.js!'
```

<br />

### 인라인 메소드 핸들러

<hr />

메소드 이름을 직접 바인딩하는 대신 인라인 JavaScript 구문에 메소드를 사용할 수도 있습니다.

```JavaScript
<div id="example-3">
    <button v-on:click="say('hi')">Say Hi</button>
    <button v-on:click="say('what')">Say What</button>
</div>

new Vue({
    el: '#example-3',
    methods: {
        say: function(message) {
            alert(message)
        }
    },
})
```

때로 인라인 명령문 핸들러에서 `원본 DOM 이벤트`에 액세스 해야할 수도 있습니다. 특별한 `$event 변수`를 사용해 메소드에 전달할 수도 있습니다.

```Javascript
<button v-on:click="warn('Form cannot be submitted yet.', $event)">Sumbit</button>

new Vue({
    el: '#example-4',
    methods: {
        warn: function(message, event) {
            // 네이티브 이벤트에 액세스 할 수 있습니다.
            if(event) event.preventDefault()

            alert(message)
        }
    },
})
```

<br />

### 이벤트 수식어(이벤트, 이벤트 버블링 선행 필요)

<hr />

`이벤트 핸들러` 내부에서 `event.preventDefault()` 또는 `event.stopPropagation()`를 호출하는 것은 매우 보편적인 일입니다. 메소드 내에서 쉽게 이 작업을 할 수 있지만, DOM 이벤트 세부 사항을 처리하는 대신 `데이터 로직`에 대한 메소드만 사용할 수 있으면 더 좋을 것입니다. 이 문제를 해결하기 위해, Vue는 v-on 이벤트에 `이벤트 수식어`를 제공합니다. 수식어는 점으로 표시된 접미사입니다.

 - stop : 전파 중단
 - prevent : preventDefault
 - capture : 이벤트 캡처
 - self : 해당 엘리먼트에서만
 - once : 한번만!
 - [passive](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

```HTML
<!-- 클릭 이벤트 전파가 중단됩니다. -->
<a v-on:click.stop="doThis"></a>

<!-- 제출 이벤트가 페이지를 다시 로드하지 않습니다. -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- 수식어는 체이닝 가능합니다. -->
<a v-on:click.stop.prevent="doThat"></a>

<!-- 단순히 수식어만 사용할 수 있습니다. -->
<form v-on:submit.prevent></form>

<!-- 이벤트 리스너를 추가할 때 캡처모드를 사용합니다. -->
<!-- 즉, 내부 엘리먼트를 대상으로 하는 이벤트가 해당 엘리먼트에서 처리되기 전에 여기서 처리합니다. -->
<div v-on:click.capture="doThis">...</div>

<!-- event.target이 엘리먼트 자체인 경우에만 트리거를 처리합니다. -->
<!-- 자식 엘리먼트에서는 안됩니다. -->
<div v-on:click.self="doThat">...</div>

<!-- 클릭 이벤트는 최대 한번만 트리거 됩니다. -->
<a v-on:click.once="doThis"></a>

<!-- 스크롤의 기본 이벤트를 취소할 수 없습니다. -->
<div v-on:scroll.passive="onScroll">...</div>
```

<br />

### 키 수식어

<hr />

키보드 이벤트를 청취할 때, 종종 공통 키 코드를 확인해야 합니다. Vue는 키 이벤트를 수신할 때 v-on에 대한 키 수식어를 추가할 수 있습니다.

```HTML
<!-- only call `vm.submit()` when the `key` is `Enter` -->
<input v-on:keyup.enter="submit">
```

 - enter
 - tab
 - delete("Delete"와 "Backspace" 키 모두 캡처)
 - esc
 - space
 - up, down, left, right

<br />

### 시스템 수식어 키 목록

다음 수식어를 사용해 해당 키가 눌러진 경우에만 마우스 또는 키보드 이벤트 리스너를 트리거 할 수 있습니다.

```HTML
<!-- Alt + C -->
<input @keyup.alt.67="clear">

<!-- Ctrl + Click -->
<div @click.ctrl="doSomethid">Do Something</div>
```

 - ctrl

 - alt

 - shift

 - meta

<br />

#### 시스템 수식어 키 목록 - .exact 수식어

.exact 수식어는 다른 시스템 수식어와 조합해 그 핸들러가 실행되기 위해 정확한 조합이 눌러야하는 것을 보여줍니다.

```HTML
<!-- Alt 또는 Shift와 함께 눌린 경우에도 실행됩니다. -->
<button @click.ctrl="onClick">A</button>

<!-- Ctrl 키만 눌려있을 때만 실행됩니다. -->
<button @click.ctrl.exact="onClick">A</button>

<!-- 아래 코드는 시스템 키가 눌리지 않은 상태인 경우에만 작동합니다. -->
<button @click.exact="onClick">A</button>
```

<br />

#### 시스템 수식어 키 목록 - 마우스 버튼 수식어

특정 마우스 버튼에 의해 트리거 된 이벤트로 핸들러를 제한합니다.

 - left : 왼쪽 클릭

 - right : 오른쪽 클릭

 - middle : 중간 클릭

<br />

### 시스템 수식어 키 목록 - 왜 HTML 로 된 리스너를 사용하나요??

모든 `뷰 핸들러 함수`와 표현식은 현재 뷰 처리 하는 `ViewModel`에 엄격히 바인딩 되기 때문에 유지보수가 보다 쉽습니다. 실제로 v-on을 사용하면 몇가지 이점이 있습니다.

 1. HTML 템플릿을 간단히 하여 JavaScript 코드 내에서 핸들러 함수 구현을 찾는 것이 더 쉽습니다.

 2. JavaScript에서 이벤트 리스너를 수동으로 연결할 필요가 없으므로 `ViewModel` 코드는 순수 로직과 DOM이 필요하지 않습니다. 이렇게 하면 테스트가 쉬워집니다.

 3. `ViewModel`이 파기되면 모든 이벤트 리스너가 자동으로 제거 됩니다. 이벤트 제거에 대한 걱정이 필요 없어집니다.


<br />

## 폼 입력 바인딩 

<hr />

### 기본 사용법

`v-model 디렉티브`를 사용하여 `폼 input`과 `textarea 엘리먼트`에 `양방향 데이터 바인딩`을 생성할 수 있습니다. 입력 유형에 따라 엘리먼트를 업데이트 하는 올바른 방법을 자동으로 선택합니다. 약간 이상하지만 v-model은 기본적으로 사용자 입력 이벤트에 대한 데이터를 업데이트 하는 `syntax sugar`이며 일부 경우에 특별한 주의를 해야합니다.

> `v-model`은 모든 form 엘리먼트의 초기 `value`와 `checked` 그리고 `selected` 속성을 무시합니다. 항상 Vue 인스턴스 데이터를 원본 소스로 취급합니다. 컴포넌트의 `data` 옵션 안에 있는 Javascript에서 초기값을 선언해야합니다. 

`v-model`은 내부적으로 서로 다른 속성을 사용하고 `서로 다른 입력 요소에 대해 서로 다른 이벤트`를 전송합니다.

- text와 textarea태그는 value속성과 input 이벤트를 사용합니다.
- 체크박스와 라디오 버튼은 checked 속성과 change 이벤트를 사용합니다.
- select 태그는 value를 prop으로, change를 이벤트로 사용합니다.

#### 기본 사용법 - 문자열

```Javascript
<input v-model="message" placeholder="여기를 수정해보세요">
<p>메시지: {{ message }}</p>
```

![image](https://user-images.githubusercontent.com/63120360/226627169-352198e2-f2c6-400d-b3f5-ad9748e5718a.png)

<br />

#### 기본 사용법 - 여러 줄을 가진 문장

```Javascript
<span>여러 줄을 가지는 메시지: </span>
<p style="white-space: pre-line">{{ message }}</p>
<br />

<textarea v-model.trim="message" placeholder="여러줄을 입력하세요."></textarea>
```

![image](https://user-images.githubusercontent.com/63120360/226627301-a4db6df1-a95b-45bd-8490-5d7bb1ce19eb.png)

> 텍스트 영역의 보간 (`<textarea>{{text}}</textarea>`)은 작동하지 않습니다. 대신 `v-model`를 사용하십시오.

<br />

#### 기본 사용법 - 체크박스

하나의 체크박스는 단일 boolean 값을 가집니다.

```JavaScript
<input type="checkbox" id="checkbox" v-model="checkced">
<label for="checkbox">{{ checked }}</label>
```

<br />

여러개의 체크박스는 같은 배열을 바인딩 할 수 있습니다.

```JavaScript
<div id="example-3">
    <input type="checkbox" id="jack" value="jack" v-model="checkNames">
    <input type="checkbox" id="John" value="John" v-model="checkNames">
    <input type="checkbox" id="mike" value="mike" v-model="checkNames">
    <input type="checkbox" id="nikol" value="nikol" v-model="checkNames">
    <br />
    <span>체크한 이름: {{ checkNames }}</span>
</div>
```

![image](https://user-images.githubusercontent.com/63120360/226635652-8d9fd5c8-9f5e-4c98-bf39-d2ff05c4e65e.png)

<br />

#### 기본 사용법 - 라디오

```Javascript
<div id="example-4">
    <input type="radio" id="one" value="One" v-model="picked">
    <label for="one">One</label>
    <input type="radio" id="two" value="Two" v-model="picked">
    <label for="two">Two</label>
    <br />
    <span>선택: {{ picked }}</span>
</div>
```

<br />

#### 기본 사용법 - 셀렉트

```Javascript
<div id="example-5">
    <select v-model="selected">
        <option disabled value="">Please select one</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
    </select>
    <span>선택: {{ selected }}</span>
</div>
```

<br />

#### 기본 사용법 - 다중 셀렉트

```Javascript
<div id="example-5">
    <select v-model="selected">
        <option disabled value="">Please select one</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
    </select>
    <span>선택: {{ selected }}</span>
</div>
```

<br />

#### 기본 사용법 - 셀렉트

```Javascript
<div id="example-5">
    <select v-model="selected">
        <option v-for="option in options" v-bind:value="option.value">
            {{option.text}}
        </option>
    </select>
    <span>선택: {{ selected }}</span>
</div>

new Vue({
    data : {
        selected: 'A',
        options: [
            {text: 'One', value: 'A'},
            {text: 'Two', value: 'B'},
            {text: 'Three', value: 'C'},
        ]
    }
})
```

<br />

### 폼 바인딩 하기

라이도, 체크박스 및 셀렉트 옵션의 경우, `v-model 바인딩 값`은 보통 정적인 문자열(또는 체크박스의 boolean) 입니다.

```HTML
<!-- `picked`는 선택시 문자열 "a" -->
<input type="radio" v-model="picked" value="a">

<!-- `toggle`는 선택시 true 또는 false -->
<input type="checkbox" v-model="toggle">

<!-- `selected`는 "ABC" 선택시 문자열 "abc" -->
<select v-model="selected">
    <option value="abc">ABC</option>
</select>
```

<br />

#### 값 바인딩 하기 - 체크 박스

```HTML
<input  type = "checkbox"
        v-model="toggle"
        true-value="yes"
        false-value="no">

<!-- 체크된 경우 -->
vm.toggle === 'yes'

<!-- 체크되지 않은 경우 -->
vm.toggle === 'no'
```

<br />

#### 값 바인딩 하기 - 라디오

```HTML
<input type="radio" v-model="pick" v-bind:value="a">

<!-- 체크 하면 -->
vm.pick === vm.a
```

<br />

#### 값 바인딩 하기 - 셀렉트 옵션

```HTML
<select v-model="selected">
    <!-- inline object literal -->
    <option v-bind:value="{ number : 123 }">123</option>
</select>

<!-- 선택하면 -->
typeof vm.selected -> 'object'
vm.selected.number -> 123
```

> `true-value`와 `false-value` 속성은 폼 전송시 체크되지 않은 박스를 포함하기 않기 때문에 입력의 `value` 속성에 영향을 미치지 않습니다. 두 값 중 하나가 폼을 통해 전송 되려면 (예: `예` 또는 `아니오`) 라디오를 대신 사용하십시오.

<br />

### 수식어 .lazy

기본적으로 v-model 은 각 입력 이벤트 후 입력과 데이터를 동기화 합니다. .lazy 수식어를 추가하여 change 이벤트 이후에 동기화 할 수 있습니다.

```HTML
<!-- "input" 대신 "change" 이후에 동기화 됩니다. -->
<input v-model.lazy="msg">
```

<br />

### 수식어 .trim

v-model이 관리하는 input을 자동으로 trim 하기 원하는, trim 수정자를 추가하면 됩니다.

```HTML
<input v-model.trim="msg">
```

<br />

### 수식어 .number

사용자 입력이 자동으로 숫자로 형변환 되기를 원하면, v-model이 관리하는 input에 number 수식어를 추가하면 됩니다.

```HTML
<input v-model.number="age" type="number">
```

<br />

## 컴포넌트

### 컴포넌트는 무엇인가?

컴포넌트는 Vue의 가장 강력한 기능 중 하나입니다. 기본 HTML 엘리먼트를 확장하여 `재사용 가능한 코드를 캡슐화`하는 데 도움이 됩니다. 경우에 따라 특별한 is 속성으로 확장 된 원시 HTML 엘리먼트로 나타날 수도 있습니다.

Vue 컴포넌트는 Vue 인스턴스이기도 합니다. 그러므로 모든 옵션 객체를 사용할 수 있습니다. (루트에만 사용하는 옵션은 제외) 그리고 같은 라이프사이클 훅을 사용할 수 있습니다.

![image](https://user-images.githubusercontent.com/63120360/226651310-30991ee5-2c5a-443a-a557-54e9b0642f62.png)

<br />

### 컴포넌트 사용하기 - 전역 등록

```Javascript
new Vue({
    el: '#some-element',
    // 옵션
})

Vue.component('my-component', {
    // 옵션
})
```

일단 등록되면, 컴포넌트는 `인스턴스의 템플릿`에서 커스텀 `엘리먼트(<my-component></my-component>)`로 사용할 수 있습니다. 루트 Vue 인스턴스를 인스턴스화하기 전에 컴포넌트가 등록되어 있는지 확인하세요.

```HTML
<div id="example">
    <my-component></my-component>
</div>
```

```Javascript
// 등록
Vue.component('my-component', {
    template: '<div>사용자 정의 컴포넌트</div>'
})

// 루트 인스턴스 생성
new Vue({
    el: '#example'
})
```

```HTML
<div id="example">
    <div>사용자 정의 컴포넌트</div>
</div>
```

<br />

### 컴포넌트 사용하기 - 지역 등록

모든 컴포넌트를 전역으로 등록 할 필요는 없습니다. 컴포넌트를 `components 인스턴스 옵션으로` 등록함으로써 다른 인스턴스/컴포넌트의 범위에서만 사용할 수 있는 컴포넌트를 만들 수 있습니다.

동일한 캡슐화는 디렉티브와 같은 다른 등록 가능한 Vue 기능에도 적용됩니다.

```Javascript
var Child = {
    template: '<div>사용자 정의 컴포넌트</div>'
}

new Vue({
    // ...
    components: {
        // <my-component> 는 상위 템플릿에서만 사용할 수 있습니다.
        'my-component': Child
    }
})
```

<br />

### 컴포넌트 사용하기 - DOM 템플릿 구문 분석 경고

DOM을 템플릿으로 사용할 때, Vue는 템플릿 콘텐츠만 가져올 수 있기 때문에 HTML이 작동하는 방식에 고유한 몇 가지 제한 사항이 적용됩니다. `<ul>, <ol>, <table>과 <select>`와 같은 일부 엘리먼트는 그 안에 어떤 엘리먼트가 나타날 수 있는지에 대한 제한을 가지고 있으며, `<option>`과 같은 특정 다른 엘리먼트 안에만 나타날 수 있습니다.

 - 엘리먼트

```HTML
<table>
    <my-row>...</my-row>
</table>
```

<br />

 - 이슈 벗어나기

```HTML
<table>
    <tr is="my-row"></tr>
</table>
```

<br />

다음 소스 중 하나에 포함되면 문자열 템플릿을 사용하는 경우에는 이러한 제한 사항이 적용되지 않습니다.

 - `<script type="text/x-template">`

 - Javascript 인라인 템플릿 문자열

 - `.vue 컴포넌트(추천)`

<br />

### 컴포넌트 사용하기 - data 는 반드시 함수!

`Vue 생성자`에 사용할 수 있는 대부분의 옵션은 컴포넌트에서 사용할 수 있습니다. 한가지 지켜야할 점 중 하나, `data는 함수`여야 합니다.

 - 이슈 발생 (콘솔 경고)

```Javascript
Vue.component('my-component', {
    template: '<span>{{ message }}</span>',
    data: {
        message: 'hello'
    }
})
```

- 이슈 벗어나기 1번째 시도

    세 개의 컴포넌트 인스턴스가 모두 같은 data 객체를 공유하므로 하나의 카운터를 증가 시키면 모두 증가한다.

```HTML
<div id="example-2">
    <simple-counter></simple-counter>
    <simple-counter></simple-counter>
    <simple-counter></simple-counter>
</div>
```

```Javascript
var data = { counter: 0 }

Vue.component('simple-counter', {
    template: '<button v-on:click="counter += 1">{{ counter }}</button>',
    // 데이터는 기술적으로 함수이므로 Vue는 따지지 않지만
    // 각 컴포넌트 인스턴스에 대해 같은 객체 참조를 반환합니다.

    data: function() {
        return data
    }
})

new Vue({
    el: '#example-2'
})
```

### 컴포넌트 사용하기 - 컴포넌트 작성

컴포넌트는 `부모-자식 관계`에서 가장 일반적으로 `함께 사용`하기 위한 것입니다. 컴포넌트는 A는 자체 템플릿에서 컴포넌트 B를 사용할 수 있습니다. 그들은 필연적으로 서로 의사 소통이 필요합니다. 부모는 자식에게 데이터를 전달해야 할 수도 있으며, 자식은 자신에게 일어난 일은 부모에게 알릴 필요가 있습니다. 그러나 부모와 자식이 명확하게 정의된 인터페이스를 통해 가능한 분리된 상태로 유지하는 것도 매우 중요합니다. 이렇게 하면 각 컴포넌트의 코드를 `상대적으로 격리 할 수 있도록 작성`하고 추론할 수 있으므로 `유지 관리가 쉽고` 잠재적으로 쉽게 재사용 할 수 있습니다.

![image](https://user-images.githubusercontent.com/63120360/226656900-1545dcd6-a2e9-401c-8c94-1d60c5de30f6.png)

Vue.js에서 `부모 자식 컴포넌트 관계`는 props는 아래로, events 위로 라고 요약할 수 있습니다. 부모는 `props`를 통해 자식에게 데이터를 전달하고 자식은 events 를 통해 부모에게 메시지를 보냅니다.


<br />

### Props - Props 로 데이터 전달하기

모든 컴포넌트 인스턴스에는 `자체 격리 된 범위`가 있습니다. 즉, 하위 컴포넌트의 템플릿에서 상위 데이터를 직접 참조 할 수 없습니다. 부모 컴포넌트는 props 옵션을 사용하여 데이터를 하위 컴포넌트로 전달할 수 있습니다. 하위 컴포넌트는 props 옵션을 사용하여 수신 할 것으로 기대되는 props를 명시적으로 선언해야 합니다.

```Javascript
Vue.component('child', {
    // props 정의
    props: ['message'],
    // 데이터와 마찬가지로 prop은 템플릿 내부에서 사용할 수 있으며 vm의 this.message로 사용할 수 있습니다.
    template: '<span>{{ message }}</span>'
})
```

```HTML
<child message="안녕하세요!"></child>
```

<br />

### Props - camelCase vs kebab-case

HTML 속성은 대소 문자를 구분하지 않으므로 문자열이 아닌 템플릿을 사용할 떄 `camelCased prop` 이름에 해당하는 `kebab-case`를 사용해야 합니다.

```Javascript
Vue.component({
    // Javascript는 camelCase
    props: ['myMessage'],
    template: '<span>{{ myMessage }}</span>'
})
```

```HTML
<!-- HTML는 kebab-case -->
<child message="안녕하세요!"></child>
```

<br />

### Props - 동적 props

정규 속성을 표현식에 바인딩하는 것과 비슷하게, v-bind를 사용하여 부모의 데이터에 props를 동적으로 바인딩 할 수 있습니다. 데이터가 상위에서 업데이트 될때마다 하위 데이터로도 전달됩니다.

![image](https://user-images.githubusercontent.com/63120360/226670840-b12de6af-c8b1-4da9-9869-197b92002616.png)


```HTML
<div>
    <input v-model="parentMsg">
    <br />
    <child v-bind:my-message="parentMsg"></child>
</div>
```

```HTML
<child :my-message="parentMsg"></child>
```

객체의 모든 속성을 props로 전달하려면, 인자없이 v-bind를 쓸 수 있습니다.(v-bind:prop-name 대신 v-bind)

```Javascript
todo: {
    text: 'Learn Vue',
    isComplete: false
}
```

```HTML
<todo-item
    v-bind:text="todo.text"
    v-bind:is-complete="todo.isComplete">
</todo-item>
```

<br />

### Props - 리터럴 vs 동적

리터럴 구문을 사용하여 숫자를 전달하려고 시도하는 실수를 많이 한다.

```HTML
<!-- 일반 문자열 "1"을 전달합니다. -->
<comp some-prop="1"></comp>
```

`리터럴 prop`이기 떄문에 그 값은 실제 숫자가 아닌 일반 문자열 "1"로 전달됩니다. 실제 Javascript 숫자를 전달하려면 값이 Javascript 표현식으로 평가되도록 `v-bind를 사용`해야합니다.

```HTML
<!-- 일반 실제 숫자로 전달합니다. -->
<comp v-bind:some-prop="1"></comp>
```

<br />

### Props - 단방향 데이터 흐름

모든 Props는 하위 속성과 상위 속성 사이의 `단방향 바인딩`을 형성합니다. `상위 속성이 업데이트 되면 하위로 흐르게 되지만 그 반대는 안됩니다.` 

> 하위 컴포넌트가 실수로 부모의 상태를 변경하여 앱의 데이터 흐름을 추론하기 더 어렵게 만드는 것을 방지할 수 있음.

일반적으로 prop을 변경시키고 유혹을 불러 일으킬 수 있는 두 가지 경우가 있습니다. 이 prop는 초기 값을 전달하는데만 사용되며 하위 컴포넌트는 이후에 이를 `로컬 데이터 속성`으로 사용하기만 합니다.

1. prop의 초기 값을 초기 값으로 사용하는 로컬 데이터 속성을 정의

```Javascript
props: ['initialCounter'],
data: function() {
    return { counter : this.initialCounter }
}
```

2. prop 값으로 부터 계산된 속성을 정의

```Javascript
props: ['size'],
computed: {
    return this.size.trim().toLowerCase90
}
```

> 자바 스크립트의 객체와 배열은 참조로 전달되므로 prop 가 배열이나 객체인 경우 하위 객체 또는 배열 자체를 부모 상태로 변경하면 부모 상태에 **영향을 줍니다**

<br />

### Props - 검증

컴포넌트가 받는 중인 `prop에 대한 요구사항`을 지정할 수 있습니다. 요구사항이 충족되지 않으면 Vue에서 경고를 내보냅니다. 이 기능은 다른 사용자가 사용할 컴포넌트를 제작할 때 특히 유용합니다.

props를 문자열 배열로 정의하는 대신 `유효성 검사 요구사항`이 있는 **객체**를 사용할 수 있습니다.

- Type : String, Number, Function, Object, Array, Symbol

```Javascript
Vue.component('example', {
    props: {
        // 기본 타입 확인 (`null`은 어떤 타입이든 가능하다는 뜻입니다.)
        propA: Number,
        // 여러개의 가능한 타입
        propB: [String, Number],
        // 문자열이며 필수
        propC: {
            type: String,
            required: true
        },
        // 숫자이며 기본 값을 가짐
        propD: {
            type: Number,
            default: 100
        },
        // 객체/배열의 기본값은 팩토리 함수에서 반환 되어야 합니다.
        propE: {
            type: Object,
            default: function() {
                return { message: 'hello' }
            }
        },
        // 사용자 정의 유효성 검사 가능
        propF: {
            validator: function(value) {
                return value > 10
            }
        }
    }
})
```

> props는 컴포넌트 인스턴스가 생성되기 전에 검증되기 때문에 default 또는 validator 함수 내에서 data, computed 또는 methods와 같은 인스턴스 속성을 사용할 수 없습니다.


<br />

### Props가 아닌 속성

Props가 아닌 속성은 컴포넌트로 전달되지만 해당 props는 정의되지 않은 속성입니다.

명시적으로 정의된 props는 하위 컴포넌트에 정보를 전달하는데 적절하지만 `컴포넌트 라이브러리를 만드는 경우 컴포넌트가 사용될 수 있는 상황을 항상 예측할 수는 없습니다.` 이것이 컴포넌트가 컴포넌트의 루트 요소에 추가되는 `임의의 속성을 허용`해야하는 이유입니다.

예를 들어, 우리가 input에 `data-3d-date-picker` 속성을 요구하는 부트스트랩 플러그인으로 써드 파티 bs-date-input 컴포넌트를 사용하고 있다고 상상해보자. 이 속성을 컴포넌트 인스턴스에 추가할 수 있습니다. 그리고 data-3d-date-picker="true" 속성은 bs-date-input의 루트 엘리먼트에 자동으로 추가 될 것입니다.

```HTML
<bs-date-input data-3d-date-picker="ture"></bs-date-input>
```

<br />

#### Props가 아닌 속성 - 존재하는 속성 교체/병합

```HTML
<input type="data" class="form-control">
```

데이트피커 플러그인의 테마를 추가하려면 다음과 같이 특정 클래스를 추가해야 할 수도 있습니다.

```HTML
<bs-date-input data-3d-date-picker="ture" class="date-picker-theme-dark"></bs-date-input>
```

이 경우 class에 대한 두 개의 서로 다른 값이 정의됩니다. 

 - 템플릿의 컴포넌트에 의해 설정된 `form-control`

 - `date-picker-theme-dark`는 부모에 의해 컴포넌트로 전달됩니다.

대부분의 속성의 경우 컴포넌트에 제공된 값은 컴포넌트에서 `설정된 값을 대체`합니다. 예를 들어 type="large"가 전달되면 type="date"를 대체할 것이고 아마도 망가뜨릴 것입니다. 다행스럽게도 `class`와 `style`속성은 똑똑하기 때문에 두 값이 합쳐져서 최종 값인 "form-control date-picker-theme dark" 를 만듭니다.

<br />

#### Props가 아닌 속성 - v-on을 이용한 사용자 지정 이벤트

모든 Vue 인스턴스는 다음과 같은 이벤트 인터페이스를 구현합니다.

 - `$on(eventName)`을 사용하여 이벤트를 감지

 부모 컴포넌트는 자식 컴포넌트가 사용되는 템플릿에서 직접 `v-on`을 사용하여 **자식 컴포넌트에게 보내진 이벤트를 청취**할 수 있습니다.

 - `$emit(eventName)`을 사용하여 이벤트를 트리거

```HTML
<div id="counter-event-example">
    <p>{{ total }}</p>
    <button-counter v-on:increment="incrementTotal"></button-counter>
    <button-counter v-on:increment="incrementTotal"></button-counter>
</div>

<script>
Vue.compoent('button-counter', {
    template: '<button v-on:click="incrementCounter">{{ counter }}</button>',
    date: function() {
        return {
            counter: 0
        }
    },
    methods: {
        incrementCounter: function() {
            this.counter += 1
            this.$emit('increment')
        }
    },
})

new Vue({
    el: '#counter-event-example',
    data: {
        total: 0
    },
    methods: {
        incrementTotal: function() {
            this.total += 1
        }
    }
})
</script>
```

<br />

#### Props가 아닌 속성 - .sync

일부 경우에 속성에 **양방향 바인딩**이 필요할 수 있습니다. 자식 컴포넌트가 .sync를 가지는 속성을 변경하면 값의 변경이 부모에 반영됩니다. 편리하지만 단방향 데이터 흐름이 아니기 때문에 장기적으로 유지보수에 문제가 생깁니다. 자식 속성을 변경하는 코드는 부모의 상태에 영향을 미칩니다.

- 부모 컴포넌트

    ````HTML
    <!-- .sync를 이용한 방법 -->
    <comp :foo.sync="bar"></comp>
    <!-- .snyc를 이용하지 않은 방법 -->
    <comp :foo="bar" @update:foo="val => bar = val"></comp>
    ````

- 자식 컴포넌트

    하위 컴포넌트가 foo를 갱신하려면 속성을 변경하는 대신 명시적으로 `이벤트(emit)`을 보내야합니다.

    ```Javascript
    this.$emit('update:foo', newValue)
    ```
<br />

#### Props가 아닌 속성 - 사용자 정의 이벤트를 사용하여 폼 입력 컴포넌트 만들기

사용자 정의 이벤트는 v-model에서 작동하는 사용자 정의 입력을 만드는데도 사용할 수 있습니다.

```HTML
<input v-model="something">
```

```HTML
<input v-bind:value="something"
       v-ond:input="something = $event.targer.value">
```

```HTML
<custom-input :value="something"
              @input="value ==> {something = value}">
</custom-input>
```

따라서 v-model을 사용하는 컴포넌트는 value prop을 가지며, 새로운 값으로 input 이벤트를 내보냅니다.

<br />

#### Props가 아닌 속성 - 컴포넌트의 v-model 사용자 정의

컴포넌트의 v-model은 value를 보조 변수로 사용하고 input을 이벤트로 사용하지만 체크 박스와 라디오 버튼과 같은 일부 입력 타입은 다른 목적으로 value 속성을 사용할 수 있습니다. model 옵션을 사용하면 다음 경우에 충돌을 피할 수 있습니다.

```javascript
Vue.component('my-checkbox', {
    model: {
        prop: 'checked',
        event: 'change'
    },
    props: {
        // 다른 목적을 위해 'value' prop을 사용할 수 있습니다.
        checked: Boolean,
        value: String
    }
})
```

```HTML
<my-checkbox v-model="foo" value="some value"></my-checkbox>

<!-- 동일한 코드 -->
<my-checkbox    
        :checked="foo"
        @change="val => {foo = val}"
        value="some value">
</my-checkbox>
```

<br />

#### Props가 아닌 속성 :  비부모 - 자식간 통신

두 컴포넌트가 서로 통신할 필요가 있지만 서로 부모/자식이 아닌 경우가 있다. 간단한 시나리오에서는 비어있는 Vue 인스턴스를 `중앙 이벤트 버스`로 사용할 수 있습니다.

```Javascript
var bus = new Vue()

// 컴포넌트 A의 메소드
bus.$emit('id-selected', 1)

// 컴포넌트 B의 created 훅
bus.$on('id-selected', function(id) {
    // ...
})
```

### 슬롯을 사용한 컨텐츠 배포

컴포넌트를 사용할 때 다음과 같이 컴포넌트를 구성하는 것이 좋습니다.

```HTML
<app>
    <app-header></app-header>
    <app-footer></app-footer>
</app>
```

주목해야할 두가지 사항이 있습니다.

1. `<app>` 컴포넌트는 어떤 컨텐츠를 받을지 모릅니다. 그것은 `<app>`이 사용하는 컴포넌트에 의해 결정됩니다.
2. `<app>` 컴포넌트에는 자체 템플릿이 있을 가능성이 큽니다.

위 구성으로 작동하도록 하려면 `부모 "content"`와 `컴포넌트의 자체 템플릿`을 섞는 방법이 필요합니다. Vue.js는 `컨텐츠 배포 프로세스`를 위해 `<slot> 엘리먼트`를 사용합니다.

<br />

#### 슬롯을 사용한 컨텐츠 배포 - 범위 컴파일

API를 파헤치기 전에 먼저 내용이 `컴파일되는 범위`를 명확히 해야합니다. 다음과 같은 템플릿이 있다고 상상해보겠습니다.

message가 부모 데이터 또는 자식 데이터 중 어디에 바인딩되어야 할까요? 정답은 `부모 컴포넌트`

```HTML
<child-component>
    {{ message }}
</child-component>
```

> 상위 템플릿의 모든 내용은 상위 범위로 컴파일됩니다. 하위 템플릿의 모든 내용은 하위 범위에서 컴파일됩니다.

**실수 케이스** - 일반적인 실수는 부모 템플릿의 하위 속성/메소드에 디렉티브를 바인딩하려고 하는 것입니다.

```HTML
<!-- 작동하지 않습니다. -->
<child-component v-show="someChildProperty"></child-component>
```

```Javascript
Vue.component('child-component', {
    // 이제 작동합니다. 올바른 위칭에 놓여 있습니다.
    template: '<div v-show="someChildProperty">Child</div>',
    data: function() {
        return {
            someChildProperty: true
        }
    }
})
```

`someChildProperty`는 자식 컴포넌트의 속성이라고 가정하면, 왼쪽의 예제는 작동하지 않을 것입니다. 상위 템플릿은 하위 컴포넌트의 상태를 인식하지 못합니다. 컴포넌트 루트 노드에서 하위 범위 디렉티브를 바인딩 해야하는 경우 하위 컴포넌트의 자체 템플릿에서 하위 범위 디렉티브를 바인딩해야합니다.

<br />

#### 슬롯을 사용한 컨텐츠 배포 - 단일 슬롯

하위 컴포넌트 템플릿에 최소한 하나의 `<slot> 콘텐츠`가 포함되어 있지 않으면 부모 콘텐츠가 삭제됩니다 .속성이 없는 슬롯이 하나뿐인 경우 전체 내용 조각이 DOM의 해당 위치에 삽입되어 슬롯 자체를 대체합니다.

원래 `<slot>`태그 안에 있는 내용은 대체 콘텐츠로 간주됩니다. 대체 콘텐츠는 하위 범위에서 컴파일되며 호스팅 엘리먼트가 비어 있고 삽입할 콘텐츠가 없는 경우에만 표시됩니다.

```HTML
<div>
    <h2>나는 자식 컴포넌트의 제목</h2>
    <slot>
        제공된 콘텐츠가 없는 경우에만 보실 수 있습니다.
    </slot>
</div>
```

```HTML
<div>
    <h1>나는 부모 컴포넌트의 제목</h1>
    <my-component>
        <p>이것은 원본 컨텐츠</p>
        <p>이것은 원본 중 추가 컨텐츠</p>
    </my-component>
</div>
```

```HTML
<!-- 통합 -->
<div>
    <h1>나는 부모 컴포넌트의 제목</h1>
    <div>
        <h2>나는 자식 컴포넌트의 제목</h2>
        <p>이것은 원본 컨텐츠</p>
        <p>이것은 원본 중 추가 컨텐츠</p>
    </div>
</div>
```

<br />

#### 슬롯을 사용한 컨텐츠 배포 - 이름을 가지는 슬롯

`<slot> 엘리먼트`는 **특별한 속성**인 `name`을 가지고 있습니다. 이 속성은 어떻게 내용을 배포해야 하는지를 더 커스터마이징하는 데 사용할 수 있습니다. 이름이 다른 슬롯이 여러 개 있을 수 있습니다. `이름을 가진 슬롯`을 내용 조각에 해당 slot 속성이 있는 모든 엘리먼트와 일치합니다.

명명되지 않은 슬롯이 하나 있을 수 있습니다. 기본 슬롯은 일치하지 않는 콘텐츠의 포괄적인 컨텐츠 역할을 합니다. 기본 슬롯이 없으면 일치하지 않는 콘텐츠가 삭제됩니다.

```HTML
<div class="container">
    <header>
        <slot name="header"></slot>
    </header>
    <main>
        <slot></slot>
    </main>
    <footer>
        <slot name="footer"></slot>
    </footer>
</div>
```

```HTML
<app-layout>
    <h1 slot="header">여기에 페이지 제목이 위치합니다.</h1>
    <p>메인 컨텐츠의 단락입니다.</p>
    <p>하나 더 있습니다.</p>
    <p slot="footer">여기에 연락처 정보입니다.</p>
</app-layout>
```

```HTML
<div class="container">
    <header>
        <h1>여기에 페이지 제목이 위치합니다.</h1>
    </header>

    <main>
        <p>메인 컨텐츠의 단락입니다.</p>
        <p>하나 더 있습니다.</p>
    </main>
    <footer>
        <p>여기에 연락처 정보입니다.</p>
    </footer>
</div>
```

<br />

#### 슬롯을 사용한 컨텐츠 배포 - 범위를 가지는 슬롯

`범위가 지정된 슬롯`은 이미 렌더링 된 엘리먼트 대신 `재사용 가능한 템플릿`(데이터를 전달할 수 있음)으로 작동하는 특별한 유형의 슬롯입니다. prop은 컴포넌트에게 전달하는 것처럼, 하위 컴포넌트에서 단순히 데이터를 슬롯에 전달하면 됩니다. Boostrap과 같은 라이브러리를 사용하다 보면 많이 마주칠 수 있는 예시입니다.

```HTML
<div class="child">
    <slot text="hello from child"></slot>
</div>
```

```HTML
<div class="parent">
    <child>
        <template slot-scope="props">
            <span>hello from parent</span>
            <span>{{ props.text }}</span>
        </template>
    </child>
</div>
```

```HTML
<div class="parent">
    <div class="child">
        <span>hello from parent</span>
        <span>hello from child</span>
    </div>
</div>
```

```HTML
<my-awesome-lit :items="items">
    <!-- scoped slot 역시 이름을 가질 수 있습니다. -->
    <li
        slot="item"
        slot-scope="props"
        class="my-fancy-item">
        {{ props.text }}
    </li>
</my-awesome-lit>
```

```HTML
<ul>
    <slot 
        name="item"
        v-for="item in items"
        :text="item.text">
    </slot>
</ul>
```

#### Destructuring

slot-scope 값은 실제로 함수 서명의 인수 위치에 나타날 수 있는 유효한 JavaScript 표현식입니다.

```HTML
<child>
    <span slot-scope="{text}">{{text}}</span>
</child>
```

<br />

### 동적 컴포넌트

같은 마운트 포인트를 사용하고 예약된 `<component> 엘리먼트`를 사용하여 **여러 컴포넌트 간에 동적으로 트랜지션**하고 `is 속성`에 **동적으로 바인드**  할 수 있습니다. 


```JS
var vm = new Vue({
    el: '#example',
    data: {
        currentView: 'home'
    },
    components: {
        home: { /* ... */},
        posts: { /* ... */},
        archive: { /* ... */},
    }
})
```

```JS
var Home = {
    template: '<p>Welcome home!</p>'
}

var vm = new Vue({
    el: '#example',
    data: {
        currentView: Home
    }
})
```

```HTML
<component v-bind:is="currentView">
    <!-- vm.currentView가 변경되면 컴포넌트가 변경됩니다. -->
</component>
```

<br />

#### 동적 컴포넌트 - keep-alive

트랜지션된 컴포넌트를 메모리에 유지(캐싱)하여 상태를 보존하거나 다시 렌더링하지 않도록 하려면 동적 컴포넌트를 `<keep-alive>` 엘리먼트에 래핑 할 수 있습니다.

```HTML
<keep-alive>
    <component :is="currentView">
        <!-- 비활성화된 컴포넌트는 캐시됩니다. -->
    </component>
</keep-alive>
```


적용 전

![image](https://user-images.githubusercontent.com/22147400/227699334-dcb1acd5-3bd4-4a70-847d-bdfcddb9bfe2.png)

<br />

적용 후

![image](https://user-images.githubusercontent.com/22147400/227699464-e3f5b3bc-1bdb-4af2-b194-d9bf5c4276fc.png)


<br />

### 기타

#### 기타 - 재사용 가능한 컴포넌트 제작하기

컴포넌트를 작성할 때 나중에 다른 곳에서 다시 사용할 것인지에 대한 여부를 명심하는 것이 좋습니다. 일회용 컴포넌트가 단단히 결합되어도 상관 없지만 재사용 가능한 컴포넌트는 깨끗한 공용 인터페이스를 정의 해야하며 사용된 컨텍스트에 대한 가정을 하지 않아야 합니다. Vue 컴포넌트의 API는 props, 이벤트 및 슬롯의 세 부분으로 나뉩니다.

 - `Props` 는 외부 환경이 데이터를 컴포넌트로 전달하도록 허용합니다.
 - `이벤트` 를 통해 컴포넌트가 외부 환경에서 사이드이펙트를 발생할 수 있도록 합니다.
 - `슬롯` 을 사용하면 외부 환경에서 추가 컨텐츠가 포함된 컴포넌트를 작성할 수 있습니다.

 ```HTML
 <my-component
    :foo="baz"
    :bar="qux"
    @event-a="doThis"
    @event-b="doThat">
    <img slot="icon" src="..." >
    <p slot="main-text">Hello!</p>
 </my-component>
 ```

 v-bind와 v-on을 위한 전용 약어문을 사용하여 의도를 명확하고 간결하게 템플릿에 전달할 수 있습니다.

 <br />

 #### 기타 - 자식 컴포넌트 참조

 props 나 이벤트가 있었음에도 불구하고 때때로 Javascript 로 하위 컴포넌트에 직접 액세스 해야 할 수 도 있습니다. 이를 위해 ref 를 이용하여 참조 컴포넌트 ID를 자식 컴포넌트에 할당해야 합니다.

 `ref`와 `v-for`와 함께 사용될 때, 얻을 수 있는 ref는 데이터 소스를 미러링하는 자식 컴포넌트를 포함하는 배열이 될 것입니다.

 ```HTML
 <div id="parent">
    <user-profile ref="profile"></user-profile>
 </div>
 ```

 ```JS
 var parent = new Vue({ el: '#parent'})
 // 자식 컴포넌트 인스턴스에 접근합니다.
 var child = parent.$refs.profile
 ```

<br />

 #### 기타 - 비동기 컴포넌트

 대규모 응용 프로그램에서는 응용 프로그램을 더 작은 덩어리로 나누고 실제로 필요할 때만 서버에서 컴포넌트를 로드해야 할 수도 있습니다. Vue를 사용하면 컴포넌트 정의를 비동기식으로 해결하는 팩토리 함수로 컴포넌트를 정의할 수 있습니다. Vue는 컴포넌트가 실제로 렌더링되어야 할 때만 팩토링 기능을 트리거하고 이후의 리렌더링을 위해 결과를 캐시합니다.

 팩토리 함수는 resolve 콜백을 받습니다. 이 콜백은 서버에서 컴포넌트 정의를 가져 왔을 때 호출되어야 합니다. 또한 reject (reason)을 호출하여 로드가 실패 했음을 알릴 수 있습니다. 여기서 setTimemout은 데모 용 입니다.

 ```JS
 Vue.component('async-example', function(resolve, reject) {
    setTimeout(function() {
        // 컴포넌트 정의를 resolve 콜백에 전달
        resolve({
            template: '<div>I am asnyc!</div>'
        }, 1000)
    })
 })
 ```

 ```JS
 Vue.component(
    'async-webpack-example',
    // 'import' 함수는 'Promise'를 반환합니다.
    () => import('./my-async-component')
 )

 new Vue({
    // ...
    components: {
        'my-component' : () => import('./my-async-component')
    }
 })
 ```

<br />

#### 기타 - 고급 비동기 컴포넌트

비동기 컴포넌트 팩토리는 다음 형태의 객체를 반환할 수 있습니다.

```JS
const AsyncComp = () => ({
    // 로드하는 컴포넌트입니다. 반드시 Promise이어야 합니다.
    component: import('./MyComp.vue'),
    // 비동기 컴포넌트가 로드되는 동안 사용할 컴포넌트
    loading: LoadingComp,
    // 실패했을 경우 사용하는 컴포넌트
    error: ErrorComp,
    // 로딩 컴포넌트를 보여주기전 지연하는 정도. 기본값: 200ms
    delay: 200,
    // 시간이 초과되면 에러용 컴포넌트가 표시됩니다.
    // 기본값: Infinity
    timeout: 3000
})
```

<br />

#### 기타 - 컴포넌트 이름 규약

컴포넌트 (또는 prop)를 등록할 때 kebab-case, camelCase 또는 PascalCase를 사용할 수 있습니다.

```JS
components: {
    // kebab-case를 사용한 등록
    'kebab-cased-component': { /* ... */ },
    // camelCase를 사용한 등록
    'camelCasedComponent': { /* ... */ },
    // PascalCase를 사용한 등록
    'PascalCasedComponent': { /* ... */ },
}
```

 - kebab-case
 - camelCase를 사용하여 컴포넌트가 정의된 경우 camelCase 또는 kebab-case
 - PascalCase를 사용하여 컴포넌트가 정의된 경우 kebab-case, camelCase or PascalCase

<br />

#### 기타 - 인라인 템플릿

하위 컴포넌트에 inline-template 이라는 특수한 속성이 존재할 때, 컴포넌트는 그 내용을 분산 된 내용으로 취급하지 않고 템플릿으로 사용합니다. 따라서 보다 유연한 템플릿 작성이 가능합니다.

그러나, inline-template 은 템플릿의 범위를 추론하기 더 어렵게 만듭니다. 가장 좋은 방법은 `template 옵션`을 사용하거나 `.vue`파일의 `template 엘리먼트`를 사용하여 컴포넌트 내부에 템플릿을 정의하는 것입니다.

```HTML
<my-component inline-template>
    <div>
        <p>이것은 컴포넌트의 자체 템플릿으로 컴파일됩니다.</p>
        <p>부모가 만들어낸 내용이 아닙니다.</p>
    </div>
</my-component>
```

<br />

#### 기타 - X Templates

템플리트를 정의하는 또 다른 방법은 `text/x-template` 유형의 스크립트 엘리먼트 내부에 ID로 템플릿을 참조하는 것입니다. 기능은 큰 템플릿이나 매우 작은 응용 프로그램의 데모에는 유용할 수 있지만 템플릿을 나머지 컴포넌트 정의와 분리하기 때문에 피해야합니다.

```HTML
<script type="text/x-template" id="hello-world-template">
    <p>Hello Hello Hello</p>
</script>
```

```JS
Vue.component('hello-world', {
    template: '#hello-world-template'
})
```

<br />

#### 기타 - v-once를 이용한 비용이 적게 드는 정적 컴포넌트

일반 HTML 엘리먼트를 렌더링하는 것은 Vue에서 매우 빠르지만 가끔 정적 콘텐츠가 많이 포함 된 컴포넌트가 있을 수 있습니다. 이런 경우, v-once 디렉티브를 루트 엘리먼트에 추가함으로써 `캐시가 한번만 실행되도록` 할 수 있습니다.

```JS
Vue.component('term-of-service', {
    template: `\
    <div v-once>
        <h1>Term of Service</h1>
        ... a lot of static content ... \
    </div>\
    `
})
```