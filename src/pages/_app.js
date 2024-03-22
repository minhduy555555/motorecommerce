import "@/styles/globals.css";
import { Provider } from "urql";
import Nav from "@/components/Nav";
import { Fragment, useState } from "react";
import LoginModal from "@/components/LoginModal";
import RegisterModal from "@/components/Register";
import '@/styles/slide.css'
import '@/styles/product.css'
import '@/styles/footer.css'
import Footer from "@/components/footer";


function MyApp({ Component, pageProps }) {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  
  return (
    <Provider>
      <Fragment>
        <Nav 
          setShowLoginModal={setShowLoginModal}
          setShowRegisterModal={setShowRegisterModal}
        />
        {showLoginModal && <LoginModal setShowModal={setShowLoginModal} setShowRegisterModal={setShowRegisterModal} />}
        {showRegisterModal && <RegisterModal setShowModal={setShowRegisterModal} setShowLoginModal={setShowLoginModal}/>}
        <Component {...pageProps} />;
        <Footer/>
      </Fragment>
    </Provider>
  );
}

export default MyApp;