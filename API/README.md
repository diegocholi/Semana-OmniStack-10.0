## Comandos de configuração VS-CODE
- Comando que instala o PowerShell no vscode: *dotnet tool install --global PowerShell*
- No linux: *install 'code' command in PATH* 

## Depêndencias de projeto
* Express: *yarn add express* ou *npm install express --save* 
* Nodemon: *yarn add nodemon -D* ou *npm install nodemon -D*. Para executar o projeto com o nodemon execute no terminal: *yarn nodemon index.js*
* MongoDB: *yarn add mongoose* ou *npm install mongoose*
* Axios: *yarn add axios* ou *npm install axios*

## Comandos node para criação de projeto
* yarn init -y ou npm init -y

## Extenções navegador
- JSON viewer

## Informações adicionais sobre a biblioteca express
### Tipos de parâmetros
1. Query Params: 
    * Usados para filtro, paginação, ordenação.
    * Exemplo de valores passados através de Query Params: *127.0.0.1/users?search=valor*
    * Exemplo de uso do *request.query*:
        ```
        app.get('/user', (request, response)=>{
            return response.json([request.query])
        })
        ```
2. Route Params: 
    * Usado para identificar um recurso na alteração ou remoção
    * Exemplo de valores passados através de Route Params: *127.0.0.1/users?search=valor*
    * Exemplo de uso do *request.params*:
        ```
        app.delete('/user/:id', (request, response) => {
            return response.json([request.params])
        })
        ```
3. Body: 
    * Usado para adicionar um recurso
    * Exemplo de valores passados através de body: *JSON*
    * Exemplo de uso do *request.params*:
        ```
        app.post('/user', (request, response) => {
            return response.json([request.body])
        })
        ```