<template>
    <tr>
        <td id="expense">{{ expense.description }}</td>
        <td id="expense">${{ expense.amount }}</td>
        <td v-show="edit">
            <img class="delete-icon" v-on:click="deleteExpense(expense)" src="@/assets/delete.png">
        </td>
    </tr>
</template>

<script>
    export default {
        name: 'ExpenseRow',
        props: {
            expense: Object,
            edit: Boolean
        },
        methods: {
            deleteExpense(expense) {
                if (confirm(`Are you sure you want to remove ${expense.description} for $${expense.amount}?`)) {
                    this.$emit('delete-expense', expense)
                }
            }
        }
    }
</script>

<style>
    #expense {
        background-color: indianred;
    }
</style>