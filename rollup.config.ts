import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";

function createConfig(actionPath) {
    return {
        input: `${actionPath}/index.ts`,
        output: {
            compact: true,
            esModule: true,
            file: `dist/${actionPath}/index.js`,
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
    };
}

const actions = ["deploy-codedeploy", "parse-cdk"];

const config = actions.map(createConfig);

export default config;
