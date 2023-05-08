---
title: HUNT Workbench reissue certificate
category: Guides
permalink: /do-science/guides/hunt-workbench-reissue-certificate
sidebarDepth: 1
description: Guide on how to install a new certificate for your HUNT Workbench.
---

# HUNT Workbench reissue certificate

**This guide describes how to replaced an expired web browser certificate for your HUNT Workbench.**

::: tip When to use

This guide applys when you have requested a reissue of your expired HUNT Workbench certificate in our do science [service desk](/do-science/service-desk/#hunt-workbench-reissue). 

:::


::: expander "Windows" id="windows"

1. Open the p12 certificate. Make sure the store location is set to Current User and click next:

   ![1_cert_p12.png](./images/1_cert_p12.png)

2. Continue clicking on next

   ![2_cert_p12.png](./images/2_cert_p12.png)

3. Fill in the **`TLS passphrase`** that you received on signal, and make sure only the same option is checked exactly as in the image. Then click next:

   ![3_cert_p12.png](./images/3_cert_p12.png)

4. Keep the first option to Automatically select the certificate store based on the type of certificate. Click next:

   ![4_cert_p12.png](./images/4_cert_p12.png)

5. Your client certificate is imported and you can hit finish:

   ![5_cert_p12.png](./images/5_cert_p12.png)

6. Wizard might require additional confirmation for installation of your Lab CA, and your Lab name should appear. Click yes to confirm if asked, or continue to the next step.

   ![7_confirmLabCAcertificate.png](./images/7_confirmLabCAcertificate.png)

7. Quit your browser and restart it again for the certificate to get recognized.

   ![8_import_success.png](./images/8_import_success.png)

:::


::: expander "macOS Ventura 13+" id="macos"

1. Open your system profile config file that you got from Filesender (**`<your_user_name>.mobileconfig`**).

2. In **`System settings`** open section **`Privacy & Security`**, scroll to the bottom of the page and sellect **`Profiles`**

   ![macventura1](./images/macventura1.png)

3. Select certificate required for installation.

   ![macventura2](./images/macventura2.png)


4. Click **`Install`**  when prompted. Then enter the **`TLS passphrase`** that you received on Signal and confirm.

   ![macventura3](./images/macventura3.png)

5. Quit your browser and restart it again for the certificate to get recognized.

6. When you open your HUNT Workbench for the first time you will be asked for your local macOS password. This allows the browser to access your client certificate stored in your local Keychain. After filling in the password, confirm by clicking **`Always allow`** / **`Tillat alltid`**.

   ![macos_chrome.png](./images/macos_chrome.png)

:::

::: expander "macOS Monterey and older" id="macos-monterey-and-older"

1. Open the system profile config (.mobileconfig) attached in archive.

2. Confirm the installation of profile.

   ![macos-profiles-continue.png](./images/macos-profiles-continue.png)

3. Enter the passphrase that you received on signal and then confirm.

   ![macos-profiles-credentials.png](./images/macos-profiles-credentials.png)

4. Quit your browser and restart it again for the certificate to get recognized.

5. When opening Workbench for the first time you will be asked for macOS password,
   allowing the browser to access your client certificate stored in Keychain.
   After filling in the password you can confirm by clicking on **`Always allow`** / **`Tillat alltid`**.

   ![macos_chrome.png](./images/macos_chrome.png)

:::

::: expander "Ubuntu Linux"

We recommend that you use the [Google Chrome browser](https://www.google.com/chrome/) for predictability.

1. Open Chrome on your local computer.

2. Open url **`chrome://settings/certificates`** and click the **`Import`** button on the right side of the screen.

3. Browse and select your **`.p12`** file on your local computer and enter the **`TLS passphrase`** that you got on Signal.

4. Restart Chrome.

After the restart of Google Chrome the certificate is ready for network or secure web site client authentication.

:::

With a little bit of luck, you should now be able to continue your work as before. Enjoy! [Click here](/do-science/hunt-workbench/) to get back to the HUNT Workbench section. 

