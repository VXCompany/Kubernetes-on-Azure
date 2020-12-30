> Work in progress....

### Fix voor UI deployment
Mocht je het Kubernetes cluster via de UI gedeployed hebben, moeten we nog een fix toepassen op de Azure Container Registry.

Kubernetes-on-Azure-agentpool moet ACR pull permissie hebben op de registry

### Verbind met het cluster
```
az aks get-credentials --resource-group Kubernetes-on-Azure --name Kubernetes-on-Azure
```

### Login op de Azure Container Registry
```
az acr login --name [naam van de container registry]
```

### Deployment van MongoDB
```
helm repo add bitnami https://charts.bitnami.com/bitnami
helm repo update
helm install wherefore-mongodb-release --set auth.rootPassword=[kies een wachtwoord] bitnami/mongodb
```

### Seed van de database
```
export MONGODB_ROOT_PASSWORD=$(kubectl get secret wherefore-release-mongodb -o jsonpath="{.data.mongodb-root-password}" | base64 --decode)

kubectl run wherefore-release-mongodb-client --rm --tty -i --restart='Never' --env="MONGODB_ROOT_PASSWORD=$MONGODB_ROOT_PASSWORD" --image docker.io/bitnami/mongodb:4.4.3-debian-10-r0 --command -- bash

mongo admin --host "wherefore-release-mongodb" --authenticationDatabase admin -u root -p $MONGODB_ROOT_PASSWORD
```

Pas de seed-db.txt toe en kies bij de prompt een wachtwoord voor de database user.

### Build & push ons API image
Spring Boot (workshop/api-springboot)
```
docker build . -t [naam van de container registry].azurecr.io/api-springboot:1.0
docker push [naam van de container registry].azurecr.io/api-springboot:1.0
```

.NET (workshop/api-dotnet)
```
docker build . -t [naam van de container registry].azurecr.io/api-dotnet:1.0
docker push [naam van de container registry].azurecr.io/api-dotnet:1.0
```

### ConfigMap
```
kubectl apply -f configmap.yaml
```

### MongoDB credentials
```
kubectl create secret generic mongodb-creds --from-literal=username=wfat --fro
m-literal=password=[gekozen password in de Seed stap]
```

### Deployment van Ingress
```
helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
helm repo update
helm install wherefore-ingress-release ingress-nginx/ingress-nginx
```

Kies een DNS label voor het IP adres van de Ingress Controller via de Azure Portal. Pas dit label ook toe in de ingress-rules.yaml file. Daarna kan deze toegepast worden.

```
kubectl apply -f ingress-rules.yaml
```

### Deployment van API
```
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
```
