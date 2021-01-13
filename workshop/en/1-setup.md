# 1-setup

[Back to the Workshop Script](/handson.md)

### Connect to the cluster

To connect the "kubectl" CLI to this cluster, you need to execute the following command from the Azure CLI:

```
az aks get-credentials --resource-group Kubernetes-on-Azure --name Kubernetes-on-Azure
```

After that you will need to login to the Azure Container Registry which will configure your local Docker client correctly:

```
#name should be in lowercase
az acr login --name [name of the container registry]
```

### Git Clone the repo

To work with the workshop files locally, you can create a clone from the repository:

```
git clone https://github.com/VXCompany/Kubernetes-on-Azure.git
```

(Alternatively, you can create and download a ZIP file from the repo and extract this somewhere on disk.)

The files we will need in this workshop are located within the "workshop" directory.

[Next step 2-database](/workshop/2-database.md)

[Back to the Workshop Script](/handson.md)
