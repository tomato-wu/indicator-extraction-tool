const textAnalyseparamsLists = [
  {
    key: 1,
    name: 'appid',
    type: 'string',
    required: 'true',
    description: '用户appid',
  },
  {
    key: 2,
    name: 'text',
    type: 'string',
    required: '-',
    description: '需要进行分词的文本'
  },
  {
    key: 2,
    name: 'files',
    type: 'file[]',
    required: '-',
    description: '需要进行分词的文件列表'
  },
]

const textAnalyseExampleResponseParams = [
  {
    key: 1,
    name: 'code',
    type: 'number',
    description: '0：处理成功；\n -1：处理异常',
  },
  {
    key: 2,
    name: 'data',
    type: 'list',
    description: '-',
  },
  {
    key: 3,
    name: 'data[0].words',
    type: 'list',
    description: '文件分词结果',
  },
  {
    key: 4,
    name: 'data[0].tags',
    type: 'list',
    description: '文件词性标注结果'
  },
  {
    key: 5,
    name: 'msg',
    type: 'string',
    description: '必要时的后台提示信息',
  },
]

const wordSplitingExampleResponse = JSON.stringify({
  "code": 0,
  "data": [
      "Hubungan",
      "antara",
      "Filipina",
      "dan",
      "dapat",
      "dilihat",
      "dari",
      "perspektif",
      "ontologi",
      "bahasa",
      "dan",
      "kebijakan",
      "bahasa",
      "Jawaban",
      "ini",
      "terutama",
      "tentang",
      "yang",
      "terakhir",
      "dan",
      "melibatkan",
      "perbandingan",
      "perbedaan",
      "tata",
      "bahasa",
      "dan",
      "masalah",
      "lainnya",
      "Hubungan",
      "antara",
      "Filipina",
      "dan",
      "Tagalog",
      "dapat",
      "dilihat",
      "dari",
      "perspektif",
      "ontologi",
      "bahasa",
      "dan",
      "kebijakan",
      "bahasa",
      "Jawaban",
      "ini",
      "terutama",
      "tentang",
      "yang",
      "terakhir",
      "dan",
      "tidak",
      "melibatkan",
      "perbandingan",
      "perbedaan",
      "tata",
      "bahasa",
      "dan",
      "masalah",
      "lainnya",
      "Hubungan",
      "antara",
      "Filipina",
      "dan",
      "Tagalog",
  ],
  "msg": "success"
}, null, 4)

const textPosExampleResponse = JSON.stringify({
  "code": 0,
  "data": [
      [
          "Hubungan",
          "NOUN"
      ],
      [
          "antara",
          "ADP"
      ],
      [
          "Filipina",
          "PROPN"
      ],
      [
          "dan",
          "CCONJ"
      ],
      [
          "dapat",
          "AUX"
      ],
      [
          "dilihat",
          "VERB"
      ],
      [
          "dari",
          "ADP"
      ],
      [
          "perspektif",
          "NOUN"
      ],
      [
          "ontologi",
          "NOUN"
      ],
      [
          "bahasa",
          "NOUN"
      ],
      [
          "dan",
          "CCONJ"
      ],
      [
          "kebijakan",
          "NOUN"
      ],
      [
          "bahasa",
          "NOUN"
      ],
      [
          "Jawaban",
          "NOUN"
      ],
      [
          "ini",
          "DET"
      ],
      [
          "terutama",
          "ADV"
      ],
      [
          "tentang",
          "ADP"
      ],
      [
          "yang",
          "PRON"
      ],
      [
          "terakhir",
          "ADJ"
      ],
      [
          "dan",
          "CCONJ"
      ],
      [
          "melibatkan",
          "VERB"
      ],
      [
          "perbandingan",
          "NOUN"
      ],
      [
          "perbedaan",
          "NOUN"
      ],
  ],
  "msg": "success"
}, null, 4)

export {
  textAnalyseparamsLists,
  textAnalyseExampleResponseParams,
  wordSplitingExampleResponse,
  textPosExampleResponse
}