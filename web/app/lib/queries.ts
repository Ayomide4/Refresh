export const galleryQuery = `*[_type == "galleryImage"]
  | order(defined(order) desc, order asc){
    _id,
    alt,
    order,
    image
  }`

export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  aboutParagraph1,
  aboutParagraph2,
  missionStatement,
  visionStatement,
  donationDescription,
  cashAppLink,
  zellePhoneNumber,
  paypalLink,
  contactEmail,
  phoneNumber,
  instagramUrl,
  facebookUrl,
  youtubeUrl
}`;
