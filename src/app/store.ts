import { configureStore } from '@reduxjs/toolkit'
import { DoctorsSlice } from './features/doctors/doctorsSlice'
import { patientsSlice } from './features/patients/patientsSlice'
import { ScheduleSlice } from './features/schedule/scheduleSlice'
import { TasksSlice } from './features/tasks/tasksSlice'

export const store = configureStore({
	reducer: {
		patients: patientsSlice.reducer,
		schedule: ScheduleSlice.reducer,
		tasks: TasksSlice.reducer,
		doctors: DoctorsSlice.reducer
	}
	// middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
