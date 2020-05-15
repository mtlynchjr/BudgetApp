<template>
    <div>
        <div class="alert alert-danger" v-show="errors.length">
            <li v-for="error in errors">{{ error }}</li>
        </div>

        <div id="expense" class="card add-expense m-2 p-2">
            <h2 class="card-title">Expense</h2>

            <div class="form-group">
                <label class="form-label" for="expenseOption">Select Expense Type</label>
                <select id="expenseOption" class="form-control" v-model="expenseOption">
                    <option v-for="opt in expenseOptions" v-bind:value="opt"> {{ opt }}</option>
                </select>

                <p></p>

                <label class="form-label" for="expenseAmount">Enter Expense Amount</label>
                <input id="expenseAmount" class="form-control" v-model="expenseAmount" type="number" min="0">
            </div>

            <button class="btn btn-primary mt-2" type="button" v-on:click="addExpense">Add Expense</button>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'NewExpenseForm',
        data() {
            return {
                expenseOptions: ['Auto', 'Cable/Internet', 'Entertainment', 'Groceries', 'Insurance', 'Loans', 'Pet',
                    'Phone', 'Utilities', 'Other'],
                expenseOption: '',
                expenseAmount: '',
                expenseItems: [],
                errors:[]
            }
        },
        methods: {
            addExpense() {
                this.errors = []
                if (this.expenseOption && this.expenseAmount){
                    let expense = {description: this.expenseOption, amount: this.expenseAmount}
                    // DONE Emit message with new expense info to Parent
                    this.$emit('expense-added', expense)
                    this.expenseItems.push(expense)
                    this.expenseOption = ''
                    this.expenseAmount = ''
                } else {
                    this.errors.push('Both an Expense Option selection and an Expense Amount are required.')
                }
            }
        }
    }
</script>

<style>

</style>