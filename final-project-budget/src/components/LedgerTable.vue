<template>
    <div>
        <div class="card ledger  m-2 p-2">
            <h2 class="card-title">Ledger</h2>

            <div class="edit-table-toggle form-check">
                <input id="edit-table" type="checkbox" class="form-check-input" v-model="editTable">
                <label for="edit-table" class="form-check-label">Enable Ledger Editing</label>
            </div>

            <div id="ledger-table">
                <table class="table">
                    <tr>
                        <th id="leger-head">Description</th>
                        <th id="leger-head">Amount</th>
                        <th id="leger-head" v-show="editTable">Remove</th>
                    </tr>

                    <IncomeRow id="income" v-for="income in incomeItems"
                               v-bind:income="income"
                               v-bind:edit="editTable"
                               v-on:delete-income="incomeDeleted">
                    </IncomeRow>

                    <ExpenseRow id="expense" v-for="expense in expenseItems"
                                v-bind:expense="expense"
                                v-bind:edit="editTable"
                                v-on:delete-expense="expenseDeleted">
                    </ExpenseRow>

                    <SavingRow id="saving" v-for="saving in savingItems"
                               v-bind:saving="saving"
                               v-bind:edit="editTable"
                               v-on:delete-saving="savingDeleted">
                    </SavingRow>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import IncomeRow from '@/components/IncomeRow.vue'
    import ExpenseRow from '@/components/ExpenseRow.vue'
    import SavingRow from '@/components/SavingRow.vue'

    export default {
        name: 'LedgerTable',
        components: { IncomeRow, ExpenseRow, SavingRow },
        data() {
            return {
                editTable: false
            }
        },
        props: {
            incomeItems: Array,
            expenseItems: Array,
            savingItems: Array,
        },
        methods: {
            // DONE emit deleted item method to Parent
            incomeDeleted(income) {
                this.$emit('delete-income', income)
            },
            expenseDeleted(expense) {
                this.$emit('delete-expense', expense)
            },
            savingDeleted(saving) {
                this.$emit('delete-saving', saving)
            },
        }
    }
</script>

<style>
    #leger-head {
        background-color: lightgrey;
    }

</style>