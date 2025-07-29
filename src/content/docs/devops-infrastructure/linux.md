---
title: Linux Commands Reference
description: A quick reference guide for essential Linux commands, covering file management, system operations, and user management.
category: DevOps, Infrastructure
---

# Linux

## Basic Linux Commands

| Command                                | Description                                                      |
| -------------------------------------- | ---------------------------------------------------------------- |
| `ls -l`                                | List files in the current directory with details                 |
| `touch <filename>`                     | Create an empty file or update the timestamp of an existing file |
| `mkdir <directory>`                    | Create a new directory                                           |
| `rm <filename>`                        | Remove a file from the current directory                         |
| `rm -rf <directory>`                   | Remove a directory and its contents recursively                  |
| `mv <source> <destination>`            | Move or rename a file or directory                               |
| `cp <source> <destination>`            | Copy a file or directory                                         |
| `rsync -avz <source> <destination>`    | Synchronize files with compression                               |
| `df -h`                                | Display disk space usage in a human-readable format              |
| `du -sh <directory>`                   | Show the size of a directory in a human-readable format          |
| `sudo <command>`                       | Execute a command with superuser privileges                      |
| `su -`                                 | Switch to another user account                                   |
| `cd <directory>`                       | Change the current directory                                     |
| `chmod <permissions> <file>`           | Change file permissions (e.g., `chmod 755 script.sh`)            |
| `chown <user>:<group> <file>`          | Change file ownership (e.g., `chown user:group file.txt`)        |
| `cat <file>`                           | Display the contents of a file                                   |
| `find <directory> -name <pattern>`     | Search for files matching a pattern in a directory               |
| `find <directory> -type f -size +100M` | Find files larger than 100MB in a directory                      |
| `find <directory> -type d -empty`      | Find empty directories in a directory                            |
