import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Input } from "./components/Input";
import { FetchTest } from "./components/FetchTest";
import { PostTest } from "./components/PostTest";
import { AxiosPostTest } from "./components/AxiosPostTest";
import { AxiosGetTest } from "./components/AxiosGetTest";
import { QueryClient, QueryClientProvider } from "react-query";
import { RedButton } from "./components/RedButton";
import { BlueButton } from "./components/BlueButton";
import { BlueIndicator } from "./components/BlueIndicator";
import { RedIndicator } from "./components/RedIndicator";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="App-header">
          <Input></Input>

          <RedButton></RedButton>
          <RedIndicator></RedIndicator>
          <br></br>
          <BlueButton></BlueButton>
          <BlueIndicator></BlueIndicator>
          <br></br>
          <PostTest></PostTest>
          <br></br>
          <AxiosPostTest></AxiosPostTest>
          <br></br>
          <FetchTest></FetchTest>
          <br></br>
          <AxiosGetTest></AxiosGetTest>
        </header>
      </div>
    </QueryClientProvider>
  );
}

export default App;
