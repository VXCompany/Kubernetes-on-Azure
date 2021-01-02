# 5-api

[Terug naar het Workshop Script](/handson.md)

### Deployment van API

Kies 1 van de 2 API varianten en pas de deployment file aan met de naam van de image repository, bijvoorbeeld:

Spring Boot (je huidige directory moet zijn "workshop/deployment/api-springboot")

```
...
    spec:
      containers:
      - name: api-springboot
        image: k8sonazure12345.azurecr.io/api-springboot:1.0
...
```

.NET (je huidige directory moet zijn "workshop/deployment/api-dotnet")

```
...
    spec:
      containers:
      - name: api-dotnet
        image: k8sonazure12345.azurecr.io/api-dotnet:1.0
...
```

Daarna kun je de bestanden toepassen:

```
kubectl apply -f configmap.yaml
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
```

[Terug naar het Workshop Script](/handson.md)
