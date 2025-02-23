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

* font setting :
1. google font
2. search the font name
3. click on get font -> <embaded link> -> import -> copy <style></style>
4. Open App.css -> paste at 2nd line
5. Go to tailwind css -> search ‘font family’ -> scroll down to google font and copy @theme{} and then customise it with specific font from google font

* Load data from API (leftNavbar) : 
1. Const [variable, setVariable] = useState([]);
2. useEffect( () => { fetch data }, []);
3. J page e useState and useEffect thakbe oi page e data.map korte hobe 