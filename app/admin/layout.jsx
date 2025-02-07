import Sidebar from "@/Components/adminComponents/Sidebar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export default function Layout({ children }) {
    return (
        <>
            <div className="flex bg-slate-50 relative z-10">
                <ToastContainer theme="dark"/>
                <Sidebar />
                {children}
            </div>
        </>
    )
}   