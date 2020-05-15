<template>
  <div id="app">
    <NewIncomeForm v-on:income-added="newIncomeAdded"></NewIncomeForm>
    <NewExpenseForm v-on:expense-added="newExpenseAdded"></NewExpenseForm>
    <NewSavingForm v-on:saving-added="newSavingAdded"></NewSavingForm>
    <LedgerTable
            v-bind:incomeItems="incomeItems"
            v-bind:expenseItems="expenseItems"
            v-bind:savingItems="savingItems"
            v-on:delete-income="incomeDeleted"
            v-on:delete-expense="expenseDeleted"
            v-on:delete-saving="savingDeleted"
    ></LedgerTable>
  </div>
</template>

<script>
import NewIncomeForm from './components/NewIncomeForm.vue'
import NewExpenseForm from './components/NewExpenseForm.vue'
import NewSavingForm from './components/NewSavingForm.vue'
import LedgerTable from './components/LedgerTable.vue'

export default {
  name: 'App',
  components: {
    NewIncomeForm,
    NewExpenseForm,
    NewSavingForm,
    LedgerTable
  },
  data() {
    return {
      incomeItems: [],
      expenseItems: [],
      savingItems: [],
    }
  },
  methods: {
    newIncomeAdded(income){
      this.incomeItems.push(income)
    },
    newExpenseAdded(expense){
      this.expenseItems.push(expense)
    },
    newSavingAdded(saving){
      this.savingItems.push(saving)
    },
    incomeDeleted(income) {
      this.incomeItems = this.income
    },
    expenseDeleted(expense) {
      this.expenseItems = this.expense
    },
    savingDeleted(saving) {
      this.savingItems = this.saving
    }
  }
}
</script>

<style>

</style>
