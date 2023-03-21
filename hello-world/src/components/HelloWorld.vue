<template>
    <div>
        <!--  기본 사용법 - 다중 셀렉트 -->
        <div>
            <select v-model="selected">
                <option disabled value="">Please select one</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
            </select>
            <span>선택: {{ selected }}</span>
        </div>
        <!--  기본 사용법 - 셀렉트(v-for) -->
        <div>
            <select v-model="selectedStatement">
                <option v-for="(option, index) in options" 
                        :value="option.value"
                        :key="option.value + '-' + index">
                    {{option.text}}
                </option>
            </select>
            <span>선택: {{ selectedStatement }}</span>
        </div>
    </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script>

<script>
export default {
    name: 'HelloWorld',
    data() {
       return {
            selected: '',
            selectedStatement: [],
            options: [
            {text: 'One', value: 'A'},
            {text: 'Two', value: 'B'},
            {text: 'Three', value: 'C'},
        ]
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