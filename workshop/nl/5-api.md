# 5-api

[Terug naar het Workshop Script](handson.md)

### Deployment van API

![](/images/components-api.png)

Kies 1 van de 2 API varianten en pas de deployment file aan met de naam van de image repository, bijvoorbeeld:

Spring Boot (je huidige directory moet zijn "workshop/api-springboot")

```
...
    spec:
      containers:
      - name: api-springboot
        image: [naam van je container registry].azurecr.io/api-springboot:1.0
...
```

.NET (je huidige directory moet zijn "workshop/api-dotnet")

```
...
    spec:
      containers:
      - name: api-dotnet
        image: [naam van je container registry].azurecr.io/api-dotnet:1.0
...
```

Daarna kun je de bestanden toepassen:

```
kubectl apply -f configmap.yaml
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
```

Na dit commando wordt de deployment toegepast. We moeten wachten tot deze compleet is afgerond voor we naar de volgende stap kunnen. Met het volgende commando kun je controleren of de API gereed is (status moet "Running" zijn):

```
kubectl get pods
```

[Naar stap 6-app](6-app.md)

[Terug naar het Workshop Script](handson.md)
