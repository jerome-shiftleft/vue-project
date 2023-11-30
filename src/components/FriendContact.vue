<template>
  <li>
    <h2>{{ friend.name }} {{ friendIsFavorite ? '(Favorite)' : '' }}</h2>
    <button @click="toggleFavorite">Toggle Favorite</button>&nbsp;
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone: </strong> {{ friend.phone }}</li>
      <li><strong>Email: </strong> {{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  props: ['friend'],
  data() {
    return {
      detailsAreVisible: false,
      friendIsFavorite: this.friend.isFavorite
    };
  },
  watch: {
    friend(newValue) {
      // Update friendIsFavorite when the friend prop changes
      this.friendIsFavorite = newValue.isFavorite;
    },
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.friendIsFavorite = !this.friendIsFavorite;
    },
  },
};
</script>
