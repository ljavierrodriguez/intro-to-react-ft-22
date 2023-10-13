# Si quieres entender como hacerlo desde cero puedes seguir estos pasos

# Crear estructura del proyecto

- **tests**
- public
  - index.html
- src
  - App.js
  - index.js
- .babelrc
- .gitignore
- package.json
- webpack.config.js

## Iniciar nuestro archivo **_package.json_** (terminal)

```shell
$ npm init -y
```

## Instalar dependencias de webpack en dev (terminal)

```shell
$ npm i --save-dev webpack webpack-dev-server webpack-cli
```

## Instalar dependencias de babel en dev (terminal)

```shell
$ npm i --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader
```

## Instalar dependencias de archivos (css, img, etc) (terminal)

```shell
$ npm i --save-dev html-webpack-plugin mini-css-extract-plugin clean-webpack-plugin autoprefixer postcss-loader css-loader node-sass sass sass-loader file-loader style-loader url-loader
```

## Instalar dependencias de React (stable) 18 (terminal)

```shell
$ npm i --save react react-dom
```

## Agregar en el archivo .babelrc

```json
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react",
    {
      "runtime": "automatic"
    }
  ]
}
```

## Agregar al archivo .gitignore

```text
# Created by https://www.toptal.com/developers/gitignore/api/react
# Edit at https://www.toptal.com/developers/gitignore?templates=react

### react ###
.DS_*
*.log
logs
**/*.backup.*
**/*.back.*

node_modules
bower_components
build

*.sublime*

psd
thumb
sketch

# End of https://www.toptal.com/developers/gitignore/api/react
```

## Aregar al archivo index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

## Agregar al archivo webpack.config.js

Agregar los import de las dependencias en el **_webpack.config.js_**:

```javascript
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
```

Export modulo en el **_webpack.config.js_**:

```javascript
module.exports = {};
```

Definir "entry" en el **_webpack.config.js_**

```javascript
module.exports = {
    ...
    entry: path.resolve(__dirname, './src/index.js'),
    ...
}
```

Definir "output" en el **_webpack.config.js_**

```javascript
module.exports = {
    ...
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    ...
}
```

Definir "rules" en el **_webpack.config.js_**

- Agregar Regla para babel

```javascript
module.exports = {
    ...
    module: {
        rules: [
            ...
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            ...
        ]
    }
    ...
}
```

- Agregar Regla para imagenes

```javascript
module.exports = {
    ...
    module: {
        rules: [
            ...
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: {
                    loader: 'url-loader'
                }
            },
            ...
        ]
    }
    ...
}
```

- Agregar Regla para archivos css o sass

```javascript
module.exports = {
    ...
    module: {
        rules: [
            ...
            {
                test: /\.(css|scss)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            ...
        ]
    }
    ...
}
```

Definir "resolve" en el **_webpack.config.js_**

```javascript
module.exports = {
    ...
    resolve: {
        extensions: ['*', '.js', '.jsx']
    }
    ...
}
```

Definir "devServer" en el **_webpack.config.js_**

```javascript
module.exports = {
    ...
    devServer: {
        allowedHosts: 'all',
        historyApiFallback: true,
        compress: true,
        port: 3000,
        open: true,
        hot: true
    }
    ...
}
```

Definir "plugins" en el **_webpack.config.js_**

```javascript
module.exports = {
    ...
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html'),
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new CleanWebpackPlugin()
    ]
    ...
}
```

Configurar "scripts" en el **_package.json_**

```json
{
    ...
    "scripts": {
        ...
        "start": "webpack serve --config ./webpack.config.js --mode development",
        "build": "webpack --mode production",
        ...
    }
    ....
}
```

## Incluir codigo en el **_./src/index.js_**

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const container = document.querySelector("#root");
ReactDOM.createRoot(container).render(<App />);
```

## Instalar "Bootstrap"

```shell
    $ npm i --save bootstrap
```

Configurar bootstrap en el **_index.js_**

```javascript
...
import "bootstrap/dist/css/bootstrap.min.css"; // CSS
import "bootstrap/dist/js/bootstrap.bundle"; // JS
...
```

## Incluir en el **_./src/App.js_**

```javascript
import React from "react";

const App = () => {
  return <h1 className="text-center">REACT APP</h1>;
};

export default App;
```

## Instalar "Jest" para pruebas unitarias (opcional)

```shell
    $ npm i --save-dev jest
```

Configurar "scripts" en el **_package.json_**

```json
{
    ...
    "scripts": {
        ...
        "test": "jest --watchAll"
        ...
    }
    ....
}
```

## Instalar Dotenv para leer variables de entorno

```shell
    $ npm i --save-dev dotenv-webpack
```

## Configurar Dotenv en el webpack.config.js

```javascript
const Dotenv = require('dotenv-webpack');

module.exports = {
    ...
    plugins: [
        new Dotenv()
    ]
    ...
};

```

## Iniciar el proyecto (Terminal)

```shell
$ npm run start
```

## Seguir los siguientes pasos para implementar la plantilla

Esta es la plantilla original que se esta utilizando para hacer este tutorial en React: [Codigo Fuente](https://startbootstrap.com/theme/one-page-wonder)

Menu:

- [Paso 1: Carga de plantila (jsx)](step_one.md)
- [Paso 2: Creacion de Componentes](step_two.md)
