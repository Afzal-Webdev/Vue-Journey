<template>
  <div>
    <h1>Jobs</h1>
    <div v-if="loading">
      <p>Loading jobs...</p>
    </div>
    <div v-else-if="jobs.length">
      <div class="jobs" v-for="job in jobs" :key="job.id">
        <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
          <h2>{{ job.title }}</h2>
        </router-link>
      </div>
    </div>
    <div v-else>
      <p>No jobs available at the moment.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Jobs',
  data() {
    return {
      jobs: [],
      loading: true,
    };
  },
  mounted() {
    this.fetchJobs();
  },
  methods: {
    fetchJobs() {
      fetch('http://localhost:3000/jobs')
        .then((res) => {
          if (!res.ok) {
            throw new Error(`Failed to fetch jobs: ${res.status} ${res.statusText}`);
          }
          return res.json();
        })
        .then((data) => {
          this.jobs = data;
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
.jobs h2 {
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  color: #444;
}

.jobs h2:hover {
  background: #ddd;
}

.jobs a {
  text-decoration: none;
}
</style>