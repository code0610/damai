<template>
    <div class="purchasers">
        <div class="linear-gradient">我的大麦>交易中心>常用购票人</div>
        <div>
            <button class="add-btn floatRight">添加购票人</button>
            <div style="clear:both"></div>
        </div>
        <Table border :columns="columns7" :data="data6"></Table>
    </div>
</template>

<script>
    export default {
        name: "purchasers",
      data () {
        return {
          columns7: [
            {
              type: 'index',
              width: 60,
              align: 'center'
            },
            {
              title: '姓名',
              key: 'name',
              render: (h, params) => {
                return h('div', [
                  h('Icon', {
                    props: {
                      type: 'person'
                    }
                  }),
                  h('strong', params.row.name)
                ]);
              }
            },
            {
              title: '卡类型',
              key: 'CardType'
            },
            {
              title: '身份证号码',
              key: 'IDnumber'
            },
            {
              title: '操作',
              key: 'action',
              width: 150,
              align: 'center',
              render: (h, params) => {
                return h('div', [
                  h('Button', {
                    props: {
                      type: 'error',
                      size: 'small'
                    },
                    on: {
                      click: () => {
                        this.remove(params.index)
                      }
                    }
                  }, '删除')
                ]);
              }
            }
          ],
          data6: [
            {
              name: 'John Brown',
              IDnumber: 123456487913515251,
              CardType: 'New York No. 1 Lake Park'
            },
            {
              name: 'Jim Green',
              IDnumber: 123456487913515251,
              CardType: 'London No. 1 Lake Park'
            },
            {
              name: 'Joe Black',
              IDnumber: 123456487913515251,
              CardType: 'Sydney No. 1 Lake Park'
            },
            {
              name: 'Jon Snow',
              IDnumber: 123456487913515251,
              CardType: 'Ottawa No. 2 Lake Park'
            }
          ]
        }
      },
      methods: {
        show (index) {
          this.$Modal.info({
            title: 'User Info',
            content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
          })
        },
        remove (index) {
          this.data6.splice(index, 1);
        }
      }
    }
</script>

<style scoped>
  .purchasers>.linear-gradient{
    border:1px solid #F0F0F0;
    line-height:40px;
    text-indent:20px;
  }
  .add-btn{
    width:75px;
    line-height:30px;
    color:#FFF;
    background:red;
    border:none;
    border-radius: 5px;
    margin: 1%;
  }
</style>
