# chaeri-actions

Separate GitHub actions workflows for my personal stack.

Package for AWS stuff is [here](https://github.com/mercurialworld/chaeri).

# Pre-commit hook

If you're working on this, install packages:

```sh
npm i
```
And then add this pre-commit hook (under `.git/hooks/pre-commit`):

```sh
#!/bin/bash

git diff --exit-code --staged -- deploy-codedeploy/index.ts
dcd_exit=$?

git diff --exit-code --staged -- parse-cdk/index.ts
pcdk_exit=$?

git diff --exit-code --staged -- dist/
dist_exit=$?

if [[ $dcd_exit -eq 1 || $pcdk_exit -eq 1 ]] && [[ dist_exit -eq 0 ]]; then
    npm run roll
    echo "You forgot to run npm run roll, go stage the dist/ folder and commit again."
    exit 1
fi

```
