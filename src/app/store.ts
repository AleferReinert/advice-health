import { configureStore } from '@reduxjs/toolkit'
import { appointmentsSlice } from './features/appointments/appointmentsSlice'
import { doctorsSlice } from './features/doctors/doctorsSlice'
import { patientsSlice } from './features/patients/patientsSlice'
import { scheduleSlice } from './features/schedule/scheduleSlice'
import { tasksSlice } from './features/tasks/tasksSlice'

export const store = configureStore({
	reducer: {
		doctors: doctorsSlice.reducer,
		appointments: appointmentsSlice.reducer,
		patients: patientsSlice.reducer,
		schedule: scheduleSlice.reducer,
		tasks: tasksSlice.reducer
	}
	// middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
