<template>
    <div>
        <h1>Welcome to Vue World</h1>
        <ul id='example-1'>
            <li 
                v-for="todo in todos" 
                v-bind:key="todo.id">
                <span v-if="todo.isComplete">{{ todo.title }}</span>
            </li>
        </ul>
        <ul id='example-2'>
            <li 
                v-for="todo in completedTodos" 
                v-bind:key="todo.id">
                <span>{{ todo.title }}</span>
            </li>
        </ul>
    </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script>

<script>
export default {
    name: 'HelloWorld',
    data() {
        return {
            todos: [
                { id : 1, title: '제목 1', isComplete: false},
                { id : 2, title: '제목 2', isComplete: true},
                { id : 3, title: '제목 3', isComplete: true},
                { id : 4, title: '제목 4', isComplete: false},
                { id : 5, title: '제목 5', isComplete: true},
            ]
        }
    },

    computed: {
        completedTodos() {
            return this.todos.filter(todo => todo.isComplete === true)
        }
    },
    methods: {
    }
}
</script>