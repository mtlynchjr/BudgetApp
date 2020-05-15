<template>
    <div>
        <div class="alert alert-danger" v-show="errors.length">
            <li v-for="error in errors">{{ error }}</li>
        </div>

        <div id="saving" class="card add-saving m-2 p-2">
            <h2 class="card-title">Saving</h2>

            <div class="form-group">
                <label class="form-label" for="savingOption">Select Saving Type</label>
                <select id="savingOption" class="form-control" v-model="savingOption">
                    <option v-for="opt in savingOptions" v-bind:value="opt"> {{ opt }}</option>
                </select>

                <p></p>

                <label class="form-label" for="savingAmount">Enter Saving Amount</label>
                <input id="savingAmount" class="form-control" v-model="savingAmount" type="number" min="0">
            </div>

            <button class="btn btn-primary mt-2" type="button" v-on:click="addSaving">Add Saving</button>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'NewSavingForm',
        data() {
            return {
                savingOptions: ['Checking', 'Investments', 'Savings', 'Retirement', 'Other'],
                savingOption: '',
                savingAmount: '',
                savingItems: [],
                errors:[]
            }
        },
        methods: {
            addSaving() {
                this.errors = []
                if (this.savingOption && this.savingAmount){
                    let saving = {description: this.savingOption, amount: this.savingAmount}
                    // DONE Emit message with new saving info to Parent
                    this.$emit('saving-added', saving)
                    this.savingItems.push(saving)
                    this.savingOption = ''
                    this.savingAmount = ''
                } else {
                    this.errors.push('Both an Saving Option selection and a Saving Amount are required.')
                }
            }
        }
    }
</script>

<style>

</style>