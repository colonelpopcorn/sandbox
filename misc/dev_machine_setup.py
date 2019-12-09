#!/usr/bin/env python3
import platform

list_of_apps = {
    "vscode": {
        "linux": "vscode",
        "mac": "vscode",
        "windows": "vscode",
    },
    "zsh": {
        "linux": "zsh",
        "mac": "zsh",
        "windows": "zsh",
    }
}

if __name__ == '__main__':
    print("Something!")
    platformStr = platform.platform().lower()
    finalPlatformStr = "Mac" if "darwin" in platformStr else "Linux" if "linux" in platformStr else "Windows"
    print(finalPlatformStr)