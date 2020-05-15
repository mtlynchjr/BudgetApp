<template>
    <div>
        <div class="alert alert-danger" v-show="errors.length">
            <li v-for="error in errors">{{ error }}</li>
        </div>

        <div id="income" class="card add-income m-2 p-2">
            <h2 class="card-title">Income</h2>

                    <div class="form-group">
                        <label class="form-label" for="incomeOption">Select Income Type</label>
                        <select id="incomeOption" class="form-control" v-model="incomeOption">
                            <option v-for="opt in incomeOptions" v-bind:value="opt"> {{ opt }}</option>
                        </select>

                        <p></p>

                        <label class="form-label" for="incomeAmount">Enter Income Amount</label>
                        <input id="incomeAmount" class="form-control" v-model="incomeAmount" type="number" min="0">
                    </div>

            <button class="btn btn-primary mt-2" type="button" v-on:click="addIncome">Add Income</button>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'NewIncomeForm',
        data() {
            return {
                incomeOptions: ['Alimony/Child Support', 'Disability/Social Security', 'Dividends/Investments', 'Salary',
                    'Other'],
                incomeOption: '',
                incomeAmount: '',
                incomeItems: [],
                errors:[]
            }
        },
        methods: {
            addIncome() {
                this.errors = []
                if (this.incomeOption && this.incomeAmount){
                    let income = {description: this.incomeOption, amount: this.incomeAmount}
                    // DONE Emit message with new income info to Parent
                    this.$emit('income-added', income)
                    this.incomeItems.push(income)
                    this.incomeOption = ''
                    this.incomeAmount = ''
                } else {
                    this.errors.push('Both an Income Option selection and an Income Amount are required.')
                }
            }
        }
    }
</script>

<style>

</style>