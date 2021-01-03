# 1-setup

[Terug naar het Workshop Script](/handson.md)

### Fix voor UI deployment

Mocht je het Kubernetes cluster via de UI gedeployed hebben, dan moet je nog een fix toepassen op de Azure Container Registry.

TODO: Kubernetes-on-Azure-agentpool moet ACR pull permissie hebben op de registry

### Verbind met het cluster

Om je lokale Kubernetes client (kubectl) te laten werken met het Azure Kubernetes cluster, gebruik je het volgende commando (uit de Azure CLI):

```
az aks get-credentials --resource-group Kubernetes-on-Azure --name Kubernetes-on-Azure
```

Daarna moet je nog inloggen op de Azure Container Registry, dan is ook je lokale Docker client juist geconfigureerd:

```
az acr login --name [naam van je container registry]
```

### Git Clone van de repo

Om lokaal te kunnen werken met de workshop, kun je het best via Git een clone van de repository maken:

```
git clone https://github.com/VXCompany/Kubernetes-on-Azure.git
```

(Als alternatief kun je een ZIP file van de repo pakken en deze ergens op een lokale schijf uitpakken.)

De bestanden die we in de workshop gebruiken, vind je in de "workshop" directory.

[Naar stap 2-database](/workshop/2-database.md)

[Terug naar het Workshop Script](/handson.md)
