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
            aboutFHS: 'https://en.wikipedia.org/wiki/Ferncourt_High_School',
            is_registration: true,
            student_count: 30,
            books_img: './assets/images/book_pile.jpg',
            books_img_alt: 'image of books',
            onSale: true,
            honor_students: ['Ruth', 'John', 'Peter'],
            fav_athlete_image: '',
            top_athletes: [
                {
                    id: 0,
                    name: 'Paul',
                    house_color: 'red',
                    fav_athlete: './assets/images/fav1.jpg',
                },
                {
                    id: 1,
                    name: 'Nahum',
                    house_color: 'blue',
                    fav_athlete: './assets/images/fav2.jpg',
                }
            ],            
        }
    },
    methods:
    {
        addStudent()
        {
            this.student_count += 1;
        },
        removeStudent()
        {
            this.student_count--;
        },
        updateFavAtleteImage(image)
        {
            this.fav_athlete_image = image;
        }
    }
})