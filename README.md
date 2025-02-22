# Module 52

* Set Router : 
    1. Create a file Routes -> Router.jsx
    2. Use “rsc” to create the format
    3. Customise it by 
        const Router = createBrowserRouter([
            {
                path:"/",
                element: <HomeLayout></HomeLayout> //component
            }
        ])
    4. Then main.jsx, replace <App /> by <RouterProvider router={Router(from Router.jsx)}></RouterProvider>

* Set timer : moment.js website-> docs -> display -> 2nd format from box
    1. moment().format("dddd, MMMM Do YYYY, h:mm:ss a");

* Marquee npm for moving text:
1. Install from website
2. <marquee speed={100}>{text}</marquee>
