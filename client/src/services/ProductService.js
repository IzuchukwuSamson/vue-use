import Api from './Api'

export default {
    getAllProducts() {
        return Api().get('products')
    }
    
}



    // creatProduct() {
    //     return Api().post('product')
    // },
    // getProduct() {
    //     return Api().get('product')
    // },
    // getProduct() {
    //     return Api().patch('product')
    // },
    // deleteProduct() {
    //     return Api().delete('product')
    // }