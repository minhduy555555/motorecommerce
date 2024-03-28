import "@/styles/globals.css";
// import { Provider } from "urql";
import Nav from "@/components/Nav";
import { useState } from "react";
import LoginModal from "@/components/LoginModal";
import RegisterModal from "@/components/Register";
import '@/styles/slide.css';
import Footer from "@/components/Footer";

function MyApp({ Component, pageProps }) {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showRegisterModal, setShowRegisterModal] = useState(false);
    
    return (
        // <Provider>
        <div className="flex flex-col min-h-screen">
            {/* Nav Component */}
            <Nav 
                setShowLoginModal={setShowLoginModal}
                setShowRegisterModal={setShowRegisterModal}
            />
            {showLoginModal && <LoginModal setShowModal={setShowLoginModal} setShowRegisterModal={setShowRegisterModal} />}
            {showRegisterModal && <RegisterModal setShowModal={setShowRegisterModal} setShowLoginModal={setShowLoginModal}/>}
            <div className="flex-1">
                <Component {...pageProps} />
            </div>

            {/* Footer Component */}
            <Footer/>
        </div>
        // </Provider>
    );
}

export default MyApp;