import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";

const AdminHome = () => {
    const { user } = useContext(AuthContext)
    const { data: stats = {} } = useQuery({
        queryKey: ["admin-stast"],
        queryFn: async () => {
            const res = await fetch("https://fashion-design-server-seven.vercel.app/admin-stats");
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className="my-20 w-full">
            <h2 className="text-2xl text-pink-600"> Hi Welcome Back, {user?.displayName}</h2>
            <div className="stats my-10 bg-transparent shadow-2xl text-white">

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div className="stat-title text-white">Revenue</div>
                    <div className="stat-value">$ {stats.revinue}</div>
                    <div className="stat-desc text-white">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                    </div>
                    <div className="stat-title text-white">Total Coustomers</div>
                    <div className="stat-value">{stats.user}</div>
                    <div className="stat-desc text-white">↗︎ 400 (22%)</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                    </div>
                    <div className="stat-title text-white">Total Products</div>
                    <div className="stat-value">{stats.products}</div>
                    <div className="stat-desc text-white">↘︎ 90 (14%)</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                    </div>
                    <div className="stat-title text-white">Orders</div>
                    <div className="stat-value">{stats.orders}</div>
                    <div className="stat-desc text-white">↘︎ 90 (14%)</div>
                </div>

            </div>
        </div>
    )
}
export default AdminHome;