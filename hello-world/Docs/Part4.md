# Vue.js 문서와 함께 Part4 - Advanced

## 진입-진출 그리고 리스틀 트랜지션

<br />

### Intro

Vue는 항목이 DOM에 삽입, 갱신 또는 제거 될 때 트랜지션 효과를 적용하는 다양한 방법을 제공합니다.

 - CSS 트랜지션 및 애니메이션을 위한 클래스를 자동으로 적용
 - Animate.css 와 같 은 타사 CSS 애니메이션 라이브러리 통합
 - 트랜지션 훅 중에 Javascript를 사용하여 DOM을 직접 조작
 - Velocity.js와 같은 써드파티 Javascript 애니메이션 라이브러리 통합

### 단일 엘리먼트/컴포넌트 트랜지션

Vue는 트랜지션 래퍼 컴포넌트를 제공하므로 다음과 같은 상황에서 모든 엘리먼트 또는 컴포넌트에 대한 진입/진출 트랜지션을 추가할 수 있습니다.

 - 조건부 렌더링(v-if)
 - 조건부 출력(v-show)
 - 동적 컴포넌트
 - 컴포넌트 푸트 노드

```HTML
<div id="demo">
    <button v-on:click="show = !show">
        Toggle
    </button>
    <transition name="fade">
        <p v-if="show">hello</p>
    </transition>
</div>
```

```Javascript
new Vue({
    el: '#demo',
    data: {
        show: true
    }
})

<style>
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>
```

1. Vue는 대상에리먼트에 CSS 트랜지션 또는 애니메이션이 적용되었는지 여부를 자동으로 감지합니다. CSS 트랜지션 클래스가 적절한 타이밍에 추가/제거 됩니다.

2. 트랜지션 컴포넌트가 Javascript 훅를 제공하면 이러한 훅은 적절한 타이밍에 호출됩니다.
3. CSS 트랜지션 / 애니메이션이 감지되지 않고 Javascript 훅이 제공되지 않으면 삽입 도는 제거를 위한 DOM 작업이 다음 프레임에서 즉시 실행됩니다(참고: Vue의 `nextTick` 개념과는 다른 브라우저 애니메이션 프레임)

<br/>

### 트랜지션 클래스

진입/진출 트랜지션에는 6가지 클래스가 적용됩니다.

각 클래스에는 트랜지션 이름이 접두어로 붙습니다. 여기서 **v-접두어**는 **<transition>엘리먼트**를 사용할 때의 기본값입니다.
만약 `<transition name='foo'>`로 지정하면 `v-enter`는 `foo-enter`가 됩니다.

- `v-enter`: enter의 시작 상태. 엘리먼트가 삽입되기 전에 적용되고 한 프레임 후에 제거됩니다.
- `v-enter-active`: enter에 대한 활성 및 종료 상태. 엘리먼트가 삽입되기 전에 적용됩니다. 트랜지션 / 애니메이션이 완료되면 제거됩니다.
- `v-enter-to`: (2.1.8 이상 버전에서 지원) 진입 상태의 끝에서 실행됩니다. 엘리먼트가 삽입된 후 (동시에 v-enter가 제거됨), 트랜지션/애니메이션이 끝나면 제거되는 하나의 프레임을 추가했습니다.
- `v-leave`: leave를 위한 시작 상태. 진출 트랜지션이 트리거될 때 적용되고 한 프레임 후에 제거됩니다.
- `v-leave-acitve`: leave에 대한 활성 및 종료 상태. 진출 트랜지션이 트리거되면 적용되고 트랜지션 / 애니메이션이 완료되면 제거됩니다.
- `v-leave-to`: (2.1.8 이상 버전에서 지원) 진출 상태의 끝에서 실행됩니다. 진출 트랜지션이 트리거되고 (동시에 v-leave가 제거됨), 트랜지션/애니메이션이 끝나면 제거되는 하나의 프레임을 추가했습니다.

[트랜지션 클래스](https://vuejs.org/assets/transition-classes.f0f7b3c9.png)

<br />

### CSS 트랜지션

가장 일반적인 트랜지션 유형 중 하나는 CSS 트랜지션 입니다.

<div id="example-1">
    <button @click="show = !show">
        Toggle
    </button>
    <transition name="slide-fade">
        <p v-if="show">hello</p>
    </transition>
</div>
```

```Javascript
new Vue({
    el: '#example-1',
    data: {
        show: true
    }
})

<style>
/* 애니메이션 집입 및 진출은 다른 지속 시간 및 타이밍 기능을 사용할 수 있습니다. */
.slide-fade-enter-active{
    transition: all .3s ease;
}

.slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
}
</style>
```

- [참고](https://www.w3schools.com/cssref/func_cubic-bezier.php)

<br />

### CSS 애니메이션

CSS 애니메이션은 CSS 트랜지션과 같은 방식으로 적용됩니다. 차이점은 요소가 삽입 된 직후에 v-enter가 제거되지 않지만 animationend 이벤트에 있습니다.

```HTML
<div id="example-2">
    <button @click="show = !show">
        Toggle
    </button>
    <transition name="bounce">
        <p v-if="show">Lorem ...</p>
    </transition>
</div>

<style>
.bounce-enter-active {
    animation: bounce-in .5s;
}
.bounce-leave-active {
    animation:  bounce-in .5s reverse;
}
@keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.5);
    }
    100% {
        transform: scale(1);
    }
}
</style>
```

```JS
new Vue({
    el: '#example-2',
    data: {
        show: true
    }
})
```

<br />

### 사용자 지정 트랜지션 클래스

다음 속성을 제공하여 사용자 정의 트랜지션 클래스를 지정할 수도 있습니다.

- enter-class
- enter-active-class
- enter-to-class (2.1.8+)
- leave-class
- leave-active-class
- leave-to-class (2.1.8+)

```HTML
<link href="https://cdnjs.jsdeliver.net/npm/animate.css@3.5.1" rel="stylesheet" type="text/css">
<div id="example-3">
    <button @click="show = !show">
        Toggle render
    </button>
    <transition 
        name="custom-classes-transition"
        enter-active-class="animated tada"
        leave-active-class="animated bounceOutRight">

        <p v-if="show">Hello</p>
    </transition>
</div>
```

<br />

### 트랜지션과 애니메이션을 함께 사용하기

Vue는 트랜지션이 종료된 시점을 알기 위해 이벤트 리스터를 연결해야 합니다. 적용된 CSS 규칙의 유형에 따라 transitionend 또는 animationend가 될 수 있습니다. 둘 중 하나만 사용하는 경우 Vue는 올바른 유형을 자동으로 감지할 수 있습니다.

그러나 어떤 경우에는 같은 엘리먼트(예: Vue에 의해 트리거 된 CSS 애니메이션)와 함꼐 호버(hover)에 대한 CSS 트랜지션 효과를 둘 다 가질 수도 있습니다. 이러한 경우, type 속성에서 Vue가 지켜 볼 타입을 명시적으로 선언해야 합니다. 값은 animation 또는 transition 입니다.

<br />

### 명시적 트랜지션 지속 시간

대부분의 경우 Vue는 트랜지션이 완료를 자동으로 감지할 수 있습니다. 기본적으로 Vue는 루트 트랜지션 엘리먼트에서 첫 번째 transitioned 또는 animationend 이벤트를 기다립니다. 그러나 이것은 항상 이상적인 것은 아닙니다. 예를 들어, 중첩 된 내부 엘리먼트가 루트 트랜지션 엘리먼트보다 지연된 트랜지션 또는 더 긴 트랜지션 기간을 갖는 다른 엘리먼트와 함께 진행하는 트랜지션 시퀀스를 가질 수 있습니다.

이 경우, **<transition>** 컴포넌트에 duration 속성을 사용하여 명시적인 트랜지션 지속 시간(밀리 초)을 지정할 수 있습니다.

```HTML
<transition :duration="1000">...</transition>

<transition :duration="{enter: 500, leave: 1000}">...</transition>
```

<br />

### Javascript Hook

속성에서 Javascript 훅을 정의할 수 있습니다.

```HTML
<transition
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:after-enter="afterEnter"
    v-on:enter-cancelled="enterCancelled"

    v-on:before-leave="beforeLeave"
    v-on:leave="leave"
    v-on:after-leave="afterLeave"
    v-on:leave-cancelled="leaveCancelled">

</transition>
```

```JS
// ...
methods: {
    // ----------
    // 진입
    // ----------

    beforeEnter: function(el) {
        // ...
    },
    // done 콜백은 CSS와 함께 사용할 때 선택 사항
    enter: function(el, done) {
        // ...
        done()
    },
    afterEnter: function(el) {
        // ...
    },
    enterCancelled: function(el) {
        // ...
    },

    // ----------
    // 진출
    // ----------

    beforeLeave: function(el) {
        /// ...
    },
    leave: function(el, done) {
        /// ...
    }
    afterLeave: function(el) {
        /// ...
    }
    // leaveCancelled은 v-show와 함께 사용됨.
    leaveCancelled: function(el) {
        /// ...
    }
}
```

<br />

### 최초 렌더링 시 트랜지션

노드의 초기 렌더에 트랜지션을 적요하고 싶다면 appear 속성을 추가할 수 있습니다.

```HTML
<transition appear>
    <!-- ... -->
</transition>
```

```HTML
<transition 
    appear
    appear-class="custom-appear-class"
    appear-to-class="custom-appear-to-class" (2.1.8+)
    appear-active-class="custom-appear-active-class">
    <!-- ... -->
</transition>
```

```HTML
<transition 
    appear
    v-on:before-appear="customBeforeAppearHook"
    v-on:appear="customAppearHook"
    v-on:after-appear="customAfterApeearHook"
    v-on:appear-cancelled="customAppearCancelledHook">
    <!-- ... -->
</transition>
```

<br />

### 엘리먼트 간 트랜지션

v-if/v-else를 사용하여 원본 엘리먼트 사이를 트랜지션 할 수도 있습니다. 가장 일반적인 두 엘리먼트 트랜지션 중 하나는 목록 컨테이너와 빈 목록을 설명하는 메시지 사이에 사용됩니다.

같은 태그 이름을 가진 엘리먼트 사이를 트랜지션 할때, Vue에 고유한 `key 속성`을 부여함으로써 별개의 엘리먼트임을 명시해주어야 합니다. 그렇지 않으면 Vue의 컴파일러는 효율성을 위해 엘리먼트의 내용만 변경합니다.

```HTML
<transition>
    <table v-if="items.length > 0">
        <!-- ... -->
    </table>
    <p v-else>Sorry, no items found.</p>
</transition>
```

```HTML
<transition>
    <button v-if="isEditing" key="save">
        Save
    </button>
    <button v-else key="edit">
        Edit
    </button>
</transition>
```

```HTML
<transition>
    <button v-bind:key="isEditing">
        {{ isEditing ? 'Save' : 'Edit'}}
    </button>
</transition>
```


실제로 여러 개의 v-if를 사용하거나 하나의 엘리먼트를 동적 속성에 바인딩하여 여러 엘리먼트 사이를 트랜지션 할 수 있습니다.

```HTML
<transition>
    <button v-if="docState === 'saved'" key="saved">
        Edit
    </button>
    <button v-if="docState === 'edited'" key="edited">
        Save
    </button>
    <button v-if="docState === 'editing'" key="editing">
        Cancel
    </button>
</transition>
```

```HTML
<transition>
    <button v-bind:key="docSate">
        {{ buttonMessage }}
    </button>
</transition>
```

```JS
computed: {
    buttonMessage: function() {
        switch(this.docState) {
            case 'saved': return 'Edit'
            case 'edited': return 'Save'
            case 'editing': return 'Cancel'
        }
    }
}
```

<br />

### 트랜지션 모드

동시 들어가고 떠나는 트랜지션이 항상 바람직한 것은 아니기 때문에 Vue는 몇 가지 대안을 제공합니다.

in-out 모드는 자주 사용되지 않지만 떄로는 약간 다른 트랜지션 효과에 유용할 수 있습니다.

- in-out: 처음에는 새로운 엘리먼트가 트랜지션되고, 완료되면 현재 엘리먼트가 트랜지션됩니다.
- out-in: 현재 엘리먼트가 먼저 트랜지션되고, 완료되면 새로운 요소가 바뀝니다.

<br />

### 컴포넌트 트랜지션

컴포넌트 사이의 트랜지션은 더욱 간단합니다. 우리는 key 속성이 필요 없습니다. 대신, 우리는 동적 컴포넌트를 래핑합니다.

```HTML
<transition name="component-fade" mode="out-in">
    <component v-bind:is="view"></component>
</transition>

<script>
new Vue({
    el: '#transition-components-demo',
    data: {
        view: 'v-a'
    },
    components: {
        'v-a': {
            template: '<div>Component A</div>'
        },
        },
        'v-b': {
            template: '<div>Component B</div>'
        }
    }
})
</script>

<style scoped>
.component-fade-enter-active, .component-fade-leave-active {
    transition: opacity .3s ease;
}

.component-fade-enter, .component-fade-leave-to {
    opacity: 0;
}
</style>
```

<br />

### 리스트 트랜지션

**ASIS**
  - 개별 노드들
  - 한번에 하나만 렌더링 되는 여러 노드

<br />

**TOBE**

**<transition-group>**: v-for를 사용하여 동시에 렌더링 하고자 하는 항목의 전체 목록이 있는 경우

 - `<transition>`과 달리, 실제 요소인 <span>을 렌더링합니다. tag 속성으로 렌더링 된 요소를 변경할 수 있습니다.
 - 여러 노드 사이에서 변경하지 않기 때문에, transition mode는 사용할 수 없습니다.
 - 엘리먼트의 내부 구현은 항상 필요합니다. 고유한 key 속성을 갖습니다.
 - CSS 트랜지션 클래스는 그룹 보다는 내부의 엘리먼트에 적용됩니다.

<br />

#### 리스트의 진입/진출 트랜지션

```HTML
<div id="list-demo">
    <button v-on:click="add">Add</button>
    <button v-on:click="remove">Remove</button>
    <transition-group name="list" tag="p">
        <span v-for="item in items" v-bind:key="item" class="list-item">
            {{ item }}
        </span>
    </transition-group>
</div>

<script>
new Vue({
    el: '#list-demo',
    data: {
        items: [1,2,3,4,5,6,7,8,9],
        nextNum: 10
    },
    methods: {
        randomIndex: function() {
            return Math.floor(Math.random() * this.items.length)
        },
        add: function() {
            this.items.splice(this.randomIndex(), 0, this.nextNum++)
        },
        remove: function() {
            this.items.splice(this.randomIndex(), 1)
        }
    }
})
</script>

<style>
.list-item {
    display: inline-block;
    margin-right: 10px;
}
.list-enter-active, .list-leave-active {
    transition: all 1s;
}

.list-enter, .list-lave-to /* .list-leave-active below verstion 2.1.8 */ {
    opacity: 0;
    transforM; translateY(30px);
}
</style>
```

<br />

#### 리스트 이동 트랜지션

`<transition-group>` 컴포넌트는 또 다른 속임수를 가지고 있습니다. 진입과 진출 뿐만 아니라 `위치의 변화`도 생생하게 표현할 수 있습니다. 이 기능을 사용하기 위해 알아야 할 유일한 새로운 개념은 아이템이 위치를 바꿀 때 추가되는 v-mode 클래스를 추가흔 것입니다. 다른 클래스와 마찬가지로 접두어는 제공된 name 속성 값과 일치하며 move-class 속성을 사용하여 클래스를 수동으로 지정할 수 있습니다.

```HTML
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.14.1/lodash.min.js"></script>
<div id="flip-list-demo" class="demo">
    <button @click="shuffle">Shuffle</button>
    <transition-group name="flip-list" tag="ul">
        <li v-for="item in items" v-bind:key="item">
            {{ item }}
        </li>
    </transition-group>
</div>

<script>
new Vue({
    el: '#flip-list-demo',
    data: {
        items: [1,2,3,4,5,6,7,8,9],
        nextNum: 10
    },
    methods: {
        shuffle: function() {
            this.items = _.shuffle(this.items)
        }
    }
})
</script>

<style>
.flip-list-move {
    transition: transform 1s;
}
</style>
```

<br />

### 트랜지션 재사용

트랜지션은 Vue의 컴포넌트 시스템을 통해 재사용할 수 있습니다. 재사용할 수 있는 트랜지션을 만들려면 루트에 <transition> 또는 <transition-group> 컴포넌트를 놓은 다음 자식을 트랜지션 컴포넌트에 전달하면 됩니다.

```JS
Vue.component('my-special-transition', {
    template: ''
})
```

![image](https://user-images.githubusercontent.com/63120360/233833616-20262b8b-a286-473d-95c9-acfa9159bdeb.png)

<br />

## 상태 트랜지션

### Intro

- 숫자와 계산
- 색 표시
- SVG 노드의 위치
- 엘리먼트의 크기 및 기타 속성

<br />

### [감시자를 이용한 상태 애니메이션](https://v2.ko.vuejs.org/v2/guide/transitioning-state.html#%EA%B0%90%EC%8B%9C%EC%9E%90%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EC%83%81%ED%83%9C-%EC%95%A0%EB%8B%88%EB%A9%94%EC%9D%B4%EC%85%98)

감시자를 사용하면 숫자 속성의 변경 사항을 다른 속성으로 애니메이션 할 수 있습니다.

```HTML
<div id="animated-number-demo">
    <input v-model.number="number" type="number" step="20">
    <p>{{ animatedNumber }}</p>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js"></script>

<script>
new Vue({
    el: '#animated-number-demo',
    data: {
        number: 0,
        tweenedNumber: 0
    },
    computed: {
        animatedNumber: function() {
            return this.tweenedNumber.toFixed(0);
        }
    },
    watch: {
        number: function(newVal) {
            TweenLite.to(this.$data, 0.5, {tweenedNumber: newValue})
        }
    }
})
</script>
```

<br />

### [컴포넌트를 이용한 트랜지션 구성](https://v2.ko.vuejs.org/v2/guide/transitioning-state.html#%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%ED%8A%B8%EB%9E%9C%EC%A7%80%EC%85%98-%EA%B5%AC%EC%84%B1)

여러 상태 트랜지션을 관리하면 Vue 인스턴스 또는 컴포넌트의 복잡성을 빠르게 높일 수있습니다. 다행히도 많은 애니메이션을 전용 하위 컴포넌트로 추출 할 수 있습니다.

```HTML
<script src="https://cdn.jsdelivr.net/npm/tween.js@16.3.4"></script>

<div id="example-8">
  <input v-model.number="firstNumber" type="number" step="20"> +
  <input v-model.number="secondNumber" type="number" step="20"> =
  {{ result }}
  <p>
    <animated-integer v-bind:value="firstNumber"></animated-integer> +
    <animated-integer v-bind:value="secondNumber"></animated-integer> =
    <animated-integer v-bind:value="result"></animated-integer>
  </p>
</div>
```

<br />

## 믹스인 

Mixins는 Vue 컴포넌트에 재사용 가능한 기능을 배포하는 유연한 방법입니다. mixin 객체는 모든 구성 요소 옵션을 포함할 수 있습니다. 컴포넌트에 mixin을 사용하면 해당 mixin의 모든 옵션이 컴포넌트의 고유 옵션에 "혼합"됩니다.

```JS
var myMixin = {
    created: function() {
        this.hello()
    },
    methods: {
        hello: function(){

        }
    }
}

var Component = Vue.extend({
    mixins: [myMixin]
})

var component = new Component()     // => "hello from mixin!"
```

<br />

### 옵션 병합

mixin과 컴포넌트 자체에 중첩 옵션이 포함되어 있으면 적절한 전략을 사용하여 "병합"됩니다.

```JS
var mixin = {
    data: function() {
        return {
            message: 'hello',
            foo: 'abc'
        }
    }
}

new Vue({
    mixins: [mixin],
    data: function() {
        return {
            message: 'goodbye',
            bar: 'def'
        }
    },
    created: function() {
        console.log(this.$data)
        // => { message: 'goodbye', foo: 'abc', bar: 'def'}
    }
})
```

같은 이름의 훅 함수가 배열에 병합되어 모든 함수가 호출됩니다. 또한 mixin 훅은 컴포넌트 자체의 훅 이전에 호출됩니다.

```JS
var mixin = {
    created: function() {
        console.log('mixin hook called')
    }
}

new Vue({
    mixins: [mixin],
    created: function() {
        console.log('component hook called')
    }
})

// => 'mixin hook callled'
// => 'component hook called'
```

methods, components, directives와 같은 객체 값을 요구하는 옵션은 같은 객체에 병합됩니다. 이러한 객체에 충돌하는 키가 있을 경우 컴포넌트의 옵션이 우선순위를 갖습니다.

```JS
var mixin = {
    methods: {
        foo: function() {
            console.log('foo')
        },
        conflicting: function() {
            console.log('from mixin')
        }
    }
}

var vm = new Vue({
    mixins: [mixin],
    methods: {
        bar: function() {
            console.log('bar')
        },
        conflicting: function() {
            console.log('from mixin')
        }
    }
})
```

<br />

### 전역 Mixin

mixin은 전역으로 적용할 수 있습니다. 주의하세요! mixin을 전역으로 적용하면 이후에 생성된 모든 Vue 인스턴스에 영향을 미칩니다. 적절히 사용하면 사용자 정의 옵션에 대한 처리 로직을 주입하는 데 사용할 수 있습니다.

```JS
// 'myOption' 사용자 정의 옵션을 위한 핸들러 주입
VUe.mixin({
    created: function() {
        var myOption = this.$options.myOption
        if(myOption) {
            console.log(myOption)
        }
    }
})

new Vue({
    myOption: 'hello!'.
})

// => 'hello!'
```

<br />

### 사용자 정의 옵션 병합 전략

사용자 지정 옵션을 병합할 때 기본 옵션을 사용하면 기존 값을 덮어씁니다. 커스텀 로직을 사용해 커스텀 옵션을 병합하려면, Vue.config.optionMergeStrategies에 함수를 추가할 필요가 있습니다.

```JS
Vue.config.optionMergeStrategies.myOption = function(toVal, fromVal) {
    // return 병합된 값2
}
```

대부분의 객체 기반 옵션에서 methods에서 사용한 것과 같은 전략을 간단하게 사용할 수 있습니다.

```JS
var strategies = Vue.config.optionMergeStrategies
strategies.myOption = strategies.methods
```

<br />

## 사용자 지정 디렉티브

### 기본 설명

Vue는 코어에 포함된 기본 디렉티브 세트(v-model과 v-show) 외에도 `사용자 정의 디렉티브`를 등록할 수 있습니다. Vue 2.0 에서 코드 재사용 및 추상화의 기본 형식은 컴포넌트입니다. 그러나 일반 엘리먼트에 하위 수준의 DOM 액세스가 필요한 경우가 있을 수 있으며 이 경우 사용자 지정 디렉티브가 여전히 유용할 수 있습니다.

페이지 로드되면 해당 엘리먼트는 포커스를 얻습니다.(참고: autofocus는 모바일 사파리에서 작동하지 않습니다.) 이 페이지를 방문한 이후 다른 것을 클릭하지 않았다면 input 엘리먼트에 포커스가 되어 있어야 합니다.

```JS
// 전역 사용자 정의 디렉티브 v-focus 등록
Vue.directive('focus', {
    // 바인딩 된 엘리먼트가 DOM에 삽입되었을 때
    inserted: function(el) {
        /* 엘리먼트에 포커스를 줍니다. */
        el.focus();
    }
})
```

```JS
directives: {
    focus: {
        // 디렉티브 정의
        inserted: function(el) {
            el.focus()
        }
    }
}
```

```HTML
<input v-focus>
```

### hook 함수

디렉티브 정의 객체는 여러가지 훅 함수를 제공할 수 있습니다.

- bind: 디렉티브가 처음 엘리먼트에 바인딩 될 때 한번만 호출됩니다. 이곳에서 일회성 설정을 할 수 있습니다.
- inserted: 바인딩 된 엘리먼트가 부모 노드에 삽입 되었을 때 호출 됩니다. (이것은 부모 노드 존재를 보장하며 반드시 document 내에 있는 것은 아닙니다.)
- update: 포함하는 컴포넌트가 업데이트 된 후 호출됩니다. 그러나 자식이 업데이트 되기 전일 가능성이 있습니다. 디렉티브의 값은 변경되었거나 변경되지 않았을 수 있지만 바인딩의 현재 값과 이전 값을 비교하여 불필요한 업데이트를 건너 뛸 수 있습니다.
- componentUpdated: 포함하고 있는 컴포넌트와 그 자식들이 업데이트된 후에 호출됩니다.
- unbind: 디렉티브가 엘리먼트로부터 언바이딩된 경우에만 한 번 호출됩니다.
