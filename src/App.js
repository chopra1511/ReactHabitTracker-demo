
import { RouterProvider, createHashRouter } from "react-router-dom";
import Home from "./components/ui/Home";
import StartPage from "./components/ui/StartPage";
import HabitPage from "./components/ui/HabitPage";
import Habits from "./components/habitio/Habits";
import WeekView from "./components/habitio/WeekView";

const router = createHashRouter([
  {
    path: "https://chopra1511.github.io/ReactHabitTracker-demo/",
    element: <Home />,
  },
  {
    path: "https://chopra1511.github.io/ReactHabitTracker-demo/start-page",
    element: <StartPage />,
  },
  {
    path: "https://chopra1511.github.io/ReactHabitTracker-demo/habitio",
    element: <HabitPage />,
  },
  {
    path: "https://chopra1511.github.io/ReactHabitTracker-demo/all-habits",
    element: <Habits />,
  },
  {
    path: "https://chopra1511.github.io/ReactHabitTracker-demo/today",
    element: <Habits />,
  },
  {
    path: "https://chopra1511.github.io/ReactHabitTracker-demo/week-view",
    element: <WeekView />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
