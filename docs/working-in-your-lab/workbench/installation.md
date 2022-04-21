---
title: Installation
category: Workbench
permalink: /working-in-your-lab/workbench/installation
sidebarDepth: 1
description: Installation guide for Workbench in HUNT Lab.
---

# Workbench installation

**This guide will help you to connect with your lab Workbench over a web browser.**

::: warning Requirements

- Working VPN and SSH as configured in our [Getting started](/getting-started/) guide.
- Certificate as described in the [Workbench certificate transfer](/guides/workbench-key-transfer/).

:::

::: tip Time estimate
Allow for **30 minutes** to complete this installation and some playtime in your new environment.
:::




## 1. Edit hosts file

We are sending hosts record in onboarding email. You will need to make sure that your hosts file contains this line.

Example of hosts record:

```
10.42.130.X <lab_name>.lab.hdc.ntnu.no
```

::: details Windows

1. Press the Windows key.

2. Type `Notepad` in the search field.

3. In the search results, **right-click** Notepad and select Run as administrator.

   ![notepad-administrator.png](./images/notepad-administrator.png)

   ![notepad-admin-confirm.png](./images/notepad-admin-confirm.png)

4. From Notepad, open the following file: `C:\Windows\System32\Drivers\etc\hosts`.

   Start by selecting `File` > `Open`.

   ![notepad-open-file.png](./images/notepad-open-file.png)

   Find the directory, and then change `Text documents` to view `All files`.
   When hosts file appears in the list select it and click Open:

   ![notepad-open-hosts-steps.png](./images/notepad-open-hosts-steps.png)

5. Add the line that you received from us on email.

6. Select `File` > `Save` to save your changes.

:::




::: details OS X and macOS

On your local machine, edit `/etc/hosts` file in your preferred text editor, and add the line that you received from us on email.

Example with text editor:

```
EDITOR='open -Wne' sudo -e /etc/hosts
```

Example with vim:

```
sudo vim /etc/hosts
```



:::

::: details Ubuntu Linux

On your local machine, edit `/etc/hosts` file in your preferred text editor, and add the line that you received from us on email.

Example with gedit

```
sudo gedit /etc/hosts
```

Example with vim

```
sudo vim /etc/hosts
```


:::


## 2. Install certificates

::: details Windows

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

6. Wizard will require additional confirmation for installation certification authority HCTS CA 1
   (HUNT Cloud Trust Services).
   HUNT Cloud certificate is required to safely access Workbench in your lab.
   If you see LAB instead of `HCTS CA 1` skip to step 7.
   Usually you are asked to confirm only when setting up Workbench for the first time.
   Before clicking yes you should confirm that you see this thumbprint (fingerprint):
   `ADD9DFEC C998BE44 AC2F254E 75E5EB98 D91879A6`

   ![6_confirmCAcertificate.png](./images/6_confirmCAcertificate.png)

7. Same step is required for your Lab CA, where your Lab name should appear:

   ![7_confirmLabCAcertificate.png](./images/7_confirmLabCAcertificate.png)

8) Quit your browser and restart it again for the certificate to get recognized.

   ![8_import_success.png](./images/8_import_success.png)

:::

::: details OS X and macOS

1. Open the system profile config (.mobileconfig) attached in archive.

2. Confirm the installation of profile.

   ![macos-profiles-continue.png](./images/macos-profiles-continue.png)

3. Enter the passphrase that you received on signal and then confirm.

   ![macos-profiles-credentials.png](./images/macos-profiles-credentials.png)

4. Quit your browser and restart it again for the certificate to get recognized.

5. When opening Workbench for the first time you will be asked for macOS password,
   allowing the browser to access your client certificate stored in Keychain.
   After filling in the password you can confirm by clicking on `Always allow` / `Tillat alltid`.

   ![macos_chrome.png](./images/macos_chrome.png)

:::

::: details Ubuntu Linux

We recommend that you use the Google Chrome browser for predictability. [Click here](https://duckduckgo.com/?q=google+chrome+ubuntu+install+howto) for guides on how to install Chrome on your local machine.

1. Open Chrome on your local machine.

2. Open url `chrome://settings/certificates` and click the `Import` button on the right side of the screen.

3. Browse and select your `.p12` file on your local machine and enter the `TLS passphrase` that you got on Signal.

4. Restart Chrome.

The certificate is now installed and can be used for network or secure web site client authentication after the restart of Firefox.

:::

## 3. Open your new Workbench

::: tip

Make sure you are connected to the VPN before accessing Workbench.
:::

1. Open your web browser (we recommend Google Chrome).

2. Type in the URL address to your lab in your browser.

```bash
# -- Principal example
https://<labname>.lab.hdc.ntnu.no

# -- Demo example
https://demolab.lab.hdc.ntnu.no
```

Click `OK` if you get a `User Identification Request` for your new certificate and ensure that the `Remember this decision` is checked. The certificate are to be issued by:

```
Organizatoin: "HUNT Cloud"
Issued Under: "HUNT Cloud Trust Services"
```

3. Sign in with your HUNT Cloud lab username and lab password. This is the password that you made on your first login.

4. With a little bit of luck you should now see your new Workbench. Click around and explore your new world!


![hunt-lab-workbench.png](./images/hunt-lab-workbench.png)


## Immediate troubleshooting


### I don't remember my password

::: details Read more
Don't worry. [Contact us](/contact) on email for a password reset.
:::

### Firefox - Did Not Connect

::: details Read more

Firefox may require manually importing HUNT Cloud Certificate Authority to consider it trusted.
If you see Error code: `SEC_ERROR_UNKNOWN_ISSUER` when accessing Workbench follow these steps:
1. Download our public CA certificate: [https://pki.hdc.ntnu.no/hctsca1.crt](https://pki.hdc.ntnu.no/hctsca1.crt)
2. Open Firefox url: `about:preferences#privacy`
3. Scroll down to section `Certificates` and click on `View Certificates`:
   ![mac-firefox-certificates.png](./images/mac-firefox-certificates.png)
4. Switch to tab `Authorities` and click on `Import`:
   ![mac-firefox-import-cert.png](./images/mac-firefox-import-cert.png)
5. Select `hctsca1.crt` and check option `Trust this CA to identify websites`:
   ![mac-firefox-trust-ca.png](./images/mac-firefox-trust-ca.png)
:::

### 502 Bad gateway

::: details Read more

Something is wrong with your certificate configuration or the server in your lab [Contact us](/contact) us for further investigation.

:::

### Error - 'matlab' executable not found in PATH

::: details Read more

Access to MATLAB requires the application to be installed in your lab. For now, if you click on the MATLAB icon and the application is missing you will meet a red error box stating that "matlab executable not found in PATH". Contact your lab coordinator to investigate your licensing options and [contact us](/contact) us with your installation order.

:::
