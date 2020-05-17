export default [
    {
        path: 'user',
        name: 'user',
        meta: {
            title: '用户管理'
        },
        component: () => import('./index'),
        children:[
            {
                path:'userList',
                naem:'userList',
                meta:{
                    title:'用户信息'
                },
                component:()=>import('./views/user-list')
            }
        ]
    }
]