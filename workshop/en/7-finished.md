# 7-finished

If everything worked out, you have created a cluster with a running app!

First check:

```
kubectl get pods
```

All pods should have the status "Running":

![](/images/running.png)

If you now navigate with a browser to the correct address (note this is HTTP not HTTPS):

http://[the choosen DNS lable].westeurope.cloudapp.azure.com should show a running app:

![](/images/screenshot1.png)

## Temporarily pause to save credits

If you keep the cluster running, the underlying Virtual Machines will debit the monthly credit. If you followed this guide to deploy the system you will have 1 node (type D2) running at around $85 per month. If you do not use the cluster, you can pause this node to save this credit.

To do this, you will have to navigate to the special resource group starting with "MC\_". Within this resource group you will find the different components of the Azure Kubernetes Service cluster.

If you then navigate to the Virtual Machine Scale Set, you will see the option to pause the set in the top menu (also known as de-allocate).

![](images/pause.png)

Your cluster remains operational (the Master Node keeps running), but most of the costs will stop.

Don't forget to start the set again if you want to work with this cluster!

Niet vergeten om de scaleset weer te starten als je het cluster gaat gebruiken!

## Delete the cluster

If you want to remove the cluster entirely (including the Container Registry), the easiest way is to delete the Resource Group in the Azure Portal.

![](/images/deleterg.png)

And delete the local Kubectl context:

```
kubectl config delete-context Azure-on-Kubernetes
```

[Back to the Workshop Script](/handson.md)
