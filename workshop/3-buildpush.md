# 3-buildpush

[Terug naar het Workshop Script](/handson.md)

### Build & push onze images

Kies 1 van de 2 API varianten en doe een build en een push van het image. Je moet alleen nog even de naam van je Azure Container Registry in het commando aanpassen:

Spring Boot (je huidige directory moet zijn "workshop/api-springboot")

```
docker build . -t [naam van je container registry].azurecr.io/api-springboot:1.0
docker push [naam van je container registry].azurecr.io/api-springboot:1.0
```

.NET (je huidige directory moet zijn "workshop/api-dotnet")

```
docker build . -t [naam van je container registry].azurecr.io/api-dotnet:1.0
docker push [naam van je container registry].azurecr.io/api-dotnet:1.0
```

Daarna kun je het Angular image builden en pushen (je huidige directory moet zijn "workshop/angular-app"):

```
docker build . -t [naam van je container registry].azurecr.io/api-dotnet:1.0
docker push [naam van je container registry].azurecr.io/angular-app:1.0
```

[Terug naar het Workshop Script](/handson.md)
