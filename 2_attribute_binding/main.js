// define Vue app called edugress.
const  edugress = Vue.createApp({

    // define data properties
    data()
    {
        return{
            school: 'Ferncourt High',
            address: 'Claremount, St Ann',
            image: './assets/images/ferncourt.jpg',
            image_alt: 'image of FHS School',
            logo: './assets/images/logo.jpg',
            logo_alt: 'image of FHS logo',
            aboutFHS: 'https://en.wikipedia.org/wiki/Ferncourt_High_School'
        }
    }
})