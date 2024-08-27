import { Button, Card, Flex, Text, Title } from "@mantine/core";
import { BookType } from "../hooks/use-bookshelf";
import { Fragment } from "react/jsx-runtime";

export interface BookListProps {
  bookshelf: BookType[];
  onDeleteBookshelf: (id: string) => void;
  onToggleBookshelf: (id: string) => void;
  title: string;
}

export default function BookList(props: BookListProps) {
  return (
    <Card withBorder shadow="sm" radius="md" mt={16} w={"100%"}>
      <Flex gap="md" direction="column">
        <Title order={1}>{props.title}</Title>

        <Flex gap={"md"} direction={"column"} w={"100%"}>
          {props.bookshelf.length === 0 && <Text>Tidak ada buku</Text>}
          {props.bookshelf.map((book) => (
            <Fragment key={book.id}>
              <Card withBorder shadow="none">
                <Text>Id: {book.id}</Text>
                <Text>Judul: {book.title}</Text>
                <Text>Penulis: {book.author}</Text>
                <Text>Tahun: {book.publish_at}</Text>
                <Text>Genre: {book.genre}</Text>
                <Flex gap={"md"} direction={"row"} mt={16}>
                  <Button
                    variant="filled"
                    onClick={() => props.onToggleBookshelf(book.id)}
                  >
                    {book.is_read ? "Belum Baca" : "Sudah Baca"}
                  </Button>
                  <Button
                    variant="filled"
                    color="red"
                    onClick={() => props.onDeleteBookshelf(book.id)}
                  >
                    Hapus
                  </Button>
                </Flex>
              </Card>
            </Fragment>
          ))}
        </Flex>
      </Flex>
    </Card>
  );
}
