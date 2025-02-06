import { configureStore } from '@reduxjs/toolkit'
import { DoctorsSlice } from './slices/doctorsSlice'
import { patientsSlice } from './slices/patientsSlice'
import { ScheduleSlice } from './slices/scheduleSlice'
import { TasksSlice } from './slices/tasksSlice'
import { userSlice } from './slices/userSlice'

export const store = configureStore({
	reducer: {
		user: userSlice.reducer,
		patients: patientsSlice.reducer,
		schedule: ScheduleSlice.reducer,
		tasks: TasksSlice.reducer,
		doctors: DoctorsSlice.reducer
	}
	// middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
