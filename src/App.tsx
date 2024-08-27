import "@mantine/core/styles.css";
import { Flex, MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import Form from "./components/Form";
import BookList from "./components/BookList";
import useBookshelf from "./hooks/use-bookshelf";

export default function App() {
  const { bookshelf, onAddBookshelf, onDeleteBookshelf, onToggleBookshelf } =
    useBookshelf();

  return (
    <MantineProvider theme={theme}>
      <Flex gap="md" direction={"column"}>
        <Form onSubmit={onAddBookshelf} />
        <Flex gap={"md"} direction={"row"}>
          <BookList
            title="Belum Dibaca"
            bookshelf={bookshelf.filter((book) => !book.is_read)}
            onToggleBookshelf={onToggleBookshelf}
            onDeleteBookshelf={onDeleteBookshelf}
          />
          <BookList
            title="Sudah Dibaca"
            bookshelf={bookshelf.filter((book) => book.is_read)}
            onToggleBookshelf={onToggleBookshelf}
            onDeleteBookshelf={onDeleteBookshelf}
          />
        </Flex>
      </Flex>
    </MantineProvider>
  );
}
