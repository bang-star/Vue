# Part3

## 컴포넌트 등록

<hr />

### 컴포넌트 이름

컴포넌트를 등록할 때는 항상 이름을 지정해주어야 합니다.

```Javascript
Vue.component('my-component-name', {
    /* */
})
```

컴포넌트의 이름은 `Vue.component`의 첫번째 인자입니다.

컴포넌트에 부여한 이름은 그 컴포넌트를 어디에 쓸 지에 따라 다를 수 있습니다. 컴포넌트를 (스트링 템플릿이나 `싱글파일 컴포넌트`로 사용하지 않고) DOM에서 바로 사용할 때는 `W3C` 규칙에 따라서 사용자 정의 태그의 이름처럼 쓰는 것(모두 소문자로 쓰고 단어는 하이픈(-)으로 연결하는 것)을 추천합니다. 

W3C 규칙을 준수하면 앞으로 작성할 HTML 엘리먼트와 충돌하는 것을 피할 수 있습니다.

 - [W3C 규칙](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name)
 - [스타일 가이드](https://v2.ko.vuejs.org/v2/style-guide/#%EC%9A%B0%EC%84%A0%EC%88%9C%EC%9C%84-B-%EB%A7%A4%EC%9A%B0-%EC%B6%94%EC%B2%9C%ED%95%A8)

<br />

#### **컴포넌트 이름 - 이름 표기법**

컴포넌트 이름을 지을 때는 두 가지 방법이 있습니다.

 1. **kebab-case**
    
    kebab-case로 컴포넌트를 정의할 때는 사용자 정의 엘리먼트를 부를 때에도 `<my-component-name>`와 같이 반드시 kebabcase를 사용해야 합니다.

    ```JS
    Vue.component('my-component-name', { /* ... */})
    ```

 2. **PascalCase**

    PascalCase으로 컴포넌트를 정의할 때는 사용자 정의 엘리먼트를 부를 때 두 가지 표기법 모두 사용할 수 있습니다. 즉 `<my-component-name>`과 `<MyComponentName>` 모두 사용 가능합니다. 단, DOM에 바로 쓸 때는 kebab-case 이름만 가능합니다.

     ```JS
    Vue.component('MyComponentName', { /* ... */})
    ```

<br />

#### **스타일 가이드 01 - 컴포넌트 이름에 합성어 사용(필수)**

ROOT 컴포넌트인 App과 `<transition>`, `<component>` 등 Vue 에서 제공되는 빌트인 컴포넌트를 제외하고 컴포넌트의 이름은 항상 `합성어`를 사용해야한다.

모든 HTML 엘리먼트의 이름은 한 단어이기 때문에 합성어를 사용하는 것은 기존 그리고 향후 HTML 엘리먼트와의 충돌을 방지해줍니다.

![image](https://user-images.githubusercontent.com/63120360/227708945-4f2289b8-ef4f-48a7-b2f2-e06f890794f3.png)

- [스타일가이드](https://v2.ko.vuejs.org/v2/style-guide/#%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EC%9D%B4%EB%A6%84%EC%97%90-%ED%95%A9%EC%84%B1%EC%96%B4-%EC%82%AC%EC%9A%A9-%ED%95%84%EC%88%98)

<br />

#### **스타일 가이드 02 - 싱글 파일 컴포넌트 이름 규칙 지정(매우 추천)**

싱글 파일 컴포넌트의 파일 이름은 **PascalCase**이거나 **kebab-case**이어야 합니다.

PascalCase는 가능한 경우 JS(X) 및 템플릿의 구성 요소를 참조하는 방법과 일치하므로 코드 편집기의 자동 완성과 가장 잘 작동합니다. 그러나 대소문자를 혼합한 파일 이름은 경우에 따라 대소문자를 구분하지 않는 파일 시스템에서 문제를 일으킬 수 있으므로 kebab-case도 완벽하게 허용됩니다.

![image](https://user-images.githubusercontent.com/63120360/227709119-4025c631-1c1e-4159-a8c8-afa50d692e20.png)


 - [스타일가이드](https://v2.ko.vuejs.org/v2/style-guide/#%EC%8B%B1%EA%B8%80-%ED%8C%8C%EC%9D%BC-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EC%9D%B4%EB%A6%84-%EA%B7%9C%EC%B9%99-%EC%A7%80%EC%A0%95-casing-%EB%A7%A4%EC%9A%B0-%EC%B6%94%EC%B2%9C%ED%95%A8)

<br />

#### **스타일 가이드 03 - 베이스 컴포넌트 이름(매우 추천)**

앱별 스타일 및 규칙을 적용하는 기본 구성 요소는 모두 **Base**, **App** 또는 **V**와 같은 특정 접두사로 시작해야 합니다.

![image](https://user-images.githubusercontent.com/63120360/227709249-1f7c5ce0-b053-426b-9ab1-6f6a4556c28f.png)

- [스타일가이드](https://v2.ko.vuejs.org/v2/style-guide/#%EB%B2%A0%EC%9D%B4%EC%8A%A4-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EC%9D%B4%EB%A6%84-%EB%A7%A4%EC%9A%B0-%EC%B6%94%EC%B2%9C%ED%95%A8)

<br />

#### **스타일 가이드 04 - 강한 연관성을 가진 컴포넌트 이름(매우 추천)**

상위 구성 컴포넌트와 밀접하게 연결된 하위 구성 컴포넌트는 상위 구성 컴포넌트 이름을 접두사로 포함해야 합니다.

![image](https://user-images.githubusercontent.com/63120360/227709333-c3a1e0c7-6167-4453-9206-bd7403ba3443.png)

 - [스타일 가이드](https://v2.ko.vuejs.org/v2/style-guide/#%EA%B0%95%ED%95%9C-%EC%97%B0%EA%B4%80%EC%84%B1%EC%9D%84-%EA%B0%80%EC%A7%84-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EC%9D%B4%EB%A6%84-%EB%A7%A4%EC%9A%B0-%EC%B6%94%EC%B2%9C%ED%95%A8)

<br />

### 전역 등록

`Vue.component`를 이용하여 컴포넌트를 만들었는데 이런 컴포넌트를 `전역 등록`되었다고 합니다. 즉 어떤 루트 `Vue 인스턴스(new Vue)` 에서도 사용할 수 있습니다.

```JS
Vue.component('component-a', { /* ... */})
Vue.component('component-b', { /* ... */})
Vue.component('component-c', { /* ... */})

new Vue({el: '#app'})
```

이렇게 컴포넌트를 직접 설정하기도 하지만 싱글 파일 컴포넌트 형태로 저장 후, 불러와서 등록하기도 합니다.

```HTML
<div id="app">
    <component-a></component-a>
    <component-b></component-b>
    <component-c></component-c>
</div>
```

이렇게 등록한 컴포넌트들은 모든 하위 컴포넌트에도 사용 가능합니다. 즉 왼쪽의 3개의 컴포넌트들은 각각의 컴포넌트 안에서도 사용할 수 있습니다.

<br />

### 지역 등록

전역 등록이 좋은 것만은 아닙니다. 예를 들어 `Webpack`같은 빌드 시스템을 사용하고 모든 컴포넌트를 전역 등록했으며 설사 어떤 컴포넌트를 더 이상 사용하지 않더라도 최종 빌드에는 들어가 있게 됩니다. 사용자가 내려받아야 하는 자바스크립트의 양이 불필요하게 커지게 됩니다.

```JS
var ComponentA = { /* ... */ }
var ComponentB = { /* ... */ }
var ComponentC = { /* ... */ }
```

이 경우에 컴포넌트를 일반 자바스크립트 객체로 정의할 수 있습니다.

```JS
new Vue({
    el: '#app',
    components: {
        'component-a': ComponentA,
        'component-b': ComponentB
    }    
})
```

그러면 사용할 컴포넌트들만 `components`옵션을 통해 쓸 수 있습니다. `components` 객체의 각 속성에서 키가 커스텀 엘리먼트의 이름이 되고 Value가 사용할 컴포넌트 객체를 지정합니다.

```JS
var ComponentA = { /* ... */ }

var ComponentB = {
    components: {
        'component-a': ComponentA
    }
    // ...
}
```

`지역 등록된 컴포넌트`는 `하위 컴포넌트`에서는 사용이 불가능하다는 점을 유의해야 합니다. 예를 들어 ComponentA를 ComponentB에서 쓰고 싶다면 아래와 같이 해야합니다.

```JS
import ComponentA from './ComponentA.vue'

export default {
    components: {
        ComponentA
    }
    // ...
}
```

`Babel`이나 `Webpack`을 이용해서 ES2015를 적용하고 있다면 `싱글 파일 컴포넌트(SFC)`를 이용해서 이렇게 할 수도 있습니다. ES2015 이상에서는 객체 내의 components 옵션에서 ComponentA: ComponentA라고 하지 않고 ComponentA라고만 해도 됩니다.

- component-a: ComponentA
- ComponentA: ComponentA
- ComponentA

<br />

### 모듈 시스템 - 모듈 시스템에서 컴포넌트를 다른 컴포넌트에 지역적으로 등록하기

모듈 시스템을 사용한다는 것은 `Babel`이나 `Webpack`같은 것과 함께 프로젝트를 구성하는 것을 의미합니다. 이 경우에는 `components 디렉토리`를 만들고 각 컴포넌트들을 그 자체로 `하나의 파일에 관리`하는 것을 추천합니다.

그러면 어떤 컴포넌트를 다른 컴포넌트에 지역적으로 등록하기 전에 `사용할 컴포넌트`를 가져와야 합니다. 예를 들면 `ComponentB.js`나 `ComponentB.vue`같은 파일에서 아래처럼 다른 컴포넌트를 가져오는 것입니다.

```JS
import ComponentA from './ComponentA'
import ComponentC from './ComponentC'

export default {
    components: {
        ComponentA,
        ComponentC,
    }
}
```

### 모듈 시스템 - 기본 컴포넌트를 자동으로 전역 등록하기

`Webpack`을 쓴다면(`Vue CLI 3+`을 사용하는 경우 내장되어 있음) `require.context`를 써서 자주 쓰는 기본 컴포넌트들을 전역 등록할 수 있습니다. 아래의 예시는 어플리케이션의 엔트리 파일(e.g src/main.js)에 기본 컴포넌트들을 전역적으로 불러오는 코드입니다.

```JS
import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase form 'lodash/camelCase'

const requireComponent = require.context(
    // 컴포넌트들이 있는 폴더
    './components',
    // 하위 폴더까지 포함할지 여부
    false,
    // 기본 컴포넌트를 찾는데 사용할 정규표현식
    /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().foreach(fileName => {
    // 컴포넌트 설정 가져오기
    const componentConfig = requireComponent(fileName)

    // 컴포넌트의 파스칼표기법 이름 가져오기
    const componentName = upperFirst(
        camelCase(
            // 폴더 위와 무관하게 파일 이름 추출
            fileName
                .split('/')
                .pop()
                .replace(/\.\w+$, '')
        )
    )
})

// 컴포넌트를 지역적으로 등록
Vue.component(
    componentName,
    // `export default`를 이용한 컴포넌트는 `.default`로 컴포넌트 옵션을 추출하고 그렇지 않은 컴포넌트는 모듈의 루트를 호출
    componentConfig.default || componentConfig
)
```

`전역 등록`은 (new Vue)로 루트 Vue 인스턴스가 만들어지기 전에 반드시 이뤄져야 한다.

### Props

#### Props - Prop 대소문자 구분 (camelCase vs kebab-case)

(Remind) Props를 통해서 부모 영역의 데이터를 자식 컴포넌트에 전달할 수 있어야 합니다.

HTML 속성은 `대소문자 구분이 없기 때문에 `브라우저는 대문자를 `소문자로 변경하여 읽습니다`. 그렇기 때문에 `camelCase`(대소문자 혼용)로 prop의 이름을 정한 경우에 DOM 템플릿 안에서는 kebab-case(하이픈으로 연결된 구조)를 사용하여야 올바르게 동작합니다.

```JS
Vue.component('blog-post', {
    // Javascript에서의 camelCase
    props: ['postTitle'],
    template: '<h3>{{ postTitle }}</h3>'
})
```

```HTML
<!-- HTML에서의 kebab-case -->
<blog-post post-title="hello!"></blog-post>
```

<br />

#### Props - Prop 타입(추천하는 방향)

일반적으로 생각해 보면, prop에 특정 타입의 값을 넣고 싶은 경우가 있을 수 있습니다. 이떄, 다음과 같이 prop을 속성 이름과 타입을 포함하는 오브젝트로 선언함으로써 타입이 지정된 prop의 리스트를 구현할 수 있습니다.

이는 컴포넌트를 읽기 좋게 문서화할 뿐 아니라 브라우저의 자바스크립트 콘솔에서도 잘못된 타입이 전달된 경우 경고를 띄워줄 수 있도록 해줍니다.

```JS
props: {
    title: String,
    likes: Number,
    isPublished: Boolean,
    commentIds: Array,
    author: Object,
    callback: Function,
    contactsPromise: Promise // or any other constructor
}
```

<br />

#### Props - 정적 & 동적 prop 전달하기

아래와 같이 정적인 prop을 전달할 수있습니다.

```HTML
<blog-post title="My journey with Vue"></blog-post>
```

혹은 아래와 같이 v-bind를 이용해서 동적인 prop을 전달할 수도 있습니다.

```html
<!-- 변수에 담긴 값을 동적으로 할당 -->
<blog-post v-bind:title="post.title"></blog-post>

<!-- 복잡한 표현식의 값을 동적으로 할당 -->
<blog-post v-bind:title="post.title + 'by ' + post.author.name"></blog-post>
```

위 두 가지 경우는 모두 문자열 형태(String)의 변수를 전달하지만 실제로는 모든 타입의 변수가 prop으로 전달될 수 있습니다.


아래와 같이 숫자(number) 타입의 prop을 전달할 수 있습니다.

```HTML
<!-- '42'는 정적인 값이지만, Vue에서 해당 값이 숫자라는 것을 알 수 있도록 하기 위해 -->
<!-- v-bind를 이용해 문자열이 아닌 Javascript 표현식이라는 것을 알려줍니다. -->
<blog-post v-bind:likes="42"></blog-post>

<!-- 변수의 값을 동적으로 할당할 수도 있습니다. -->
<blog-post v-bind:likes="post.likes"></blog-post>
```

#### 논리(Boolean) 타입 전달

```HTML
<!-- 값이 없는 props은 'true'를 전달합니다. -->
<blog-post is-published></blog-post>

<!-- `false`는 정적인 값이지만, Vue에서 해당 값이 논리 자료형이라는 것을 알 수 있도록 하기 위해 -->
<!-- v-bind를 이용해 문자열이 아닌 Javascript 표현식이라는 것을 알려줍니다. -->
<blog-post v-bind:is-published="false"></blog-post>

<!-- 변수의 값을 동적으로 할당할 수도 있습니다. -->
<blog-post v-bind:is-published="post.isPublished"></blog-post>
```

#### 배열 타입 전달

```HTML
<blog-post v-bind:comment-ids="[234, 266, 273]"></blog-post>
<blog-post v-bind:comment-ids="post.commendIds"></blog-post>
```

#### 객체(Object) 타입 전달

```HTML
<blog-post v-bind:author="{
    name: 'Veronica',
    company: 'Veridian Dynamics'
}"></blog-post>
<blog-post v-bind:comment-ids="post.author"></blog-post>
```

#### 객체 속성(Properties)의 전달

오브젝트의 모든 속성을 전달하길 원하는 경우, v-bind:prop-name 대신 v-bind만 작성함으로써 모든 속성을 prop으로 전달할 수 있습니다.

```JS
post: {
    id: 1,
    title: 'My Journey'
}
```

```HTML
<blog-post v-bind="post"></blog-post>
```

```HTML
<blog-post 
    v-bind:id="post.id"
    v-bind:title="post.title"
></blog-post>
```

<br />

### Props - 단방향 데이터 흐름

모든 prop들은 부모 컴포넌트와 자식 컴포넌트 사이에 `단방향`으로 내려가는 바인딩 형태를 취합니다. 부모의 속성이 변경되면 자식 속성에게 전달되지만, 반대 방향으로는 전달되지 않습니다. (** 자식의 데이터가 부모에게 전달되는 것을 막는 것은 자식 요소가 의도치 않게 부모 요소의 상태를 변경함으로써 앱의 데이터 흐름을 이해하기 어렵게 만드는 일을 막기 위해서입니다. **)

부모 컴포넌트가 업데이트 될 때마다 자식 요소의 모든 prop 들이 최신 값으로 새로고침 됩니다. 이는 곧 사용자가 prop을 자식 컴포넌트 안에서 수정해서는 안된다는 것이기도 합니다. 만약 수정을 시도하는 경우, Vue는 콘솔에 경고를 표시합니다.

prop을 직접 변경하고 싶을 수 있는 상황의 예시

1. prop은 초기값만 전달하고, 자식 컴포넌트는 그 초기값을 로컬 데이터 속성으로 활용하고 싶은 경우

    해당 경우에는 로컬 데이터 속성을 따로 선언하고 그 속성의 초기값으로써 prop을 사용하는 것이 바람직합니다.

    ```JS
    props: ['initialCounter'],
    data: function() {
        return {
            counter: this.initialCounter
        }
    }
    ```

2. 전달된 prop의 형태를 바꾸어야 하는 경우

해당 경우에는 computed 속성을 사용하는 것이 가장 바람직합니다.

```JS
props: ['size'],
computed: {
    normalizedSize: function() {
        return this.size.trim().toLowerCase()
    }
}
```

> 자바스크립트 오브젝트나 배열을 prop으로 전달하는 경우, 객체를 복사하는 것이 아니라 참조하게 됩니다. 즉, 전달받은 오브젝트나 배열을 수정하게 되는 경우, 자식 요소가 부모 요소의 상태를 **변경하게 될 것** 입니다.

<br />

### Props - 유효성 검사

컴포넌트는 prop의 유효성 검사를 위해 요구사항을 특정할 수 있습니다. 요구사항이 충족되지 않은 경우 Vue는 브라우저의 자바스크립트 콘솔을 통해 경고를 표시합니다. 이는 다른 사람들도 사용하는 컴포넌트를 개발하는 경우에 특히 유용합니다. Prop들의 유효성 검사를 위해 prop의 값에 배열이나 문자열 대신 오브젝트를 삽입할 수 있습니다.

```Javascript
Vue.component('my-component', {
    props: {
        // 기본 타입 체크(`Null`이나 `undefined`는 모든 타입을 허용합니다.)
        propA: Number,
        // 여러 타입 허용
        propB: [String, Number],
        // 필수 문자열
        propC: {
            type: String,
            required: true
        },
        // 기본값이 있는 숫자
        propD: {
            type: Number,
            default: 100
        },
        // 기본값이 있는 오브젝트
        propE: {
            type: Object,
            // 오브젝트나 배열은 꼭 기본값을 반환하는 팩토리 함수의 형태로 사용되어야 합니다.
            default: function() {
                return { message : 'hello' }
            }
        },
        // 커스텀 유효성 검사 함수
        propF: {
            validator: function() {
                // 값이 항상 아래 세 개의 문자열 중 하나여야 합니다.
                return ['success', 'warning', 'danger'].indexOf(value) !== -1
            }
        }
    }
})
```

> [유의사항] 컴포넌트 인스턴스가 생성되기 전에 일어나므로 `computed`, `method`, `data`를 사용할 수 없습니다.

<br />

### Props - Type Checks

Type은 [String, Number, Boolean, Array, Object, Data, Function, Symbol] 네이티브 생성자 중 하나가 될 수 있습니다.

또한, type에는 커스텀 생성자가 사용될 수도 있습니다. 확인은 instanceof 를 통해 이루어집니다.

예를 들어, 아래와 같은 생성자 함수가 선언되어 있다면 author prop이 new Person으로 생성된 값인지 확인할 수 있습니다.

```javascript
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Vue.component('blog-post', {
    props: {
        author: Person
    }
})
```
