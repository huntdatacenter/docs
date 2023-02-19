---
title: SSH passphrase reset
category: Guides
permalink: /do-science/guides/configure-ssh
sidebarDepth: 1
description: Guide on SSH passphrase reset.
---

# SSH passphrase reset

**This guide describes how to reset your SSH passphrase on your entry and home machines.**

[[toc]]

::: tip Need a passphrase reset? 

Order a SSH passphrase reset in our do-science [service desk](/do-science/service-desk/#ssh-passphrase-reset).

:::


## 1. Requirements

A running VPN connection to HUNT Cloud as described in our [Configure your VPN](/do-science/getting-started/configure-vpn/) guide.


## 2. Design a passphrase

You will need to update your **`SSH temporary key`** in the steps below. We prefer that you design a **`passphrase`** instead of a password. A passphrase is a series of words that creates a phrase. It should be:

- long enough to be hard to guess
- not a famous quotation from the literature (but could be pretty close)
- hard to guess by intuition (even by someone who knows you well)
- easy to remember

Oh, and, it should be unique to this site only (not to mention at least
_12 characters_ long and include both _lower_ and _upper_ cases).

Making a good passphrase is great fun and good security hygiene. Here's one to get you going:

```bash
AnalysingPokemon4FunInTheMorning
```

::: warning Expected outcome

A unique **`passphrase`** of minimum 12 characters containing both lower and upper cases.

:::

## 3. Change passphrase for your Entry machine

::: details Windows

1. Download and save the **`Putty`** SSH client from [this link](https://the.earth.li/~sgtatham/putty/latest/w64/putty.exe), or follow with the next step if you already have **`Putty`** installed.

2. Click on the **`putty.exe`** file that you downloaded to your local computer and start the client.

3. Make sure "_Host Name (or IP address)_" field contains: **`<your-username>@<your-lab-IP>`** and click "_Open_".

4. Enter your **`SSH temporary key`** in the terminal window that appear when asked for a password and hit enter. You will not see anything on the screen when you type your password.

5. Type the same **`SSH temporary key`** _one more time_ when asked and hit enter.

6. Enter your new **`passphrase`** from above and hit enter.

7. Retype your **`passphrase`** for verification and hit enter. You will now be kicked out of the entry machine connection.

8. Repeat Step 2 and 3 to verify your passphrase update. Type your **`passphrase`** when asked for a password. You should now be logged into your entry machine.

:::

::: details OS X and macOS

1. Start **`Terminal`** (Command + Space, type "Terminal").

2. Type **`ssh <your-username>@<your-lab-IP>`**

3. You should then be prompted to enter a password **`<your-username>@<your-lab-IP>'s password:`**

4. Enter your **`SSH temporary key`** colelcted in Step 1 _two_ times.

5. Enter your new **`passphrase`** and retype for verification. You will be kicked off the entry machine by completion.

6. Repeat step 2. and 3. to verify your passphrase update. Type your **`passphrase`** when asked for a password. You should now be logged into your entry machine.

:::

::: details Ubuntu Linux

1. Start **`Gnome Terminal`** (Ctrl + Alt + T).

2. Type **`ssh <your-username>@<your-lab-IP>`**

3. You should then be prompted to enter a password **`<your-username>@<your-lab-IP>'s password:`**

4. Enter your **`SSH temporary key`** collected in Step 1 _two_ times.

5. Enter your new **`passphrase`** and retype for verification. You will be kicked off the entry machine by completion.

6. Repeat step 2. and 3. to verify your passphrase update. Type your **`passphrase`** when asked for a password. You should now be logged into your entry machine.

:::

::: warning Expected result

By completion your should be logged into your **entry machine** and see a terminal window that looks about the same as the example below.
It should mention **-entry** to be sure you are connected to correct machine:

    Welcome to Ubuntu 18.04.3 LTS (GNU/Linux 4.4.0-174-generic x86_64)

     * Documentation:  https://help.ubuntu.com
     * Management:     https://landscape.canonical.com
     * Support:        https://ubuntu.com/advantage

      Get cloud support with Ubuntu Advantage Cloud Guest:
        http://www.ubuntu.com/business/services/cloud

    0 packages can be updated.
    0 update is a security update.

    Welcome to YOUR-LABNAME.

    For the record, if you should not be here - please
    leave and report the incident to cloud@hunt.ntnu.no.

    Last login: Mon Jul  2 17:40:16 2018 from 10.10.10.10
    your-username@your-labname-`entry`:~$

:::










## 3. Change passphrase for your Home machine

1. When logged into your entry machine (see expected result above), connect to your home server by typing **`ssh home`** in your terminal window.

2. You will be prompted to type your **`SSH temporary key`** _one time_.

3. Similar to above, you will be asked for a new passphrase. Type your **`passphrase`** _two times_.

4. Similar to above, you will be kicked out of your home machine and back to your entry machine by completion.

5. Similar to above, verify a successful passphrase update by logging into your home machine typing **`ssh home`** once more.


::: warning Expected result

By completion your should see a terminal window that looks similar to the text below. You may differentiate between your entry and home  machine by looking at the machine name at the bottom. This one should say **-home**:

    Welcome to Ubuntu 18.04.3 LTS (GNU/Linux 4.4.0-98-generic x86_64)

     * Documentation:  https://help.ubuntu.com
     * Management:     https://landscape.canonical.com
     * Support:        https://ubuntu.com/advantage

      Get cloud support with Ubuntu Advantage Cloud Guest:
        http://www.ubuntu.com/business/services/cloud

    66 packages can be updated.
    0 updates are security updates.

    Welcome to YOUR-LABNAME.

    For the record, if you should not be here - please
    leave and report the incident to cloud@hunt.ntnu.no.

    Last login: Sun Dec  3 12:29:28 2017 from 10.10.10.10
    {your-username}@{your-labname}-`home`:~$

:::



With a little bit of luck, and if everything worked as expected, you should now be logged into your lab.


