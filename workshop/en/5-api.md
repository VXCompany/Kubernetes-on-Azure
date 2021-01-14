# 5-api

[Back to the Workshop Script](handson.md)

### API deployment

![](/images/components-api.png)

Pick one of the 2 API variants and adjust the deployment file to contain the correct name of your image repository:

Spring Boot (current directory must be "workshop/api-springboot")

```
...
    spec:
      containers:
      - name: api-springboot
        image: [name of your container registry].azurecr.io/api-springboot:1.0
...
```

.NET (current directory must be "workshop/api-dotnet")

```
...
    spec:
      containers:
      - name: api-dotnet
        image: [name of your container registry].azurecr.io/api-dotnet:1.0
...
```

You can then apply the following files:

```
kubectl apply -f configmap.yaml
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
```

This command deploys the pod and services. We need to wait for completion before we can proceed to the next step. The following command shows the status of our API (must be "Running"):

```
kubectl get pods
```

[Next step 6-app](6-app.md)

[Back to the Workshop Script](handson.md)
