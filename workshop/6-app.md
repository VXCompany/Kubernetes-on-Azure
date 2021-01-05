# 6-app

[Terug naar het Workshop Script](/handson.md)

### Deployment van de Angular App

![](/images/components-app.png)

Je huidige directory moet zijn "workshop/angular-app". Pas eerst de DNS naam van de endPointApiUrl aan in de configmap.yaml. Dit is het DNS label, dat je in stap 4 gekozen hebt (en eindigt op ".westeurope.cloudapp.azure.com/api" )

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
        image: [naam van je container registry].azurecr.io/angular-app:1.0
...
```

Daarna kun je de bestanden toepassen:

```
kubectl apply -f configmap.yaml
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
```

Na dit commande wordt de deployment toegepast. We moeten wachten tot deze compleet is afgerond voor we naar de volgende stap kunnen. Met het volgende commando kun je controleren of de app gereed is (status moet "Running" zijn):

```
kubectl get pods
```

[Naar stap 7-finished](/workshop/7-finished.md)

[Terug naar het Workshop Script](/handson.md)
