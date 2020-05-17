export default [
    {
        path: 'order',
        name: 'order',
        meta: {
            title: '订单管理'
        },
        component: () => import('./index'),
        children: [
            {
                path: 'orderList',
                name: 'orderList',
                meta: {
                    title: '订单列表'
                },
                component: () => import('./views/order-list/index'),
            },
            {
                path: 'orderComfig',
                name: 'orderComfig',
                meta: {
                    title: '订单设置'
                },
                component: () => import('./views/order-comfig/index'),
            },
            {
                path: 'orderRefund',
                name: 'orderRefund',
                meta: {
                    title: '退货申请处理'
                },
                component: () => import('./views/order-refund/index'),
            },
            {
                path: 'orderCause',
                name: 'orderCause',
                meta: {
                    title: '退货原因设置'
                },
                component: () => import('./views/order-cause/index'),
            },
            
        ]
    }
]