import BookItem from "../bookItem/bookItem.component";
import { Fragment } from "react";

import { DirectoryContainer, Title } from "./directory.styles";

const Directory = ({ books }) => {
  console.log(books);
  return (
    <Fragment>
      <Title>Top 10 Books</Title>
      <DirectoryContainer>
        {books &&
          books
            .filter((_, index) => index < 10)
            .map((book) => <BookItem key={book._id} book={book} />)}
      </DirectoryContainer>
    </Fragment>
  );
};

export default Directory;
