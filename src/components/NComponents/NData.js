function randowText() {
  var a = Math.random() + ""; //产生一个随机数

  var rand1 = a.charAt(5); //的到这个数的第五个字符(实际还是从0~9的数字)

  var quotes = new Array(); //创建消息数组

  quotes[1] = "Helen Hernandez"; //这里分配十句随机出现的文本

  quotes[2] = "Melissa Garcia";

  quotes[3] = "Elizabeth Wilson";

  quotes[4] = "Richard Hall";

  quotes[5] = "Helen Hernandez";

  quotes[6] = "UI偶一一条鱼i";

  quotes[7] = "Elizabeth Wilson";

  quotes[8] = "Nancy Miller ";

  quotes[9] = "Nancy Miller";

  quotes[0] = "Richard Hall";

  var quote = quotes[rand1]; //由随机数选择一句话

  return quote;
}

const NTableData = {
  tableList: [
    { ccc: randowText(), ddd: randowText() + " ddd" },
    { ccc: randowText(), ddd: randowText() + " ddd" },
    { ccc: randowText(), ddd: randowText() + " ddd" },
    { ccc: randowText(), ddd: randowText() + " ddd" },
    { ccc: randowText(), ddd: randowText() + " ddd" },
    { ccc: randowText(), ddd: randowText() + " ddd" },
    { ccc: randowText(), ddd: randowText() + " ddd" },
    { ccc: randowText(), ddd: randowText() + " ddd" },
    { ccc: randowText(), ddd: randowText() + " ddd" }
  ],
  formList_: [
    {
      type: "SLOT",
      secondaryType: 1,
      label: randowText(),
      prop: "slot0",
      vCantInput: true,
      vIf: true
    },
    {
      type: "DIC",
      secondaryType: 2,
      label: randowText(),
      prop: "ccc",
      vCantInput: false,
      vIf: false
    },
    {
      type: "INPUT",
      secondaryType: 2,
      label: randowText(),
      prop: "ccc",
      vCantInput: false,
      vIf: true
    },
    {
      type: "DATE",
      secondaryType: "date",
      label: randowText(),
      format: "yyyy-MM-dd 00:00:00",
      prop: "ttt",
      vCantInput: false,
      vIf: true
    },
    {
      type: "INPUT",
      secondaryType: 1,
      label: randowText(),
      prop: "ccc",
      vCantInput: false,
      vIf: true
    },
    {
      type: "LIST",
      secondaryType: 2,
      label: randowText(),
      prop: "ccc",
      vCantInput: false,
      vIf: true
    },
    {
      type: "INPUT",
      secondaryType: 2,
      label: randowText(),
      prop: "ccc",
      vCantInput: false,
      vIf: true
    },
    {
      type: "DATE",
      secondaryType: "date",
      label: randowText(),
      format: "yyyy-MM-dd 00:00:00",
      prop: "ttt",
      vCantInput: false,
      vIf: true
    },
    {
      type: "INPUT",
      secondaryType: 1,
      label: randowText(),
      prop: "ccc",
      vCantInput: false,
      vIf: true
    },
    {
      type: "SLOT",
      secondaryType: 1,
      label: randowText(),
      prop: "slot1",
      vCantInput: false,
      vIf: true
    }
  ],
  tableThList: [
    {
      label: randowText(),
      prop: "ccc",
      subTh: [
        {
          label: randowText(),
          prop: "ddd",
          type: "TEXT",
          subTh: []
        },
        {
          label: randowText(),
          prop: "ddd",
          type: "TEXT",
          subTh: []
        }
      ]
    },
    {
      label: randowText(),
      prop: "ccc",
      type: "TEXT",
      subTh: []
    },
    {
      label: randowText(),
      prop: "ccc",
      type: "TEXT",
      subTh: []
    },
    {
      label: randowText(),
      prop: "ccc",
      type: "INPUT",
      subTh: []
    },
    {
      label: randowText(),
      type: "DATE",
      prop: "ccc",
      type: "TEXT",
      subTh: []
    },
    {
      label: randowText(),
      prop: "ccc",
      type: "TEXT",
      subTh: []
    },
    {
      label: randowText(),
      prop: "ccc",
      type: "TEXT",
      subTh: []
    },
    {
      label: randowText(),
      prop: "ccc",
      type: "TEXT",
      subTh: []
    },
    {
      label: randowText(),
      prop: "ccc",
      type: "TEXT",
      subTh: []
    }
  ]
};
const NDialogData = {
  tableList: [
    { ccc: randowText() },
    { ccc: randowText() },
    { ccc: randowText() },
    { ccc: randowText() },
    { ccc: randowText() },
    { ccc: randowText() },
    { ccc: randowText() },
    { ccc: randowText() },
    { ccc: randowText() },
    { ccc: randowText() },
    { ccc: randowText() },
    { ccc: randowText() },
    { ccc: randowText() }
  ],
  formList_: [
    {
      type: "DIC",
      secondaryType: 2,
      label: randowText(),
      prop: "ccc",
      vCantInput: false,
      vIf: false
    },
    {
      type: "INPUT",
      secondaryType: 2,
      label: randowText(),
      prop: "ccc",
      vCantInput: false,
      vIf: true
    },
    {
      type: "DATE",
      secondaryType: "date",
      label: randowText(),
      format: "yyyy-MM-dd 00:00:00",
      prop: "ttt",
      vCantInput: false,
      vIf: true
    },
    {
      type: "INPUT",
      secondaryType: 1,
      label: randowText(),
      prop: "ccc",
      vCantInput: false,
      vIf: true
    },
    {
      type: "DATE",
      secondaryType: "date",
      label: randowText(),
      format: "yyyy-MM-dd 00:00:00",
      prop: "ttt",
      vCantInput: false,
      vIf: true
    },
    {
      type: "SLOT",
      secondaryType: 1,
      label: randowText(),
      prop: "slot1",
      vCantInput: false,
      vIf: true
    }
  ],
  tableThList: [
    {
      label: randowText(),
      type: "INPUT",
      secondaryType: 1,
      prop: "ccc"
    },
    {
      label: randowText(),
      type: "SELECT",
      secondaryType: 1,
      prop: "ccc"
    },
    {
      label: randowText(),
      type: "SELECT",
      secondaryType: 2,
      prop: "ccc"
    },
    {
      label: randowText(),
      type: "INPUT",
      secondaryType: 2,
      prop: "ccc"
    },
    {
      label: randowText(),
      type: "DATE",
      secondaryType: "date",
      format: "yyyy-MM-dd 00:00:00",
      prop: "ccc"
    },
    {
      label: randowText(),
      type: "SELECT",
      secondaryType: 1,
      prop: "ccc"
    },
    {
      label: randowText(),
      type: "SELECT",
      secondaryType: 2,
      prop: "ccc"
    },
    {
      label: randowText(),
      type: "TEXTAREA",
      secondaryType: 2,
      prop: "ccc"
    },
    {
      label: randowText(),
      type: "DATE",
      secondaryType: "date",
      format: "yyyy-MM-dd 00:00:00",
      prop: "ccc"
    }
  ]
};
const NFormData = {
  formList: [
    {
      type: "OPTIONS", //显示类型
      label: randowText(),
      prop: "ccc", //提交字段名称
      vCantInput: false, //是否可输入
      vIf: true //是否可显示
    },
    {
      type: "DIC",
      label: randowText(),
      prop: "ccc",
      vCantInput: false,
      vIf: false
    },
    {
      type: "TEXTAREA",
      label: randowText(),
      prop: "ccc",
      vCantInput: false,
      vIf: true
    },
    {
      type: "DATE",
      label: randowText(),
      format: "yyyy-MM-dd 00:00:00",
      prop: "ttt",
      vCantInput: false,
      vIf: true
    },
    {
      type: "INPUT",
      label: randowText(),
      prop: "ccc",
      vCantInput: false,
      vIf: true
    },
    {
      type: "LIST",
      label: randowText(),
      prop: "ccc",
      vCantInput: false,
      vIf: true
    },
    {
      type: "LIST",
      label: randowText(),
      prop: "ccc",
      vCantInput: false,
      vIf: true
    },
    {
      type: "TEXTAREA",
      label: randowText(),
      prop: "ccc",
      vCantInput: false,
      vIf: true
    },
    {
      type: "DATE",
      label: randowText(),
      format: "yyyy-MM-dd 00:00:00",
      prop: "ttt",
      vCantInput: false,
      vIf: true
    },
    {
      type: "INPUT",
      label: randowText(),
      prop: "ccc",
      vCantInput: false,
      vIf: true
    },
    {
      type: "LIST",
      label: randowText(),
      prop: "ccc",
      vCantInput: false,
      vIf: true
    },
    {
      type: "LIST",
      label: randowText(),
      prop: "ccc",
      vCantInput: false,
      vIf: true
    },
    {
      type: "TEXTAREA",
      label: randowText(),
      prop: "ccc",
      vCantInput: false,
      vIf: true
    },
    {
      type: "DATE",
      label: randowText(),
      format: "yyyy-MM-dd 00:00:00",
      prop: "ttt",
      vCantInput: false,
      vIf: true
    },
    {
      type: "INPUT",
      label: randowText(),
      prop: "ccc",
      vCantInput: false,
      vIf: true
    },
    {
      type: "LIST",
      label: randowText(),
      prop: "ccc",
      vCantInput: false,
      vIf: true
    },
    {
      type: "LIST",
      label: randowText(),
      prop: "ccc",
      vCantInput: false,
      vIf: true
    },
    {
      type: "TEXTAREA",
      label: randowText(),
      prop: "ccc",
      vCantInput: false,
      vIf: true
    },
    {
      type: "DATE",
      label: randowText(),
      format: "yyyy-MM-dd 00:00:00",
      prop: "ttt",
      vCantInput: false,
      vIf: true
    },
    {
      type: "INPUT",
      label: randowText(),
      prop: "ccc",
      vCantInput: false,
      vIf: true
    },
    {
      type: "LIST",
      label: randowText(),
      prop: "ccc",
      vCantInput: false,
      vIf: true
    },
    {
      type: "LIST",
      label: randowText(),
      prop: "ccc",
      vCantInput: false,
      vIf: true
    },
    {
      type: "TEXTAREA",
      label: randowText(),
      prop: "ccc",
      vCantInput: false,
      vIf: true
    },
    {
      type: "DATE",
      label: randowText(),
      format: "yyyy-MM-dd 00:00:00",
      prop: "ttt",
      vCantInput: false,
      vIf: true
    },
    {
      type: "INPUT",
      label: randowText(),
      prop: "ccc",
      vCantInput: false,
      vIf: true
    },
    {
      type: "LIST",
      label: randowText(),
      prop: "ccc",
      vCantInput: false,
      vIf: true
    },
    {
      type: "LIST",
      label: randowText(),
      prop: "ccc",
      vCantInput: false,
      vIf: true
    },
    {
      type: "TEXTAREA",
      label: randowText(),
      prop: "ccc",
      vCantInput: false,
      vIf: true
    },
    {
      type: "DATE",
      label: randowText(),
      format: "yyyy-MM-dd 00:00:00",
      prop: "ttt",
      vCantInput: false,
      vIf: true
    },
    {
      type: "LIST",
      label: randowText(),
      prop: "ccc",
      vCantInput: false,
      vIf: true
    },
    {
      type: "LIST",
      label: randowText(),
      prop: "ccc",
      vCantInput: false,
      vIf: true
    },
    {
      type: "TEXTAREA",
      label: randowText(),
      prop: "ccc",
      vCantInput: false,
      vIf: true
    },
    {
      type: "DATE",
      label: randowText(),
      format: "yyyy-MM-dd 00:00:00",
      prop: "ttt",
      vCantInput: false,
      vIf: true
    },
    {
      type: "LIST",
      label: randowText(),
      prop: "ccc",
      vCantInput: false,
      vIf: true
    },
    {
      type: "LIST",
      label: randowText(),
      prop: "ccc",
      vCantInput: false,
      vIf: true
    },
    {
      type: "TEXTAREA",
      label: randowText(),
      prop: "ccc",
      vCantInput: false,
      vIf: true
    },
    {
      type: "DATE",
      label: randowText(),
      format: "yyyy-MM-dd 00:00:00",
      prop: "ttt",
      vCantInput: false,
      vIf: true
    },
    {
      type: "LIST",
      label: randowText(),
      prop: "ccc",
      vCantInput: false,
      vIf: true
    },
    {
      type: "LIST",
      label: randowText(),
      prop: "ccc",
      vCantInput: false,
      vIf: true
    },
    {
      type: "TEXTAREA",
      label: randowText(),
      prop: "ccc",
      vCantInput: false,
      vIf: true
    },
    {
      type: "DATE",
      label: randowText(),
      format: "yyyy-MM-dd 00:00:00",
      prop: "ttt",
      vCantInput: false,
      vIf: true
    },
    {
      type: "LIST",
      label: randowText(),
      prop: "ccc",
      vCantInput: false,
      vIf: true
    },
    {
      type: "LIST",
      label: randowText(),
      prop: "ccc",
      vCantInput: false,
      vIf: true
    },
    {
      type: "TEXTAREA",
      label: randowText(),
      prop: "ccc",
      vCantInput: false,
      vIf: true
    },
    {
      type: "DATE",
      label: randowText(),
      format: "yyyy-MM-dd 00:00:00",
      prop: "ttt",
      vCantInput: false,
      vIf: true
    },
    {
      type: "LIST",
      label: randowText(),
      prop: "ccc",
      vCantInput: false,
      vIf: true
    },
    {
      type: "LIST",
      label: randowText(),
      prop: "ccc",
      vCantInput: false,
      vIf: true
    },
    {
      type: "TEXTAREA",
      label: randowText(),
      prop: "ccc",
      vCantInput: false,
      vIf: true
    },
    {
      type: "DATE",
      label: randowText(),
      format: "yyyy-MM-dd 00:00:00",
      prop: "ttt",
      vCantInput: false,
      vIf: true
    }
  ]
};
export { NTableData, NDialogData, NFormData, randowText };
