import {
    createBrowserRouter,
} from "react-router-dom";

import HomePage from "../pages/homePage/HomePage";
import DashboardPage from "../pages/dashboardPage/DashboardPage";
import Chatpage from "../pages/chatPage/ChatPage";
import RootLayout from "../layouts/rootLayout/RootLayout";
import DashboardLayout from "../layouts/dasbhoardLayout/dashboardLayout";
import SignInPage from "../pages/signInPage/SignInPage";
import SignUpPage from "../pages/signUpPage/SignUpPage";

export const router = createBrowserRouter([
    {
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/sign-in",
                element: <SignInPage />
            },
            {
                path: "/sign-up",
                element: <SignUpPage />
            },
            {
                path: "dashboard",
                element: <DashboardLayout />,
                children: [
                    {
                        path: "",
                        element: <DashboardPage />
                    },
                    {
                        path: "chats/:id",
                        element: <Chatpage />
                    }
                ]
            },
        ]
    },

]);

