# Start GraphQL 

### What is GraphQL ?
**Ans:** GraphQL is just a query language that describes an api request. That exists as a layer between frontend and backend.

```
query Uer($Id: ID!){
    id
    name
    email
    friends{
        rahul
        sonu
    }
}