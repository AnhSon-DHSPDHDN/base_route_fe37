import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { taskAPI } from "../../../apis/taskApis";

const initState = {
  allTask: [],
  task: {},
  isLoading: false,
  errors: {},
};

// export const actFetchAllTask = createAsyncThunk(
//   "tasks/actFetchAllTask",
//   async (payload, thunkAPI) => {
//     console.log(payload, "payload");
//     try {
//       thunkAPI.dispatch(actSetLoading(true));
//       const data = await taskAPI.getAllTask();
//       thunkAPI.dispatch(actSetDataTasks(data));
//       thunkAPI.dispatch(actSetLoading(false));
//     } catch (error) {
//       thunkAPI.dispatch(actSetError(error));
//     }
//   }
// );

export const actFetchAllTask = createAsyncThunk(
  "tasks/actFetchAllTask",
  async (payload, thunkAPI) => {
    try {
      const data = await taskAPI.getAllTask();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: initState,
  reducers: {
    actSetDataTasks: (state, action) => {
      state.allTask = action.payload;
    },
    actSetLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    actSetError: (state, action) => {
      state.errors = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actFetchAllTask.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(actFetchAllTask.fulfilled, (state, action) => {
      state.allTask = action.payload;
      state.isLoading = false;
    });
    builder.addCase(actFetchAllTask.rejected, (state, action) => {
      state.errors = action.payload;
    });
  },
});

export const { actSetDataTasks, actSetLoading, actSetError } =
  tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
