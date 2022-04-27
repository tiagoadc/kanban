<template>
  <div class="div-flex flex-row">
    <div class="div-flex flex-column w-100">
      <!-- 1° for -->
      <div v-for="item in columns" :key="item.id" class="">
        <!-- 2° for -->
        <div
          v-for="(task, index) in item.tasks"
          :key="index"
          class="mb-1 div-flex flex-column"
        >
          <div class="div-flex flex-row align-items-center ml-3 lista-div ">           
            <i v-if="!task.show"
              @click="task.show = !task.show"
              class="fas fa-chevron-right fa-xs click"
              style="color: #049ddd"
            ></i>
             <i v-if="task.show" class="fas fa-chevron-down fa-xs click"  style="color: #049ddd " @click="task.show = !task.show" ></i>
           <div class="  justify-content-end" style="display: flex; width: 50px">
        <img
          width="25px"
          height="25px"
          class="m-2 rounded-circle"
          src="https://pickaface.net/gallery/avatar/unr_sample_161118_2054_ynlrg.png"
          alt="Avatar"
        />
                           
        
      </div>
            <div class="w-100 click" @click="detalhes_task(task, index) ">
              <span class="ml-2" style="font-size: 15px">{{ task.title }}</span>
              <div class="w-100 div-flex ml-2 hr-accordion"></div>
            </div>
           
          </div>

          <div v-if="task.show">
            <div
              v-for="sub_task in task.sub_tasks"
              :key="sub_task.id"
              class="
                mt-1
                ml-5
                mr-4
                div-flex
                flex-row
                align-items-center
                lista-sub-div
              "
              @click="detalhes_sub_task(sub_task)"
            >
              <div
                class="justify-content-end"
                style="display: flex; width: 50px"
              >
                <img
                  width="25px"
                  height="25px"
                  class="m-2 rounded-circle"
                  src="https://pickaface.net/gallery/avatar/unr_sample_161118_2054_ynlrg.png"
                  alt="Avatar"
                />
              </div>
              <div class="w-100 click">
                <span class="ml-2" style="font-size: 14px">{{
                  sub_task.title
                }}</span>
                <div
                  v-if="task.show"
                  class="w-100 div-flex ml-2 hr-accordion"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- detalhes lateral -->
    <Detalhes
      v-if="detalhes"
      v-on:close_details="close_detalhes"
      class="w-100"
      :task="task"
    />
    

    <SubTask
      v-if="detalhes_sub_tarefas"
      v-on:close_details="close_detalhes"
      class="w-100"
      :task="sub_task"
    />

    <!-- fim do lateral -->
  </div>
</template>

<script>
import Detalhes from "./listCard_detalhes.vue";
import SubTask from "./listCardSubTask.vue";
export default {
  components: {
    Detalhes,
    SubTask,
  },
  data() {
    return {
      
      detalhes_sub_tarefas: false,
      detalhes: false,
      sub_task: null,
      task: null,
      index: null,
      progress: 0,
      columns: [
        {
          title: "Backlog",
          tasks: [
            {
              sub_tasks: [
                {
                  id: 1,
                  title: "Add discount code to checkout page sub_task1",
                  date: "Sep 14",
                  complete: true,
                },
                {
                  id: 20,
                  title: "Add discount code to checkout page sub_task2",
                  date: "Sep 14",
                  complete: true,
                },
                {
                  id: 21,
                  title: "Add discount code to checkout page sub_task3",
                  date: "Sep 14",
                  complete: false,
                },
                {
                  id: 22,
                  title: "Add discount code to checkout page sub_task4",
                  date: "Sep 14",
                  complete: false,
                },
              ],
              id: 1,
              title: "Add discount code to checkout page",
              date: "Sep 14",
              type: "Feature Request",
              show: false,
            },
            {
              sub_tasks: [
                {
                  id: 2,
                  title: "Add discount code to checkout page sub_task",
                  date: "Sep 14",
                },
              ],
              id: 2,
              title: "Provide documentation on integrations",
              date: "Sep 12",
              type: "Feature Request",
              show: false,
            },
            {
              sub_tasks: [
                {
                  id: 3,
                  title: "Add discount code to checkout page sub_task",
                  date: "Sep 14",
                },
              ],
              id: 3,
              title: "Design shopping cart dropdown",
              date: "Sep 9",
              type: "Design",
              show: false,
            },
            {
              sub_tasks: [
                {
                  id: 4,
                  title: "Add discount code to checkout page sub_task",
                  date: "Sep 14",
                },
              ],
              id: 4,
              title: "Add discount code to checkout page",
              date: "Sep 14",
              type: "Feature Request",
              show: false,
            },
            {
              sub_tasks: [
                {
                  id: 5,
                  title: "Add discount code to checkout page sub_task",
                  date: "Sep 14",
                },
              ],
              id: 5,
              title: "Test checkout flow",
              date: "Sep 15",
              type: "QA",
              show: false,
            },
          ],
        },
        {
          title: "In Progress",
          tasks: [
            {
              sub_tasks: [
                {
                  id: 6,
                  title: "Add discount code to checkout page sub_task",
                  date: "Sep 14",
                },
              ],
              id: 6,
              title: "Design shopping cart dropdown",
              date: "Sep 9",
              type: "Design",
              show: false,
            },
            {
              sub_tasks: [
                {
                  id: 7,
                  title: "Add discount code to checkout page sub_task",
                  date: "Sep 14",
                },
              ],
              id: 7,
              title: "Add discount code to checkout page",
              date: "Sep 14",
              type: "Feature Request",
              show: false,
            },
            {
              sub_tasks: [
                {
                  id: 8,
                  title: "Add discount code to checkout page sub_task",
                  date: "Sep 14",
                },
              ],
              id: 8,
              title: "Provide documentation on integrations",
              date: "Sep 12",
              type: "Backend",
              show: false,
            },
          ],
        },
        {
          title: "Review",
          tasks: [
            {
              sub_tasks: [
                {
                  id: 9,
                  title: "Add discount code to checkout page sub_task",
                  date: "Sep 14",
                },
              ],
              id: 9,
              title: "Provide documentation on integrations",
              date: "Sep 12",
              show: false,
            },
            {
              sub_tasks: [
                {
                  id: 10,
                  title: "Add discount code to checkout page sub_task",
                  date: "Sep 14",
                },
              ],
              id: 10,
              title: "Design shopping cart dropdown",
              date: "Sep 9",
              type: "Design",
              show: false,
            },
            {
              sub_tasks: [
                {
                  id: 11,
                  title: "Add discount code to checkout page sub_task",
                  date: "Sep 14",
                },
              ],
              id: 11,
              title: "Add discount code to checkout page",
              date: "Sep 14",
              type: "Feature Request",
              show: false,
            },
            {
              sub_tasks: [
                {
                  id: 12,
                  title: "Add discount code to checkout page sub_task",
                  date: "Sep 14",
                },
              ],
              id: 12,
              title: "Design shopping cart dropdown",
              date: "Sep 9",
              type: "Design",
              show: false,
            },
            {
              sub_tasks: [
                {
                  id: 13,
                  title: "Add discount code to checkout page sub_task",
                  date: "Sep 14",
                },
              ],
              id: 13,
              title: "Add discount code to checkout page",
              date: "Sep 14",
              type: "Feature Request",
              show: false,
            },
          ],
        },
        {
          title: "Done",
          tasks: [
            {
              sub_tasks: [
                {
                  id: 14,
                  title: "Add discount code to checkout page sub_task",
                  date: "Sep 14",
                },
              ],
              id: 14,
              title: "Add discount code to checkout page",
              date: "Sep 14",
              type: "Feature Request",
              show: false,
            },
            {
              sub_tasks: [
                {
                  id: 15,
                  title: "Add discount code to checkout page sub_task",
                  date: "Sep 14",
                },
              ],
              id: 15,
              title: "Design shopping cart dropdown ",
              date: "Sep 9",
              type: "Design",
              show: false,
            },
            {
              sub_tasks: [
                {
                  id: 15,
                  title: "Add discount code to checkout page sub_task",
                  date: "Sep 14",
                },
              ],
              id: 16,
              title: "Add discount code to checkout page ",
              date: "Sep 14",
              type: "Feature Request",
              show: false,
            },
          ],
        },
        {
          title: "Bug",
          tasks: [
            {
              sub_tasks: [
                {
                  id: 17,
                  title: "Add discount code to checkout page sub_task",
                  date: "Sep 14",
                },
              ],
              id: 17,
              title: "Add discount code to checkout page",
              date: "Sep 14",
              type: "Feature Request",
              show: false,
            },
            {
              sub_tasks: [
                {
                  id: 18,
                  title: "Add discount code to checkout page sub_task",
                  date: "Sep 14",
                },
              ],
              id: 18,
              title: "Design shopping cart dropdown",
              date: "Sep 9",
              type: "Backend",
              show: false,
            },
            {
              sub_tasks: [
                {
                  id: 19,
                  title: "Add discount code to checkout page sub_task",
                  date: "Sep 14",
                },
              ],
              id: 19,
              title: "Add discount code to checkout page",
              date: "Sep 14",
              type: "Feature Request",
              show: false,
            },
          ],
        },
      ],
    };
  },
  methods: {
    detalhes_task(task, index) {
      this.detalhes = true;
      this.detalhes_sub_tarefas = false;
      this.task = task;
      this.index = index;
      
    },

    close_detalhes() {
      this.detalhes = false;
      this.detalhes_sub_tarefas = false;
    },

    detalhes_sub_task(sub_task) {
      this.sub_task = sub_task;
      setTimeout(() => {
        (this.detalhes_sub_tarefas = true), (this.detalhes = false);
      }, 500);
    },
  },
};
</script>

<style  scoped>
.div-flex {
  display: flex;
}
.click {
  cursor: pointer;
}
.hr-accordion {
  border-top-style: solid;

  border-width: 0.1mm;
  border-color: rgba(0, 0, 0, 0.048);
}
.lista-div {
  background-color: white;
  width: 97%;
}
.lista-div:hover {
  background-color: rgba(0, 0, 0, 0.048);
}
.lista-sub-div {
  background-color: white;
  width: 97%;
}
.lista-sub-div:hover {
  background-color: rgba(0, 0, 0, 0.048);
}

.lista-div:focus-within {
  background-color: rgba(0, 0, 0, 0.048);
}

.item-lista {
  color: black;
}
.item-lista:hover {
  color: #2c338e;
}
.icon-close {
  color: black;
}
.icon-close:hover {
  color: red;
}
.titulo {
  font-weight: 900;
}
</style>