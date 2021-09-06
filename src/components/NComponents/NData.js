function randowText() {
    var a = Math.random() + "" //产生一个随机数

var rand1 = a.charAt(5) //的到这个数的第五个字符(实际还是从0~9的数字)

var quotes = new Array() //创建消息数组

quotes[1] = '欢迎光临' //这里分配十句随机出现的文本

quotes[2] = '请注意本信息'

quotes[3] = '感谢你使用本书'

quotes[4] = 'javascript，不错的特效语言'

quotes[5] = 'javascript不是java'

quotes[6] = '本特效可以用于写欢迎词'

quotes[7] = '每次进入，这里的信息都可以刷新'

quotes[8] = '我爱javascript'

quotes[9] = 'javascript，美丽的语言'

quotes[0] = 'javascript简单，方便'

var quote = quotes[rand1] //由随机数选择一句话

return quote
};

const NTableData = {
  tableList: [
    { ccc: randowText(), ddd: randowText() + ' ddd' },
    { ccc: randowText(), ddd: randowText() + ' ddd' },
    { ccc: randowText(), ddd: randowText() + ' ddd' },
    { ccc: randowText(), ddd: randowText() + ' ddd' },
    { ccc: randowText(), ddd: randowText() + ' ddd' },
    { ccc: randowText(), ddd: randowText() + ' ddd' },
    { ccc: randowText(), ddd: randowText() + ' ddd' },
    { ccc: randowText(), ddd: randowText() + ' ddd' },
    { ccc: randowText(), ddd: randowText() + ' ddd' }
  ],
  formList_: [
    {
      type: 'SLOT',
      miniType: 1,
      label: '山东分公司的',
      prop: 'slot0',
      ableFlag: true,
      vIf: true
    },
    {
      type: 'DIC',
      miniType: 2,
      label: '山东分公司的2',
      prop: 'ccc',
      ableFlag: false,
      vIf: false
    },
    {
      type: 'INPUT',
      miniType: 2,
      label: '山东分公司的个',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'DATE',
      miniType: 'date',
      label: '阿斯顿发',
      format: 'yyyy-MM-dd',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'INPUT',
      miniType: 1,
      label: '给第三方',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'LIST',
      miniType: 2,
      label: '山东分公司的2',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'INPUT',
      miniType: 2,
      label: '山东分公司的个',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'DATE',
      miniType: 'date',
      label: '阿斯顿发',
      format: 'yyyy-MM-dd',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'INPUT',
      miniType: 1,
      label: '给第三方',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'SLOT',
      miniType: 1,
      label: '山东分公司的',
      prop: 'slot1',
      ableFlag: false,
      vIf: true
    }
  ],
  tableThList: [
    {
      label: '给第三方',
      prop: 'ccc',
      subTh: [
        {
          label: '给第三方',
          prop: 'ddd',
          type: 'TEXT',
          subTh: []
        },
        {
          label: '山东分公司的',
          prop: 'ddd',
          type: 'TEXT',
          subTh: []
        }
      ]
    },
    {
      label: '山东分公司的',
      prop: 'ccc',
      type: 'TEXT',
      subTh: []
    },
    {
      label: '山东分公司的2',
      prop: 'ccc',
      type: 'TEXT',
      subTh: []
    },
    {
      label: '山东分公司的个',
      prop: 'ccc',
      type: 'INPUT',
      subTh: []
    },
    {
      label: '阿斯顿发',
      type: 'DATE',
      prop: 'ccc',
      type: 'TEXT',
      subTh: []
    },
    {
      label: '山东分公司的',
      prop: 'ccc',
      type: 'TEXT',
      subTh: []
    },
    {
      label: '山东分公司的2',
      prop: 'ccc',
      type: 'TEXT',
      subTh: []
    },
    {
      label: '山东分公司的个',
      prop: 'ccc',
      type: 'TEXT',
      subTh: []
    },
    {
      label: '阿斯顿发',
      prop: 'ccc',
      type: 'TEXT',
      subTh: []
    }
  ]
}
const NDialogData = {
  tableList: [{ ccc: Math.random() }, { ccc: Math.random() }, { ccc: Math.random() }, { ccc: Math.random() }, { ccc: Math.random() }, { ccc: Math.random() }, { ccc: Math.random() }, { ccc: Math.random() }, { ccc: Math.random() }, { ccc: Math.random() }, { ccc: Math.random() }, { ccc: Math.random() }, { ccc: Math.random() }],
  formList_: [
    {
      type: 'DIC',
      miniType: 2,
      label: '山东分公司的2',
      prop: 'ccc',
      ableFlag: false,
      vIf: false
    },
    {
      type: 'INPUT',
      miniType: 2,
      label: '山东分公司的个',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'DATE',
      miniType: 'date',
      label: '阿斯顿发',
      format: 'yyyy-MM-dd',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'INPUT',
      miniType: 1,
      label: '给第三方',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'DATE',
      miniType: 'date',
      label: '阿斯顿发',
      format: 'yyyy-MM-dd',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
        type: 'SLOT',
        miniType: 1,
        label: '山东分公司的',
        prop: 'slot1',
        ableFlag: false,
        vIf: true
      }
  ],
  tableThList: [
    {
      label: '给第三方',
      type: 'INPUT',
      miniType: 1,
      prop: 'ccc'
    },
    {
      label: '山东分公司的',
      type: 'SELECT',
      miniType: 1,
      prop: 'ccc'
    },
    {
      label: '山东分公司的2',
      type: 'SELECT',
      miniType: 2,
      prop: 'ccc'
    },
    {
      label: '山东分公司的个',
      type: 'INPUT',
      miniType: 2,
      prop: 'ccc'
    },
    {
      label: '阿斯顿发',
      type: 'DATE',
      miniType: 'date',
      format: 'yyyy-MM-dd',
      prop: 'ccc'
    },
    {
      label: '山东分公司的',
      type: 'SELECT',
      miniType: 1,
      prop: 'ccc'
    },
    {
      label: '山东分公司的2',
      type: 'SELECT',
      miniType: 2,
      prop: 'ccc'
    },
    {
      label: '山东分公司的个',
      type: 'TEXTAREA',
      miniType: 2,
      prop: 'ccc'
    },
    {
      label: '阿斯顿发',
      type: 'DATE',
      miniType: 'date',
      format: 'yyyy-MM-dd',
      prop: 'ccc'
    }
  ]
}
const NFormData = {
  formList: [
    {
      type: 'OPTIONS', //显示类型
      label: '山东分公司的', //显示名称
      prop: 'ccc', //提交字段名称
      ableFlag: false, //是否可输入
      vIf: true //是否可显示
    },
    {
      type: 'DIC',
      label: '山东分公司的2',
      prop: 'ccc',
      ableFlag: false,
      vIf: false
    },
    {
      type: 'TEXTAREA',
      label: '山东分公司的个',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'DATE',
      label: '阿斯顿发',
      format: 'yyyy-MM-dd',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'INPUT',
      label: '给第三方',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'LIST',
      label: '山东分公司的',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'LIST',
      label: '山东分公司的2',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'TEXTAREA',
      label: '山东分公司的个',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'DATE',
      label: '阿斯顿发',
      format: 'yyyy-MM-dd',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'INPUT',
      label: '给第三方',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'LIST',
      label: '山东分公司的',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'LIST',
      label: '山东分公司的2',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'TEXTAREA',
      label: '山东分公司的个',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'DATE',
      label: '阿斯顿发',
      format: 'yyyy-MM-dd',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'INPUT',
      label: '给第三方',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'LIST',
      label: '山东分公司的',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'LIST',
      label: '山东分公司的2',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'TEXTAREA',
      label: '山东分公司的个',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'DATE',
      label: '阿斯顿发',
      format: 'yyyy-MM-dd',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'INPUT',
      label: '给第三方',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'LIST',
      label: '山东分公司的',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'LIST',
      label: '山东分公司的2',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'TEXTAREA',
      label: '山东分公司的个',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'DATE',
      label: '阿斯顿发',
      format: 'yyyy-MM-dd',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'INPUT',
      label: '给第三方',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'LIST',
      label: '山东分公司的',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'LIST',
      label: '山东分公司的2',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'TEXTAREA',
      label: '山东分公司的个',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'DATE',
      label: '阿斯顿发',
      format: 'yyyy-MM-dd',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'LIST',
      label: '山东分公司的',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'LIST',
      label: '山东分公司的2',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'TEXTAREA',
      label: '山东分公司的个',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'DATE',
      label: '阿斯顿发',
      format: 'yyyy-MM-dd',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'LIST',
      label: '山东分公司的',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'LIST',
      label: '山东分公司的2',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'TEXTAREA',
      label: '山东分公司的个',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'DATE',
      label: '阿斯顿发',
      format: 'yyyy-MM-dd',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'LIST',
      label: '山东分公司的',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'LIST',
      label: '山东分公司的2',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'TEXTAREA',
      label: '山东分公司的个',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'DATE',
      label: '阿斯顿发',
      format: 'yyyy-MM-dd',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'LIST',
      label: '山东分公司的',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'LIST',
      label: '山东分公司的2',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'TEXTAREA',
      label: '山东分公司的个',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'DATE',
      label: '阿斯顿发',
      format: 'yyyy-MM-dd',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'LIST',
      label: '山东分公司的',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'LIST',
      label: '山东分公司的2',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'TEXTAREA',
      label: '山东分公司的个',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    },
    {
      type: 'DATE',
      label: '阿斯顿发',
      format: 'yyyy-MM-dd',
      prop: 'ccc',
      ableFlag: false,
      vIf: true
    }
  ]
}
export { NTableData, NDialogData, NFormData }
