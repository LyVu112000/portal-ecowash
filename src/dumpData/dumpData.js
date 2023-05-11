export const receivedOrders = {
  data: [
    {
      code: "MDH12222",
      customer: "TCH",
      productType: "ordinary_product",
      receivedTime: "12/12/2022 10:03",
      request:"Gấp"  ,
      rewash: true,
      weightSum: 1000,
      weights: [100, 20, 400, 4000],
      note: "day la note",
      products: [
        {
          name: "Bọc mền Q",
          number: 10,
        },
        {
          name: "Bọc mền K",
          number: 4,
        },
      ],
      status: "WAITING",
    },
    {
      code: "MDH12222",
      customer: "TCH",
      productType: "special_product",
      receivedTime: "12/12/2022 10:03",
      rewash: false,
      weightSum: 1000,
      weights: [100, 20, 400, 4000],
      note: "day la note",
      products: [
        {
          name: "Bọc mền Q",
          number: 10,
          laundryForm: "laundry",
        },
        {
          name: "Bọc mền K",
          number: 4,
          laundryForm: "pressing",
        },
      ],
      require: ["express_service", "light_starch"],
      numberRoom: "12, 344, 3",
      status: "DONE",
    },
  ],
};

export const ItemsData = {
  data: [
    {
      code: "MDH12222",
      customer: "TCH",
      productType: "ordinary_product",
      receivedTime: "12/12/2022 10:03",
      itemCode: "323132",
      itemName: "Áo",

      unit: "pieces",
      note: "312321",
      productGroup: "shoes",
    },
    {
      code: "MDH12222",
      customer: "TCH",
      productType: "special_product",
      receivedTime: "12/12/2022 10:03",
      itemCode: "321321321",
      itemName: "Quần",

      unit: "two_pieces",
      note: "312321321312",
      productGroup: "shirt",
    },
  ],
};

export const staff = {
    data: [
        {
            code:"M16122",
            name:"Nguyễn Văn Thịnh",
            phone:"0353870050",
            email:"thinhnv@ecowash.com",
            department:"Giao nhận",
            status: "ACTIVE",
            userName:"ABC123",

        },
        {
            code:"M16123",
            name:"Bùi Lê Ngọc My",
            phone:"0353870055",
            email:"mynv@ecowash.com",
            department:"Kế toán",
            status: "DEACTIVE",
            userName:"xyz123",

        }
    ]
}

