const butInstall = document.getElementById('buttonInstall');

// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {

    e.preventDefault();

    deferredPrompt = e;

    showInAppInstallPromotion();
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    promptEvent.prompt();

  const result = await promptEvent.userChoice;
  console.log('', 'userChoice', result);
 
  window.deferredPrompt = null;

  divInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;

});
