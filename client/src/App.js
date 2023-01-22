import { Box } from "@chakra-ui/react";
import "./App.css";
import Nav from "./Components/Navbar/Nav";
import NavMobile from "./Components/Navbar/NavMobile/NavMobile";
import { useMedia } from "./MediaQuery/UseMedia";

import React, { Suspense, lazy } from "react";
import Loading from "./Loading";

import Footer from "./Components/Footer/Footer"
import { CartHome } from "./Components/CartV/CartHome";
import { PaymentForm } from "./Components/CartV/CustomerDetailsForm/CustomerForm";
const AllRoutes= lazy(()=>import('./Routes/AllRoutes'))


function App() {
  const { mediumScreen } = useMedia();
  return (
    <Box className="App">


      <Box mt="50px" ></Box>
      {/* <Suspense
        fallback={
          <div>
            <Loading />
          </div>
        }
      >
        {mediumScreen ? <Nav /> : <NavMobile />}
        <AllRoutes />
        <Footer />
      </Suspense> */}
{/* <CartHome /> */}
<PaymentForm />
    </Box>
  );
}

export default App;
