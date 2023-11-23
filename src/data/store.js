import { reactive } from "vue";

export const store = reactive({
    currentPageName : 'home',
    cartList:[],
    navLinks:[
        {
            id:1,
            text: 'HOME',
            primaryLinks:[
            {
                id:1,
                text:'list types: ',
                link:'#',
                subLinks:[
                    {
                        id:1,
                        text: 'don menù',
                        link:'#',
                    },
                    {
                        id:2,
                        text: 'don light menù',
                        link:'#',
                    },
                    {
                        id:3,
                        text: 'don dark menù',
                        link:'#',
                    }
                ],
            },
            {
                id:1,
                alwaysActive : '',
                text:'home',
                link:'#',
                subLinks:[],
            },
            ]
        },
        {
            id:2,
            text: 'HOME',
            primaryLinks:[
            {
                id:1,
                text:'list types: ',
                link:'#',
                subLinks:[
                    {
                        id:1,
                        text: 'don menù',
                        link:'#',
                    },
                    {
                        id:2,
                        text: 'don light menù',
                        link:'#',
                    },
                    {
                        id:3,
                        text: 'don dark menù',
                        link:'#',
                    }
                ],
            },
            {
                id:1,
                text:'no list',
                link:'#',
                subLinks:[],
            },
            ]
        },
        {
            id:3,
            text: 'HOME',
            primaryLinks:[
            {
                id:1,
                text:'list types: ',
                link:'#',
                subLinks:[
                    {
                        id:1,
                        text: 'don menù',
                        link:'#',
                    },
                    {
                        id:2,
                        text: 'don light menù',
                        link:'#',
                    },
                    {
                        id:3,
                        text: 'don dark menù',
                        link:'#',
                    }
                ],
            },
            {
                id:1,
                text:'no list',
                link:'#',
                subLinks:[],
            },
            ]
        },
        {
            id: 4,
            img: '../../assets/images/h5-logo-divided-header.png',
        },
        {
            id:5,
            text: 'HOME',
            primaryLinks:[
            {
                id:1,
                text:'list types: ',
                link:'#',
                subLinks:[
                    {
                        id:1,
                        text: 'don menù',
                        link:'#',
                    },
                    {
                        id:2,
                        text: 'don light menù',
                        link:'#',
                    },
                    {
                        id:3,
                        text: 'don dark menù',
                        link:'#',
                    }
                ],
            },
            {
                id:1,
                text:'no list',
                link:'#',
                subLinks:[],
            },
            ]
        },
        {
            id:6,
            text: 'HOME',
            primaryLinks:[
            {
                id:1,
                text:'list types: ',
                link:'#',
                subLinks:[
                    {
                        id:1,
                        text: 'don menù',
                        link:'#',
                    },
                    {
                        id:2,
                        text: 'don light menù',
                        link:'#',
                    },
                    {
                        id:3,
                        text: 'don dark menù',
                        link:'#',
                    }
                ],
            },
            {
                id:1,
                text:'no list',
                link:'#',
                subLinks:[],
            },
            ]
        },
        {
            id:7,
            text: 'HOME',
            primaryLinks:[
            {
                id:1,
                text:'list types: ',
                link:'#',
                subLinks:[
                    {
                        id:1,
                        text: 'don menù',
                        link:'#',
                    },
                    {
                        id:2,
                        text: 'don light menù',
                        link:'#',
                    },
                    {
                        id:3,
                        text: 'don dark menù',
                        link:'#',
                    }
                ],
            },
            {
                id:1,
                text:'no list',
                link:'#',
                subLinks:[],
            },
            ]
        },
    ],
    heroImgsList:[
        {
            id:1,
            urlPizzaSlice:'images/h3-rev-img-2.png',
            urlWrittenSlicePizza:'images/h3-rev-img-1.png',
        },
        {
            id:2,
            urlPizzaSlice:'images/h3-rev-img-4.png',
            urlWrittenSlicePizza:'images/h3-rev-img-3.png',
        },
        {
            id:3,
            urlPizzaSlice:'images/h3-rev-img-6.png',
            urlWrittenSlicePizza:'images/h3-rev-img-5.png',
        },
    ],
    restaurantAddresses:[
        {
            id: 1,
            address:'1614 E. Bell Rd #104.',
            city:'Salerno',
            province:'AZ',
            postalCode:'85022',
            prefixTelephone:'602',
            telephoneNumber:'867-1010',
        },
        {
            id: 2,
            address:'Vale Puglia 54',
            city:'Torre Del Greco',
            province:'AZ',
            postalCode:'85022',
            prefixTelephone:'359',
            telephoneNumber:'867-1010',
        },
        {
            id: 3,
            address:'1614 E. Bell Rd #104.',
            city:'Salerno',
            province:'AZ',
            postalCode:'85022',
            prefixTelephone:'602',
            telephoneNumber:'867-1010',
        },
        {
            id: 4,
            address:'Vale Puglia 54',
            city:'Torre Del Greco',
            province:'AZ',
            postalCode:'85022',
            prefixTelephone:'359',
            telephoneNumber:'867-1010',
        },
    ],
    workingHours:[
        {
            id:1,
            rangeDays: 'MONDAY',
            workingHoursRange: 'Kitchen closed',
        },
        {
            id:2,
            rangeDays: 'TUSEDAY UNTIL FRIDAY',
            workingHoursRange: '9:00 - 22.00',
        },
        {
            id:3,
            rangeDays: 'SATURDAY',
            workingHoursRange: 'Saturday 11 am to midnight',
        },
        {
            id:4,
            rangeDays: 'SUNDAY',
            workingHoursRange: '9.00 - 22.00',
        },
    ],
    iconFooterList:[
        {
            link:'#',
            iconClass: 'fa-brands fa-twitter fa-xs',
        },
        {
            link:'#',
            iconClass: 'fa-brands fa-facebook fa-xs',
        },
        {
            link:'#',
            iconClass: 'fa-brands fa-instagram fa-xs',
        },
        {
            link:'#',
            iconClass: 'fa-brands fa-linkedin fa-xs',
        },
    ],
    galleryImgs:[
        {
            id:1,
            url:'images/h3-img-1.jpg',
            link:'#',
        },
        {
            id:2,
            url:'images/h3-img-2.jpg',
            link:'#',
        },
        {
            id:3,
            url:'images/h3-img-3.jpg',
            link:'#',
        },
        {
            id:4,
            url:'images/h3-img-4.jpg',
            link:'#',
        },
    ],
})