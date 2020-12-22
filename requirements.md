### Installatie van Git
Installeer Git volgens de instructies: https://git-scm.com/download

### Installatie van Docker Desktop
Installeer Docker Desktop op je laptop, daarmee krijg je alle tools voor zowel Docker als Kubernetes. De download voor Mac of Windows vind je hier: https://www.docker.com/products/docker-desktop

![Docker Desktop installatie logo](images/dockerdesktop.png)

### Inschakelen van Kubernetes
Na de installatie van Docker Desktop is het inschakelen van Kubernetes slechts een kwestie van een checkbox (via de settings van Docker Desktop). 

![Inschakelen Kubernetes](images/kubernetes.png)

### Installeren van de Azure CLI
Om Azure te kunnen beheren maak je gebruik van de Azure CLI. Volg de installatiestappen zoals hier beschreven: https://docs.microsoft.com/en-us/cli/azure/install-azure-cli

Tip: Wanneer je de Azure CLI ook in WSL2 wil kunnen gebruiken, moet je daar de installatie nogmaals uitvoeren. 

### Installatie van HELM CLI
Helm gebruiken we voor het uitrollen van Helm Charts. Dit zijn configureerbare samengestelde Kubernetes packages. Volg de installatiestappen hier: https://helm.sh/docs/intro/install/

TLDR:
```
brew install helm #macOS

choco install kubernetes-helm #Windows
```

### Optioneel: Installatie van Visual Studio Code
In de demo gebruik ik Visual Studio Code, maar je kunt natuurlijk zelf een andere editor gebruiken. Mocht je VS Code op Mac of Windows willen installeren, dan volg je de stappen hier: https://code.visualstudio.com/download 

### Optioneel: Installatie van de plugins
Visual Studio Code kent een plugin systeem, waarbij je via de Azure Marketplace functionaliteit kunt toevoegen. Je vindt de plugins in het linker menu binnen VS Code, het wijst zich eigenlijk vanzelf. Meer info over het plugin systeem via de Docs: https://code.visualstudio.com/docs/editor/extension-gallery

De volgende plugins zijn aan te raden:

![Visual Studio Code plugins](images/plugins.png)

### Optioneel: Installeer WSL2 op Windows (Windows Subsystem for Linux)
Wanneer je op Windows werkt is het raadzaam om WSL2 te installeren. Dit vraagt wel een bepaalde versie van Windows 10, maar als je de stappen in de documentatie volgt kom je er achter of je systeem geschikt is. Het is een optionele stap, maar WSL geeft je wel een fijne omgeving (en betere performance) als je straks verder gaat met het ontwikkelen op Kubernetes. 

https://docs.microsoft.com/en-us/windows/wsl/install-win10

Na de installatie van WSL2 kun je in Docker Desktop de integratie inschakelen (wederom via de Docker Desktop settings).

![WSL2 integratie](images/wsl2dd.png)