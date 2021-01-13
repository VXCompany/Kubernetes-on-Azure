# Preparation workshop

> You can skip any preparation or requirement in case it is already installed or taken care of. Just make sure to finish the smoketest (at the end of this document) succesfuly!

## Software requirements

We start with a number of software requirements:

- Git
- Docker Desktop (or you can arrange an alternative for the Docker Engine and CLI)
- Enable local Kubernetes integration (of you can arrange an alternative, i.e. Minikube)
- Azure CLI
- Helm (v3) CLI
- Optional: Visual Studio Code (or an alternative text editor)
- Optional: Visual Studio Code plugins
- Optional: WSL2 on Windows

In case you need to install anything from this list, you can take a look at the [requirements](requirements.md). If everything is in place, you can continue with the preparations.

## An active Azure subscription and credit

We are going to deploy an Azure Kubernetes Service cluster on Azure so you will need an active Azure subscription and some credit. You can use either an [Azure Trial](https://azure.microsoft.com/en-us/free/search/) or an [Azure Benefit](https://docs.microsoft.com/en-us/visualstudio/subscriptions/vs-azure) from the Microsoft Partner Network.

Follow the appropiate steps and activate the account.

## Deploy a Kubernetes cluster on Azure Kubernetes Service

You can deploy a Kubernetes cluster using the Azure Portal UI or with the Azure CLI. In this guide we will use the CLI.

> The next tasks require the use of the Azure CLI. Please see https://docs.microsoft.com/en-us/cli/azure/install-azure-cli for more information.

1. Login to Azure

Use the Azure CLI to login en either use your company account or the account that was used to activate the Azure Trial. If the command succeeds it will show all the subcriptions you have access to.

```
az login
```

2. Select the correct subscription

If your account has access to multiple subscriptions, you usually have to select the correct one to work with. Just pick the correct id (GUID) from the output in the previous step.

```
az account set -s [id van de juiste subscriptie]
```

3. Create a resource group for our cluster

```
az group create --name Kubernetes-on-Azure --location westeurope
```

4. Create a Azure Container Registry. De name must be globally unique, no spaces or dashes, between 5 and 50 characters and lowercase only.

```
MYACR=[container registry name] #bash
$MYACR='[container registry name]' #PowerShell

az acr create -n $MYACR -g Kubernetes-on-Azure --sku basic
```

5. Create your Kubernetes cluster (this can take a while...)

```
az aks create -n Kubernetes-on-Azure -g Kubernetes-on-Azure --node-count 1 --generate-ssh-keys --attach-acr $MYACR --enable-managed-identity
```

6. Connect to the cluster

To connect the "kubectl" CLI to this cluster, you need to execute the following command.

```
az aks get-credentials --resource-group Kubernetes-on-Azure --name Kubernetes-on-Azure
```

## Smoketest

1. Login to Azure

Use the Azure CLI to login en either use your company account or the account that was used to activate the Azure Trial. If the command succeeds it will show all the subcriptions you have access to.

```
az login
```

2. Select the correct subscription

If your account has access to multiple subscriptions, you usually have to select the correct one to work with. Just pick the correct id (GUID) from the output in the previous step.

```
az account set -s [id van de juiste subscriptie]
```

3. Connect to the cluster

In a previous step you have already connected to the cluster, so now you only have to select the correct context (if there is more than one).

```
kubectl config use-context Kubernetes-on-Azure
```

3. Deploy a testpod and service

```
#this shouldn't return any pods
kubectl get pods

#deploy a test server
kubectl run echo-server --port 8080 --image k8s.gcr.io/echoserver:1.10

#deploy a service
kubectl expose pod echo-server --type LoadBalancer --port 8080

```

4. Test the connection

If all went well you should have a hello-world pod and service running on the cluster. You can test this by navigating to the correct ip address with a webbrowser. The ip address can be found in the output from this command:

```
kubectl get services
```

If this command returns "<pending>", the service is not fully up yet and you have to wait a bit longer.

![](images/kgs.png)

If you then navigate to: http://[external-ip]:8080 the test server should respond.

![](images/echo.png)

5. Cleanup testpod and service

```
kubectl delete pod echo-server
kubectl delete service echo-server
```

## Temporarily pause to save credits

If you keep the cluster running, the underlying Virtual Machines will debit the monthly credit. If you followed this guide to deploy the system you will have 1 node (type D2) running at around $85 per month. If you do not use the cluster, you can pause this node to save this credit.

To do this, you will have to navigate to the special resource group starting with "MC\_". Within this resource group you will find the different components of the Azure Kubernetes Service cluster.

If you then navigate to the Virtual Machine Scale Set, you will see the option to pause the set in the top menu (also known as de-allocate).

![](images/pause.png)

Your cluster remains operational (the Master Node keeps running), but most of the costs will stop.

Don't forget to start the set again if you want to work with this cluster!
