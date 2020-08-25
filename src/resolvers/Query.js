const Query = {
    users(parent, args, { db }, info) {
      if (!args.query) {
        return db.users;
      }
      return db.users.filter((user) => {
        return user.name.toLowerCase().includes(args.query.toLowerCase());
      });
    },
    me() {
      return {
        id: "827hjhsfhs78jksjdfks",
        name: "Md Salim Hossain",
        email: "salimh5757@gmail.com",
        age: 23,
      };
    },
    post() {
      return {
        id: "231",
        title: "graphql 101",
        body: "",
        published: false,
      };
    },
    posts(parent, args, {db}, info) {
      if (!args.query) {
        return db.posts;
      }
      return db.posts.filter((post) => {
        const isTitleMatch = post.title
          .toLowerCase()
          .includes(args.query.toLowerCase());
        const isBodyMatch = post.body
          .toLowerCase()
          .includes(args.query.toLowerCase());
        return isTitleMatch || isBodyMatch;
      });
    },
    comments(parent, args, {db}, info) {
      return db.comments;
    },
  }

  export { Query as default }