# 🍎 Mac

MariaDB has a package you can install using the **homebrew**  MacOS package manager.

If you don't have homebrew yet, please install this first.
if you have another package manager installed, check online for the right commands to install mariaDB with that package manager.

## Installation

It is actually pretty simple, follow the steps below:

1. Install mariaDB with Brew
    ``` 
    brew install mariadb
    ```
2. Start the MariaDB server
    ```
    mysql.server start
    ```
3. To start mariaDB as a service (on the background) we can initialize it to auto-start.
    ```
    brew services start mariadb
    ```
4. Now we just need to log in on our mysql service

    There are 2 ways:

    After MariaDB Server is started, you can log in as your user:
    ```
    mysql
    ```

    Or log in as root:
    ```
    sudo mysql -u root
    ```
    If it asks for a password, the default should also be "root", but in some cases it is just an empty input.

Done!

Let's go to the [next step](../2.SQL/Basics.md) !