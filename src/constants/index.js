
import AdminHomePage from "../containers/AdminHomePage"
import TaskBoard from '../containers/TaskBoard'
import LoginPage from '../containers/LoginPage'
import SignUpPage from '../containers/SignUpPage'
export const API_ENDPOINT = 'http://localhost:3000'
export const STATUSES = [
    {
        value: 0,
        label: 'Ready'
    },
    {
        value: 1,
        label: 'In Progress'
    },
    {
        value: 2,
        label: 'Completed'
    }
]

export const STATUS_CODE = {
    SUCCESS: 200,
    CREATED: 201,
    UPDATE:202
}

export const ADMIN_ROUTES = [
    {
        path: '/admin',
        name:'Admin Home Page',
        exact: true,
        component: AdminHomePage
    },
    {
        path:'/admin/task-board',
        name: 'Management Task',
        component: TaskBoard
    }
]

export const ROUTES = [
    {
        name: 'Sign In',
        path: '/signin',
        component: LoginPage,
    },
    {
        name:'Sign Up',
        path: '/signup',
        component: SignUpPage
    }
]