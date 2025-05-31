# pwa-25
proyecto con fines academicos.

--------------------------------------
Pasos para el correcto funcionamiento:
--------------------------------------


Comandos de consola{

    npm init -y //iniciar el proyecto
    
    //dependencias 
    npm i cors
    npm i dotenv
    npm i express
    npm i mongodb
    npm i mongoose

    //dependencias del dev
    npm i nodemon -D
    npm install -D typescript ts-node ts-node-dev @typescript-eslint/parser @types/node @types/express @types/mongoose @types/cors
    
    npx tcs --init
}

--------------------------------------
//configuracion de archivos
--------------------------------------

/tsconfig.json{

    "compilerOptions": {
        
        "outDir":"dist"
    
    }

    "include": ["src/**/*",]
}

--------------------------------------

/pachage.json{
    "scripts": {
        "start": "node ./dist/server.js",
        "dev": "nodemon --exec ts-node src/server.ts",
        "build": "tsc",
        "test": "echo \"Error: no test specified\" && exit 1"
    },
}

--------------------------------------

//endpoints
users{
    createUser{
        URL: "http://localhost:{PORT}/users"
        Metodo: POST
        Body (JSON){
            "name": "ejemplo_usuario_11",
            "lastName": "ejemplo_usuario_11",
            "email": "ejemplo_usuario_11@dominio.com",
            "isActive": "true"
        }
    }    
    getAllUsers{
        URL: "http://localhost:{PORT}/users"
        Metodo: GET
    } 
    getUserByID{
        URL: "http://localhost:{PORT}/users/:id"
        Metodo: GET
    } 
    updateUser{
        URL: "http://localhost:{PORT}/users/:id"
        Metodo: PUT
    }
    deleteUser{
        URL: "http://localhost:{PORT}/users/:id", //baja logica
        Metodo: DELETE
    } 
}

posts{
    createPost URL: "http://localhost:{PORT}/posts",
    getAllPosts URL: "http://localhost:{PORT}/posts",
    getPostById URL: "http://localhost:{PORT}/posts/:id",
    updatePost URL: "http://localhost:{PORT}/posts/:id",
    likePost URL: "http://localhost:{PORT}/posts/:postId/like",
    unLikePost URL: "http://localhost:{PORT}/posts/:postId/like",
}