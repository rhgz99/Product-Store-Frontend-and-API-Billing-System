
export const getProfileService = async () => {

}
export const SignInService = async () => {

}
export const SignUpService = async (user) => {
    const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    })
    const data = await response.json()
    
    return data
}
export const SignOutService = async () => {

}


