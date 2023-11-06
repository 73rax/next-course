export  { default }  from "next-auth/middleware";


export const config = {
    matcher: ["/dashboard/"]
}

// In a real application you write the route you want to protect and all the enpoints *

// E.g 

// export const config = {
//     // *: 0 or more parameters
//     // +: 1 or more parameters
//     // ?: 0 or one
//     matcher: ["/dashboard/*"]
// }