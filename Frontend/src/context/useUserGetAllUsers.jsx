import React, { useEffect, useState } from 'react';
import Cookies from "js-cookie";
import axios from "axios";

function useUserGetAllUsers() {
    const [allUsers, setAllUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const getUsers = async () => {
            setLoading(true);
            try {
                const token = Cookies.get("jwt");
                const response = await axios.get("http://localhost:5002/user/getUserProfile", {
                    withCredentials: true,
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setAllUsers(response.data.filteredUsers || []);
                setLoading(false);
            } catch (error) {
                console.log("Error in userGetAllUsers" + error);
                setLoading(false);
            }
        };
        getUsers()
    }, []);

    return [ allUsers, loading ];

}

export default useUserGetAllUsers
