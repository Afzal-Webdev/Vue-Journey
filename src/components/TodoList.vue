<template>
 <div class="flex justify-center items-center">
    <input
      type="text"
      v-model="todo"
      placeholder="Task"
      @keyup.enter="addTodo"
      class="border border-green-500 focus:ring focus:ring-green-300 focus:border-green-500 rounded-lg py-2 px-4 transition duration-200"
    />
  </div>
  <div class="max-w-md mx-auto my-2">
    <ul class="bg-white shadow-md rounded-lg divide-y divide-gray-200">
      <li
        v-for="todo in todos"
        :key="todo.id"
        class="flex items-center justify-between py-2 px-4 hover:bg-gray-100 transition duration-200"
      >
        <div class="flex items-center">
          <input
            type="checkbox"
            v-model="todo.completed"
            class="form-checkbox h-5 w-5 text-green-500 focus:ring-green-400"
          />
          <span :class="{ 'line-through text-gray-400': todo.completed }" class="ml-2">
            {{ todo.title }}
          </span>
        </div>
      </li>
    </ul>
    <p class="mt-4 text-center text-gray-700">
      Number of Completed Tasks: {{ numberOfCompletedTodos }}
    </p>
  </div>
</template>

<script>
import { computed, ref, watch } from 'vue'

export default {
  setup () {
    const todo = ref('')
    const todos = ref([])
    let id = 0

    const numberOfCompletedTodos = computed(() =>
        todos.value.filter(todo => todo.completed).length
    )

    function addTodo () {
      todos.value.push({
        id: id,
        title: todo.value.trim(),
        completed: false
      })

      todo.value = ''
      id++
    }

    watch(todos, newValue => {
      console.log(`A teendők új száma: ${newValue.length}`)
    }, { deep: true })

    return {
      todo,
      todos,
      addTodo,
      numberOfCompletedTodos
    }
  }
}
</script>