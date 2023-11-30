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
  <h2>My Friends</h2>
  <ul>
    <li v-for="friend in friends" key="friend.id">{{ friend.name }}</li>
  </ul>
</template>
