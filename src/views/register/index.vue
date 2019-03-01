<template>
  <div class="login_body">
    <div class="login_cont">
      <p class="title"><span class="titleBlock"></span> <span class="titleName">{{pageType === 'add' ? '新用户注册' : '忘记密码'}}</span> </p>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="" prop="name" v-if="pageType == 'add'">
          <el-input v-model="ruleForm.name" autocomplete="off" disableautocomplete   placeholder="设置用户名称"></el-input>
        </el-form-item>
        <el-form-item label="" prop="phoneNo">
          <el-input v-model="ruleForm.phoneNo" autocomplete="off" disableautocomplete   placeholder="输入手机号码"></el-input>
        </el-form-item>
        <el-form-item label="" prop="code">
          <el-input v-model.number="ruleForm.code" placeholder="短信验证码" disableautocomplete  autocomplete="off"></el-input>
          <a :class="['vertify', codeEnable?'enable':'']" href="javascript:;" @click="sendMsg()" v-if="!resetMsg">发送验证码</a>
          <span class="vertify" v-if="resetMsg">重新发送({{resetMsg}}s)</span>
        </el-form-item>
        <el-form-item label="" prop="pass">
          <el-input v-model.password="ruleForm.pass" type="password" disableautocomplete  autocomplete="off" placeholder="设置6至20位登录密码" ></el-input>
        </el-form-item>
        <el-form-item label="" prop="checkPass">
          <el-input v-model.password="ruleForm.checkPass" type="password" disableautocomplete  autocomplete="off" placeholder="请再次输入登录密码" ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">{{pageType === 'add' ? '立即注册' : '确认'}}</el-button>
        </el-form-item>
      </el-form>
      <p class="reserved">Copyright &#169 中国邮政文史中心（中国邮政邮票博物馆）, All Rights Reserved.</p>
    </div>
  </div>
</template>

<script>
  import { validate } from '@/utils/validate';
  import md5 from 'js-md5';
  export default {
    name: "register",
    data(){
      var validatePhoneNo = (rule, value, callback) => {
        if(!validate(value, 'phone')) {
          callback(new Error('手机号不存在'));
        } else {
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (!validate(value, 'password')) {
          callback(new Error('6-20位数字、字母、特殊字符至少包含两种'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        pageType: '',
        resetMsg: '',
        codeEnable: true,  // 验证码按钮是否可用
        ruleForm: {
          name: '',
          phoneNo: '',
          code: '',
          pass: '',
          checkPass: ''  // 再次输入密码
        },
        rules: {
          name: [
            { required: true, message: '请设置用户名称', trigger: 'blur' },
          ],
          phoneNo: [
            { required: true, message: '请输入手机号码', trigger: 'blur' },
            { validator: validatePhoneNo, trigger: 'blur'}
          ],
          code: [
            { required: true, message: '请输入短信验证码', trigger: 'blur' },
          ],
          pass: [
            { required: true, message: '设置6至20位登录密码', trigger: 'blur' },
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      // 获取验证码
      sendMsg() {
        let vm = this;
        let api = this.pageType == 'add' ? '/sendSecretCode.do' : '/front/sendForgetPasswordCode.do';
        this.$refs.ruleForm.validateField('phoneNo', function(str, errorMsg) {
          if(!errorMsg) {
            vm.timeDown();
            // 发送验证码
            vm.$http.get(api, {
              params: {
                phone: vm.ruleForm.phoneNo
              }
            }).then((res) => {
              if(res.data.success == 0) {
                vm.$message.error(res.data.error.message);
              }
            })
          }
        })
      },
      // 倒计时
      timeDown() {
        this.resetMsg = 60;
        let times = setInterval(() => {
          if (this.resetMsg <= 0) {
            this.resetMsg = '';
            clearInterval(times);
          } else {
            this.resetMsg--;
          }
        }, 1000)
      },
      // 注册
      submitForm(formName) {
        let vm = this;
        let api = this.pageType == 'add' ? '/front/register.do' : '/front/forgetPassword.do';

        this.$refs[formName].validate((valid) => {
          if (valid) {
            vm.$http.post(api, {
              id: vm.$store.state.user.userid,
              userName: vm.ruleForm.name,
              phone: vm.ruleForm.phoneNo,
              verificationCode: vm.ruleForm.code,
              password: md5(this.$salt + vm.ruleForm.pass),
              surePassword: md5(this.$salt + vm.ruleForm.checkPass)
            }).then((res) => {
              if(res.data.success == 1) {
                vm.$message({
                  duration: 2000,
                  message: this.pageType == 'add' ? '注册成功' : '修改密码成功',
                  type: 'success'
                });
                setTimeout(() => {
                  vm.$router.push({ path: '/person/login'});
                }, 2000);
              } else {
                vm.$message.error(res.data.error.message);
              }
            })
          } else {
            return false;
          }
        });
      },
    },
    activated() {
      this.ruleForm.name="";
      this.ruleForm.phoneNo="";
      this.ruleForm.code="";
      this.ruleForm.pass="";
      this.ruleForm.checkPass="";
      this.pageType = this.$route.query.type;  // add 注册   forget 忘记密码
    }
  }
</script>

<style scoped lang="sass">
  .login_body
    background-color: gray
    // background: url("../../assets/image/person/Group.png") center no-repeat
    background-size: 100% 100%
    position: relative
    height: 100%
    margin-top: -70px
    .login_cont
      width: 510px
      height: 516px
      background: rgba(255,255,255,1)
      box-shadow: 0px 10px 30px 0px rgba(26,113,75,1)
      border-radius: 5px
      position: absolute
      padding: 30px 75px 0px
      top: 0
      left: 0
      margin: auto
      right: 0
      bottom: 0
    .reserved
      width: 500px
      height: 25px
      font-size: 14px
      font-family: PingFang-SC-Medium
      font-weight: 500
      color: rgba(255,255,255,1)
      line-height: 25px
      position: absolute
      bottom: -50px
      left: 0px
    .title
      display: flex
      margin-bottom: 30px
      justify-content: center
      width: 110px
      .titleBlock
        width: 6px
        height: 18px
        background: rgba(29,116,78,1)
        display: block
        margin-top: 3px
        margin-right: 10px
      .titleName
        width: 91px
        height: 25px
        font-size: 18px
        font-family: PingFang-SC-Regular
        font-weight: 400
        color: rgba(78,77,77,1)
        line-height: 25px
    .vertify
      font-size: 14px
      position: absolute
      font-weight: bold
      color: #1d744e
      line-height: 20px
      top: 10px
      right: 25px
</style>
<style lang="sass">
  .demo-ruleForm
    .el-form-item__label
      display: none
    .el-form-item__content
      margin-left: 0!important
      .el-button
        width: 336px
        height: 50px
        background: rgba(29,116,78,1)
        border-radius: 25px
        font-size: 16px
        font-family: PingFang-SC-Medium
        font-weight: 500
        color: rgba(255,255,255,1)
        text-align: center
        margin-top: 20px
        line-height: 25px
</style>
