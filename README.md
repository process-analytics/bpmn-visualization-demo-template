# bpmn-visualization-demo-vitejs-template

A template repository to quickly initiate a [bpmn-visualization](https://github.com/process-analytics/bpmn-visualization-js) demo powered by [Vite](https://vitejs.dev/).


## Using the template

GH pages setup: xxx


## 🎮 The deployed solution

**TODO change the url to match the URL of the actual repository**

To see the deployed solution: https://process-analytics.github.io/bpmn-visualization-demo-vitejs-template/


## ⚒️ Development Setup

Use the node version declared in [.nvmrc](.nvmrc). You can use a Node version manager like [nvm](https://github.com/nvm-sh/nvm).

Install dependencies: `npm install`

Start the dev server: `npm start`

The demo is accessible at http://localhost:5173/


## 📃 License

The code of this demo is released under the [Apache 2.0](LICENSE) license.


## Release how-to

When all updates have been completed, you are ready to publish a new release.

Create a new GitHub release by following the [GitHub help](https://help.github.com/en/github/administering-a-repository/managing-releases-in-a-repository#creating-a-release)
- for `Tag version`, use a value following the **vX.Y.Z** scheme using the [Semantic Versioning](https://semver.org/).
- for `Target`
    - usually, keep the `main` branch except if new commits that you don't want to integrate for the release are already
      available in the branch
    - in that case, choose a dedicated commit
- Description
    - briefly explain the contents of the new version
    - make GitHub generates the [release notes automatically](https://docs.github.com/en/repositories/releasing-projects-on-github/automatically-generated-release-notes)
