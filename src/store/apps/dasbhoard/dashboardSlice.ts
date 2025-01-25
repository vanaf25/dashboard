import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch } from '../../store';
import {Client} from "@/app/components/Leads/Leads";
import {fetchCustomers} from "@/app/apis/usersApi";
import {Meeting} from "@/app/types/dashboardTypes";


interface StateType {
    projects: Client[];
    meetings:Meeting[]
}

const initialState = {
    projects: [],
    meetings:[]
};
export const  dashboardSlice= createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        getProjects: (state, action) => {
            state.projects = action.payload;
        },
        addProject:(state:StateType, action) => {
            state.projects.push({...action.payload,documents:[]} as Client);
        },
        changeProject:(state:StateType, action) => {
            state.projects = state.projects.map(el=>{
                if(el.id===action.payload.id) return action.payload
                return el
            });
        },
        deleteProject:(state:StateType, action) => {
            state.projects = state.projects.filter(el=>el.id!==action.payload);
        },
        setMeetings:(state, action) => {
            state.meetings = action.payload;
        },
        addMeeting:(state:StateType, action) => {
            state.meetings.push(action.payload as Meeting);
        }
    },
});
export const { getProjects,addProject,changeProject
    ,setMeetings,addMeeting,deleteProject } = dashboardSlice.actions;

export const fetchProjects = () => async (dispatch: AppDispatch) => {
    try {
        const response = await fetchCustomers();
        dispatch(getProjects(response));
    } catch (err: any) {
        throw new Error(err);
    }
};
/*export const getMeetings= (userId:string) => async (dispatch: AppDispatch) => {
    try {
        const response = await fetchCustomers(userId,type);
        console.log('res:',response);
        dispatch(getProjects(response));
    } catch (err: any) {
        throw new Error(err);
    }
}  ;*/
export default dashboardSlice.reducer;
