// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/7.14.2/firebase-app.js');
// eslint-disable-next-line no-undef
importScripts(
  'https://www.gstatic.com/firebasejs/7.14.2/firebase-messaging.js',
);

// Firebease Config
const config = {
  apiKey: 'AIzaSyDHaD6hFRhejnUif94w9yFkCpgviAMDg_Y',
  authDomain: 'fir-nextjs-203cc.firebaseapp.com',
  databaseURL: 'https://fir-nextjs-203cc.firebaseio.com',
  projectId: 'fir-nextjs-203cc',
  storageBucket: 'fir-nextjs-203cc.appspot.com',
  messagingSenderId: '708963494037',
  appId: '1:708963494037:web:56601cf03d997a45df939c',
  measurementId: 'G-CSKW9T5DME',
};

// eslint-disable-next-line no-undef
if (!firebase.apps.length) {
  // initialize Application
  // eslint-disable-next-line no-undef
  firebase.initializeApp(config);
  // eslint-disable-next-line no-undef
  const messaging = firebase.messaging();

  // Handler for Backgroud Message
  messaging.setBackgroundMessageHandler(payload => {
    // Notification Payload
    const message = JSON.parse(payload.data.notification);
    const notificationTitle = message.title;
    const notificationOptions = {
      body: message.body,
      icon: './firebase-logo.png',
    };
    // Show notification part
    // eslint-disable-next-line no-restricted-globals
    return self.registration.showNotification(
      notificationTitle,
      notificationOptions,
    );
  });

  // listen for notification event
  // Click on notification perform action
  // eslint-disable-next-line no-restricted-globals
  self.addEventListener('notificationclick', event => {
    const url = 'https://google.com';
    event.notification.close(); // Android needs explicit close.
    event.waitUntil(
      // eslint-disable-next-line consistent-return, no-undef
      clients.matchAll({ type: 'window' }).then(windowClients => {
        // Check if there is already a window/tab open with the target URL
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < windowClients.length; i++) {
          const client = windowClients[i];
          // If so, just focus it.
          if (client.url === url && 'focus' in client) {
            return client.focus();
          }
        }
        // If not, then open the target URL in a new window/tab.
        // eslint-disable-next-line no-undef
        if (clients.openWindow) {
          // eslint-disable-next-line no-undef
          return clients.openWindow(url);
        }
      }),
    );
    return event;
  });
}
