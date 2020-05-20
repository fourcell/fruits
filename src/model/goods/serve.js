import { get, post } from '../../api/http'

//查询商品类目
export const selectType = () => get('/selectType')

//删除图片
export const deleteUpload = parm => get('/upload', parm)

//添加商品
export const goodsAdd = parm => post('/goodsAdd', parm)

//商品分页查询
export const goodsList = parm => get('/goodsList', parm)
