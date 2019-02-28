<template>
  <div class="app-container">
    <el-form ref="form" :model="form" :rules="rules" label-width="120px">
      <el-form-item label="姓名" prop="name">
        <el-input v-model="form.name"/>
      </el-form-item>

      <el-form-item label="联系方式" prop="contactsPhone">
        <el-input v-model="form.contactsPhone" placeholder="请输入联系方式"></el-input>
      </el-form-item>

      <!-- 下拉框静态 -->
      <el-form-item label="地区" prop="region">
        <el-select v-model="form.region" placeholder="请选择">
          <el-option label="上海" value="shanghai"/>
          <el-option label="北京" value="beijing"/>
        </el-select>
      </el-form-item>

      <!-- 下拉框动态渲染 -->
      <el-form-item label="地区2">
        <el-select v-model="form.value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>

      <!-- 日期/时间 -->
      <el-form-item label="时间">
        <el-col :span="11">
          <el-date-picker v-model="form.date1" type="date" placeholder="Pick a date" style="width: 100%;"/>
        </el-col>
        <el-col :span="2" class="line">-</el-col>
        <el-col :span="11">
          <el-time-picker v-model="form.date2" type="fixed-time" placeholder="Pick a time" style="width: 100%;"/>
        </el-col>
      </el-form-item>

      <!-- switch开关 -->
      <el-form-item label="开关">
        <el-switch v-model="form.delivery"/>
      </el-form-item>

      <!-- 单选框 -->
      <el-form-item label="单选框">
        <el-radio-group v-model="form.resource">
          <el-radio label="Sponsor"/>
          <el-radio label="Venue"/>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="单选框2">
        <el-radio-group v-model="form.radio">
          <el-radio 
            v-for="item in radioList"
            :key="item.value"
            :label="item.value">{{item.label}}</el-radio>
        </el-radio-group>
      </el-form-item>

      <!-- 复选框 -->
      <el-form-item label="复选框">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="Online activities" name="type"/>
          <el-checkbox label="Promotion activities" name="type"/>
          <el-checkbox label="Offline activities" name="type"/>
          <el-checkbox label="Simple brand exposure" name="type"/>
        </el-checkbox-group>
      </el-form-item>

      <!-- 文本域 -->
      <el-form-item label="文本域">
        <el-input v-model="form.desc" type="textarea"/>
      </el-form-item>

      <!-- 富文本 -->
      <!-- bidirectional data binding（双向数据绑定） -->
      <el-form-item label="富文本1" style="height:300px;">
        <quill-editor v-model="content"
          ref="myQuillEditor"
          :options="editorOption"
          @blur="onEditorBlur($event)"
          @focus="onEditorFocus($event)"
          @ready="onEditorReady($event)"
           style="height:200px;">
        </quill-editor>
      </el-form-item>
    
      <!-- Or manually control the data synchronization（或手动控制数据流） -->
      <el-form-item label="富文本2">
        <quill-editor :content="content2"
          :options="editorOption"
          @change="onEditorChange($event)">
        </quill-editor>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit('form')">Create</el-button>
        <el-button @click="onCancel">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import { quillEditor } from 'vue-quill-editor';
import { validatePhone } from '@/utils/validate'
export default {
  components: {
    quillEditor
  },
  data() {
    var validatePhoneNo = (rule, value, callback) => {
      if(!validatePhone(value)) {
        callback(new Error('手机号不存在'));
      } else {
        callback();
      }
    };
    return {
      radioList: [
        {
          value: '1',
          label: '备选项'
        },
        {
          value: '2',
          label: '备选项2'
        },
        {
          value: '3',
          label: '备选项3'
        },
      ],
      content: '<h2>I am Example</h2>',
      content2: '<h2>I am Example</h2>',
      editorOption: {
        // some quill options
      },
      options: [{
          value: '',
          label: '全部'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
      }],
      form: {
        name: 'aaa',
        contactsPhone: '13856321452',
        region: '',
        value: '',
        date1: '',
        date2: '',
        delivery: false,
        radio: '2',
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        name: [
          {required: true, message: '必填', trigger: 'blur'}
        ],
        contactsPhone: [
          { required: true, message: '请输入联系方式', trigger: 'blur' },
          { validator: validatePhoneNo, trigger: 'blur'}
        ],
        region: [
          {required: true, message: '请选择活动区域', trigger: 'change'}
        ]
      }
    }
  },
  computed: {
    editor() {
      console.log(1111111111111)
      return this.$refs.myQuillEditor.quill
    }
  },
  methods: {
    onSubmit(formName) {
      // this.$message('submit!')
      this.$refs[formName].validate((valid) => {
        if(valid) {
          let forms = this.form;
          console.log(111, { forms })
          console.log(222, { ...this.form })
        } else {
          return false
        }
      })
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    },

    // 失去焦点
    onEditorBlur(quill) {
    },
    // 获取焦点
    onEditorFocus(quill) {
    },
    onEditorReady(quill) {
      console.log('editor ready!', quill)
    },
    onEditorChange({ quill, html, text }) {
      console.log('editor change!', quill, html, text)
      // this.content = html
    }
  },
  mounted() {
    console.log('this is current quill instance object', this.editor)
    setTimeout(() => {
      this.content = '<p>我修改啦</p>'
    }, 2000)
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

