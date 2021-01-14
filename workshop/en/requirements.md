### Install Git

Follow the instructions here to install Git: https://git-scm.com/download

### Install Docker Desktop

Install Docker Desktop, it provides all the tools for both Docker and Kubernetes. The download for Mac and Windows is located here: https://www.docker.com/products/docker-desktop

![Docker Desktop install logo](/images/dockerdesktop.png)

If you use Docker Desktop on Windows, we recommend the use of Linux Containers (instead of Windows containers). You can change this setting if needed with the Docker Desktop Task Bar icon (this screenshot shows the correct setting):

![Docker Desktop installatie logo](/images/linuxcontainers.png)

### Enable Kubernetes

After the installation of Docker Desktop you can enable Kubernetes with a simple checkbox (through the settings of Docker Desktop)

![Inschakelen Kubernetes](/images/kubernetes.png)

### Install the Azure CLI

To work with Azure you will use the Azure CLI. Follow the installation manual for all the different Operating Systems here: https://docs.microsoft.com/en-us/cli/azure/install-azure-cli

Tip: If you want to use the Azure CLI from your WSL2 distro, you will also need to perform the installation there too.

### Install the HELM CLI

We will use Helm to deploy Charts. Charts are configurable Kubernetes packages. Follow the installation manual here: https://helm.sh/docs/intro/install/

TLDR:

```
brew install helm #macOS

choco install kubernetes-helm #Windows
```

### Optional: Install Visual Studio Code

You can use any editor to edit the files we use throughout the workshop. Visual Studio Code is available for both Mac and Windows and has excellent support for Kubernetes files and resource: https://code.visualstudio.com/download

### Optional: Install plugins

Visual Studio Code has a plugin system and uses a public Market Place to discover and install the plugins. You can find the extensions in the left menu in VS Code. More info on this extension system via the Docs: https://code.visualstudio.com/docs/editor/extension-gallery

We recommend the following extensions:

![Visual Studio Code plugins](images/plugins.png)

### Optional: Install WSL2 on Windows (Windows Subsystem for Linux)

We recommend the installation of WSL2. Follow the steps here: https://docs.microsoft.com/en-us/windows/wsl/install-win10

After the installation of WSL2 you can enable the Docker Desktop integration (again through the Docker Desktop settings).

![WSL2 integratie](/images/wsl2dd.png)
