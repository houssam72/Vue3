const app = Vue.createApp({
  // data,functions
  //   template: "<h2>I am the template </h2>",

  data() {
    return {
      url: "http://www.thenetninja.co.uk",
      showBooks: true,
      books: [
        {
          title: "name of the wind",
          author: "patrick rothfuss",
          img: "assets/1.jpg",
          isFav: true,
        },
        {
          title: "the way of king",
          author: "brandon sanderson",
          img: "assets/2.jpg",
          isFav: false,
        },
        {
          title: "The final empire",
          author: "patrick rothfuss",
          img: "assets/3.jpg",
          isFav: true,
        },
      ],
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
  },
  computed: {
    fileteredBooks() {
      return this.books.filter((book) => {
      return  book.isFav;
      });
    },
  },
});

app.mount("#app");
