# Todo API as a playground for front end tech

#### this was made with firebase firestore as the db. 
#### node, express through out the API

### if you clone and then set up your env variables for fire base with a collection called todo. You will have a basic To do crud API up and running.

##End Points

    /                   for index
    /api/v1/todos       for get and post
    /api/v1/todos/:id   for delete and put

##Data Structure below

```
    const data = {
        todoItem: req.body.todoItem , //string
        completed: req.body.completed, //bool
        todo: req.body.todo, //bool
        todoDoing: req.body.todoDoing, //bool 
    }
```
