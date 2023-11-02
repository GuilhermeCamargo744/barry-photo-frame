const baseURL = process.env.REACT_APP_BASE_URL

export const getPhotos = `${process.env.REACT_APP_GET_PHOTOS}`
export const postPhoto = `${baseURL}/posts`

export const deletePhoto = `${baseURL}/posts/:id`
