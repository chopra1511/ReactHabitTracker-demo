
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/ui/Home";
import StartPage from "./components/ui/StartPage";
import HabitPage from "./components/ui/HabitPage";
import Habits from "./components/habitio/Habits";
import WeekView from "./components/habitio/WeekView";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/start-page", element: <StartPage /> },
  { path: "/habitio", element: <HabitPage /> },
  { path: "/all-habits", element: <Habits /> },
  { path: "/today", element: <Habits /> },
  { path: "/week-view", element: <WeekView /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}/>
      {/* <Home /> */}
      {/* <StartPage /> */}
      {/* <HabitPage/> */}
      {/* <Habits /> */}
      {/* <WeekView/> */}
    </>
  );
}

export default App;
