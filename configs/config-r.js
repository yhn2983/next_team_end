export const API_SERVER = 'http://localhost:3001'

export const API_CATEGORIES = `${API_SERVER}/cate2`

export const PROD_LIST = `${API_SERVER}/products/api`

export const CART_ADD = `${API_SERVER}/products/api`

// // PROD_ITEM_DELETE: `${PROD_ITEM_DELETE}/17`
export const CART_ITEM_DELETE = `${API_SERVER}/products/api`

export const TOGGLE_LIKE = `${API_SERVER}/like-toggle`

// // 取得通訊錄單筆資料 主鍵為 sid,  `${PROD_ITEM}/${sid}`
// export const PROD_ITEM = `${API_SERVER}/products` // GET

// // 修改通訊錄單筆資料 主鍵為 sid,  `${PROD_ITEM_UPDATE_PUT}/${sid}`
// export const PROD_ITEM_UPDATE_PUT = `${API_SERVER}/products/edit` // PUT

// // *** JWT ***
// export const JWT_LOGIN_POST = `${API_SERVER}/login-jwt` // 登入, POST

// // 加入或移除 喜愛清單 "/like-toggle-jwt/:pid"
// export const JWT_TOGGLE_LIKE = `${API_SERVER}/like-toggle-jwt` // GET
