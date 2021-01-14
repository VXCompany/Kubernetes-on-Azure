# 4-ingress

[Back to the Workshop Script](handson.md)

### Ingress deployment

![](/images/components-ingress.png)

The Ingress takes care of the web traffic routing and can be deployed using a Helm Chart:

```
helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
helm repo update
helm install wherefore-ingress-release ingress-nginx/ingress-nginx
```

This Helm Chart installs the Ingress Controller (among other things). It also creates a new Public IP en we need to configure a DNS lable to be able to see our demo app working in the final step!

### A DNS lable for the Ingress Controller

If you check the resource groups in the Azure Portal you will notice an "extra" resource group. This group starts with "MC\_" and contains all the different underlying components of our Azure Kubernetes Service cluster.

In this list of resources there is also a Public IP address that starts with the name "Kubernetes" followed by a GUID. Select this IP address and choose "Configuration". Pick a unique DNS lable and enter this, press "Save".

![](/images/dnslabel.png)

Adjust the ingress-rules.yaml (workshop/ingress/ingress-rules.yaml file with this correct DNS lable:

```
...
spec:
  rules:
    - host: k8sonazure12345.westeurope.cloudapp.azure.com
...
```

This file can then be applied:

```
kubectl apply -f ingress-rules.yaml
```

[Next step 5-api](5-api.md)

[Back to the Workshop Script](handson.md)
