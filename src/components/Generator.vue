<template>
  <div class="container">
    <form class="row g-3">
      <div class="col-md-6">
        <label for="inputSubject" class="form-label">Subject</label>
        <select v-model="subject" id="inputSubject" class="form-select">
          <option
            v-for="subjectOption in subjectOptions"
            :value="subjectOption.value"
            v-bind:key="subjectOption"
          >
            {{ subjectOption.text }}
          </option>
        </select>
      </div>
      <div class="col-md-6">
        <label for="inputLevel" class="form-label">Level</label>
        <select v-model="level" id="inputLevel" class="form-select">
          <option
            v-for="levelOption in levelOptions"
            :value="levelOption"
            v-bind:key="levelOption"
          >
            {{ levelOption }}
          </option>
        </select>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label"
          >{{ subject }} - {{ level }}</label
        >
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          v-model="report"
        ></textarea>
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-primary">Sign in</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Generator",
  props: {
    msg: String,
  },
  data() {
    return {
      subjectOptions: [
        { text: "Business", value: "buesiness" },
        { text: "Math", value: "math" },
      ],
      levelOptions: [
        "Remedial Level (Below Expectations)",
        "Level 1",
        "Level 2",
        "Level 3",
        "Level 4",
      ],
      level: "",
      subject: "",
    };
  },
  computed: {
    report() {
      //TODO: replace by actual report
      return this.subject && this.level
        ? "You are selecting Subject " +
            this.subject +
            " For level " +
            this.level
        : "";
    },
  },
};
</script>
