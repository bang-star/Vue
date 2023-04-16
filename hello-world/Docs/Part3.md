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