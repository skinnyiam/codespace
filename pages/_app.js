import "../styles/globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { ChakraProvider } from "@chakra-ui/react";
import { UserAuthContextProvider } from "../context/authContext";


function MyApp({ Component, pageProps }) {

 
  return (
    
    <>
    
      <UserAuthContextProvider>
        <ChakraProvider>
          <Navbar /> <Component {...pageProps} /> <Footer />
        </ChakraProvider>{" "}
      </UserAuthContextProvider>
    
    </>
  );
}

export default MyApp;
