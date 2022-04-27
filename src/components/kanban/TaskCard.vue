<template>
  <div
   
    class="box-shadow lista-div"
    style="cursor: pointer"
  >
    <div class="justify-content-between "  data-toggle="modal"
    data-target="#exampleModal" style="display: flex">
      <div class="mt-2 ml-2 w-75">
        <p class="">{{ task.title }}</p>
      </div>

      <div class="justify-content-end" style="display: flex; width: 50px">
        <img
          width="25px"
          height="25px"
          class="m-2 rounded-circle"
          src="https://pickaface.net/gallery/avatar/unr_sample_161118_2054_ynlrg.png"
          alt="Avatar"
        />
      </div>
    </div>
    <div class="mt-2 justify-between items-center" style="display: flex">
      <span class="ml-2">{{ task.date }}</span>

      <div class="w-75 justify-content-end" style="display: flex">
        <badge v-if="task.type" :color="badgeColor"
          ><span class="ml-2 mr-2">{{ task.type }}</span></badge
        >
      </div>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <Detalhes
              
              v-on:close_details="close_detalhes"
              class="w-100"
              :task="task"
            />
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Badge from "./Badge.vue";
import Detalhes from "../listas_card/listCard_detalhes.vue";
export default {
  components: {
    Badge,
    Detalhes,
  },
  props: {
    task: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    badgeColor() {
      const mappings = {
        Design: "red",
        "Feature Request": "#049ddd",
        Backend: "#00008b",
        QA: "green",
        default: "#666",
      };
      return mappings[this.task.type] || mappings.default;
    },
  },
  methods: {
      close_detalhes() {
      this.detalhes = false;
      this.detalhes_sub_tarefas = false;
    },

  },
};
</script>
<style scoped>
.box-shadow {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10px;
  width: 100%;
  height: 120px;
}
.lista-div {
  background-color: white;
}
.lista-div:hover {
  background-color: rgba(0, 0, 0, 0.048);
}
</style>
