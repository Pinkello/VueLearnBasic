import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
  components: { AssignmentList, AssignmentCreate },
  /* html */
  template: `
  <section class="space-y-6">
    <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>

    <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>

    <assignment-create @add="add" ></assignment-create>

   </section>
    `,

  data() {
    return {
      assignments: [
        { name: "finish project", complete: false, id: 1, tag: "math" },
        { name: "read", complete: false, id: 2, tag: "math" },
        { name: "homework", complete: false, id: 3, tag: "science" },
        { name: "test", complete: false, id: 4, tag: "science" },
        { name: "fest", complete: false, id: 5, tag: "math" },
        { name: "essa", complete: false, id: 6, tag: "art" },
      ],
    };
  },

  computed: {
    filters() {
      return {
        inProgress: this.assignments.filter(
          (assignment) => !assignment.complete
        ),
        completed: this.assignments.filter((assignment) => assignment.complete),
      };
    },
  },

  methods: {
    add(name) {
      this.assignments.push({
        name: name,
        complete: false,
        id: this.assignments.length + 1,
      });
    },
  },
};
