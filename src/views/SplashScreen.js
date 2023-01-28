
const SplashScreen = ({ children, keycloakReady }) => {
  console.log(`SplashScreen keycloak ready ${keycloakReady}`);

  return (
    <>
      {keycloakReady ? (
        children
      ) : (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      )}
    </>
  );
};

export default SplashScreen;
