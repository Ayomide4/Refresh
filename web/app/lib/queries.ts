export const galleryQuery = `*[_type == "galleryImage"]
  | order(defined(order) desc, order asc){
    _id,
    alt,
    order,
    image
  }`
