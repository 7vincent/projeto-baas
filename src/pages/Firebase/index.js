import React, { Component } from "react";
import { firestore } from "../../services/firebase";

import { Container, Form, List, SubmitButton } from "./styles";

export default class Firebase extends Component {


  state = {
    listBooks: [],
    title: "",
    author: ""
  }


  addBook = event => {
    event.preventDefault()

    firestore.collection("qualquercoisa").add({
      title: this.state.title,
      author: this.state.author
    })

    this.setState({ title: "", author: "" })
  }

  updateAuthor = event => {
    this.setState({ author: event.target.value })
  }

  updateTitle = event => {
    this.setState({ title: event.target.value })
  }

  componentDidMount() {
    let list = [];
    firestore.collection('books').get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          let book = {
            id: doc.id,
            title: doc.data().title,
            author: doc.data().author,
          }
          list.push(book);
          //console.log(doc.id, '=>', doc.data());
        });
      })
      .catch((err) => {
        console.log('Error getting documents', err);
      });
    //console.log(list);
    this.setState({ listBooks: list })


  }



  render() {
    const { listBooks, title, author } = this.state

    return (
      <Container>
        <Form onSubmit={this.addBook}>
          <input
            type='text'
            placeholder='Titulo do Livro'
            name='title'
            value={title}
            onChange={this.updateTitle}
          />
          <br />
          <input
            type='text'
            placeholder='Autor do livro'
            name='author'
            value={author}
            onChange={this.updateAuthor}
          />
          <br />
          <SubmitButton type='submit'>Enviar</SubmitButton>
        </Form>
        <List>
          {listBooks.map(listBook => (
            <li key={listBook.id}>
              <span>{listBook.author}</span>
              <a href="#">Detalhes</a>
            </li>
          ))}
        </List>
      </Container>
    )
  }
}
