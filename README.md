
# CRUD Books

Simple Book CRUD API using MongoDB.





## API Reference

#### Get all posts

```http
  GET /books/
```

#### Get post

```http
  GET /books/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of Book to featch |

#### Create Post

```http
  POST /books/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`      | `string` | **Required**. Book title. |
| `author`      | `string` | **Required**. Author of the book. |
| `genre`      | `string` | **Required**. Book genre. |
| `publication_date`      | `string` | **Required**. Book publication date. |

#### Update Post

```http
  PUT /books/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of Post to uptdate |
| `title`      | `string` | New Book title. |
| `author`      | `string` | New Author of the book. |
| `genre`      | `string` | New Book genre. |
| `publication_date`      | `string` | New Book publication date. |

#### Update Post

```http
  PATCH /books/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of Post to uptdate |
| `title`      | `string` | **Required**. New Book title. |
| `author`      | `string` | **Required**. New Author of the book. |
| `genre`      | `string` | **Required**. New Book genre. |
| `publication_date`      | `string` | **Required**. New Book publication date. |

#### Delete post

```http
  DELETE /books/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of Book to delete |

