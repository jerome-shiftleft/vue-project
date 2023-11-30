<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "09263771993",
          email: "manuel@localhost.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "09275788259",
          email: "jule@localhost.com",
        },
        {
          id: "joy",
          name: "Joy Ortega",
          phone: "09457933309",
          email: "joy@localhost.com",
        },
      ],
    };
  },
  computed: {},
  methods: {},
};
</script>

<template>
  <h1>My Friends</h1>
  <ul>
    <friend-contact friend="friend" />
  </ul>
</template>
