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
})