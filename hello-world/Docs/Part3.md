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

## Props

### Props - Prop 대소문자 구분 (camelCase vs kebab-case)

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

### Props - Prop 타입(추천하는 방향)

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

### Props - 정적 & 동적 prop 전달하기

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

### Props - 논리(Boolean) 타입 전달

```HTML
<!-- 값이 없는 props은 'true'를 전달합니다. -->
<blog-post is-published></blog-post>

<!-- `false`는 정적인 값이지만, Vue에서 해당 값이 논리 자료형이라는 것을 알 수 있도록 하기 위해 -->
<!-- v-bind를 이용해 문자열이 아닌 Javascript 표현식이라는 것을 알려줍니다. -->
<blog-post v-bind:is-published="false"></blog-post>

<!-- 변수의 값을 동적으로 할당할 수도 있습니다. -->
<blog-post v-bind:is-published="post.isPublished"></blog-post>
```

### Props - 배열 타입 전달

```HTML
<blog-post v-bind:comment-ids="[234, 266, 273]"></blog-post>
<blog-post v-bind:comment-ids="post.commendIds"></blog-post>
```

### Props - 객체(Object) 타입 전달

```HTML
<blog-post v-bind:author="{
    name: 'Veronica',
    company: 'Veridian Dynamics'
}"></blog-post>
<blog-post v-bind:comment-ids="post.author"></blog-post>
```

### Props - 객체 속성(Properties)의 전달

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

<br />

### Props - Prop이 아닌 속성 (Optional)

컴포넌트 `non-prop 속성`은 컴포넌트에 전달되지만, `props`나 `emits`에 정의된 **특성을 지니고 있지 않은 속성** 또는 **이벤트 리스너**를 의미합니다.

**명확하게 정의된 prop**을 통해서 자식 컴포넌트에 정보를 전달하는 것이 권장됩니다. 하지만, 컴포넌트 라이브러리를 만드는 등의 경우 어떤 맥락에서 해당 컴포넌트가 사용될지를 확실히 결정할 수 없는 경우가 있습니다. 이러한 경우에 대응하기 위해서 컴포넌트는 **임의의 속성값**을 받아와 컴포넌트의 **루트 엘리먼트**에 추가해 줄 수 있습니다.

```javascript
app.component('date-picker', {
    template:
    `<div class="date-picker">
        <input type="datetime">
    </div`>
})
```

```HTML
<!-- non-prop 속성과 Date-picker 컴포넌트 -->
<date-picker data-status="activated"></date-picker>

<!-- 렌더링된 date-picker 컴포넌트 -->
<div class="date-picker" data-status="activated">
    <input type="datetime">
</div>
```

<br />

이벤트 리스너에도 동일한 규칙이 적용됩니다.

```html
<date-picker @change="submitChange"></date-picker>
```

```Javascript
app.component('date-picker', {
    created() {
        console.log(this.$attrs)
    }
})
```

```html
<div id="date-picker" class="demo">
    <date-picker @change="showChange"></date-picker>
</div>
```

```Javascript
const app = Vue.createApp({
    methods: {
        showChange(event) {
            console.log(event.target.value)
        }
    }
})

app.component('date-picker', {
    template: `
        <select>
            <option value="1">Monday</option>
            <option value="2">Tuesday</option>
            <option value="3">Wednesday</option>
        </select>
    `
})
```

이 경우, `change` 이벤트 리스너는 `부모 컴포넌트`에서 `자식 컴포넌트`로 전달되며, `<select>`의 change는 네이티브 이벤트로 처리됩니다. date-picker에서 명시적으로 이벤트를 emit할 필요가 없습니다.

<br />

### Props - Prop이 아닌 속성(Optional) - 기존 속성의 대체 및 병합

bootstrap-date-input의 템플릿이라고 생각해 봅시다.

```HTML
<input type="date" class="form-control">
```

날짜 선택 플러그인의 테마를 설정하기 위해서는 아래와 같이 특정 클래스를 작성해주어야 합니다.

```HTML
<bootstrap-date-input data-date-picker="activated" class="date-picker-theme-dark">
</bootstrap-date-input>
```

이 경우, 두 개의 각각 다른 값이 class에 선언됩니다.

 - form-control: 컴포넌트 템플릿으로부터 부여
 - data-date-picker : 컴포넌트의 부모로부터 전달받아 부여(Props)

대부분 속성의 경우, 전달받은 속성이 기존에 선언된 속성을 대체합니다. 예를 들어, type="text"를 type="date"가 선언된 컴포넌트에 전달하는 경우에는 속성이 `대체`되고 문제를 일으키게 될 가능성이 생깁니다. 하지만 다행히도 `class` 와 `style` 속성의 경우에는 조금 더 똑똑하게 반응합니다. 즉, 앞의 form-control와 date-picker-theme-dark의 예제와 같이 두 개의 값이 `합쳐져서 적용(병합)`됩니다.

<br />

### Props - Prop이 아닌 속성(Optional) - 속성 상속 비활성화

컴포넌트의 루트 엘리먼트가 상속된 속성을 갖지 않기를 원하는 경우, 컴포넌트에 inheritAttrs: false 옵션을 줄 수 있습니다.

```JS
Vue.component('my-component', {
    inheritAttrs: false,
    // ...
})

{
    require: true,
    placeholder: 'Enter your username'
}
```

이는 컴포넌트에 전달된 속성의 이름과 값을 가지고 있는 인스턴스 속성인 $attrs와 조합하면 유용하게 사용할 수 있습니다.

```JS
Vue.component('base-input', {
    inheritAttrs: false,
    props: ['label', 'value'],
    template: `
        <label>
            {{ label }}
            <input
                v-bind="$attrs"
                v-bind:value="value"
                v-on:input="$emit('input', $event.target.value)">
        </label>
    `
})
```

`inheritAttrs: false`와 `$attrs`를 이용하면 수동으로 전달할 속성을 선택할 수 있습니다.(style과 class는 영향 주지 않음)

이러한 패턴을 이용하면 기본 컴포넌트의 실제 루트를 크게 신경쓰지 않고도 기본 HTML 엘리먼트에 가깝게 사용할 수 있습니다.

```HTML
<base-input
    v-model="username"
    required
    placeholder="Enter your username">
</base-input>
```

## 커스텀 이벤트

<hr>

### 커스텀 이벤트 - 이벤트 이름

컴포넌트 및 props와 달리, `이벤트`는 자동 대소문자 변환을 제공하지 않습니다. 대소문자를 혼용하는 대신에 emit할 **정확한 이벤트 이름** 을 작성하는 것이 권장됩니다.

예를 들어, 아래와 같이 camelCase로 작성된 이벤트를 emit하는 경우, kebab-case로 이벤트를 작성하게 되면 아무 동작도 하지 않습니다.

```JS
this.$emit('myEvent')
```

```HTML
<!-- 이벤트가 동작하지 않음 -->
<my-component v-on:my-event="doSomething"></my-component>
```

컴포넌트 및 props와는 다르게 이벤트 이름은 자바스크립트 변수나 속성의 이름으로 사용되는 경우가 없습니다. 따라서 camelCase나 PascalCase를 사용할 필요가 없습니다. 또한, (HTML의 대소문자 구분을 위해) DOM 템플릿의 v-on 이벤트 리스너는 항상 자동으로 소문자 변환되기 때문에 v-on:myEvent는 자동으로 v-on:myevent로 변환됩니다. 즉, myEvent 이벤트를 들을 수 없습니다.

이러한 이유 때문에, `이벤트 이름`에는 `kebab-case`를 사용하는 것이 권장됩니다.

<br />

### 컴포넌트의 v-model 커스터마이징

v-model을 사용하는 컴포넌트는 기본값으로 value를 prop으로 사용하고, input을 이벤트로 사용합니다. 이 때, 체크박스와 같이 value 속성을 다른 용도로 사용하여야 하는 경우에는 model 옵션을 이용하여 문제가 생기는 것을 방지할 수 있습니다.

```javascript
Vue.component('base-checkbox', {
    model: {
        prop: 'checked',
        event: 'change'
    },
    props: {
        checked: Boolean
    },
    template: `
        <input
            type="checkbox"
            v-bind:checked="checked"
            v-on:change="$emit('change', $event.target.checked)"
    `
})
```

```HTML
<base-checkbox v-model="lovingVue"></base-checkbox>
```

v-model을 컴포넌트에 사용하게 되면 lovingVue의 값은 checked prop으로 전달됩니다.

그리고 lovingVue 속성은 `<base-checked>`가 change 이벤트를 emit할 때 새로운 값으로 업데이트됩니다.

이 때, checked 속성을 컴포넌트의 props 옵션에 선언해 주어야 합니다.


<br />

### 네이티브 이벤트를 컴포넌트에 바인딩 하기

컴포넌트에서 루트 엘리먼트의 네이티브 이벤트를 직접 감지하고 싶은 경우가 있습니다. 이 경우, v-on에 .native 수식어를 사용할 수 있습니다.

```HTML
<base-input v-on:focus.native="onFocus"></base-input>
```

위와 같은 테크닉은 경우에 따라 유용하긴 하지만 `<input>`과 같이 특수한 경우엔 좋지 않은 선택일 수 있습니다. 예를 들어, `<base-input>`이라는 컴포넌트의 루트 엘리먼트가 실제로는 `<label>` 엘리먼트인 경우를 생각해 볼 수있습니다. 즉, input의 focus 이벤트를 기대하지만 사실상 루트 엘리먼트는 label 인 것입니다.

이러한 문제를 해결하기 위해서 Vue는 컴포넌트에서 사용된 리스너를 포함하는 오브젝트인 `$listeners` 속성을 제공합니다.

```Javascript
{
    focus: function(event) { /* ... */ },
    input: function(value) { /* ... */ }
}
```

`$listeners` 속성을 이용하면 컴포넌트에서 `v-on=$listeners`를 이용해 부모 엘리먼트가 가진 이벤트 리스너를 특정 자식 엘리먼트에게 전달할 수 있습니다. 가령 `<input>` 같은 엘리먼트에 v-model 를 적용하고 싶은 경우라면, 아래와 같이 inputListeners 같은 새로운 `computed 속성`을 생성하여 유용하게 활용할 수 있습니다.

`<base-input>` 컴포넌트는 완전히 투명한 (일반적인 <input>과 동일하게 동작하는) wrapper라고 볼 수 있습니다. 모든 속성과 리스너가 .native 수식어 없이도 기존과 동일하게 동작합니다.

```Javascript
Vue.component('base-input', {
    inheritAttrs: false,
    props: ['label', 'value'],
    computed: {
        inputListeners: function() {
            var vm = this
            // `Object.assign`는 오브젝트를 새로운 오브젝트로 병합합니다.
            return Object.assign({}, 
                // 우선 부모 엘리먼트의 모든 리스너를 추가합니다.
                this.$listeners,
                // 그 다음, 기존 리스너를 override 하는 커스텀 리스너를 추가할 수 있습니다.
                {
                    // 아래 구문을 사용하면 v-model과 같이 동작하도록 만들 수 있습니다.
                    input: function (event) {
                        vm.$emit('input', event.target.value)
                    }
                }
            )
        }
    }
    template: `
        <label>
            {{ label }}
            <input
                v-bind="$attrs"
                v-bind:value="value"
                v-on="inputListeners">
        </label>
    `
})
```

<br />

### .sync  수식어

`prop`에 대해서 "양방향 바인딩"이 필요한 경우가 있습니다. 안타깝게도, 진짜 양방향 바인딩은 유지보수 측면에서 이슈를 발생시킬 수 있습니다. 자식 컴포넌트가 변이 코드 없이 부모 컴포넌트를 변경할 수 있게 되면, 부모 요소와 자식 요소 중 변이를 발생시킨 지점을 특정할 수 없게 되기 때문입니다.

그렇기 떄문에 이벤트를 emit할 때에는 update:myPropName과 같은 패턴이 권장됩니다. 예를 들어 title이라는 prop을 갖는 요소가 있다고 할 때, 아래와 같이 새로운 값을 할당하도록 요청할 수 있습니다.

```Javascript
this.$emit('update:title', newTitle)
```

```HTML
<text-document
    v-bind:title="doc.title"
    v-on:update:title="doc.title = $event">
</text-document>
```

```HTML
<text-document v-bind:title.sync="doc.title"></text-document>
```

> `v-bind`와 `.sync` 수식어는 표현식과 함께 동작하지 않는다는 것에 주의하세요.(e.g. `v-bind:title.sync="doc.title + '!'`는 동작하지 않습니다.). `v-model`과 같이, 표현식이 아닌 속성의 이름만 사용할 수 있습니다.

**.sync**수식어는 여러 개의 props를 한 번에 전달하기 위해서 v-bind와 사용될 수도 있습니다.

```HTML
<text-document v-bind.sync="doc"></text-document>
```

위 구문은 doc 객체의 각 속성(e.g.title)을 각각의 prop 처럼 전달하고, 각각의 업데이트 리스너로써 v-on을 추가합니다.

> `v-bind.sync="title: doc.title}`와 같은 리터럴 오브젝트는 `v-bind:sync` 이러한 복잡한 표현식을 파싱하는 과정에서 발생할 수 있는 극단적인 경우가 너무 많기 때문에 동작하지 않습니다.

<br />

## Slots

### 슬롯에 들어가는 내용(slot content)

Vue에 있는 컨텐트 배포 API는 `<slot> 요소`를 컨텐트 배포 통로로 사용하는 [Web Components spec draf](https://github.com/WICG/webcomponents/blob/gh-pages/proposals/Slots-Proposal.md)에서 영향을 받았습니다. 디자인 프레임워크 또는 확장을 위한 프레임워크를 사용하다 보면 아래와 같은 컴포넌트를 볼 수 있습니다. HTML 태그가 아닌 navigation-link template 입니다.

```HTML
<navigation-link url="/profile">
    Your Profile
</navigation-link>
```

navigation-link template

```HTML
<a
    v-bind:href="url"
    class="nav-link">
    <slot></slot>
</a>
```

```HTML
<navigation-link url="/profile">
    <!-- Font Awesome 아이콘을 추가합시다. -->
    <span class="fa fa-user"></span>
    Your Profile
</navigation-link>
```

컴포넌트를 렌더링할 때 `<slot></slot>`이 "Your Profile"로 교체됩니다. 슬롯에는 HTML 같은 템플릿 코드를 포함시킬 수 있기 때문입니다. 만약 `<navigation-link>` 템플릿이 `<slot> 요소`를 가지고 있지 않다면 그 자리에 들어갔어야 할 모든 내용이 무시될 것입니다.


<br />

### 컴파일 될 때의 범위(Compilations scope)

슬롯 안에 데이터 옵션을 사용하고 싶을 수 있습니다.

부모 템플릿 안에 있는 것들은 부모 컴포넌트의 범위에 컴파일 되고 자식 템플릿 안에 있는 것들은 자식 컴포넌트의 범위에 컴파일 됩니다.

```HTML
<navigation-link url="/profile">
    Checking here will send you to : {{ url }}
    <!-- 
        url은 undefined로 나올 겁니다. 이 데이터는 <navigation-link>로 넘어가지만
        <navigation-link> 컴포넌트 안에 정의도어 있지 않다.
     -->
</navigation-link>
```

navigation-link template

```HTML
<a
    v-bind:href="url">
    Logged in as {{ user.name }}
</a>
```

```HTML
<a 
    v-bind:href="url"
    class="nav-link">
    <!-- Font Awesome 아이콘을 추가합시다. -->
    <slot></slot>
</a>
```

### 기본값 지정(Fallback Content)

아무 컨텐츠도 전달되지 않았을 때 슬롯에 렌더링시킬 대비책(즉 기본값)을 지정해 놓는 것이 유용한 경우가 있을 수 있습니다.

submit-button template

```HTML
<!-- 1 -->
<button type="submit">
    <slot></slot>
</button>
```

<br />

```HTML
<!-- 1 to 2 -->
<submit-button></submit-button>
```

<br />

```HTML
<!-- 1 to 2 -->
<button type="submit">
    Submit
</button>
```

<br />

```HTML
<!-- 1 to 3 -->
<button type="submit">
    <slot>Submit</slot>
</button>
```

<br />

<br />

```HTML
<!-- 3 to 4 -->
<submit-button>
    Save
</submit-button>
```


<br />

```HTML
<!-- 3 to 5 -->
<button type="submit">
    Save
</button>
```

<br />

### 이름이 있는 슬롯(Named Slots)

여러 개의 슬롯을 쓰면 더 유용할 때가 있습니다.
이런 경우를 위해서 `<slot>` 요소는 서로 다른 슬롯들을 정의할 때 쓸 수 있는 name이라는 특별한 속성을 가지고 있습니다.

**base-layout template**

```HTML
<div class="container">
    <header>
        <!-- 헤더 -->
    </header>
    <main>
        <!-- 본문 -->
    </main>
    <footer>
        <!-- 바닥 -->
    </footer>
</div>
```

<br />

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

이름이 있는 슬롯에 내용을 전달하려면 `<template>`에 `v-slot 디렉티브`를 쓰고 그 속성에 앞에서 지정한 ‘name’을 넣으면 됩니다.


**base-layout template**

```HTML
<base-layout>
    <template v-slot:header>
        <h1>Here might be a page title</h1>
    </template>
    <p>A paragraph for the main content</p>
    <p>And another one</p>
    <template v-slot:footer>
        <h1>Here's some contact info</h1>
    </template>
</base-layout>
```

**OR**

```HTML
<base-layout>
    <template v-slot:header>
        <h1>Here might be a page title</h1>
    </template>
     <template v-slot:default>
        <p>A paragraph for the main content</p>
        <p>And another one</p>
    </template>
    <template v-slot:footer>
        <h1>Here's some contact info</h1>
    </template>
</base-layout>
```

v-slot만 `<template>` 태그에 추가할 수 있다는 점을 유의하시기 바랍니다

```HTML
<base-layout>
    <template v-slot:header>
        <h1>Here might be a page title</h1>
    </template>
    <p>A paragraph for the main content</p>
    <p>And another one</p>
    <template v-slot:footer>
        <h1>Here's some contact info</h1>
    </template>
</base-layout>
```


```HTML
<base-layout>
    <header>
        <h1>Here might be a page title</h1>
    </header>
     <main>
        <p>A paragraph for the main content</p>
        <p>And another one</p>
    </main>
    <footer>
        <h1>Here's some contact info</h1>
    </footer>
</base-layout>
```

<br />

### 범위가 있는 슬롯(Scoped Slots)

자식 컴포넌트에서만 접근할 수 있는 데이터에서 슬롯에 필요한 내용을 가져와야 할 수 있습니다.

**current-user template**

```HTML
<span>
    <slot>{{user.lastName}}</slot>
</span>
```

```HTML
<current-user>
    {{ user.firstName }}
</current-user>
```

부모 컴포넌트의 슬롯에서 user를 사용하려면 user를 `<slot> 요소`에 속성으로 연결해야 합니다.
<slot> 요소에 연결된 속성을 `슬롯 속성(slot props)`라고 합니다. 이제 `부모 컴포넌트의 범위(scope)`에서 v-slot에 연결한 ‘슬롯 속성(slotProps)’를 쓸 수 있습니다

```HTML
<span>
    <slot v-bind:user="user">
        {{ user.lastName }}
    </slot>
</span>
```

```HTML
<current-user>
    <template v-slot:default="slotProps">
        {{ slotProps.user.firstName }}
    </template>
</current-user>
```

#### 범위가 있는 슬롯(Scoped Slots), 단톡 디폴트 슬롯을 위한 축약 문법(Abbreviated Syntax for Lone Default Slots)

제공된 내용이 디폴트 슬롯 밖에 없으면 컴포넌트의 태그를 슬롯의 템플릿으로 바로 쓸 수 있습니다. 즉 v-slot을 컴포넌트에다가 쓸 수 있다는 것입니다.

```HTML
<current-user>
    <template v-slot:default="slotProps">
        {{slotProps.user.firstName}}
    </template>
</current-user>
```

```HTML
<current-user v-slot:default="slotProps">
    {{slotProps.user.firstName}}
</current-user>
```

```HTML
<current-user v-slot="slotProps">
    {{slotProps.user.firstName}}
</current-user>
```

범위를 모호하게 만들기 떄문에 디폴트 슬롯을 위한 축약 문법은 이름이 있는 슬롯들과 함께 쓸 수 없습니다.

```HTML
<current-user v-slot="slotProps">
    {{slotProps.user.firstName}}
    <template v-slot:other="otherSlotProps">
        slotProps is NOT available here
    </template>
</current-user>
```

```HTML
<current-user>
    <template v-slot:default="slotProps">
        {{slotProps.user.firstName}}
    </template>
    <template v-slot:other="otherSlotProps">
        slotProps is NOT available here
    </template>
</current-user>
```

<br />

### 범위가 있는 슬롯(Scoped Slots), 슬롯 속성 구조분해(Destructing Slot Props)

프레임워크 내부에서 `범위가 있는 슬롯`은 하나의 인수를 가지는 함수로 슬롯에 들어가는 내용을 감싸는 방식으로 작동합니다.

v-slot의 값은 함수 정의식의 인수 위치에서 가능한 어떤 종류의 자바스크립트 표현식도 다 가능합니다. 그러므로 싱글 파일 컴포넌트나 모던 브라우저처럼 지원되는 모든 환경에서 아래와 같이 특정 슬롯 속성을 추출하는 [ES2015 구조분해](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)를 할 수 있다는 뜻입니다.

```JS
function(slotProps) {
    // ... slot content
}
```

```HTML
<!-- 1. 구조분해 -->
<current-user v-slot="{ user }">
    {{ user.firstName }}
</current-user>

<!-- 2. 구조분해 - 속성 이름 -->
<current-user v-slot="{ user : person }">
    {{ person.firstName }}
</current-user>

<!-- 3. 구조분해 - default 값 -->
<current-user v-slot="{ user : {firstName : 'Guest'} }">
    {{ user.firstName }}
</current-user>
```

### 가변(동적) 슬롯 이름(Dynamic Slot names)

가변 디렉티브 인수는 가변 슬롯 이름을 정의하는 방식으로 v-slot에서도 작동합니다.

```HTML
<base-layout>
    <template v-slot:[dynamicSlotName]>
        ...
    </template>
</base-layout>
```

<br />

### 이름이 있는 슬롯 디렉티브의 단축표기(Named Slots Shorthand)

v-on과 v-bind처럼 v-slot도 단축표기를 가지고 있습니다. 인수 앞에 쓰는 부분(v-slot:)을 `특수 기호인 #`으로 대체하는 것입니다. 예를 들어 v-slot:header는 #header로 쓸 수도 있습니다.

```HTML
<base-layout>
    <template #header>
        <h1>Here might be a page title</h1>
    </template>

    <p>A paragraph for the main content.</p>
    <p>And another one.</p>

    <template #footer>
        <p>Here's some contact info</p>
    </template>
</base-layout>
```

```HTML
<!-- 1. 다른 디렉티브와 마찬가지로 단축 표기는 오직 인수가 있을 떄만 가능합니다. -->
<current-user #="{user}">
    {{user.firstName}}
</current-user>
```

```HTML
<!-- 2. 단축 표기를 쓰려면 반드시 슬롯의 이름을 특정해야 합니다. -->
<current-user #default="{user}">
    {{user.firstName}}
</current-user>
```

<br />

### 다른 사례들(Other Examples)

슬롯 속성을 통해 입력되는 속성에 따라 슬롯을 다른 내용을 렌더링할 수 있는 재사용가능한 템플릿으로 변환할 수 있습니다. 부모 컴포넌트를 레이아웃 용도로만 사용하고 데이터 로직을 캡슐화한 재사용가능 컴포넌트를 디자인할 때 가장 유용한 방법입니다.

**todo-list template**

```HTML
<ul>
    <li
        v-for="todo in filteredTodos"
        v-bind:key="todo.id">
        {{ todo.text }}
    </li>
</ul>
```

```HTML
<ul>
    <li
        v-for="todo in filteredTodos"
        v-bind:key="todo.id">
        <!-- 각 할일에 대해 슬롯을 만들고 `todo` 객체를 슬롯 속성으로 전달 -->
        <slot name="todo" v-bind:todo="todo">
            <!-- 기본값 -->
            {{ todo.text }}
        </slot>
    </li>
</ul>
```

```HTML
<todo-list v-bind:todos="todos">
    <template v-slo:todo="{todo}">
        <span v-if="todo.isComplete">checked</span>
        {{todo.text}}
    </template>
</todo-list>
```

실제로 범위가 있는 슬롯의 사용 예시를 보려면 [Vue Virtual Scroller](https://github.com/Akryum/vue-virtual-scroller), [Vue Promised](https://github.com/posva/vue-promised), [Portal Vue](https://github.com/LinusBorg/portal-vue) 같은 라이브러리들을 둘러볼 것을 추천합니다.

<br />

### 삭제될 문법(To be deprecated)

#### Slot 인수를 사용하는 이름이 있는 슬롯

v-slot 디렉티브는 slot과 slot-scope 인수들을 대체하는, 더 발전된 API로 Vue 2.6.0에 도입되었습니다. 내용물을 부모 컴포넌트에서 이름이 있는 슬롯에 보내려면 slot 인수를 <template>에서 사용해야 합니다.

```HTML
<base-layout>
    <template slot="header">
        <h1>Here might be a page title</h1>
    </template>

    <p>A paragraph for the main content.</p>
    <p>And another one.</p>

    <template slot="footer">
        <p>Here's some contact info</p>
    </template>
</base-layout>
```

```HTML
<base-layout>
    <template v-slot:header>
        <h1>Here might be a page title</h1>
    </template>

    <p>A paragraph for the main content.</p>
    <p>And another one.</p>

    <template v-slot:footer>
        <p>Here's some contact info</p>
    </template>
</base-layout>
```

슬롯으로 전달된 속성들을 받기 위해서 부모 컴포넌트는 slot-scope 인수와 함께 <template>을 사용할 수 있습니다

```HTML
<!-- 1 -->
<slot-example>
    <template slot="default" slot-scope="slotProps">
        {{ slotProps.msg }}
    </template>
</slot-example>

<!-- 2 -->
<slot-example>
    <template slot-scope="slotProps">
        {{ slotProps.msg }}
    </template>
</slot-example>

<!-- 3 -->
<slot-example>
    <template slot-scope="{msg}">
        {{ msg }}
    </template>
</slot-example>

<!-- 4 -->
<slot-example>
    <span slot-scope="slotProps">
        {{ slotProps.msg }}
    </span>
</slot-example>
```

**TODO **

```HTML
<!-- new-1 -->
<slot-example>
    <template v-slot:default slot-scope="slotProps">
        {{ slotProps.msg }}
    </template>
</slot-example>

<!-- new-2 -->
<slot-example>
    <template slot-scope="slotProps">
        {{ slotProps.msg }}
    </template>
</slot-example>

<!-- new-3 -->
<slot-example>
    <template slot-scope="{msg}">
        {{ msg }}
    </template>
</slot-example>
```

<br />

## 동기 & 비동기 컴포넌트

### keep-alive 동적 컴포넌트

초기에는, 탭 인터페이스에서 컴포넌트들을 전환하기 위해서 is 특성을 사용했습니다.

```HTML
<component v-bind:is="currentTabComponent"></component>
```

컴포넌트들을 전환할 때 가끔 성능상의 이유로 상태를 유지하거나 재-렌더링을 피하길 원할 수 있습니다. 예를 들면, 탭 인터페이스를 약간 확장 하는 경우가 있습니다.

동적 컴포넌트를 재생성하는 것은 보통은 유용한 동작입니다. 하지만 이 경우에는, 탭 컴포넌트 인스턴스가 처음 생성될 때 캐시 되는 것을 선호합니다. 이런 문제를 해결하기 위해서, 동적 컴포넌트를 `<keep-alive>` 엘리먼트로 둘러쌀 수 있습니다.
이제 Posts 탭은 (게시물이 선택된) 상태를 유지할 수 있고 다시 렌더링하지도 않습니다.

```HTML
<!-- Inactive components will be cached! -->
<keep-alive>
    <component v-bind:is="currentTabComponent"></component>
</keep-alive>
```

<br />

### 비동기 컴포넌트

규모가 큰 어플리케이션의 경우, 앱을 작은 조각들로 나누어 두고 필요한 경우에만 서버로부터 필요한 컴포넌트를 로드해야 할 수 있습니다. 이런 작업을 쉽게 할 수 있도록 Vue는 팩토리 함수를 이용해 컴포넌트를 비동기적으로 정의하는 것을 허용합니다. Vue는 컴포넌트가 필요할 때 팩토리 함수를 실행하고 미래를 위해 결과를 캐시합니다.

```JS
Vue.component('async-example', function(resolve, reject) {
    setTimeout(function() {
        // 컴포넌트 정의를 resolve 콜백을 통해 전달
        resolve({
            template: "<div>I am async!</div>"
        })
    }, 1000);
})
```

```JS
Vue.component(
    "async-webpack-example",
    // 'import' 함수는 Promise를 반환합니다.
    () => import("./my-async-component")
);
```

```JS
new Vue({
    // ...
    components: {
        "my-components": () => import("./my-async-component")
    }
})
```

<br />

### 비동기 컴포넌트, Handling Loading State 

비동기 컴포넌트 팩토리는 아래와 같은 포맷으로 오브젝트를 반환할 수도 있습니다.

```JS
const AsyncComponent = () => ({
    // 로드 할 컴포넌트(Promise)
    component: import("./MyComponent.vue"),
    // 비동기 컴포넌트가 로딩중 일 때 사용할 컴포넌트
    loading: LoadingComponent,
    // 비동기 컴포넌트 로딩이 실패했을 때 사용할 컴포넌트
    error: ErrorComponent,
    // 로딩 컴포넌트를 보여주기 전의 지연시간. (기본값: 200ms)
    delay: 200,
    // 초과되었을 때 에러 컴포넌트를 표시할 타임아웃. (기본값: 무한대)
    timeout: 3000
})
```

<br />

## 예외적인 상황들

### 엘리먼트 & 컴포넌트 접근 - 루트 엘리먼트 접근하기

대부분의 경우, 다른 컴포넌트에 접근하거나 직접 DOM 엘리먼트에 접근하는 것을 피하는 것이 좋습니다. 그럼에도 불구하고, 이러한 접근이 허용되는 경우가 있습니다.

new Vue의 모든 하위 컴포넌트에서는 $root 속성을 이용해 루트 인스턴스에 접근할 수 있지만, 지향하는 방법이다.

```JS
new Vue({
    data: {
        foo: 1
    },
    computed: {
        bar: function() { /* ... */ }
    },
    methods: {
        baz: function() { /* ... */ }
    }
})
```

#### $root 사용법

```JS
// root의 데이터 가져오기
this.$root.foo

// root의 데이터 수정하기
this.$root.foo = 2

// root의 computed 속성 접근하기
this.$root.bar

// root의 method 사용하기
this.$root.baz()
```

<br />

### 엘리먼트 & 컴포넌트 접근 - 부모 컴포넌트 인스턴스에 접근하기

$root와 비슷하게, `$parent` 속성을 사용하여 **자식 요소** 에서 **부모 인스턴스**에 접근할 수 있습니다. 이는 prop을 이용해서 데이터를 넘겨주는 것의 (조금 뒤떨어지는) 대안으로써 사용할 수 있습니다. 하지만, 가끔 부분적으로 컴포넌트간의 공유가 이루어져야 하는 라이브러리가 존재합니다.

`<google-map-region>` 컴포넌트를 추가하고 `<google-map-marker>` 컴포넌트가 그 지역 안에서만 마커를 렌더링 할 수도 있도록 구조를 변경한다고 가정합니다.

이 <google-map>` 컴포넌트는 모든 하위 컴포넌트가 접근할 수 있어야 하는 map 속성을 가져야 합니다. 더 나아가 getMap 메서드를 통해서 하위 컴포넌트에서 접근하는 방법이다.

```html
<google-map>
    <google-map-region v-bind:shape="cityBoundaries">
        <google-map-markers v-bind:places="iceCreamShops"></google-map-markers>
    </google-map-region>
</google-map>
```

부모 속성의 데이터를 자식 속성에서 변경하는 경우에 디버깅의 편의성이나 코드 가독성을 떨어뜨린다.

depth가 커지게 되면 디버깅의 편의성이나 코드 가독성을 떨어뜨리게 되는데 이렇게 알 수 없는 깊이를 가진 하위 컴포넌트에게 컨텍스트 정보를 제공하기 위한 방법으로 의존성 inject를 사용한다.

<br />

### 엘리먼트 & 컴포넌트 접근 - 의존성 주입

이전의 케이스에서 불행히도 $parent 속성은 여러 번 중첩된 컴포넌트에 대해서 확장 가능한 방법이 아니었습니다.

이 경우, provide와 inject 두 개의 옵션을 사용하는 의존성 주입을 유용하게 사용할 수 있습니다. `provide` 옵션은 모든 하위 자식들에게 제공하고자 하는 **data** 및 **methods**를 특정할 수 있게 해줍니다. 이 경우에는 **<google-map>** 안의 **getMap** 메소드가 제공하고자 하는 메소드입니다.

```html
<google-map>
    <google-map-region v-bind:shape="cityBoundaries">
        <google-map-markers v-bind:places="iceCreamShops"></google-map-markers>
    </google-map-region>
</google-map>
```

```JS
provide: function() {
    return {
        getMap: this.getMap
    }
}
```

```JS
inject: ['getMap']
```

사실 의존성 주입은 아래의 것들을 제외하면 `장거리 props`라고 생각할 수 있습니다.

- 조상 컴포넌트는 어떤 자손 컴포넌트가 제공한 속성을 사용했는지 알 필요가 없습니다.
- 자손 컴포넌트는 inject된 속성이 어디에서 왔는지 알 필요가 없습니다.

> 의존성 주입의 단점은 어플리케이션 아래 컴포넌트들을 편지 구조로 묶고 어떤 자손 컴포넌트가 제공한 속성을 사용했는지 알 수가 없어 리팩토링을 어렵게 한다. 전달된 속성들은 반응형이 아니기 때문에 디자인적으로 의존성 주입을 중앙 집중형 데이터 저장소(Vuex)를 사용하는 것이 낫다. 

정리하면 공유하고자 하는 속성이 일반적이지 않고 특정되어 있거나 조상 요소로부터 제공된 데이터를 수정할 필요가 있다면 Vuex를 통해 해결할 수 있다.

<br />

### 엘리먼트 & 컴포넌트 접근 - 자식 컴포넌트 인스턴스 및 요소에 접근하기

물론 props와 events가 존재하지만, 가끔 Javascript에서 자식 요소에 직접 접근해야 하는 경우가 있습니다. 이 경우 **ref 속성**을 이용해 자식 요소에 레퍼런스 ID를 할당하여 해결할 수 있습니다. (**$refs는 반응현이 아닙니다.**)

#### base-input template

```HTML
<input ref="input" />
```

```JS
methods: {
    // Used to focus the input from the parent.
    focus: function() {
        this.$refs.input.focus()
    }
}
```

#### Parent Component usage

```HTML
<base-input ref="usernameInput"></base-input>
```

```JS
this.$refs.usernameInput.focus()
```

<br />

### 프로그래밍적 이벤트 리스너

지금까지 본 $emit을 사용하고 v-on으로 듣는 방법 외에도 Vue 인스턴스는 또다른 이벤트 인터페이스 사용 방법을 가지고 있습니다.

 - $on(eventName, eventHandler)을 이용한 **이벤트 청취**
 - $once(eventName, eventHandler)를 이용한 **단발성 이벤트 청취**
 - $off(eventName, eventHandler)를 이용한 **이벤트 청취 중단**

<br />

#### Limit

 - 라이프사이클 훅에서만 picker에 접근할 수 있는 경우, picker가 컴포넌트 인스턴스 안에 저장되어야 합니다. 끔찍한 정도는 아니지만, 다소 어색하게 느껴질 수 있습니다.

 - 셋업을 위한 코드와 제거를 위한 코드가 분리되어 있기에 무언가를 제거하거나 설치하는데 있어 (프로그래밍적으로) 어려워집니다.

```JS
// datepicker를 input에 한 번 연결합니다.
// DOM에 직접 연결됩니다.

mounted: function() {
    // Pikaday는 서드파티 라이브러리 입니다.

    this.picker = new Pikaday({
        field: this.$refs.input,
        format: 'YYYY-MM-DD',
    })
},
// 컴포넌트를 destory 하기 직전에 
// datepicker를 destroy합니다.
beforeDestory: function() {
    this.picker.destroy()
}
```

프로그래밍적 리스너를 이용하면 위 두가지 이슈를 모두 해결할 수 있습니다.

```JS
// datepicker를 input에 한 번 연결합니다.
// DOM에 직접 연결됩니다.

mounted: function() {
    // Pikaday는 서드파티 라이브러리 입니다.

    this.picker = new Pikaday({
        field: this.$refs.input,
        format: 'YYYY-MM-DD',
    })
},
// 컴포넌트를 destory 하기 직전에 
// datepicker를 destroy합니다.
beforeDestory: function() {
    this.picker.destroy()
}
```

```JS
mounted: function() {

    var picker = new Pikaday({
        field: this.$refs.input,
        format: 'YYYY-MM-DD',
    })

    this.$once('hook:beforeDestory', function() {
        picker.destory()
    })
},
```

```JS
// datepicker를 input에 한 번 연결합니다.
// DOM에 직접 연결됩니다.

mounted: function() {
    this.attachDatepicker('startDateInput')
    this.attachDatepicker('endDateInput')
},
methods: {
    attachDatepicker: function(refName) {
        var picker = new Pikaday({
            field: this.$refs[refName],
            format: 'YYYY-MM-DD',
        })

        this.$once('hook:beforeDestory', function() {
            picker.destory()
        })
    }
}
```

<br />

### 순환 참조 - 재귀 컴포넌트

컴포넌트는 재귀적으로 템플릿 안에서 호출될 수 있습니다. 하지만 name 옵션을 이용해서만 호출될 수 있습니다.

```JS
name: 'unique-name-of-my-component'
```

Vue.component를 이용해 컴포넌트를 전역으로 등록하는 경우, 전역 ID는 자동으로 컴포넌트의 name 옵션의 값으로 설정됩니다.

```JS
Vue.component('unique-name-of-my-componen', {
    // ...
})
```

주의하지 않으면 재귀 컴포넌트는 무한루프를 발생시킬 수도 있습니다. "**max stack size exceeded**(최대 스택 사이즈가 초과되었습니다)"에러를 출력하므로, 재귀적 출력하므로, 재귀적 호출에 올바른 조건이 설정되어 있는지 확인하여야 합니다. 결론으로는 추천하지 않습니다.

```JS
name : 'stack-overflow',
template: '<div><stack-overflow></stack-overflow></div>'
```

<br />

### 순환 참조 - 두 컴포넌트 사이의 순환 참조

Finder나 File Explorer 같은 파일 디렉토리 트리를 만드는 경우를 생각해보자.

#### tree-folder template

```HTML
<p>
    <span>{{ folder.name }}</span>
    <tree-folder-contents :children="folder.children" />
</p>
```

#### tree-folder-contents template

```HTML
<ul>
    <li v-for="child in children">
        <tree-folder v-if="child.children" :folder="child" />
        <span v-else>{{ child.name }}</span>
    </li>
</ul>
```

하지만 만약에 모듈 시스템을 이용해(즉, Webpack 이나 Browserify를 이용해) require 혹은 import를 시도한 경우, 아래와 같은 에러가 발생합니다.

> Failed to mount  component: template or render function not defined.


tree-folder-component 컴포넌트가 패러독스를 발생시키는 자식 요소라는 것을 알고 있으므로, `beforeCreate` 라이프사이클 훅이 호출되기를 기다렸다가 컴포넌트를 등록합니다.

```JS
befoeCreate: function() {
    this.$options.components.TreeFolderContents = require('./tree-folder-contents.vue').default
}
```

```JS
components: {
    TreeFolderContents: () => import('./tree-folder-contents.vue')
}
```

<br />

### 템플릿을 정의하는 다른 방법 - 인라인 템플릿

특수한 속성인 inline-template 가 자식 컴포넌트에 존재하는 경우, 컴포넌트는 이를 분리된 컨텐츠로 보지 않고 현재 템플릿 안에 있는 컨텐츠로 취급합니다. 이는 좀 더 유연한 템플릿 설계가 가능하게 합니다.

인라인 템플릿은 Vue가 연결된 DOM 엘리먼트 내부에 정의되어야 합니다.

```HTML
<my-component inline-template>
    <div>
        <p>이는 컴포넌트 자신의 템플릿으로써 컴파일되었습니다.</p>
        <p>부모에 인용된 컨텐츠가 아닙니다.</p>
    </div>
</my-component>
```

<br />

### 템플릿을 정의하는 다른 방법 - X templates

템플릿을 스크립트 엘리먼트 안에 정의하는 또 다른 방법으로써, text/x-template 타입을 이용해 템플릿을 id로 참조할 수 있습니다. 작성한 x-template는 Vue가 연결된 DOM 엘리먼트의 바깥에서 정의되어야 합니다.

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