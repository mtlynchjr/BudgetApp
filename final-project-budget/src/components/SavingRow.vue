<template>
    <tr>
        <td id="saving">{{ saving.description }}</td>
        <td id="saving">${{ saving.amount }}</td>
        <td v-show="edit">
            <img class="delete-icon" v-on:click="deleteSaving(saving)" src="@/assets/delete.png">
        </td>
    </tr>
</template>

<script>
    export default {
        name: 'SavingRow',
        props: {
            saving: Object,
            edit: Boolean
        },
        methods: {
            deleteSaving(saving) {
                if (confirm(`Are you sure you want to remove ${saving.description} for $${saving.amount}?`)) {
                    this.$emit('delete-saving', saving)
                }
            }
        }
    }
</script>

<style>
    #saving {
        background-color: lightblue;
    }

</style>