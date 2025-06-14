const exp=require("express");

const app= exp();



//MIDDLE WARE 

app.use(exp.json()); // ✅ This parses JSON bodies correctly



//DATA 

let books=[
    {
        id:1,
        title:"Book1",
    },
    {
        id:2,
        title:"Book2",
    },
    {
        id:3,
        title:"Book3",
    },
];


//WELCOME

app.get("/",(req,res)=>{
    res.json({
        message:"WELCOME HERE"
    });
});


// GET ALL BOOKS
app.get("/get",(req,res)=>{
    res.json(books);
});


//GET A SINGLE BOOKS
app.get("/get/:id",(req,res)=>{

    const Book_id=parseInt(req.params.id)

    const single_product=books.find(item=>item.id===Book_id)

    if(single_product){
        res.json(single_product)
    }
    else{
        res.status(404).send("PRODUCT NOT FOUND")
    }
});


//add a new book
app.post("/create", (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }

  const newBook = {
    id: books.length + 1,
    title,
  };

  books.push(newBook);

  res.status(201).json({ data: newBook, message: "Book Added" });
});



//UPDATE 

app.put("/update/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const { title } = req.body;

  const findCurrentBook = books.find(bookitem => bookitem.id === bookId);

  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }

  if (findCurrentBook) {
    findCurrentBook.title = title;
    res.status(200).json({
      message: `Book with Id ${bookId} updated`,
      data: findCurrentBook,
    });
  } else {
    res.status(404).json({
      message: "Book Not Found",
    });
  }
});


// DELETE A BOOK
app.delete("/delete/:id", (req, res) => {
  const bookId = parseInt(req.params.id);

  const index = books.findIndex(book => book.id === bookId);

  if (index !== -1) {
    const deletedBook = books.splice(index, 1)[0];
    res.status(200).json({
      message: `Book with ID ${bookId} deleted`,
      data: deletedBook
    });
  } else {
    res.status(404).json({
      message: "Book Not Found"
    });
  }
});



const PORT=3000;

app.listen(PORT,()=>{
    console.log(`Server running at ${PORT}`)
});
