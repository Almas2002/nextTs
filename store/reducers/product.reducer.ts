import {IProduct} from "../../types/types";


export enum ProductFetchEnum {
    FETCH_PRODUCT = "FETCH_PRODUCT",
    FETCH_PRODUCT_SUCCESS = "FETCH_PRODUCT_SUCCESS",
    FETCH_PRODUCT_ERROR = "FETCH_PRODUCT_ERROR"
}

interface fetchProduct {
    type: ProductFetchEnum.FETCH_PRODUCT
}

interface fetchProductSuccess {
    type: ProductFetchEnum.FETCH_PRODUCT_SUCCESS,
    payload: IProduct[]
}

interface fetchProductError {
    type: ProductFetchEnum.FETCH_PRODUCT_ERROR
    payload: string
}

interface IStateProduct {
    products: IProduct[]
    error: string | null
    loading: boolean
}

type typeOfProductReducer = fetchProduct | fetchProductSuccess | fetchProductError
const initState: IStateProduct = {
    products: [],
    error: null,
    loading: false
}

export const productReducer = (state = initState, action: typeOfProductReducer): IStateProduct => {
    switch (action.type) {
        case ProductFetchEnum.FETCH_PRODUCT:
            return {...state, loading: true}
        case ProductFetchEnum.FETCH_PRODUCT_SUCCESS:
            return {...state, loading: false, products: action.payload}
        case ProductFetchEnum.FETCH_PRODUCT_ERROR:
            return {...state, loading: false, products: [], error: action.payload}
    }
}