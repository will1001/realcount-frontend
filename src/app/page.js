"use client";
import React, { useState, useEffect } from "react";

import { Provider, useSelector } from "react-redux";
import { persistor, store } from "../../src/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import HomePage from "@/components/HomePage";

export default function Home() {
  return (
    <Provider store={store}>
      <PersistGate loading={"loading"} persistor={persistor}>
        <HomePage />
      </PersistGate>
    </Provider>
  );
}
