# 6-app

[Back to the Workshop Script](/handson.md)

### Angular App deployment van de Angular App

![](/images/components-app.png)

Current directory must be "workshop/angular-app". First adjust the DNS name of the endPointApiUrl in the configmap.yaml. This is the DNS lable you choose in step 4 (and ends with ".westeurope.cloudapp.azure.com/api")

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

Next: adjust the deployment file to contain the correct name of your image repository:

```
...
    spec:
      containers:
      - name: api-dotnet
        image: [name of your container registry].azurecr.io/angular-app:1.0
...
```

You can then apply the following files:

```
kubectl apply -f configmap.yaml
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
```

This command deploys the pod and services. We need to wait for completion before we can proceed to the next step. The following command shows the status of our app (must be "Running"):

```
kubectl get pods
```

[Next step 7-finished](/workshop/7-finished.md)

[Back to the Workshop Script](/handson.md)
