# A Hello World application running on NodeJs/ExpressJs hosted on a Windows Azure Web App

Using GitHub and GitHub actions to deploy

## Set up

- Download and install (Node LTS)[https://nodejs.org/en/download/]
- create a new directory `mkdir project-name`
- enter new directory `cd project-name`
- Run `yarn init`
  - Ensure entry point is set to `server.js`
  - This can be changed later in `package.json`
- Install express
  - `yarn add express`

## Create `server.js`

- This should be in route of the directory
- The code required can be found [here](https://github.com/HarryAmmon/Node.JS-Express-Hello-World/blob/master/server.js)

## Create `web.config`

- Without this I was getting "You do not have permissions to view this directory or page"
- Required code can be found [here](https://github.com/HarryAmmon/Node.JS-Express-Hello-World/blob/master/web.config)
- Ensure that in `<handlers>` `path` is the same as the entry point set in `package.json`
- Ensure that in `<files>` the `add` `value` is the same as the entry point set in `package.json`

## Create a repository on GitHub and push code there

## Publish on Azure

- Log into [Azure Portal](https://portal.azure.com)
- Create a Web App
  - Create a resource -> Web App
  - Set a Subscription and resource group
  - Set Publish to code
  - Set Runtime stack to `Node 12 LTS`
  - Set Operating System to Windows
  - Select a region
  - Click `Review + Create` then `Create`
- Deploy Code
  - Click `Go to resource`
  - Click `Deployment Center`
  - Under Continuous Deployment select `GitHub`
  - Select `GitHub Actions`
  - Select the repository and branch you wish to publish from
  - Follow on screen wizard

Success! Your site should now be available at the URL you specified
