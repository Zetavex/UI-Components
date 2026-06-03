import { useEffect } from "react";
import Footer from "../components/Footer";
import LoadingScreen from "../components/LoadingScreen";

import { Outlet } from "react-router";
import { useNavigation } from "react-router";
import { useState } from "react";

function Auth() {
  const navigation = useNavigation();
  const [isNavigating, setIsNavigating] = useState(
    navigation.state === "loading" || navigation.state === "submitting",
  );

  useEffect(() => {
    setIsNavigating(
      navigation.state === "loading" || navigation.state === "submitting",
    );
  }, [navigation.state]);

  return (
    <>
      {isNavigating && <LoadingScreen />}
      <main id="auth-layout">
        {window.innerWidth >= 768 ? (
          <div className="desktop-section">
            <Outlet />
          </div>
        ) : (
          <Outlet />
        )}
        <Footer />
      </main>
    </>
  );
}

export default Auth;
