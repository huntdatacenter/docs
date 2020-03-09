---
permalink: /getting-started/configure-ssh
sidebarDepth: 1
---


# Step 3. Configure your SSH

These steps will configure your SSH connection to and from your local machine and your lab. You will first configure a machine used for security purposes that we call **`entry`**, and then one machine that we call **`home`** were you will do your scientific computing.

::: warning Requirement
- A running VPN connection (successful implementation of [Step 2](/getting-started/configure-vpn/#_2-4-verify-your-vpn-connection)).
:::



## 3.1 Identify required info 

Open the **`ssh-config.txt`** file that you collected in Step 1 using your favourite text editor. 

This file contains the necessary information for your SSH configuration. Take note of your **`lab-name`**, your **`lab-IP`** and your **`username`**.

Example contents of **`ssh-config.txt`**:

```bash
Host <your-lab-name>-entry
    HostName <your-lab-IP>
    User <your-username>
```

::: warning Expected info

- **`your-lab-name'** - the name of your lab
- **`your-lab-IP'** - the IP address of your lab
- **`your-username'** - your username in your lab

:::



## 3.2 Design a passphrase

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







## 3.3 Configure entry

::: details Windows 

1. Download and save the **`Putty`** SSH client from [this link](https://the.earth.li/~sgtatham/putty/latest/w64/putty.exe).

2. Click on the **`putty.exe`** file that your save your local machine to start the client.

3. Type **`<your-username>@<your-lab-IP>`** in the "_Host Name (or IP address)_" field and click "_Open_".

4. Enter your **`SSH temporary key`** collected in Step 1 in the terminal window that appear when asked for a password.

5. Type the same **`SSH temporary key`** _one more time_ when asked. 

6. Enter your new **`passphrase`** from above.

7. Retype your **`passphrase`** for verification. You will now be kicked out of the entry machine connection.

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

By completion your should be logged into your **entry machine** and see a terminal window that looks about the same as this:

```bash

Welcome to Ubuntu 16.04.3 LTS (GNU/Linux 4.4.0-174-generic x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/advantage

  Get cloud support with Ubuntu Advantage Cloud Guest:
    http://www.ubuntu.com/business/services/cloud

0 packages can be updated.
0 update is a security update.

Welcome to YOUR-LABNAME.

For the record, if you shouldn't be here - please
leave and report the incident to cloud@hunt.ntnu.no.

Last login: Mon Jul  2 17:40:16 2018 from 10.10.10.10
your-username@your-labname-`entry`:~$ 

:::










## 3.4 Configure home

1. When logged into your entry machine (see expected result above), connect to your home server by typing **`ssh home`** in your terminal window.

2. You will be prompted to type your **`SSH temporary key`** _one time_.

3. Similar to above, you will be asked for a new password. Type your **`passphrase`** _two times_.

4. Similar to above, you will be kicked out of your home machine and back to your entry machine by completion. 

5. Similar to above, verify a successful passphrase update by logging into your home machine typing **`ssh home`** once more. Type your **`passphrase`** when asked for password. 

6 With a tiny bit of luck, you should now be logged into your lab!


::: warning Expected result

By completion your should see a terminal window that looks similar to the text below. You may differentiate between your entry and home  machine by looking at the machine name at the bottom. This one should say **-home**:

```bash
Welcome to Ubuntu 16.04.3 LTS (GNU/Linux 4.4.0-98-generic x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/advantage

  Get cloud support with Ubuntu Advantage Cloud Guest:
    http://www.ubuntu.com/business/services/cloud

66 packages can be updated.
0 updates are security updates.

Welcome to YOUR-LABNAME.

For the record, if you shouldn't be here - please
leave and report the incident to cloud@hunt.ntnu.no.

Last login: Sun Dec  3 12:29:28 2017 from 10.10.10.10
your-username@your-labname-`home`:~$
```

:::







## 3.5 Simplify your life

::: warning

**Do not skip this section...**

:::


We hope that you will log into your lab a lot over the coming months and years, so please invest some time to make sure you simplify that process as much as possible!




::: details Windows

1. [Install MobaXterm](/working-in-your-lab/technical-tools/mobaxterm) for simple and "password less" access directly to your home machine, as well as click-based file transfers between your local machine and your home machine. 

2. [Install X2Go](/working-in-your-lab/technical-tools/x2go/#set-up-your-local-machine) for "password less" one-click access to graphical software in your lab, such as RStudio.

:::


::: details OS X, MacOS and Ubuntu Linux

When completed, the steps below should allow you to log "password less" directly into your home machine by typing: 

```bash 
ssh your-lab-name
```

### Establish a SSH alias

This will allow you to log directly into your lab without the need to remember your user name or your lab's IP address:

1. On your local machine, open the **`ssh-config.txt`** file from [Step 1.2](/getting-started/collect-your-keys/#_1-2-secrets-on-your-email).

2. On your local machine, add the content from the **`ssh-config.txt`** to the file named **`config`** in the hidden ssh-folder in your home directory (**`~/.ssh/config`**) using your favorite file editor. You may need to generate this file if it is your first ssh-configuration.

3. Test your new setup by typing **`ssh <your-lab-name>-entry`** in your terminal. For example: 

```
ssh demolab-entry
```

You should now be prompted your passphrase and then be logged into your entry-machine. Exit your entry machine and return to your local machine by typing **`exit`**.


### Establish a password-less login

This will allow you to log directly into your lab without the need to remember your passphrase.

> If you already have a RSA certificate on your local computer that you would like to use, start from step 3. 

1. In your local computer, open a terminal.
2. Generate a new RSA certificate by typing **`ssh-keygen`**. Hint enter _three times_. When this finishes:
3. Type **`ssh-copy-id <your-lab-name>-entry`** to add your new certificate to your entry machine. Enter your **`passphrase`** when prompted for a password.
4. Enter **`ssh-add`** to add the certificate to the ssh-agent. If you don't have a running ssh-agent you may see an error message. In such a case, first enter **`eval "$(ssh-agent -s)"`** and next enter **`ssh-add`**.

::: warning Expected result

Simple and secure, you should now be able to directly enter your home node with this command:

```bash
ssh <your-lab-name>
```

for example, 

```bash
ssh demolab
```

Voilà!


:::

::: tip
Time for coffee!
:::
