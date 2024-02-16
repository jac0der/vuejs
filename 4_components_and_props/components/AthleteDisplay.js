edugress.component('athlete-display', 
{
    props:
    {
        premium:
        {
            type: Boolean,
            required: true
        },
        atheletes:
        {
            type: Array,
            required: true
        }
    },
    template:
    /*html*/
    `
    <h3 v-if="premium">Use Of Vue Component</h3>
    <div v-for="athelete in atheletes">

        <label for="name">Name</label>
        <p>{{ athelete.name }}</p>

        <label for="name">House</label>
        <p>{{ athelete.house_color }}</p>
    </div>
    <p>{{ rounded_student }}</p>
    `,
    data(){
        
    },
    methods:
    {

    },
    computed:
    {
        rounded_student()
        {
            if(this.premium)
            {
                return 'All Top Students Have aldo done well Academically this term.';
            }
            else
            {
                return 'Our top athletes need Tutoring!!!'
            }
        }
    }
})