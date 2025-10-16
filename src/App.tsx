import {BrowserRouter, Routes, Route} from "react-router";
import Layout from "@/components/layout/Layout.tsx";
import HomePage from "@/components/pages/HomePage.tsx";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout children={undefined} />}>
                        <Route index element={<HomePage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default App