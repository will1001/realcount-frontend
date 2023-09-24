import React, { useState } from "react";
import { setToken } from "../../src/redux/userReducer";
import { useDispatch } from "react-redux";
import axiosFetch from "@/API/axiosFetch";

function Login() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const login = async () => {
    console.log(formData);
    const res = await axiosFetch("post", `/login`, formData)
      .then(async (res) => {
        if (res?.data) {
          console.log(res.data);

          dispatch(
            setToken({
              token: res.data.access_token,
              username: res.data?.user?.username,
              kabupaten: res.data?.user?.kabupaten,
              id_kabupaten: res.data?.user?.id_kabupaten,
            })
          );
          // window.location.reload(false);
        } else {
          return <p>Loading.....</p>;
        }
      })
      .catch((err) => {
        console.log(err);
        alert(err?.response?.data?.message);
      });
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Username"
            type="text"
            placeholder="Enter your Username"
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter your password"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={login}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
