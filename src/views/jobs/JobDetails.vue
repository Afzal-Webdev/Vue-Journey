<template>
  <div>
    <div v-if="loading">
      <p>Loading job details...</p>
    </div>
    <div v-else-if="job">
      <h1>{{ job.title }}</h1>
      <p>{{ job.location }} -- {{ job.salary }}</p>
      <p>{{ job.description }}</p>
    </div>
    <div v-else>
      <p>Job not found.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JobDetails',
  props: ['id'],
  data() {
    return {
      job: null,
      loading: true,
    };
  },
  created() {
    this.fetchJob(this.id);
  },
  methods: {
    fetchJob(id) {
      fetch(`http://localhost:3000/jobs/${id}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Job not found');
          }
          return res.json();
        })
        .then((data) => {
          this.job = data;
        })
        .catch((err) => {
          console.error(err.message);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>

<style>
/* Add any additional styles here */
</style>