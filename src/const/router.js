let router = [
    {
        path: '1',
        name: '商品',
        Iconfont: 'el-icon-message',//图标
        children: [{
            path: '/manage/goods/goodsList',
            name: '商品列表',
            Iconfont: 'el-icon-message',//图标
        },
        {
            path: '/manage/goods/goodsAdd',
            name: '添加商品',
        },
        {
            path: '/manage/goods/goodsType',
            name: '商品分类',
        },
        {
            path: '/manage/goods/goodsGenre',
            name: '商品类型',
        },
        {
            path: '/manage/goods/goodsBrand',
            name: '品牌管理',
        },


        ]
    },
    {
        path: '2',
        name: '订单管理',
        Iconfont: 'el-icon-message',//图标
        children: [
            {
                path: '/manage/order/orderList',
                name: '订单列表'
            },
            {
                path: '/manage/order/orderComfig',
                name: '订单设置'
            },
            {
                path: '/manage/order/orderRefund',
                name: '退货申请处理'
            },
            {
                path: '/manage/order/orderCause',
                name: '退货原因设置'
            },
        ]
    },
    {
        path: '3',
        name: '用户管理',
        Iconfont: 'el-icon-message',//图标
        children: [
            {
                path: '/manage/user/userList',
                name: '用户列表'
            }
        ]
    },
]

export default router