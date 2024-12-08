# Terminal Commands Guide for Mac

## Basic Commands
- `pwd`: Print working directory. Displays the current directory path.
- `ls`: List directory contents.
    - `ls -l`: List in long format.
    - `ls -a`: List all files, including hidden files.

## File and Directory Management
- `cd [directory]`: Change directory.
    - `cd ..`: Move up one directory.
    - `cd ~`: Move to the home directory.
- `mkdir [directory]`: Create a new directory.
- `rmdir [directory]`: Remove an empty directory.
- `rm [file]`: Remove a file.
    - `rm -r [directory]`: Remove a directory and its contents recursively.
- `cp [source] [destination]`: Copy files or directories.
    - `cp -r [source] [destination]`: Copy directories recursively.
- `mv [source] [destination]`: Move or rename files or directories.

## Viewing and Editing Files
- `cat [file]`: Concatenate and display file content.
- `more [file]`: View file content one screen at a time.
- `less [file]`: View file content with backward movement.
- `nano [file]`: Edit files using the Nano text editor.
- `vim [file]`: Edit files using the Vim text editor.

## System Information
- `top`: Display active processes.
- `ps`: Display current processes.
    - `ps aux`: Display detailed information about all running processes.
- `df`: Display disk space usage.
    - `df -h`: Display disk space usage in human-readable format.
- `du`: Estimate file space usage.
    - `du -sh [directory]`: Display the size of a directory in human-readable format.

## Network Commands
- `ping [host]`: Check the network connection to a host.
- `ifconfig`: Display network configuration.
- `ssh [user]@[host]`: Connect to a remote host via SSH.
- `scp [source] [user]@[host]:[destination]`: Securely copy files between hosts.

## Permissions
- `chmod [permissions] [file]`: Change file permissions.
- `chown [owner]:[group] [file]`: Change file owner and group.

## Searching
- `find [directory] -name [filename]`: Search for files in a directory hierarchy.
- `grep [pattern] [file]`: Search for a pattern in a file.

## Miscellaneous
- `echo [text]`: Display a line of text.
- `history`: Display command history.
- `clear`: Clear the terminal screen.

## Conclusion
This guide covers some of the most commonly used terminal commands on a Mac. For more detailed information, you can use the `man [command]` to access the manual pages for each command.
