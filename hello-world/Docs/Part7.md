# Vuex

## Vuex Basic

### Vuex란?

#### 개념

Vuex는 Vue.js 애플리케이션에 대한 **상태 관리 패턴** + **라이브러리**입니다. 애플리케이션의 모든 컴포넌트에 대한 `중앙 집중식 저장소 역할`을 하며 예측 가능한 방식으로 **상태를 변경**할 수 있습니다. 또한 Vue의 공식 devtools 확장 프로그램과 통합되어 설정 시간이 필요 없는 디버깅 및 상태 스냅 샷 **내보내기/가져오기**와 같은 고급 기능을 제공합니다.

- 상태 관리 패턴이란 무엇인가?
  
  - `상태`는 앱을 작동시키는 원본 소스입니다.
  
  - `뷰`는 이 상태의 선언적 매핑입니다.
  
  - `액션`은 뷰에서 사용자 입력에 대해 반응적으로 상태를 바꾸는 방법입니다.

```JS
new Vue({
    // 상태
    data() {
        return {
            count: 0
        }
    },
    // 뷰
    template: `
    <div>{{ count }} </div>
    `,
    // 액션
    methods: {
        increment() { 
            this.count++;
        }
    }
})
```

<br />

그러나 공통의 상태를 공유하는 여러 컴포넌트가 있는 경우 단순함이 빠르게 저하됩니다.

 1. 여러 뷰는 같은 상태에 의존합니다.
 2. 서로 다른 뷰의 작업은 동일한 상태를 반영해야 할 수 있습니다.

![Vuex](https://v3.vuex.vuejs.org/vuex.png)

첫번째 문제의 경우, **지나치게 중첩된 컴포넌트**를 통과하는 **prop**은 장황할 수 있으며 형제 컴포넌트에서는 작동하지 않습니다.

두번째 문제의 경우, **직접 부모/자식 인스턴스를 참조**하거나 **이벤트**를 통해 상태의 여러 복사본을 변경 및 동기화하려는 등의 해결 방법을 사용해야 합니다. 이러한 패턴을 모두 불안정하고 유지보수가 불가능한 코드로 빠르게 변경됩니다.

그렇다면 컴포넌트에서 공유된 상태를 추출하고 이를 전역 싱글톤(Singleton)으로 관리해야 합니다. 이를 통해 우리의 컴포넌트 트리는 커다란 `뷰`가 되며 모든 컴포넌트는 트리에 상관없이 액세스하거나 동작을 트리거 할 수 있습니다! 또한 상태 관리 및 특정 규칙 적용과 관련된 개념을 정의하고 분리함으로써 코드의 구조와 유지 관리 기능을 향상시킵니다.

<br />

 - 언제 사용해야 하나요??
   
   - **Learning Curve** : `Vuex`는 공유된 상태 관리를 처리하는 데 유용하지만, 개념에 대한 이해와 시작하는 비용도 함께 듭니다.
   
   - **Opportunity Cost** : 단기간과 장기간 생산성 간의 기회 비용이 있습니다.

대규모 SPA 를 구축하지 않고 Vuex로 바로 뛰어 들었다면, 시간이 오래 걸리고 힘든 일일 것입니다. **앱이 단순하다면** Vuex 없이 충분합니다. 간단한 글로벌 이벤트 버스만 있으면 됩니다.

그러나 중대형 규모의 SPA를 구축하는 경우 Vue 컴포넌트 외부의 상태를 보다 잘 처리할 수 있는 방법을 생각하게 될 가능성이 있습니다. 결국 Vuex는 자연스럽게 선택할 수 있는 단계가 될 수도 있습니다.

<br />

#### 설치

**직접 다운로드/CDN**

Unpkg.com은 NPM 기반 CDN 링크를 제공합니다. 이 링크는 항상 NPM의 최신 릴리즈를 가리킵니다. https://unpkg.com/vuex@2.0.0과 같은 URL을 통해 특정 버전/태그를 사용할 수도 있습니다.

Vue 뒤에 vuex를 추가하면 자동으로 설치(추가) 됩니다.

```HTML
<script src="/path/to/vue.js"></script>
<script src="/path/to/vuex.js"></script>

<script>
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
</script>
```

**NPM**
```SHELL
npm install vuex --save
```

**YARN**
```SHELL
yarn add vuex
```

<br />

#### 시작하기

모든 Vuex 애플리케이션의 중심에는 `store`가 있습니다. `store`는 기본적으로 애플리케이션 상태를 보유하고 있는 컨테이너입니다. `Vuex`  저장소가 일반 전역 개체와 두 가지 다른 점이 있습니다. 

 1. Vuex store는 반응형입니다. Vue 컴포넌트 상태를 검색할 때 저장소의 상태가 변경되면 효율적으로 대응하고 업데이트 합니다.
 2. 저장소의 상태를 직접 변경할 수 없습니다. 저장소의 상태를 변경하는 유일한 방법은 명시적인 **커밋**(commit)을 이용한 **변이(mutation)**입니다. 이렇게 하면 모든 상태에 대한 추적이 가능한 기록이 남을 수 있으며 툴을 사용하여 앱을 더 잘 이해할 수 있습니다.


**가장 단순한 저장소**

`state`객체에 **store.state**로 접근하여 `store.commit` 메소드로 상태 변경을 트리거할 수 있습니다.

다시 말해, "store.state.count"를 **직접 변경**하는 대신 `변이를 수행하는 이유`는 명시적으로 **추적**을 하기 때문입니다. 이 간단한 규칙에 따라 의도를 보다 명확하게 표현할 수 있으므로 코드를 읽을 때 상태 변화를 더 잘 지켜볼 수 있습니다. 또한, Vue Devtools 모든 변이를 기록하고 상태 스냅샷을 저장하거나 시간 흐름에 따라 디버깅을 할 수 있는 도구를 제공합니다.

컴포넌트 안에서 **store state를 사용**하는 것은 단순히 계산된 속성 내에서 상태를 반환하는 것입니다. 변경을 트리거 하는 것은 컴포넌트 메소드에서 변경을 커밋하는 것을 의미합니다.

```JS
// 모듈 시스템을 사용하는 경우 Vue.use(Vuex)를 먼저 호출해야합니다.

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment(state) {
            state.count++;
        }
    }
})

store.commit('increment')

console.log(store.state.count)  // 1
```

<br />

### 상태

#### 상태

**단일 상태 트리**

Vuex는 `단일 상태 트리(Single state tree)`를 사용합니다. 즉, 이 단일 객체는 모든 애플리케이션 수준의 상태를 포함하며 `원본 소스(single source of truth)` 역할을 합니다. 이는 각 애플리케이션마다 하나의 저장소만 갖게 된다는 것을 의미합니다. 단일 상태 트리를 사용하면 특정 상태를 쉽게 찾을 수 있으므로 디버깅을 위해 현재 앱 상태의 스냅 샷을 쉽게 가져올 수 있습니다. 그리고 단일 상태 트리는 모듈성과 충돌하지 않습니다.

**Vuex 상태를 Vue 컴포넌트에서 가져오기**

 - Q) Vue 컴포넌트에서 저장소 내부의 상태를 어떻게 표시할까?
 - A) Vuex 저장소는 `반응적`이기 때문에 저장소에서 상태를 "검색"하는 가장 간단한 방법은 계산된 속성(Computed property)내에서 일부 저장소 상태를 가져오는 것입니다.

**store.state.count**가 변경되면 계산된 속성(Computed)이 다시 변경되고 관련 DOM 업데이트가 트리거 됩니다. **그러나** 이 패턴은 컴포넌트가 전역 저장소 단독 항목에 의존하게 합니다.

```JS
const Counter = {
    template: `<div>{{ count }} </div>`,
    computed: {
        count() {
            return store.state.count
        }
    }
}
```

<br />

**Vuex 상태를 Vue 컴포넌트에서 가져오기**

Vuex는 store 옵션(Vue.use(Vuex)에 의해 가능)으로 루트 컴포넌트의 모든 자식 컴포넌트에 저장소를 "주입(inject)"하는 메커니즘을 제공합니다.

```JS
const app = new Vue({
    el: '#app',
    // `store`옵션을 사용하여 저장소를 제공하십시오.
    store,
    components: { Counter },
    template: `
    <div class="app">
        <counter></counter>
    </div>
    `
})
```

루트 인스턴스에 store 옵션을 제공함으로써 저장소는 루트의 모든 하위 컴포넌트에 주입되고 this.$store로 사용할 수 있습니다.

```JS
const Counter = {
    template: `<div>{{ count }}</div>`,
    computed: {
        count() {
            return this.$store.state.count
        }
    }
}
```

<br />

#### mapState 헬퍼

컴포넌트가 여러 저장소 상태 속성이나 getter를 사용해야하는 경우 계산된 속성을 모두 선언하며 반복적이고 장황해집니다. 이를 처리하기 위해 우리는 계산된 getter 함수를 생성하는 mapState 헬퍼를 사용하여 키 입력을 줄일 수 있습니다. 또한 매핑된 계산된 속성의 이름이 상태 하위 트리 이름과 같을 때 문자열 배열을 mapState에 전달할 수 있습니다.

```JS
// 독립 실행 형 빌드에서 헬퍼가 Vuex.mapState로 노출
import { mapState } from 'vuex'

export default {
    // ...
    computed: mapState({
        // 화살표 함수는 코드를 매우 간결하게 만들어줍니다.
        count: state => state.count,

        // 문자열 값 'count'를 전달하는 것은 `state => state.count`와 같습니다.
        countAlias: 'count',

        // `this`를 사용하여 로컬 상태에 액세스하려면 일반적인 함수를 사용해야합ㄴ디ㅏ.
        countPlusLocalState(state) {
            return state.count + this.localCount
        }

        // this.count를 store.state.count에 매핑합니다.
        'count'
    })
}
```

<br />

**객체 전개 연산자(Object Spread Operator)**

mapState는 객체를 반환합니다.

- Q) 다른 로컬 영역의 계산된 속성과 함꼐 사용하려면 어떻게 해야 하나요?
- A) 일반적으로, 최종 객체를 computed에 전달할 수 있도록 여러 객체를 하나로 병합하는 유리틸리를 사용해야합니다. 그러나 객체 전개 연산자(Object Spread Operator)를 사용하면 문법을 매우 단순화할 수 있습니다.

```JS
computed: {
    localComputed() { /* ... */},
    ...mapState({
        // ...
    })
}
```

> 주의: Vuex를 사용한다고해서 Vuex에 모든 상태를 넣어야하는 것은 아닙니다. Vuex에 더 많은 상태를 넣으면 상태 변이가 더 명확하고 디버그 가능하지만, 때로는 코드를 보다 장황하고 간접적으로 만들 수 있습니다. 상태 조각이 단일 컴포넌트에 엄격하게 속한 경우 로컬 상태로 남겨둘 수 있습니다. 기회 비용을 판단하고 앱의 개발 요구에 맞는 결정을 내려야 합니다.

<br />

### Getters

저장소 상태를 기반하는 상태를 계산해야 할 수도 있습니다.

```JS
computed: {
    doneTodosCount() {
        return this.$store.state.todos.filter(todo => todo.done).length
    }
}
```

둘 이상의 컴포넌트가 이를 사용해야 하는 경우 함수를 복제하거나 공유된 헬퍼를 추출하여 여러 위치에서 가져와야 합니다. 둘 다 이상적이지 않습니다.

Vuex를 사용하면 저장소에서 `getters`를 정의할 수 있습니다. 저장소(store)의 계산된 속성(computed)으로 생각할 수 있습니다. 계산된 속성처럼 getter의 결과는 종속성에 따라 캐쉬(cache)되고, 일부 종속성이 변경된 경우에만 다시 재계산 됩니다. Getters는 첫 번째 전달인자로 상태를 받습니다.

```JS
const store = new Vuex.Store({
    state: {
        todos: [
            { id: 1, text: '...', done: true },
            { id: 2, text: '...', done: false },
        ]
    },
    getters: {
        doneTodos: state => {
            return state.todos.filter(todo => todo.done)
        }
    }
})
```

<br />

**속성 유형 접근**

`getters`는 store.getters 객체에 노출되고, 속성으로 값에 접근할 수 있습니다. 그리고 Getters는 두 번쨰 전달인자로 다른 getter도 받게 됩니다.

```JS
getters: {
    // ...
    doneTodosCount: (state, getters) => {
        return getters.doneTodos.length
    }
}

store.getters.doneTodosCount // -> 1

computed: {
    doneTodosCount() {
        return this.$store.getters.doneTodosCount
    }
}
```

<br />

**메소드 유형 접근**

함수를 반환하여 getter에 전달인자로 전달할 수도 있습니다. 이것은 저장소의 배열을 검색할 때 특히 유용합니다.

메서드를 통해 접근하는 gettter는 호출 할 때마다 실행되며 결과가 캐시되지 않는다는 것을 유의해야 합니다.

```JS
getters: {
    // ...
    getTodoById: (state) => (id) => {
        return state.todos.find(todo => todo.id === id)
    }
}
```

<br />

**mapGetters 헬퍼**

mapGetters 헬퍼는 저장소 getter를 로컬 계산된 속성에 매핑합니다.

```JS
import { mapGetters } from 'vuex'

export default {
    // ...
    computed: {
        // getter를 객체 전개 연산자(Object Spread Operator)로 계산하여 추가합니다.
        ...mapGetters({
            'doneTodosCount',
            'anotherGetter',
            // ...
        })
    }
}
```

<br />

## 변이(Mutation)

### 변이

Vuex 저장소에서 실제로 상태를 변경하는 유일한 방법은 mutation 하는 것입니다. Vuex Mutation은 이벤트와 매우 유사합니다. 각 mutation에는 타입 문자열 핸들러가 있습니다. 핸들러 함수는 실제 상태 수정을 하는 곳이며, 첫 번째 전달인자로 상태를 받습니다.

```JS
const store = new Vuex.Store({
    state: {
        count: 1
    },
    mutations: {
        increment(state) {
            // 상태 변이
            state.count++;
        }
    }
})
```

Mutation 핸들러를 직접 호출 할 수 없습니다. 타입이 increment인 mutation이 발생하면 이 핸들러를 호출합니다. mutation 핸들러를 호출하려면 해당 타입과 함께 store.commit을 호출해야 합니다.

```JS
store.commit('increment')
```

### 페이로드를 가진 Commit

Mutation에 대해 payload를 store.commit에 추가 전달인자로 사용할 수 있습니다.

```JS
mutations: {
    increment (state, n) {
        state.count += n
    }
}

store.commit('increment', 10)

mutations: {
    increment (state, payload) {
        state.count += payload.amount
    }
}

store.commit('increment', {
    amount: 10
})
```