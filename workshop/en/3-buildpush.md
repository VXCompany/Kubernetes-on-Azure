# 3-buildpush

[Back to the Workshop Script](handson.md)

### Build & push the images

Pick one of the 2 API variants and do a build and push of the image. In the following commands you need to replace the container URI with the correct registry name:

Spring Boot (your current directory should be "workshop/api-springboot")

```
docker build . -t [name of your container registry].azurecr.io/api-springboot:1.0
docker push [name of your container registry].azurecr.io/api-springboot:1.0
```

.NET (your current directory should be)

```
docker build . -t [name of your container registry].azurecr.io/api-dotnet:1.0
docker push [name of your container registry].azurecr.io/api-dotnet:1.0
```

Next you can build and push the Angular image (current directory should be "workshop/angular-app"):

```
docker build . -t [naam van je container registry].azurecr.io/angular-app:1.0
docker push [naam van je container registry].azurecr.io/angular-app:1.0
```

Optional: you can check the Azure Portal and take a look at the Container Registry that shows the repositories and images.
![](/images/repo.png)

[Next step 4-ingress](4-ingress.md)

[Back to the Workshop Script](handson.md)
