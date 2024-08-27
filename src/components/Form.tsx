import { Button, Card, Checkbox, Flex, TextInput, Title } from "@mantine/core";
import { useState } from "react";
import { BookType } from "../hooks/use-bookshelf";

interface AddFormProps {
  onSubmit: (bookshelf: BookType) => void;
}

export default function Form(props: AddFormProps) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [isRead, setIsRead] = useState(false);

  const onClickAdd = () => {
    props.onSubmit({
      id: (+new Date()).toString(),
      title: title,
      author: author,
      publish_at: year,
      genre: genre,
      is_read: isRead,
    });

    setTitle("");
    setAuthor("");
    setGenre("");
    setIsRead(false);
    setYear("");
  };

  return (
    <Card withBorder shadow="sm" radius="md">
      <Flex gap="md" direction="column">
        <Title order={1}>Masukkan Buku</Title>

        <TextInput
          label="Judul"
          placeholder="ex: Belajar Pemrograman Dasar"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextInput
          label="Penulis"
          placeholder="ex: Gilbert Hutapea"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <TextInput
          label="Tahun"
          placeholder="ex: 2023"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <TextInput
          label="Genre"
          placeholder="ex: Romance"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />

        <Checkbox
          label="Is Read"
          checked={isRead}
          onChange={(e) => setIsRead(e.target.checked)}
        />

        <Button variant="filled" onClick={() => onClickAdd()}>
          Add
        </Button>
      </Flex>
    </Card>
  );
}
