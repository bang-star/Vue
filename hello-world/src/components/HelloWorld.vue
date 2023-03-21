<template>
    <div>
        <!--  기본 사용법 - 문자열 -->
        <div>
            <input type="text" v-model="message" placeholder="여기를 수정해보세요.">
            <p>메시지: {{ message }}</p>
        </div>
        <!--  기본 사용법 - 여러 줄을 가진 문장 -->
        <div>
            <span>여러 줄을 가지는 메시지: </span>
            <p style="white-space: pre-line">{{ messageTextArea }}</p>
            <br />
            <textarea v-model="messageTextArea" placeholder="여러줄을 입력하세요."></textarea>
        </div>
        <!--  기본 사용법 - 체크박스 -->
        <div>
            <input type="checkbox" id="checkbox-1" v-model="checked">
            <label for="checkbox-1">{{ checked }}</label>
            <br />
        </div>
        <div>
            <input type="checkbox" id="jack" value="jack" v-model="checkNames">
            <label for="jack">Jack</label>
            <input type="checkbox" id="John" value="John" v-model="checkNames">
            <label for="John">John</label>
            <input type="checkbox" id="mike" value="mike" v-model="checkNames">
            <label for="mike">mike</label>
            <input type="checkbox" id="nikol" value="nikol" v-model="checkNames">
            <label for="nikol">nikol</label>
            <br />
            <span>체크한 이름: {{ checkNames }}</span>
        </div>
        <!--  기본 사용법 - 라디오 -->
        <div>
            <input type="radio" id="one" value="One" v-model="picked">
            <label for="one">One</label>
            <input type="radio" id="two" value="Two" v-model="picked">
            <label for="two">Two</label>
            <br />
            <span>선택: {{ picked }}</span>
        </div>
        <!--  기본 사용법 - 셀렉트 -->
        <div>
            <select v-model="selected">
                <option disabled value="">Please select one</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
            </select>
            <span>선택: {{ selected }}</span>
        </div>
    </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script>

<script>
export default {
    name: 'HelloWorld',
    data() {
       return {
            message: '',
            messageTextArea: '',
            checked: false,
            checkNames: [],
            picked: true,
            selected: ''
       }
    },
    methods: {
        say: function(message) {
            alert(message)
        },
        warn: function(message, event) {
            // 네이티브 이벤트에 액세스 할 수 있습니다.
            if(event) event.preventDefault()

            alert(message)
        },
        test() {
            alert("submitted")
        }
    },
    computed: {

    }
}
</script>