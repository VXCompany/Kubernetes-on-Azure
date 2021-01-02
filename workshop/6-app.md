# 6-app

[Terug naar het Workshop Script](/handson.md)

### Deployment van de Angular App

Je huidige directory moet zijn "workshop/deployment/angular-app". Pas eerst de DNS naam van de endPointApiUrl aan in de configmap:

```
...
apiVersion: v1
data:
  config.production.json: |
    {
      "environmentName": "production",
      "endPointApiUrl": "http://k8sonazure12345.westeurope.cloudapp.azure.com/api"
    }
...
```

Pas daarna de deployment file aan met de juiste naam van je image repository, bijvoorbeeld:

```
...
    spec:
      containers:
      - name: api-dotnet
        image: k8sonazure12345.azurecr.io/angular-app:1.0
...
```

Daarna kun je de bestanden toepassen:

```
kubectl apply -f configmap.yaml
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml

```

[Terug naar het Workshop Script](/handson.md)
