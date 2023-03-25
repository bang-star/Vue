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