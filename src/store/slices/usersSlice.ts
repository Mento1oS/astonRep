import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {User} from "../../types";

type InitialState = {
    users: User[];
    archivedUsers: User[];
    isActiveUsersDropDownOpen: boolean[];
    isArchivedUsersDropDownOpen: boolean[];
};

const initialState: InitialState = {
    users: [],
    archivedUsers: [],
    isActiveUsersDropDownOpen: [],
    isArchivedUsersDropDownOpen: []
};
const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers(state, action: PayloadAction<User[]>) {
            state.users = action.payload;
        },
        setArchivedUsers(state, action: PayloadAction<User[]>) {
            state.archivedUsers = action.payload;
        },
        setIsActiveDropDownOpen(state, action: PayloadAction<boolean[]>) {
            state.isActiveUsersDropDownOpen = action.payload;
        },
        setIsArchivedDropDownOpen(state, action: PayloadAction<boolean[]>) {
            state.isArchivedUsersDropDownOpen = action.payload;
        },
    },
});

export const {
    setUsers,
    setArchivedUsers,
    setIsActiveDropDownOpen,
    setIsArchivedDropDownOpen
} = usersSlice.actions;

export default usersSlice.reducer;
