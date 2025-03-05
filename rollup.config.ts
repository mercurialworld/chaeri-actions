// See: https://rollupjs.org/introduction/

import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";

const config = [
    {
        input: "deploy-codedeploy/index.ts",
        output: {
            compact: true,
            esModule: true,
            file: "dist/deploy-codedeploy/index.js",
            format: "es",
            inlineDynamicImports: true,
            sourcemap: false,
        },
        plugins: [
            typescript(),
            nodeResolve({ preferBuiltins: true }),
            commonjs(),
            json(),
        ],
    },
    {
        input: "parse-cdk/index.ts",
        output: {
            compact: true,
            esModule: true,
            file: "dist/parse-cdk/index.js",
            format: "es",
            inlineDynamicImports: true,
            sourcemap: false,
        },
        plugins: [
            typescript(),
            nodeResolve({ preferBuiltins: true }),
            commonjs(),
            json(),
        ],
    },
];

export default config;
