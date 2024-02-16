edugress.component('school-leaders', {
    template:
    /*html*/
    `
    <h2 class="comp_h2">Shcool Leaders</h2>
    <div v-for="(leader, index) in leaders">
        <label for="name">Name: </label>
        <strong><label
            v-on:mouseover="dispatchId(index)"
        >{{ leader.name }}</label></strong>
        <br />
        <label for="position">Position: </label>
        <strong><label>{{ leader.position }}</label></strong>
        <br /><br />
        
    </div>
    <button v-on:click="incrementStudentCount">Add Student</button>`,
    data()
    {
        return{
            leaders: [
                {
                    name: 'Mrs. Johnson',
                    position: 'Principal'
                },
                {
                    name: 'Mrs. Grant',
                    position: 'Vice Principal'
                }
            ]
        }
    },
    methods:
    {
        incrementStudentCount()
        {
            this.$emit('increment-student-count');
        },
        dispatchId(index)
        {
            this.$emit('dispatch-id', index);
        }
    }
})