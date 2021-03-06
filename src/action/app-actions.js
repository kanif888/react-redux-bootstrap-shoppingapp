export const setactivebutton = (tabid) => ({
    type: 'SET_ACTIVE_BUTTON',
    tabid
})

export const checkfilterproduct = (id) => ({
    type: 'CHECK_LIST',
    id
})

export const addtocartlist = (id, name, price) => ({
    type: 'ADD_TO_CART',
    id,
    name,
    price
})

export const removefromcartlist = (id, price) => ({
    type: 'REMOVE_FROM_CART',
    id,
    price
})

export const addtosoldlist = (cartlist, carttotal) => ({
    type: 'ADD_TO_SOLD_LIST',
    cartlist,
    carttotal
})

export const flushproducts = () => ({
    type: 'FLUSH_PRODUCTS'
})

export const flushcart = () => ({
    type: 'FLUSH_CART'
})

export const filterproductbykey = (filterstring) =>({
    type: 'FILTER_PRODUCTS',
    filterstring
})

export const clearfilter = (filterstring) =>({
    type: 'CLEAR_FILTER'
})

