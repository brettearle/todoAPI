# Todo API as a playground for front end tech

#### this was made with firebase firestore as the db. 
#### node, express through out the API

### if you clone and then set up your env variables for fire base with a collection called todo. You will have a basic To do crud API up and running.

## your env needs
* fire base key put into the db folder with name todoFBKey.json
* GOOGLE_APPLICATION_CREDENTIALS variable with path to todoFBKey.json
* DB_URL variable with path to your database at firebaseio.com

## End Points

    /                   for index
    /api/v1/todos       for get and post
    /api/v1/todos/:id   for delete and put
    /api/v1/todos/:id   get method on this path to get document by id

## Data Structure below

```
    const data = {
        todoItem: req.body.todoItem , //string
        completed: req.body.completed, //bool
        todo: req.body.todo, //bool
        todoDoing: req.body.todoDoing, //bool 
    }
```
