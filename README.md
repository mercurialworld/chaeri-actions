# chaeri-actions

[![A badge saying "Piplup pip", with an image of Piplup.](https://img.shields.io/badge/piplup-pip-9cd5f6?labelColor=318bd5&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAATCAMAAAB86XelAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAKVQTFRFAAAANjY2MTExOHHDSZP2SpT3OXPGMTIzSZLzMTI0NTU1g83+/P3+////TJX3gsv7hM7//f7/eXl5g8z8NDQ0+/v78/Mp9/cpfHx5/Pz8PHXG+/z+w6spxq0pvbyy/f39vr62U1NTUVFRu7uzvb21UlJSOXLEUVNUUVJTcavLUlNTSpL0UlNUMjIzhc7/VFRUMjM0UXmjg8z9MzIwcqzNcqvMNDQwdzKZ8AAAADd0Uk5TAP///////////////////////////////////////////////////////////////////////yPGhGQAAAC7SURBVHicLU/LCsJADMy0hUKlgviAxWIfJ4/+/yd4EsQeehCLghctKGLf0ey2A4FMhkwmIAFAxKbRvUHLmsHSkh7Wmrk9GTglwasHyYiAazdELlCKCEy1USdVCiPMwJ2LCq3sYSnuHx9v/2k810KLOXIersfi2jvIWxYtdi4SDMnPykBeiM6ys+ShmhzYOqfopeqipyAVB8ZCXTe3nqLDEHiHc3BXKWsmN1ZsfyfVcXyGJUS4pzG/mRD9AbefPR8qnO6TAAAAAElFTkSuQmCC)](https://github.com/mercurialworld/chaeri)

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
