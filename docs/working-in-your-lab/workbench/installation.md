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

Edit `/etc/hosts` file in your preferred text editor, and add the line that you received from us on email.

Example with vim:

```
sudo vim /etc/hosts
```

:::

::: details Ubuntu Linux

Edit `/etc/hosts` file in your preferred text editor, and add the line that you received from us on email.

Example with vim:

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

3. Fill in the passphrase that you received on signal, and make sure only the same option is checked exactly as in the image. Then click next:

   ![3_cert_p12.png](./images/3_cert_p12.png)

4. Keep the first option to Automatically select the certificate store based on the type of certificate. Click next:

   ![4_cert_p12.png](./images/4_cert_p12.png)

5. Your client certificate is imported and you can hit finish:

   ![5_cert_p12.png](./images/5_cert_p12.png)

6. Wizard will require additional confirmation for installation certification authority HCTS CA 1
   (HUNT Cloud Trust Services). This is required to safely access Workbench in your lab. Before clicking
   yes you should confirm that you see this thumbprint (fingerprint):
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

1. Open Firefox on your local machine.

You can install Firefox on your local machine with the following code: `apt install firefox`.

2. Open url `about:preferences#privacy` and search for "Certificates" or click `Edit` > `Preferences`.

   ![p12_firefox_1.png](./images/p12_firefox_1.png)

3. Click Options > Advanced > Encryption. Click View Certificates.

   ![p12_firefox_2.png](./images/p12_firefox_2.png)

4. Select the Your Certificates tab. Click Import.

   ![p12_firefox_3.png](./images/p12_firefox_3.png)

5. Browse for and select your **`.p12`** file and enter the **`TLS passphrase`** that you got on Signal.

   ![p12_firefox_4.png](./images/p12_firefox_4.png)

6. Click OK.

   ![p12_firefox_5.png](./images/p12_firefox_5.png)

7. Restart Firefox.

The certificate is now installed and can be used for network or secure web site client authentication after the restart of Firefox.

:::

## 3. Open your new Workbench

::: tip

Make sure you are connected to the VPN before accessing Workbench.
:::

1. Open your web browser (Firefox is required for Linux).

2. Type in the URL address to your lab in your browser.

```bash
# -- Principal example
https://<labname>.lab.hdc.ntnu.no

# -- Demo example
https://demolab.lab.hdc.ntnu.no
```

Click "OK" is you get a "User Identification Request" for your new certificate and ensure that the "Remember this decision" is checked.  The certificate are to be issued by: 

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
