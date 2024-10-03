import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {User} from "../../types";

type InitialState = {
    users: User[];
    archivedUsers: User[];
    isActiveUsersDropDownOpen: boolean[];
    isArchivedUsersDropDownOpen: boolean[];
    dummies: Map<number, User>;
    currentUser: User;
    hidden: Set<number>;
    popupVisible: boolean;
};

const initialState: InitialState = {
    users: [],
    archivedUsers: [],
    isActiveUsersDropDownOpen: [],
    isArchivedUsersDropDownOpen: [],
    dummies: new Map(),
    currentUser: {
        id: NaN,
        name: '',
        username: '',
        email: '',
        address: {
            street: '',
            suite: '',
            city: '',
            zipcode: '',
            geo: {
                lat: '',
                lng: ''
            }
        },
        phone: '',
        website: '',
        company: {
            name: '',
            catchPhrase: '',
            bs: ''
        }
    },
    hidden: new Set(),
    popupVisible: false
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
        setDummies(state, action: PayloadAction<Map<number, User>>) {
            state.dummies = action.payload;
        },
        setCurrentUser(state, action: PayloadAction<User>) {
            state.currentUser = action.payload;
        },
        setHidden(state, action: PayloadAction<Set<number>>) {
            state.hidden = action.payload;
        },
        setPopupVisible(state, action: PayloadAction<boolean>) {
            state.popupVisible = action.payload;
        },
    },
});

export const {
    setUsers,
    setArchivedUsers,
    setIsActiveDropDownOpen,
    setIsArchivedDropDownOpen,
    setDummies,
    setCurrentUser,
    setHidden,
    setPopupVisible
} = usersSlice.actions;

export default usersSlice.reducer;
