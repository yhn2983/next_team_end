export const API_SERVER = 'http://localhost:3001'

// *** JWT ***
export const JWT_LOGIN_POST = `${API_SERVER}/api/auth/login` // 登入, POST

// 註冊, POST
export const JWT_REGISTER_POST = `${API_SERVER}/api/auth/register`

// 驗證的POST
export const CHECK_AUTH_ROUTE = `${API_SERVER}/api/auth/check`

// 登出, POST
export const JWT_LOGOUT_POST = `${API_SERVER}/api/auth/logout`

// 更新使用者資料, POST
export const JWT_UPDATE_USER_POST = `${API_SERVER}/api/users`

// 上傳大頭貼, POST
export const UPLOAD_AVATAR_ONE_POST = `${API_SERVER}/api/users/upload-avatar-one`

// 更新密碼, PUT
export const JWT_UPDATE_PASSWORD_PUT = `${API_SERVER}/api/users`

// 忘記密碼,otp   POST
export const PASSWORD_OTP_POST = `${API_SERVER}/api/reset-password/otp`

// 重設密碼, POST
export const PASSWORD_RESET_POST = `${API_SERVER}/api/reset-password/reset`

// google登入, POST
export const GOOGLE_LOGIN_POST = `${API_SERVER}/api/google-login`

// google cilent id
export const GOOGLE_CLIENT_ID =
  '551378095808-5p8n98gos67borcmq2t3itt46ul5dkoe.apps.googleusercontent.com'
