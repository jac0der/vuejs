edugress.component('school-leaders', {
    template:
    /*html*/
    `
    <h2 class="comp_h2">Shcool Leaders</h2>
    <div v-for="leader in leaders">
        <label for="name">Name: </label>
        <strong><label>{{ leader.name }}</label></strong>
        <br />
        <label for="position">Position: </label>
        <strong><label>{{ leader.position }}</label></strong>
        <br /><br />
    </div>`,
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
    }
})