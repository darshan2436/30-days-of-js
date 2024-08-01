document.addEventListener("DOMContentLoaded",()=>{
    const tableContainer = document.getElementById("book-table");
    const addBook = document.getElementById("add-book");
    const errorContainer = document.querySelector(".error-container p");
    let bookArr;
    if(localStorage.getItem('book') === null){
        bookArr = [];
    }
    else{
        bookArr = JSON.parse(localStorage.getItem('book'));
        addValue(bookArr);
    }

    addBook.addEventListener("click",()=>{
        let title = document.getElementById("book-title");
        let author = document.getElementById("book-author");
        let isbn = document.getElementById("book-isbn");
        const book = {
            id : Date.now(),
            title : title.value,
            author : author.value,
            isbn : isbn.value
        };
        if(checkInput(book)){
            bookArr.push(book);
            localStorage.setItem("book",JSON.stringify(bookArr));
            addValue(bookArr);
            removeInput(title,author,isbn);
            return;
        }
    })

    function addValue(arr){
        tableContainer.innerHTML = "";
        arr.forEach((book,index) => {
            tableContainer.innerHTML +=  `
            <tr id=${index}>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="delete-btn">delete</a></td>
            </tr>
            `
        });
    }

    function checkInput(book){
        if(!book.author || !book.title || !book.isbn){
            errorContainer.textContent = "Please do no leave the input fields empty";
            return false;
        }
        errorContainer.textContent = "";
        return true;

    }

    function removeInput(title,author,isbn){
        title.value = "";
        author.value = "";
        isbn.value = "";
    }

    function deleteBook(el){
        if(el.classList.contains("delete-btn")){
            el.parentElement.parentElement.remove();
        }
    }

    document.querySelector('#book-table').addEventListener("click",(e)=>{
        e.preventDefault();
        deleteBook(e.target);
        removeBook(e.target.parentElement.previousElementSibling.textContent);
    })
    
    function removeBook(isbn){
        let books = bookArr;
        books.forEach((book,index)=>{
            if(book.isbn === isbn){
                books.splice(index,1);
            }
        })
        localStorage.setItem('book',JSON.stringify(books));
    }
})