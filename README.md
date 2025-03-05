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

set -eo pipefail

git diff --exit-code deploy-codedeploy/index.ts
dcd_exit=$?

git diff --exit-code parse-cdk/index.ts
pcdk_exit=$?

if [[ $dcd_exit -eq 1 || $pcdk_exit -eq 1 ]]; then
    npm run roll
fi
```
