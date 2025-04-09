import Assignments from "./Assignments.js";
import Panel from "./Panel.js";

export default {
  components: { Assignments, Panel },
  /* html */
  template: `
  <div class="grid gap-6">
    <assignments></assignments>
    
  </div>`,
};
