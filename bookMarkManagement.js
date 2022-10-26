const { template } = require('@babel/core')
//write your student id, firstname, and lastname here
// 64130500014 ,Chalunthorn Niyom
class BookMark {
  //code here
  bookMarks = []
  constructor(isbn, totalPages=0) {
    this.isbn = isbn;
    this.totalPages = totalPages;
  }
  addBookMark(pageNumber) {
    if (pageNumber >= 1 && pageNumber <= this.totalPages) { return this.bookMarks.push(pageNumber); }
    return this.bookMarks.length
  }
  removeBookMark(pageNumber){
    if(this.bookMarks.includes(pageNumber))
    {
      this.bookMarks.splice(this.bookMarks.indexOf(pageNumber), 1);
      return pageNumber;
    }
    
  }
  goToFirstBookMark(){
    if(this.bookMarks.length > 0) { return this.bookMarks[0]; }
    return undefined;
  }
  goToLastBookMark(){
    if(this.bookMarks.length > 0) { return this.bookMarks[this.bookMarks.length - 1] ; }
    return undefined;
  }
  getBookMarks(){
    return this.bookMarks;
  }
}
module.exports = BookMark
