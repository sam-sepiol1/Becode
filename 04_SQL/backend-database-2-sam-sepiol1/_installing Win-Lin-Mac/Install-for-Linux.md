# 🐧 Linux

First, you should know there are several ways to install software on Linux systems. The easiest and most widely used option is installing software using a package manager like Aptitude or Pacman.

Also, keep in mind there are several flavors of Linux, called distributions or for short distros. These flavors all use the same kernel, but are great in other things. Examples of well-known Linux distros are Debian/Ubuntu (Ubuntu is based on Debian), RedHat Enterprise Linux (RHEL) and CentOS, Fedora, etc.

So, in order to install MariaDB on a Linux system, you have to know the flavor and/or the available package manager(s).

## Determining Linux

Run this command in a SSH session with your Linux server to get the flavor:

```bash
sudo uname -a
```

> **IMPORTANT:** You need sudo rights. If you log in as root, you can omit the sudo part. Sudo stands for Super User Do Once; the superuser is root.
Using the output from this command, you'll have a part stating the name of the distro. Using that information, navigate to the corresponding section below to get instructions on how to install MariaDB for your distribution.

## Installing MariaDB for Debian-based systems

For Debian and Debian-based systems, do the following:

### Step 1: Install the prerequisites

First, install the needed software to run the other commands in this guide. To do that, run the following in the terminal:

```bash
sudo apt update
```

This command will fetch changes in the local repository list, so you can install newly released software and versions. In some cases, it also shows available upgrades.

Then, run this command:

```bash
sudo apt install -y software-properties-common
```

It will install all dependencies to add repositories and keys, download from HTTPS, etc.

### Step 2: Import the needed signatures

Linux is secure, and it requires signatures to download and install software using a package manager.

To import the needed GPG keys, execute the following commands:

```bash
sudo apt-key adv --recv-keys --keyserver hkp://keyserver.ubuntu.com:80 0xF1656F24C74CD1D8
```

This looks up the key using the hexadecimal identifier and stores it in the right location for us.

### Step 3: Import the software repository for MariaDB

Now we have the key, it's time to add the repo. A software repository is a collection of applications and their versions. Sometimes a repository only contains the software, utilities and their versions of only one product or vendor, but more often a repo contains several products of several vendors, each with their own versions.

MariaDB is published in the main software repository for Debian/Ubuntu, but it is an older, less secure version. That's why we prefer to install from MariaDB's own repo.

Add the repo by executing the following command:

```bash
sudo add-apt-repository 'deb [arch=amd64] https://mariadb.mirror.liquidtelecom.com/repo/10.6/<os> <codename> main'
```

Don't forget to replace the above placeholders with their values:
- <os> &rarr; the name of the OS you use: e.g. ubuntu
- <codename> &rarr; the code name associated with the version of the os you're running, e.g. jammy for Ubuntu 22.04 LTS

Also keep in mind that, if you're running this on an ARM64 based system, like a Raspberry Pi, you have to replace the CPU architecture (which is amd64 at the moment) with the correct arch, being arm64.

The previous command doesn't do much, except adding the line between quotes to a file under /etc/apt/sources.list.d or in the file /etc/apt/sources.list itself.

Next, perform a sources update again:

```bash
sudo apt update
```

### Step 4: Installing MariaDB

Last, but certainly not least, install all software required for running a MariaDB server:

```bash
sudo apt install mariadb-server mariadb-client
```

This command will show the software that is due to install, which you can confirm.

> **HINT:** If you don't want to see the confirmation box, just add the -y flag to the above command. Then it will automatically confirm ass boxes by yes.
>
> Be aware that this could involve installing unwanted software or doing things you don't want the manager to do.


To confirm MariaDB has been installed correctly, run the following:

```bash
mariadb --version
```

This should, if everything went well, display the installed version of MariaDB in the standard output of your terminal.

### Step 5: starting and enabling the service

To start MariaDB after the installation was successful, enter this command:

```bash
sudo systemctl start mariadb.service
```

To ensure MariaDB starts when the system boots, do this:

```bash
sudo systemctl enable mariadb.service
```

### (Optional) Step 6: Securing MariaDB

By default, MariaDB is absolutely **NOT** secure. It's not necessary for the sake of this course, but whenever you need a production MariaDB instance, don't forget the secure it.

A first step in MariaDB security is running the following command and following the steps. Be sure to enter secure details:

```bash
sudo mysql_secure_installation
```

### Source and extra explanation

[This link](https://www.cherryservers.com/blog/how-to-install-and-start-using-mariadb-on-ubuntu-20-04) provided me with the exact commands you need. Eventhough it's written for an older version of Ubuntu (20.04), it still is relevant today. You can refer to it and further optimize the setup we did by following the further instructions.

## Installing MariaDB on CentOS/Fedora/Rhel

RPM based Linux systems, like CentOS, are used in enterprise environments. As they usually don't appear in smaller businesses, I only provide a link to a good installation resource for CentOS:

[You can use this link if you want to see the process or if you want to install MariaDB on an own CentOS or related system](https://www.fcgid.com/how-to-install-mariadb-10-5-on-centos-stream-9/)


Done!

Let's go to the [next step](../2.SQL/Basics.md) !