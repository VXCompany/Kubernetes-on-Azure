> Work in progress....

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
helm install wherefore-release --set auth.rootPassword=[kies een wachtwoord] bitnami/mongodb
```

### Seed van de database
```
export MONGODB_ROOT_PASSWORD=$(kubectl get secret wherefore-release-mongodb -o jsonpath="{.data.mongodb-root-password}" | base64 --decode)

kubectl run wherefore-release-mongodb-client --rm --tty -i --restart='Never' --env="MONGODB_ROOT_PASSWORD=$MONGODB_ROOT_PASSWORD" --image docker.io/bitnami/mongodb:4.4.3-debian-10-r0 --command -- bash

mongo admin --host "wherefore-release-mongodb" --authenticationDatabase admin -u root -p $MONGODB_ROOT_PASSWORD
```

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
kubectl apply -f api-[springboot|dotnet]-configmap.yaml
```

### MongoDB credentials
```
kubectl create secret generic mongodb-creds --from-literal=username=wfat --fro
m-literal=password=[gekozen password in de Seed stap]
```
