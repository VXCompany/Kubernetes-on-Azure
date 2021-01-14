# 2-database

[Back to the Workshop Script](handson.md)

### Deployment MongoDB

![](/images/components-mongodb.png)

For the deployment of MongoDB we make use of a Helm Chart. This makes sure that besides the database components a Kubernetes secret is created with the correct "root" password. You will need to choose a password and execute the following command:

```
helm repo add bitnami https://charts.bitnami.com/bitnami
helm repo update
helm install wherefore-mongodb-release bitnami/mongodb --set auth.rootPassword=[pick a password]
```

After this command the Helm Chart gets deployed. We need to wait until this completes before we can go to the next step. The following command checks to see if the MongoDB is ready (status must be "Runnning"):

```
kubectl get pods
```

### Database seed

Our database name is "wfat" (WhereFore Art Thou) and will be seeded with some demo data and a database user for the connection from the API. The first step creates a Mongo client container and the second connects with the Mongo Shell as "root"

```
kubectl run wherefore-mongodb-release-client --rm --tty -i --restart='Never' --image docker.io/bitnami/mongodb:4.4.3-debian-10-r0 --command -- bash

mongo admin --host "wherefore-mongodb-release" --authenticationDatabase admin -u root -p [het gekozen root wachtwoord]
```

After this you can paste the contents of seed-db.txt (workshop/mongodb/seed-db.txt) in the Mongo Shell. You will be asked to provide a password for the database user and this password is needed in the following step.

Type "exit" to leave the Mongo Shell and type "exit" again to exit the pod (this immediately deletes the temporary pod)

### Secret (MongoDB credentials)

The API uses the secret to get the credentials for database access (this secret will be made available to the API container as environment variable). This secret stores the password you picked in the previous step:

```
kubectl create secret generic mongodb-creds --from-literal=username=wfat --from-literal=password=[the password from the Seed stap]
```

[Next step 3-buildpush](3-buildpush.md)

[Back to the Workshop Script](handson.md)
