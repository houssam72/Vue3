<template>
  <div>
    <h1>Job Details Page</h1>
    <div v-if="job">
      <h1>{{ job.title }}</h1>
      <p>The Job id is {{ id }}</p>
      <p>{{ job.details }}</p>
    </div>
    <div v-else> 
      <p>Loading job details...</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      job: null,
    };
  },
  mounted() {
    fetch("http://localhost:3000/jobs/" + this.id)
      .then((res) => res.json())
      .then((data) => (this.job = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style></style>
