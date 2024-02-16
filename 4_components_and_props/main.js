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
            student_count: 21,
            books_img: './assets/images/book_pile.jpg',
            books_img_alt: 'image of books',
            onSale: false,
            honor_students: ['Ruth', 'John', 'Peter'],
            fav_athlete_image: '',
            top_athletes: [
                {
                    id: 0,
                    name: 'Paul',
                    house_color: 'red',
                    fav_athlete: './assets/images/fav1.jpg',
                    fav_food: './assets/images/Jerk.jpg',
                    high_score: 80,
                },
                {
                    id: 1,
                    name: 'Nahum',
                    house_color: 'blue',
                    fav_athlete: './assets/images/fav2.jpg',
                    fav_food: './assets/images/ackee.jpg',
                    high_score: 90,
                }
            ],
            h2_styles: {
                color: 'purple',
                'font-size': '25px'
            },
            town: 'Claremount',
            parish: 'St. Ann',
            selected_index: 0,      
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
        },
        setSelectedAthlete(index)
        {
            this.selected_index = index;
        },
        IncrementStudentCount()
        {
            this.student_count += 1;
        }
    },
    computed:
    {
        school_address()
        {
            return this.town + ' ' + this.parish;
        },
        atlethe_food()
        {
            return this.top_athletes[this.selected_index].fav_food;
        },
        highscore()
        {
            return this.top_athletes[this.selected_index].high_score;
        }
    }
})