# Teste Vantum

Teste para estágio de desenvolvimento na Vantum.

### Tecnologias utilizadas no desenvolvimento

* Visual Studio Code - https://code.visualstudio.com
* Insomnia - https://insomnia.rest
* Mongo DB Atlas - https://www.mongodb.com/cloud/atlas
* Yarn - https://yarnpkg.com/en/

### Dependências

* body-parser - yarn add body-parser
* express - yarn add express
* mongoose - yarn add mongoose
* nodemon - yarn add nodemon

### Executando

Script com nodemon
```
  > yarn dev
```
Executar
```
  > node index.js
```
### Rotas

```javascript
routes.get('/user', userController.index);
routes.get('/user/:id', userController.findUserById)
routes.put('/user/:id', userController.putUserById)
routes.post('/user', userController.store)
routes.delete('/user/:id', userController.remove)
```

## Autor

Christopher Moura  
https://github.com/ccmoura
