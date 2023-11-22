import { reactive } from "vue";

export const store = reactive({
    currentPageName : 'home',
    cartList:[],
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
})