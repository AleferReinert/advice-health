import { createSlice } from '@reduxjs/toolkit'

interface UserState {
	currentUser: {
		name: string | null
	}
}

const initialState: UserState = {
	currentUser: { name: 'Visitante' }
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		currentUser: (state, action) => {
			state.currentUser = action.payload
		}
	}
})
