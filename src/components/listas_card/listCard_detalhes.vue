<template>
  <div class="div-flex flex-column border">
    <div class="div-flex justify-content-between border-bottom">
      <div class="div-flex flex-row align-items-center">
        <h5 class="ml-4 mt-1 mr-2">{{ task.title }}</h5>
        <i class="fas fa-tasks fa-lg" style="color: green"></i>
      </div>

      <div class="div-flex flex-row">
        <i class="fas fa-ellipsis-h m-2 click" style=""></i>
        <i
          class="fas fa-times m-2 click icon-close"
          @click="$emit('close_details')"
        ></i>
      </div>
    </div>

    <div class="div-flex flex-row align-items-center mt-2 mb-1" style="">
      <div class="click ml-4">
        <i class="fas fa-paperclip" style="color: #242a75"></i>
        <span class="ml-1 item-lista">Anexar arquivo</span>
      </div>
      <div class="click ml-5">
        <i class="fas fa-user-plus" style="color: #049ddd"></i>
        <span class="ml-1 item-lista">Adicionar Responsável</span>
      </div>
      <div class="click ml-5">
        <i class="fas fa-plus ml-3 click" style="color: green"></i>
        <span class="ml-1 item-lista">Adicionar sub-tarefa</span>
      </div>
    </div>
    <div class="mt-2">
      <div class="progress">
        <div
          class="progress-bar"
          role="progressbar"
          :style="`width: ${progress}%`"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {{ progress }}%
        </div>
      </div>
    </div>

    <div
      class="mt-2 ml-4 div-flex flex-column"
      style="overflow-y: auto; max-height: 300px"
    >
      <div>
        <div
          v-for="sub_task in task.sub_tasks"
          :key="sub_task.id"
          class="div-flex flex-row align-items-center lista-div"
        >
          <div class="form-check">
            <input
              @click="att_progress"
              v-model="sub_task.complete"
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1"></label>
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
          <div class="click">
            <span class="ml-2" style="font-size: 15px">{{
              sub_task.title
            }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-2 mb-3 ml-4">
      <label for="exampleFormControlTextarea1" class="form-label"
        >Descrição</label
      >
      <textarea
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="4"
         placeholder="Digite aqui.."
      ></textarea>

      <div class="div-flex justify-content-center mt-4  ">
        <span class="text-center"> Comentários</span>
      </div>

      <div
        class="div-flex flex-column "
        style="overflow-y: auto; max-height: 300px"
      >
        <div
          v-for="comment in comments"
          :key="comment.id"
          class="div-flex flex-column justify-content-center mt-2"
        >
          <div class="div-flex flex-row align-items-center">
            <div class="" style="width: 50px">
              <img
                width="25px"
                height="25px"
                class="m-2 rounded-circle"
                src="https://pickaface.net/gallery/avatar/unr_sample_161118_2054_ynlrg.png"
                alt="Avatar"
              />
            </div>
            <div>
              <span class="titulo"> {{ comment.user }} </span>
              <span style="font-size: 12px" class="ml-2">{{
                comment.date | moment("DD, MMMM  YYYY")
              }}</span>
            </div>
          </div>

          <div class="div-flex flex-column  w-75 ml-5 comment">
            <div class="m-2">
            {{ comment.comment }}
            </div>
          </div>
        </div>
      </div>

      <div class="div-flex flex-row mt-4  ">
        <div class="w-100">
          <textarea
          v-model="comment"
            class="form-control"            
            rows="2"  
            placeholder="Digite aqui.."                          
          ></textarea>
        </div>

        <div>
          <button @click="comentar" class="btn btn-primary ml-3 mr-3">
            Enviar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      comment: "",
      progress: 0,
      user: "Tiago Araújo",
      comments: [
        {
          user: "Tiago Araújo",
          comment:
            "Teste comentário vamos ver até aonde vai essa linha de comentario test test test teste test" +
            "test teste test test teste test teste teste teste teste teste teste",
          date: new Date(),
        },
     
      ],
    };
  },

  methods: {
    task_progres() {
      let count = 0;
      let complete = 0;
      let progess_atual = 0;
      this.detalhes = true;
      this.task.sub_tasks.forEach((element) => {
        count++;
        if (element.complete) {
          complete++;
        }
      });
      progess_atual = 100 / count;
      this.progress = parseFloat((progess_atual * complete).toFixed(2));
    },
    att_progress() {
      setTimeout(() => {
        this.task_progres();
      }, 500);
    },
    comentar(){
      this.comments.push({user: this.user, comment: this.comment, date: new Date()})
      this.comment = ""
      
    }
  },
  beforeUpdate() {
    this.task_progres();
  },

  mounted() {
    this.task_progres();
  },
};
</script>

<style scoped>
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
  width: 100%;
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
.comment {
  background-color: rgba(0, 0, 0, 0.048);
}
</style>