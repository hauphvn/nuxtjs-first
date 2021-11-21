# Learning
1. [Routing](#routing)
2. [AsyncData](#asyncData func)

## Routing [homepage](#learning)
- We can create new route with folder, file
- Ex: Creating a new user folder and then inside, creating a file index.vue
- So we can path: localhost:3000/user -> going to : index page of user folder


- Sub routing:
- Inside a folder: we create a new file vue: _somethingId.vue
- And then we're going to path: localhost:3000/user/something -> going to: _somethingId.vue page


- Another way: we can folder approach:
- We create a sub folder: _id inside user folder and then creating a index.vue file inside _id folder
- The result as the same.


- **Router link**
- We use ``<nuxt-link>`` to href: the page will not reload.
- ``<nuxt-link>>`` as the same ``<router-link>``
- We can define a validate func to validation a routing
- Ex:
```
  validate (data) {
    console.log('data: ', data)
    return /^\d+$/.test(data.params.id)
  }
```

- **Layout pages vs components**
- Layout: 
  + Page: 
    + Child page
    + Component
    
  + Page:
    + Child page
    + Component

- We can add layouts/default.vue to app, because The latest nuxt, layouts directory is not available.
- We can use webpack to detect img in assets resources.


---
## AsyncData func [homepage](#learning)
- Pre-rendering: this function will pre-render data before data is load to browser.
- This func will only call **in pages though**.
- If you call it in components, layout that is will not executed.
- We should not use data function, because it will override data.
