import { configureStore, createSlice } from "@reduxjs/toolkit";
import reverseDate from "./weeks";

const initialState = {
  habits: [],
  showAddHabit: false,
  week: reverseDate,
};

const uiSlice = createSlice({
  name: "Ui",
  initialState,
  reducers: {
    openAddHabit(state) {
      state.showAddHabit = true;
    },

    closeAddHabit(state) {
      state.showAddHabit = false;
    },
    addHabit(state, action) {
      const newHabit = action.payload;
      state.habits.push({
        id: newHabit.name,
        name: newHabit.name,
          counter: 0,
      });
    },
    removeHabit(state, action) {
        const habitIdToRemove = action.payload;
      state.habits = state.habits.filter(
        (habit) => habit.id !== habitIdToRemove
        );
        state.week.map((week) => week.status = 'None')
        },
      setID(state, action) {
          const { id } = action.payload;
          state.habits.map((habit) => {
              if (habit.id === id) {
                  state.week = state.week.map((week) => ({ ...week, hId: id }));
              }
              return 0;
          })
        },
    setHabitStatus: (state, action) => {
      const { id, habitId, day, Status } = action.payload;
        console.log(id, habitId, day, Status);
        state.habits.map((habit) => {
            if (
              habit.id === id &&
              state.week[habitId - 1].day === day &&
              state.week[habitId - 1].id === habitId
            ) {
                switch (Status) {
                    case "Done":
                    state.week[habitId - 1].status = "Not Done";
                    break;
                  case "Not Done":
                    state.week[habitId - 1].status = "None";
                    break;
                  default:
                    state.week[habitId - 1].status = "Done";
                    break;
                }
                console.log(state.week[habitId - 1].status);
            }
            return console.log(id);
        });
    },
    addCounter: (state, action) => {
        const { status, id } = action.payload;
        // console.log(status)
      state.habits.map((habit) => {
        if (habit.id === id) {
          switch (status) {
            case "None":
              habit.counter++;
              break;
            case "Done":
              habit.counter--;
              break;
            default:
              break;
          }
          }
          return 0;
      });
    },
  },
});

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
  },
});


export const uiActions = uiSlice.actions;
export default store;
