export default {
  components: {},
  /* html */
  template: `  
  <form @submit.prevent="add">
    <div class="border border-gray-600 text-black flex">
      <input v-model="newAssignment" placeholder="New assignment" class="p-2 w-full">
      <button type="submit" class="bg-white p-2 border-l">Add</button>
    </div>       
</form>`,

  data() {
    return {
      newAssignment: "",
    };
  },

  methods: {
    add() {
      this.$emit("add", this.newAssignment);
      //   this.assignments.push({
      //     name: this.newAssignment,
      //     complete: false,
      //     id: this.assignments.length + 1,
      //   });

      this.newAssignment = ""; // Clear the input field after adding
    },
  },
};
