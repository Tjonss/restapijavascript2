import axios from 'axios';

export default ({
  state: {
    books: [],
    book: null
  },
  getters: {
    books: state => state.books,
    book: state => state.book
  },
  mutations: {
    setBooks: (state, books) => {
      (state.books = books)
    },
    setBook: (state, book) => {
      (state.book = book)
    },
  },
  actions: {
    fetchBooks: async ({ commit }) => {
      const res = await axios.get('http://localhost:5000/api/books')
      commit('setBooks', res.data)
    },
    getOneBook: async ({ commit }, id ) => {
      const res = await axios.get('http://localhost:5000/api/books/' + id)
      commit('setBook', res.data)
    }
  },  
})