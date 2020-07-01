import React from "react";
import usePushNotifications from "./usePushNotifications";
import Button from "@material-ui/core/Button";

const PushNotificationDemo = () => {
  const Loading = ({ loading }) =>
    loading ? (
      <div className="app-loader">Please wait, we are loading something...</div>
    ) : null;
  const Error = ({ error }) =>
    error ? (
      <section className="app-error">
        <h2>{error.name}</h2>
        <p>Error message : {error.message}</p>
        <p>Error code : {error.code}</p>
      </section>
    ) : null;
  const {
    userConsent,
    pushNotificationSupported,
    onClickAskUserPermission,
    error,
    loading,
  } = usePushNotifications();
  const isConsentGranted = userConsent === "granted";
  const sendNotificationCustom = () => {
    if (Notification.permission === "granted") {
      new Notification("Notifcation sent using an object");
    } else {
      alert("You don't have the right permission to view the notification");
    }
  };
  return (
    <div>
      <Loading loading={loading} />
      <h4>
        Push notification are {!pushNotificationSupported && "NOT"} supported by
        your device.
      </h4>
      <h4>
        User consent to recevie push notificaitons is{" "}
        <strong>{userConsent}</strong>.
      </h4>
      <Error error={error} />
      <Button
        variant="contained"
        color="secondary"
        disabled={!pushNotificationSupported || isConsentGranted}
        onClick={onClickAskUserPermission}
      >
        {isConsentGranted ? "Consent granted" : " Ask user permission"}
      </Button>
      {isConsentGranted ? (
        <div>
          <h4>
            Now go to the dev tools and look for the service worker under
            Application, and press push to receive a notification
          </h4>
          <h4>Or</h4>
          <h4>
            You can also push a notification without using a service worker
          </h4>
          <Button
            variant="contained"
            color="primary"
            onClick={sendNotificationCustom}
          >
            Show Notification
          </Button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default PushNotificationDemo;
