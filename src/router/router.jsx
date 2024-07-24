import {
    createBrowserRouter,
} from "react-router-dom";

import HomePage from "../pages/homePage/HomePage";
import DashboardPage from "../pages/dashboardPage/DashboardPage";
import Chatpage from "../pages/chatPage/ChatPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "dashboard",
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
]);

