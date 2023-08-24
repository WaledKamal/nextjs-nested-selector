import { constant } from '@/enum/constant'

const getCategories = async () => {
    const request = await fetch(constant._baseURL,{cache:'force-cache'})
    const categories = await request.json()
    return categories
}

export { getCategories }