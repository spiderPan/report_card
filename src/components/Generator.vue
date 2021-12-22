<template>
  <div class="container">
    <form v-on:submit.prevent="generateReport" class="row g-3">
      <div class="col-md-6">
        <label for="inputSubject" class="form-label">Subject</label>
        <select
          v-model="subject"
          @change="generateReport"
          id="inputSubject"
          class="form-select"
        >
          <option
            v-for="subjectOption in subjectOptions"
            :value="subjectOption"
            v-bind:key="subjectOption"
          >
            {{ subjectOption }}
          </option>
        </select>
      </div>
      <div class="col-md-6">
        <label for="inputLevel" class="form-label">Level</label>
        <select
          v-model="level"
          @change="generateReport"
          :disabled="!levelOptions.length"
          id="inputLevel"
          class="form-select"
        >
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
          >Report for {{ subject }} - {{ level }}</label
        >
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          v-model="report"
        ></textarea>
      </div>
      <div class="col-12">
        <button class="btn btn-primary">Generate</button>
      </div>
    </form>
  </div>
</template>

<script>
import report_data from "../data/report.json";
export default {
  name: "Generator",
  props: {
    msg: String,
  },
  data() {
    return {
      subjectOptions: ["Business", "Math"],
      levelOptions: [
        "Remedial Level (Below Expectations)",
        "Level 1",
        "Level 2",
        "Level 3",
        "Level 4",
      ],
      level: "",
      subject: "",
      report: "",
    };
  },
  watch: {
    subject(newSubject) {
      if (report_data[newSubject]) {
        this.levelOptions = Object.keys(report_data[newSubject]);
      } else {
        this.levelOptions = [];
        this.level = "";
      }
    },
  },
  methods: {
    generateReport: function () {
      if (!this.subject || !this.level) {
        this.report = "";
        return;
      }

      const comments = report_data[this.subject][this.level];
      let content = "";
      Object.values(comments).forEach((templates) => {
        content +=
          templates[Math.floor(Math.random() * templates.length)] + " ";
      });

      this.report = content;
    },
  },
};
</script>
