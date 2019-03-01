<template>
  <div class="cmp-drag">
    <el-card class="box-card drag-list">
      <div slot="header" class="clearfix">
        <span>{{title}}</span>
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>
      <draggable class="list-group" :list="list" :options="{group:'task'}" @change="log">
        <div class="list-group-item"
          v-for="(item, index) in list"
          :key="item.name">
          {{ item.name }} {{ index }}
        </div>
      </draggable>
    </el-card>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'DragList',
  components: { draggable },
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    },
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    add: function() {
      this.list.push({ name: "Juan" });
    },
    replace: function() {
      this.list = [{ name: "Edgard" }];
    },
    clone: function(el) {
      return {
        name: el.name + " cloned"
      };
    },
    log: function(evt) {
      window.console.log(evt);
    }
  },
  created() {
    console.log(this.list)
  }
}
</script>

<style lang="scss" scoped>
.cmp-drag {
  .drag-list {
    height: 200px;
    overflow-y: auto;
    margin-bottom: 20px;
  }
}
// .drag {
//   background: #fff;
//   padding-bottom: 40px;
//   &:after {
//     content: "";
//     display: table;
//     clear: both;
//   }
//   .drag-list {
//     float: left;
//     padding-bottom: 30px;
//     &:first-of-type {
//       margin-right: 2%;
//     }
//     .dragArea {
//       margin-top: 15px;
//       min-height: 50px;
//       padding-bottom: 30px;
//     }
//   }
// }

// .list-complete-item {
//   cursor: pointer;
//   position: relative;
//   font-size: 14px;
//   padding: 5px 12px;
//   margin-top: 4px;
//   border: 1px solid #bfcbd9;
//   transition: all 1s;
// }

// .list-complete-item-handle {
//   overflow: hidden;
//   text-overflow: ellipsis;
//   white-space: nowrap;
//   margin-right: 50px;
// }

// .list-complete-item-handle2 {
//   overflow: hidden;
//   text-overflow: ellipsis;
//   white-space: nowrap;
//   margin-right: 20px;
// }

// .list-complete-item.sortable-chosen {
//   background: #4AB7BD;
// }

// .list-complete-item.sortable-ghost {
//   background: #30B08F;
// }

// .list-complete-enter,
// .list-complete-leave-active {
//   opacity: 0;
// }
</style>
