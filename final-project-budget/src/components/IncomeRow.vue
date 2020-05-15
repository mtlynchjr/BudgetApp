<template>
    <tr>
        <td id="income">{{ income.description }}</td>
        <td id="income">${{ income.amount }}</td>
        <td v-show="edit">
            <img class="delete-icon" v-on:click="deleteIncome(income)" src="@/assets/delete.png">
        </td>
    </tr>
</template>

<script>
    export default {
        name: 'IncomeRow',
        props: {
            income: Object,
            edit: Boolean
        },
        methods: {
            deleteIncome(income) {
                if (confirm(`Are you sure you want to remove ${income.description} for $${income.amount}?`)) {
                    this.$emit('delete-income', income)
                }
            }
        }
    }
</script>

<style>
    #income {
        background-color: lightgreen;
    }
</style>