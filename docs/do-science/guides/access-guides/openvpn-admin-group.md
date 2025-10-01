---
title: OpenVPN administrators group
category: Guides
permalink: /do-science/guides/openvpn-admin-group
outline: 1
description: How to setup OpenVPN group
---

# OpenVPN administrators group

**Request assistance from your local IT personnel if you do not hold administrative rights on your local computer and request that they:**

(1) assist you in the OpenVPN installation, or

(2) grant you administrative rights on your local computer so you can install OpenVPN yourself.

**For simplicity, we have outlined the steps they need to perform so you can link this guide to your request:**

1. Install the OpenVPN client on the computer for my user: Download and install using the Windows installer from [https://openvpn.net/community-downloads/](https://openvpn.net/community-downloads/)

2. Create an OpenVPN Administrators group on my computer:

<CopyInput
    :value='`net localgroup /add "OpenVPN Administrators"`'
    label=""
    prefix=""
/>

3. Add my user to OpenVPN Administrators group on my computer:

<CopyInput
    :value='`net localgroup "OpenVPN Administrators" /add "myDomain\\myUsername"`'
    label=""
    prefix=""
/>

Replace <code>myDomain</code> and <code>myUsername</code> with user information.
