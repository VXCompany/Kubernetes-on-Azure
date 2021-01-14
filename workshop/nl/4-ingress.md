# 4-ingress

[Terug naar het Workshop Script](handson.md)

### Deployment van Ingress

![](/images/components-ingress.png)

De Ingress zorgt voor de routering van het webverkeer en kan gedeployed worden via een Helm Chart:

```
helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
helm repo update
helm install wherefore-ingress-release ingress-nginx/ingress-nginx
```

Deze Helm Chart installeert o.a. een Ingress Controller. Ook wordt er een nieuw Public IP aangemaakt en hier moeten we nu een DNS label voor configureren, dan kunnen we straks onze demo app ook in het echt zien werken.

### Een DNS label voor de Ingress Controller

Als je in de Azure Portal gaat kijken bij de resource groups, zul je zien dat er nog een "extra" resource group is bijgekomen. Deze heet "MC*[naam van je resource group]*[naam van je cluster]\_westeurope". Als je in deze group gaat kijken vind je daar de verschillende onderdelen van ons aangemaakte Kubernetes cluster.

In de lijst met resources staat ook een Public IP address met een naam die begint met "kubernetes" en dan een GUID. Klik hier op en kies dan voor "Configuration". Bij DNS name label vul je nu zelf een unieke naam in. Klik vervolgens op "Save".

![](/images/dnslabel.png)

Pas daarna dit label ook toe in de ingress-rules.yaml file (workshop/ingress/ingress-rules.yaml):

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

[Naar stap 5-api](5-api.md)

[Terug naar het Workshop Script](/handson.md)
