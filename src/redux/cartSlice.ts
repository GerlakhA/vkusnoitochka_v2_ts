import { createSlice } from '@reduxjs/toolkit'

interface ModalState {
	value: boolean
}

// Define the initial state using that type
const initialState: ModalState = {
	value: false,
}

export const ModalSlice = createSlice({
	name: 'modal',
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		openModal: state => {
			!state.value
		},
	},
})

export const { openModal } = ModalSlice.actions
export default ModalSlice.reducer
