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
// return ['form', 'btns', 'tags', 'editTable', 'page', 'tagsFormRow', 'tagsFormCol']

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
      type: "DIC",
      secondaryType: 2,
      label: randowText().slice(0, 5, ""),
      prop: "ccc",
      vCantInput: false,
      vIf: false
    },
    {
      type: "INPUT",
      secondaryType: 2,
      label: randowText().slice(0, 5, ""),
      prop: "ccc",
      vCantInput: false,
      vIf: true
    },
    {
      type: "SLOT",
      secondaryType: 1,
      label: randowText().slice(0, 5, ""),
      prop: "slot0",
      vCantInput: true,
      vIf: true
    },

    {
      type: "DATE",
      secondaryType: "date",
      label: randowText().slice(0, 5, ""),
      format: "yyyy-MM-dd 00:00:00",
      prop: "ttt",
      vCantInput: false,
      vIf: true
    },
    {
      type: "INPUT",
      secondaryType: 1,
      label: randowText().slice(0, 5, ""),
      prop: "ccc",
      vCantInput: false,
      vIf: true
    },
    {
      type: "LIST",
      secondaryType: 2,
      label: randowText().slice(0, 5, ""),
      prop: "ccc",
      vCantInput: false,
      vIf: true
    },
    {
      type: "INPUT",
      secondaryType: 2,
      label: randowText().slice(0, 5, ""),
      prop: "ccc",
      vCantInput: false,
      vIf: true
    },
    {
      type: "DATE",
      secondaryType: "date",
      label: randowText().slice(0, 5, ""),
      format: "yyyy-MM-dd 00:00:00",
      prop: "ttt",
      vCantInput: false,
      vIf: true
    },
    {
      type: "INPUT",
      secondaryType: 1,
      label: randowText().slice(0, 5, ""),
      prop: "ccc",
      vCantInput: false,
      vIf: true
    },
    {
      type: "SLOT",
      secondaryType: 1,
      label: randowText().slice(0, 5, ""),
      prop: "slot1",
      vCantInput: false,
      vIf: true
    }
  ],
  tableThList: [
    {
      label: randowText().slice(0, 5, ""),
      prop: "ccc",
      subTh: [
        {
          label: randowText().slice(0, 5, ""),
          prop: "ddd",
          type: "TEXT",
          subTh: []
        },
        {
          label: randowText().slice(0, 5, ""),
          prop: "ddd",
          type: "TEXT",
          subTh: []
        }
      ]
    },
    {
      label: randowText().slice(0, 5, ""),
      prop: "ccc",
      type: "TEXT",
      subTh: []
    },
    {
      label: randowText().slice(0, 5, ""),
      prop: "ccc",
      type: "TEXT",
      subTh: []
    },
    {
      label: randowText().slice(0, 5, ""),
      prop: "ccc",
      type: "INPUT",
      subTh: []
    },
    {
      label: randowText().slice(0, 5, ""),
      type: "DATE",
      prop: "ccc",
      type: "TEXT",
      subTh: []
    },
    {
      label: randowText().slice(0, 5, ""),
      prop: "ccc",
      type: "TEXT",
      subTh: []
    },
    {
      label: randowText().slice(0, 5, ""),
      prop: "ccc",
      type: "TEXT",
      subTh: []
    },
    {
      label: randowText().slice(0, 5, ""),
      prop: "ccc",
      type: "TEXT",
      subTh: []
    },
    {
      label: randowText().slice(0, 5, ""),
      prop: "ccc",
      type: "TEXT",
      subTh: []
    }
  ]
};

export { NTableData, randowText };
