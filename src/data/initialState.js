const initialState = {
    isUserLoggedIn: false,
    menu: { isOpen: false },
    user: {},
    cart: [],
    isLoginModal: false,
    pastOrders: [
        {
            date: "2 September, 2020",
            quantity: 4,
            id: 16,
        },
        {
            date: "2 September, 2020",
            quantity: 1,
            id: 2,
        },
    ]
}
export default initialState;