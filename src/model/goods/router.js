export default [
    {
        path: 'goods',
        name: 'goods',
        meta: {
            title: '商品'
        },
        component: () => import('./index'),
        children: [
            {
                path: 'goodsList',
                name: 'goodsList',
                meta: {
                    title: '商品列表'
                },
                component: () => import('./views/goods-list')
            },
            {
                path: 'goodsAdd',
                name: 'goodsAdd',
                meta: {
                    title: '添加商品'
                },
                component: () => import('./views/goods-add')
            },
            {
                path: 'goodsType',
                name: 'goodsType',
                meta: {
                    title: '商品分类'
                },
                component: () => import('./views/goods-type')
            },
            {
                path: 'goodsGenre',
                name: 'goodsGenre',
                meta: {
                    title: '商品类型'
                },
                component: () => import('./views/goods-genre')
            },
            {
                path: 'goodsBrand',
                name: 'goodsBrand',
                meta: {
                    title: '品牌管理'
                },
                component: () => import('./views/goods-brand')
            },
        ]
    }
]