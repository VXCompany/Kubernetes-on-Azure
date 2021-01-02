# 4-ingress

[Terug naar het Workshop Script](/handson.md)

### Deployment van Ingress

De Ingress zorgt voor de routering van het webverkeer en kan gedeployed worden via een Helm Chart:

```
helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
helm repo update
helm install wherefore-ingress-release ingress-nginx/ingress-nginx
```

TODO: Kies een DNS label voor het IP adres van de Ingress Controller via de Azure Portal.

Pas dit label ook toe in de ingress-rules.yaml file:

```
...
spec:
  rules:
    - host: k8sonazure12345.westeurope.cloudapp.azure.com
...
```

Daarna kan deze toegepast worden:

```
kubectl apply -f ingress-rules.yaml
```

[Terug naar het Workshop Script](/handson.md)
