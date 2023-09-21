import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";

test("Logo should load on rendering header",()=>{
    const header=  render(
    <Provider store={store}><Header/></Provider>);
})